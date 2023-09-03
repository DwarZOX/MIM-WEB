import { useEffect, useState } from 'react'
import avatar from '../../assets/imgs/logo-mim.png'
import { InputCustom } from '../../components/ui'
import { IoMdSearch } from 'react-icons/io';
import { Popup } from '../../components/modal';

const Admins = () => {
  const dataUsers = [{
    id:1,
    fullName: 'Edward Supratman',
    email: 'edward@gmail.com',
    create: '2023-08-10'
  },{
    id:2,
    fullName: 'Edward',
    email: 'edward@gmail.com',
    create: '2023-08-10'
  },{
    id:3,
    fullName: 'Edsup',
    email: 'edward@gmail.com',
    create: '2023-08-10'
  },{
    id:4,
    fullName: 'Edwar',
    email: 'edwar@gmail.com',
    create: '2023-08-10'
  },{
    id:5,
    fullName: 'Edman',
    email: 'edman@gmail.com',
    create: '2023-08-10'
  },{
    id:6,
    fullName: 'Eward Supman',
    email: 'fadia@gmail.com',
    create: '2023-08-10'
  },{
    id:7,
    fullName: 'Rizka',
    email: 'rizka@gmail.com',
    create: '2023-08-10'
  },{
    id:8,
    fullName: 'Edsup',
    email: 'edward@gmail.com',
    create: '2023-08-10'
  },{
    id:9,
    fullName: 'Edwar',
    email: 'edwar@gmail.com',
    create: '2023-08-10'
  },{
    id:10,
    fullName: 'Edman',
    email: 'edman@gmail.com',
    create: '2023-08-10'
  },{
    id:11,
    fullName: 'Eward Supman',
    email: 'fadia@gmail.com',
    create: '2023-08-10'
  }]

  
  const [ dataSearch, setDataSearch ] = useState('');
  const [showPopupDetail, setShowPopupDetail] = useState(false)
  const [showPopupDelete, setShowPopupDelete] = useState(false)
  const [searchFilteredResult, setSearchFilteredResult] = useState(dataUsers);

  useEffect(() => {
    const filteredDataSearch = dataUsers.filter(data => {
      return (
        data?.fullName?.toLowerCase()?.includes(dataSearch.toLowerCase())
      );
    });

    setSearchFilteredResult(filteredDataSearch); 
  }, [dataSearch]);

  const getInitial = (name) => {
    let initial = name.match(/(\b\S)?/g).join("");
    return initial.toUpperCase()
  }

  return (
    <>
    <section className='h-screen w-full overflow-y-scroll pt-20 md:pt-5 md:ml-4 relative'>
      <div className='w-fit mx-auto sticky z-0 top-0 left-0 right-0 flex items-center rounded-xl bg-slate-400 border-b-4 border-slate-500'>
        <InputCustom 
          placeholder={'Cari admin..'}
          className={'border-none text-[22px] text-white placeholder:text-white focus:ring-0 w-full md:w-[50vw]'}
          classNameDiv={'py-2'}
          value={dataSearch} 
          eventOnChange={(e) => setDataSearch(e.target.value)} />
          <IoMdSearch className='text-[37px] text-white'/>
      </div>
      <section className='w-full relative flex flex-wrap gap-2 h-[80vh] md:h-[87vh] lg:h-[85vh] overflow-y-scroll scrollbar-hide mt-4 md:px-4'>
      {dataUsers.length === 0 ? ( 
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Data masih kosong.</h1>
      ) : dataSearch.length > 0 && searchFilteredResult.length === 0 ? (
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center mx-2'>Admin yang dicari tidak ada.</h1>
      ) : (
        <table className='w-full rounded-t-xl pt-10 m-1'>
          <tr className='border-b-2 sticky -top-1 z-40 bg-slate-200'>
          <th className='py-2 border-0 rounded-tl-lg'>ID</th>
          <th>{' '}</th>
          <th>Nama</th>
          <th>Email</th>
          <th className='rounded-tr-lg'>Registrasi</th>
          </tr>
        {searchFilteredResult.map((data) => (
          <tr key={data.id} className='border-b-2 border-[#E5BA73] text-center text-white last-of-type:rounded-b-lg last-of-type:border-b-0 md:mt-20 odd:bg-slate-400 hover:animate-pulse transition-all duration-300 ease-in-out hover:-mt-20 shadow-[inset_0px_0px_10px_rgba(0,0,0,0.5)] bg-slate-500'>
          <td><h1>{data.id}</h1></td>
          <td><p className='rounded-full w-[50px] h-[50px] mx-auto cursor-pointer shadow-[inset_0px_0px_10px_rgba(0,0,0,0.5)] bg-white text-[24px] font-semibold text-[#E5BA73] flex justify-center items-center'>{getInitial(data.fullName)}</p></td>
          <td><h1>{data.fullName}</h1></td>
          <td><h1>{data.email}</h1></td>
          <td><h1>{data.create}</h1></td>
          </tr>
        ))}
        </table>
      )}</section>
    </section>
    {/* {showPopupDetail && <Popup title={'Detail Pengguna'} eventOnClick={()=>setShowPopupDetail(false)}/>}
    {showPopupDelete && <Popup title={'Hapus Pengguna'} content={'Anda yakin untuk menghapus akun pengguna ini ?'} btnCancel={true} eventOnClick={()=>setShowPopupDelete(false)}/>} */}
    </>
  );
};

export default Admins;