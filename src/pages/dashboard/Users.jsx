
import { useEffect, useState } from 'react'
import avatar from '../../assets/imgs/logo-mim.png'
import { InputCustom } from '../../components/ui'
import { IoMdInformationCircle, IoMdSearch, IoMdTrash } from 'react-icons/io';
import { Popup } from '../../components/modal';import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const Users = () => {
  const dataUsers = [{
    id:1,
    img: avatar,
    fullName: 'Edward Supratmannnnnnnnnnnnnnnnnn',
    email: 'edward@gmail.com',
    verif: false
  },{
    id:2,
    img: avatar,
    fullName: 'Edward',
    email: 'edward@gmail.com',
    verif: false
  },{
    id:3,
    img: avatar,
    fullName: 'Edsup',
    email: 'edward@gmail.com',
    verif: false
  },{
    id:4,
    img: avatar,
    fullName: 'Edwar',
    email: 'edwar@gmail.com',
    verif: false
  },{
    id:5,
    img: avatar,
    fullName: 'Edman',
    email: 'edman@gmail.com',
    verif: false
  },{
    id:6,
    img: avatar,
    fullName: 'Eward Supman',
    email: 'fadia@gmail.com',
    verif: false
  },{
    id:7,
    img: avatar,
    fullName: 'Rizka',
    email: 'rizka@gmail.com',
    verif: false
  },{
    id:8,
    img: avatar,
    fullName: 'Edsup',
    email: 'edward@gmail.com',
    verif: false
  },{
    id:9,
    img: avatar,
    fullName: 'Edwar',
    email: 'edwar@gmail.com',
    verif: false
  },{
    id:10,
    img: avatar,
    fullName: 'Edman',
    email: 'edman@gmail.com',
    verif: false
  }]

  const [deleteUser, setDeleteUser] = useState(false)
  const [ dataSearch, setDataSearch ] = useState('');
  const [showPopupDetail, setShowPopupDetail] = useState(false)
  const [showPopupDelete, setShowPopupDelete] = useState(false)
  const [searchFilteredResult, setSearchFilteredResult] = useState(dataUsers);

  useEffect(() => {
    const filteredDataSearch = dataUsers.filter(data => {
      return (
        data?.fullName?.toLowerCase()?.includes(dataSearch.toLowerCase()) ||
        data?.email?.toLowerCase()?.includes(dataSearch.toLowerCase())
      );
    });

    setSearchFilteredResult(filteredDataSearch); 
  }, [dataSearch]);

  

const trailingActions = () => (
  <TrailingActions>
    <div className='w-full flex px-4 gap-5 items-center'>
    <SwipeAction
       onClick={()=>setShowPopupDetail(true)}
    >
      <IoMdInformationCircle className='text-[30px] hover:scale-125 text-white hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.7)] md:text-[40px]'/>
    </SwipeAction>
     <SwipeAction
      onClick={()=>setShowPopupDelete(true)}
    >
      <IoMdTrash className='text-[30px] hover:scale-125 text-white hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.7)] md:text-[40px]'/> 
    </SwipeAction></div>
  </TrailingActions>
);

  return (
    <>
    <section className='h-screen w-full overflow-y-scroll pt-20 md:pt-5 md:ml-4 relative'>
      <div className='w-fit mx-auto sticky z-0 top-0 left-0 right-0 flex items-center rounded-xl bg-gray-300/40 border-b-4'>
        <InputCustom 
          placeholder={'Cari pengguna..'}
          className={'border-none text-[22px] text-white placeholder:text-white focus:ring-0 w-full md:w-[50vw]'}
          classNameDiv={'py-2'}
          value={dataSearch} 
          eventOnChange={(e) => setDataSearch(e.target.value)} />
          <IoMdSearch className='text-[37px] text-white'/>
      </div>
      <section className='w-full relative scrollbar-hide flex flex-wrap h-[80vh] md:h-[92vh] lg:h-[87vh] overflow-y-scroll mt-4 md:px-4'>
      {dataUsers.length === 0 ? ( 
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Data masih kosong.</h1>
      ) : dataSearch.length > 0 && searchFilteredResult.length === 0 ? (
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Pengguna yang dicari tidak ada.</h1>
      ) : (
        searchFilteredResult.map((data) => (
          <section className='rounded-lg bg-slate-500 h-fit w-full border-2 my-2 border-slate-500' key={data.id}>
          <SwipeableList threshold={2.9} type={Type.IOS}>
          <SwipeableListItem
            trailingActions={trailingActions()}
          >
          <article
          className='flex order-2 items-center bg-[lightgray]/40 hover:bg-[lightgray] backdrop-blur-md h-20 w-full even:border-black border-l-[4px] rounded-xl transition-all duration-300 relative'
          > 
            <img src={data.img} className='w-14 h-14 ml-2 rounded-full border-2' alt="Profile Picture" />
            <span className='flex flex-col px-8 truncate'>
            <h1 className='font-semibold text-[19px] truncate'>{data.fullName}</h1>
            <p className=''>{data.email}</p></span>
          </article>
  </SwipeableListItem>
</SwipeableList></section>
        ))
      )}</section>
    </section>
    {showPopupDetail && <Popup title={'Detail Pengguna'} eventOnClick={()=>setShowPopupDetail(false)} setIsShow={setShowPopupDetail}/>}
    {showPopupDelete && <Popup title={'Hapus Pengguna'} content={'Anda yakin untuk menghapus akun pengguna ini ?'} btnCancel={true} setIsShow={setShowPopupDelete} eventOnClick={()=>{
      setDeleteUser(true)
      setShowPopupDelete(false)}}/>}
    </>
  );
};

export default Users;