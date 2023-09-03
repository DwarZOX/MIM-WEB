
import example from '../../assets/imgs/example.png'
import { InputCustom } from '../../components/ui';
import { IoMdInformationCircle, IoMdSearch, } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { MdMoreVert } from 'react-icons/md';
import { Popup } from '../../components/modal';


const Article = () => {
  
  
const dataKajian = [{
  id:1,
  img: example,
  title: 'Artikel 1 DOA',
  description: 'I DOA adalah bidang pembekalan materiiiiiiiiiiiiiiiiiiiiiiiiiiiiujahsdkfhaksjdfkjsaldfjlasjdfojalsdfjlji',
  author: 'Edward Supratman',
},{
  id:2,
  img: example,
  title: 'SIDAQ 1 DOA',
  description: 'SIDAQ kajian di Bantuk Kretek',
  author: 'Edward Supratman',
},{
  id:3,
  img: example,
  title: 'PIT 1 DOA',
  description: 'Tantangan ini membuat kami menjadi',
  author: 'Edward Supratman',
},{
  id:4,
  img: example,
  title: 'MPP 1 DOA',
  description: 'Masjid Pemuda Peradaban',
  author: 'Edward Supratman',
},{
  id:5,
  img: example,
  title: 'Kretek 1 DOA',
  description: 'Kretek ada Pondok IT guys',
  author: 'Edward Supratman',
}]

const [showPopupDetail, setShowPopupDetail] = useState(false)
const [showPopupEdit, setShowPopupEdit] = useState(false)
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
          placeholder={'Cari artikel..'}
          className={'border-none text-[22px] text-white placeholder:text-white focus:ring-0 w-full md:w-[50vw]'}
          classNameDiv={'py-2'}
          value={dataSearch} 
          eventOnChange={(e) => setDataSearch(e.target.value)} />
          <IoMdSearch className='text-[37px] text-white'/>
      </div>
      <section className='w-full relative scrollbar-hide flex flex-wrap gap-2 h-[80vh] md:h-[87vh] lg:h-[85vh] overflow-y-scroll mt-4 md:px-4'>
      {dataKajian.length === 0 ? ( 
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Data artikel masih kosong.</h1>
      ) : dataSearch.length > 0 && searchFilteredResult.length === 0 ? (
        <h1 className='order-1 pt-5 sticky top-0 bg-[#E5BA73] left-0 h-20 right-0 w-full text-[20px] text-center'>Artikel yang dicari tidak ada.</h1>
      ) : (
        searchFilteredResult.map((data) => (
          <article key={data.id}
          className='flex order-2 mx-auto w-full px-3 md:px-0 mb-1 h-fit gap-5 transition-all duration-300 relative'
          > 
            <img src={data.img} className='w-[150px] md:w-[210px] rounded-lg' alt="Tumbnail" />
            <span className='w-full flex-col overflow-hidden gap-y-2 flex items-start justify-center'>
            <h1 className='font-semibold text-[19px] md:text-[28px] truncate'>{data.title}</h1>
            <p className='text-[18px] italic md:text-[20px]'>{data.author}</p>
            <p className='md:text-[20px] truncate w-full'>{data.description}</p>
            </span><div className='group'>
              <MdMoreVert className='text-[26px] md:text-[30px] absolute right-1 top-3 cursor-pointer'/>
              <span className='bg-white rounded-lg rounded-br-none absolute bottom-5 right-5 md:text-[24px] invisible group-hover:visible transition-all duration-100 overflow-hidden cursor-pointer'>
                <p className='border-b-2 hover:bg-[#E5BA73] hover:text-white p-1' onClick={()=>setShowPopupDetail(true)}>Detail</p>
                <p className='border-b-2 hover:bg-[#E5BA73] hover:text-white p-1' onClick={()=>setShowPopupEdit(true)}>Edit</p>
                <p className='hover:bg-[#E5BA73] hover:text-white p-1' onClick={()=>setShowPopupDelete(true)}>Hapus</p>
              </span>
            </div>
          </article>
        ))
      )}</section>
    </section>
    {showPopupDetail && <Popup title={'Detail Artikel'} eventOnClick={()=>setShowPopupDetail(false)}/>}
    {showPopupEdit && <Popup title={'Edit Artikel'} eventOnClick={()=>setShowPopupEdit(false)}/>}
    {showPopupDelete && <Popup title={'Hapus Artikel'} content={'Anda yakin untuk menghapus akun artikel ini ?'} btnCancel={true} setIsShow={setShowPopupDelete} eventOnClick={()=>setShowPopupDelete(false)}/>}
    </>
  )
}

export default Article