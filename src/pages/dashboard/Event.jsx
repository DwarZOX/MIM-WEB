
import example from '../../assets/imgs/example.png'
import { Link } from 'react-router-dom'; 
import { InputCustom } from '../../components/ui';
import { IoMdInformationCircle, IoMdLink, IoMdSearch, IoMdTrash } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Popup } from '../../components/modal';


const Event = () => {

const dataKajian = [{
    id:1,
    img: example,
    title: 'Kajian 1 DOA',
    date: 'Kamis,19 Juni 2023',
    time: '20:00 - 22:00 WIB',
    link: 'https://www.instagram.com/edwardsprtmn'
  },{
    id:2,
    img: example,
    title: 'Kajian 1 DOooooooasdfasfasdfA',
    date: 'Kamis,19 Juni 2023',
    time: '20:00 - 22:00 WIB',
    link: 'https://www.instagram.com/edwardsprtmn'
  },{
    id:3,
    img: example,
    title: 'Kajian 1 DOA',
    date: 'Kamis,19 Juni 2023',
    time: '20:00 - 22:00 WIB',
    link: 'https://www.instagram.com/edwardsprtmn'
  },{
    id:4,
    img: example,
    title: 'Kajian 1 DOA',
    date: 'Kamis,19 Juni 2023',
    time: '20:00 - 22:00 WIB',
    link: 'https://www.instagram.com/edwardsprtmn'
  },{
    id:5,
    img: example,
    title: 'Kajian 1 DOA',
    date: 'Kamis,19 Juni 2023',
    time: '20:00 - 22:00 WIB',
    link: 'https://www.instagram.com/edwardsprtmn'
  }]

const [showPopupDetail, setShowPopupDetail] = useState(false)
const [showPopupDelete, setShowPopupDelete] = useState(false)
const [dataSearch,setDataSearch] = useState('')
const [searchFilteredResult, setSearchFilteredResult] = useState(dataKajian)

useEffect(() => {
  const filteredDataSearch = dataKajian.filter(data => {
    return (
      data?.title?.toLowerCase()?.includes(dataSearch.toLowerCase())
    )
  })

setSearchFilteredResult(filteredDataSearch)
}, [dataSearch])


  
  return (
    <>
    <section className='h-screen w-full overflow-y-scroll pt-20 md:pt-5 md:ml-4 relative'>
      <div className='w-fit mx-auto sticky z-0 top-0 left-0 right-0 flex items-center rounded-xl bg-gray-300/40 border-b-4'>
        <InputCustom 
          placeholder={'Cari Kajian..'}
          className={'border-none text-[22px] text-white placeholder:text-white focus:ring-0 w-full md:w-[50vw]'}
          classNameDiv={'py-2'}
          value={dataSearch} 
          eventOnChange={(e) => setDataSearch(e.target.value)} />
          <IoMdSearch className='text-[37px] text-white'/>
      </div>
      <section className='w-full relative scrollbar-hide flex flex-wrap gap-2 h-[80vh] md:h-[87vh] lg:h-[85vh] overflow-y-scroll mt-4 md:px-4'>
      {dataKajian.length === 0 ? ( 
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Data kajian masih kosong.</h1>
      ) : dataSearch.length > 0 && searchFilteredResult.length === 0 ? (
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Kajian yang dicari tidak ada.</h1>
      ) : (
        searchFilteredResult.map((data) => (
          <article key={data.id}
          className='flex order-2 bg-[lightgray]/40 hover:bg-[lightgray] backdrop-blur-md mx-auto w-[79vw] md:w-[67vw] lg:w-[40vw] mb-5 h-fit gap-5 even:border-black border-l-[11px] rounded-xl hover:translate-y-8 md:hover:translate-y-10 hover:mb-20 md:hover:mb-[100px] hover:scale-110 transition-all duration-300 relative'
          > 
            <img src={data.img} className='w-[150px] md:w-[210px] rounded-lg' alt="Tumbnail" />
            <span className='w-full flex-col overflow-hidden gap-y-2 flex items-start justify-center'>
            <h1 className='font-semibold text-[19px] md:text-[28px] truncate'>{data.title}</h1>
            <p className='md:text-[20px]'>{data.date}</p>
            <p className='md:text-[20px]'>{data.time}</p>
            <Link to={data.link} className='italic md:text-[22px] flex items-center gap-1 hover:text-white duration-300 transition-all ease-in-out'>Tautan <IoMdLink className='text-[19px]'/></Link>
            </span>
            <div className='group flex gap-2 absolute right-1 bottom-1'>
              <IoMdTrash className='text-[26px] md:text-[30px] hover:scale-110 hover:text-white duration-300 transition-all ease-in-out cursor-pointer' onClick={()=>setShowPopupDelete(true)}/>
              <IoMdInformationCircle className='text-[26px] md:text-[30px] hover:scale-110 hover:text-white duration-300 transition-all ease-in-out cursor-pointer' onClick={()=>setShowPopupDetail(true)}/>
             
            </div>
            
          </article>
        ))
      )}</section>
    </section>
    {showPopupDetail && <Popup title={'Detail Kajian'} eventOnClick={()=>setShowPopupDetail(false)}/>}
    {showPopupDelete && <Popup title={'Hapus Kajian'} content={'Anda yakin untuk menghapus akun kajian ini ?'} btnCancel={true} setIsShow={setShowPopupDelete} eventOnClick={()=>setShowPopupDelete(false)}/>}
    </>
  )
}

export default Event