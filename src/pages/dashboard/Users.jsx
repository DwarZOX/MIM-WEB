import { useEffect, useState } from 'react'
import avatar from '../../assets/imgs/logo-mim.png'
import { useSteteContext } from '../../context/StateContext'
import { InputCustom } from '../../components/ui'
import { IoMdSearch } from 'react-icons/io';
import { MdMoreVert } from 'react-icons/md';
import { Popup } from '../../components/modal';

const Users = () => {
  const dataUsers = [{
    id:1,
    img: avatar,
    fullName: 'Edward Supratman',
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
      <section className='w-full relative flex flex-wrap gap-2 h-[80vh] md:h-[87vh] lg:h-[85vh] overflow-y-scroll mt-4 md:px-4'>
      {dataUsers.length === 0 ? ( 
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Data masih kosong.</h1>
      ) : dataSearch.length > 0 && searchFilteredResult.length === 0 ? (
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Pengguna yang dicari tidak ada.</h1>
      ) : (
        searchFilteredResult.map((data) => (
          <article key={data.id}
          className='flex order-2 bg-[lightgray]/40 hover:bg-[lightgray] backdrop-blur-md mx-auto w-[75vw] md:w-[37vw] lg:w-[28vw] mb-5 h-fit p-5 gap-5 even:border-black border-l-[11px] rounded-xl hover:translate-y-4 hover:mb-12 hover:scale-110 transition-all duration-300 relative'
          > 
            <img src={data.img} className='w-14 h-14 rounded-full border-2' alt="Profile Picture" />
            <span className=''>
            <h1 className='font-semibold text-[19px]'>{data.fullName}</h1>
            <p>{data.email}</p>
            <div className='group'>
              <MdMoreVert className='text-[26px] absolute right-2 top-5 cursor-pointer' onClick={()=>alert('more')}/>
              <span className='bg-[#E5BA73] rounded-lg rounded-tr-none absolute top-6 right-6 invisible group-hover:visible transition-all duration-100 overflow-hidden cursor-pointer'>
                <p className='border-b-2 hover:bg-white hover:text-[#E5BA73] p-1' onClick={()=>setShowPopupDetail(true)}>Detail</p>
                <p className='hover:bg-white hover:text-[#E5BA73] p-1' onClick={()=>setShowPopupDelete(true)}>Hapus</p>
              </span>
            </div>
            </span>
          </article>
        ))
      )}</section>
    </section>
    {showPopupDetail && <Popup title={'Detail Pengguna'} eventOnClick={()=>setShowPopupDetail(false)}/>}
    {showPopupDelete && <Popup title={'Hapus Pengguna'} content={'Anda yakin untuk menghapus akun pengguna ini ?'} btnCancel={true} eventOnClick={()=>setShowPopupDelete(false)}/>}
    </>
  );
};

export default Users;