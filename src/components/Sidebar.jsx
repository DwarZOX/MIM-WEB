import { useState } from 'react'
import brandMIM from '../assets/imgs/logo-mim.png'
import { RiExpandRightLine, RiHome2Fill } from 'react-icons/ri'
import { MdMoreVert, MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { FaHome, FaUserSecret, FaUsers } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Popup } from './modal'
import { useSteteContext } from '../context/StateContext'
import { IoIosClose } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi'

const Sidebar = () => {
    const navigate = useNavigate()
    const [isExpanded, setIsExpanded] = useState(false)
    const [ isShowPopupLogout,setIsShowPopupLogout ] = useState(false)
    const {screenView} = useSteteContext()
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()

    const menuList = [{
      icon: <FaHome className='text-[30px] w-full'/>,
      title: 'Home',
      path: '/dashboard/',
    },{
      icon: <FaUsers className='text-[30px] w-full'/>,
      title: 'Pengguna',
      path: '/dashboard/pengguna',
      gap: true
    },{
      icon: <FaUserSecret className='text-[30px] w-full'/>,
      title: 'Admin',
      path: '/dashboard/admin',
    },{
      icon: <RiHome2Fill className='text-[30px] w-full'/>,
      title: 'Artikel',
      path: '/dashboard/artikel',
      gap: true
    },{
      icon: <RiHome2Fill className='text-[30px] w-full'/>,
      title: 'Buat Artikel',
      path: '/dashboard/buat-artikel',
    },{
      icon: <RiHome2Fill className='text-[30px] w-full'/>,
      title: 'Kajian',
      path: '/dashboard/kajian',
      gap: true
    },{
      icon: <RiHome2Fill className='text-[30px] w-full'/>,
      title: 'Buat Kajian',
      path: '/dashboard/buat-kajian',
    }]
    const name = 'Edward Supratman'

    const handleLogout = () => {
      Cookies.remove('token')
      navigate('/dashboard/')
    }

    const handleClick = (e) => {
      if(e == 'logout'){
        setIsShowPopupLogout(true)
        setIsOpen(false)
      } else {setIsOpen(false)}
    }

    const handleTitlePage = () => {
      if(pathname == '/dashboard/info-saya'){
        return <h1 className='text-[20px] font-semibold text-white drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]'>Informasi Saya</h1>
      } else if(pathname == '/dashboard/main'){
        return <h1 className='text-[20px] font-semibold text-white drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]'>Beranda</h1>
      } else if(pathname == '/dashboard/pengguna'){
        return <h1 className='text-[20px] font-semibold text-white drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]'>Daftar Pengguna</h1>
      } else if(pathname == '/dashboard/admin'){
        return <h1 className='text-[20px] font-semibold text-white drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]'>Admin</h1>
      } else if(pathname == '/dashboard/buat-kajian'){
        return <h1 className='text-[20px] font-semibold text-white drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]'>Buat Kajian</h1>
      } else if(pathname == '/dashboard/buat-artikel'){
        return <h1 className='text-[20px] font-semibold text-white drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]'>Buat Artikel</h1>
      } else if(pathname == '/dashboard/kajian'){
        return <h1 className='text-[20px] font-semibold text-white drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]'>Kajian</h1>
      } else if(pathname == '/dashboard/artikel'){
        return <h1 className='text-[20px] font-semibold text-white drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]'>Artikel</h1>
      }
    }


const renderMenuNav = () => {
  if (screenView == 'mobile') {
    return <nav 
              className={`mobile w-full bg-gradient-to-b from-[#E5BA73] to-[#FAEAB1] h-[9vh] md:h-[8vh] fixed px-10 md:px-20 flex justify-between items-center shadow-[3px_0px_10px_1px_rgba(0,0,0,0.40)] z-50`}
              >
              
                        <span 
                          className='bg-white w-10 md:w-[65px] h-10 md:h-[65px] rounded-full flex justify-center items-center cursor-pointer' 
                          onClick={()=>setIsOpen(true)}
                        >
                          <HiMenu 
                           className='text-[#C58940] text-[30px]'
                          />
                        </span>
    
            <span>{handleTitlePage()}</span>
                                                            
            <>
              <aside 
                className={`absolute h-screen w-[49%] ${isOpen ? 'translate-x-0 duration-300 transiton-all ease-in-out' : 'translate-x-[-500px] duration-500 transiton-all ease-in'} flex flex-col items-center pt-2 top-0 left-0 bg-gradient-to-t from-[#C58940] via-[#FAEAB1] to-[#ebcd9c] shadow-[3px_0px_10px_1px_rgba(0,0,0,0.40)] z-50 overflow-hidden`}
              >

      <div className='flex gap-x-5 items-center border-[#C58940] border-b-2 pb-3'>
      <img src={brandMIM} alt="Logo MIM" className={`w-[50px] cursor-pointer duration-500`} />
      <h1 className={`${!isOpen && 'scale-0'} text-white origin-left font-semibold text-[20px] duration-200 drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]`}>Dashboard</h1>
    </div>

                <span 
                  className='absolute -right-3 bottom-16 bg-white w-10 h-10 md:h-[65px] rounded-full self-start ml-10 flex justify-center items-center cursor-pointer' 
                  onClick={()=>setIsOpen(false)}
                >
                  <MdKeyboardArrowLeft 
                    className='text-[38px] text-[#C58940]'
                   title='Tutup' />
                </span>
                <ul className='flex-1 pt-6 w-[88%]'>
                {menuList.map((menu,idx) => (
                        
                          <Link 
                            key={idx} to={menu.path}>
                            <li onClick={()=>handleClick(menu.event)} 
                            className={` text-gray-600 hover:text-white flex items-center gap-x-4 cursor-pointer p-[6px] border-b-4 border-[#E5BA73] bg-gradient-to-b from-[#E5BA73] to-transparent to-75% hover:bg-[#E5BA73] active:scale-95 active:border-2 hover:border-[#C58940] rounded-lg group ${menu.gap ? 'mt-7' : 'mt-2'}`} 
                            >
                              <img src={brandMIM} alt="" className='w-[34px] pl-2'/>
              <span className={`text-[17px] flex origin-left font-medium whitespace-nowrap`}>{menu.title}</span>  
                                          
                            
                          </li></Link>
                ))
                }
                </ul>
                
        <span className='flex items-center justify-center gap-x-2 mb-5 cursor-pointer group' onClick={()=>handleClick('logout')}>
        <img src={brandMIM} alt="" className='w-[38px] p-2 rounded-lg border-2'/>
              <span className={`text-white text-[19px] drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)] flex origin-left font-medium whitespace-nowrap`}>Keluar</span>
        </span>

        
        <section className={`relative flex items-center gap-x-2 border-t-[2px] py-3 group`}>
          <span className={` ml-[7px] rounded-full text-center border-2 py-1 px-2 cursor-pointer`}>
            <Link to={'/dashboard/info-saya'} onClick={handleClick}>
              <p className='text-[20px] font-semibold text-white'>ES</p>
            </Link>
          </span>
          <span className={`${!isOpen ? 'translate-x-[50px]' : 'translate-x-0'} duration-500 ease-in-out transition-all text-[15px] text-white hover:scale-105 flex whitespace-nowrap overflow-hidden`}>
             <p title={name} className='font-semibold drop-shadow-[0px_0px_2px_rgba(0,0,0,0.7)] truncate'>{name}</p>
          </span>
          <Link to={'/dashboard/info-saya'} onClick={handleClick}>
            <MdMoreVert title='Detail' className={`${isOpen ? 'visible' : 'invisible'} text-[30px] text-white hover:scale-125 duration-100 ease-linear transition-all cursor-pointer`}/>
          </Link>
            {<span className='absolute whitespace-nowrap bg-[#E5BA73] px-2 py-1 rounded-l-lg rounded-r-full left-full ml-5 text-white shadow-[0px_0px_7px_rgba(0,0,0,0.7)] invisible -translate-x-7 transition-all opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0'>
              Info Saya
            </span>}
        </section>
              </aside>
                {isOpen && <div className='bg-black opacity-40 h-screen w-full fixed top-0 left-0' onClick={()=>setIsOpen(false)}></div>}
            </>
          </nav>
  } else { 
    return <aside className={`${isExpanded ? 'w-48' : 'w-20'} duration-300 h-screen p-3 bg-gradient-to-t from-[#C58940] via-[#FAEAB1] to-[#ebcd9c] flex flex-col rounded-r-2xl shadow-[1px_0px__10px_2px_rgba(0,0,0,0.6)] relative`}>
       <MdKeyboardArrowLeft className={`${!isExpanded && 'rotate-180 -right-0'} absolute z-10 cursor-pointer -right-5 text-[16px] text-[#C58940] bottom-12 w-8 h-8 border-[3px] hover:bg-[#C58940] hover:text-white transition-all duration-800 border-white rounded-full`} title={`${isExpanded ? 'Perkecil' : 'Perluas'}`} onClick={()=>setIsExpanded(!isExpanded)}/>

        <div className='flex gap-x-5 items-center border-[#C58940] border-b-2 pb-3'>
         <img src={brandMIM} alt="Logo MIM" className={`w-[50px] cursor-pointer duration-500`} />
          <h1 className={`${!isExpanded && 'scale-0'} text-white origin-left font-semibold text-[20px] duration-200 drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)]`}>Dashboard</h1>
        </div>
        <ul className='pt-6 flex-1 overflow-hidden'>
          {menuList.map((menu,idx) => (
            <Link to={menu.path} key={idx}>
            <li className={` text-gray-600 hover:text-white flex items-center gap-x-4 cursor-pointer p-[6px] border-b-4 border-[#E5BA73] bg-gradient-to-b from-[#E5BA73] to-transparent to-75% hover:bg-[#E5BA73] active:scale-95 active:border-2 hover:border-[#C58940] rounded-lg group ${menu.gap ? 'mt-7' : 'mt-2'}`}>
              {/* {menu.icon} */}
              <img src={brandMIM} alt="" className='w-[34px] pl-2'/>
              <span className={`${!isExpanded && 'hidden'} text-[15px] flex origin-left font-medium whitespace-nowrap`}>{menu.title}</span>
            {!isExpanded && <span className='absolute whitespace-nowrap bg-[#E5BA73] px-2 py-1 rounded-l-lg rounded-r-full left-full ml-2 shadow-[0px_0px_7px_rgba(0,0,0,0.7)] invisible -translate-x-5 transition-all opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 z-50'>
              {menu.title}
            </span>}
            </li>
            </Link>
          ))}

        </ul>

        <span className='flex items-center justify-center gap-x-2 mb-5 cursor-pointer group' onClick={()=>setIsShowPopupLogout(true)}>
        <img src={brandMIM} alt="" className='w-[34px] p-2 rounded-lg border-2'/>
              <span className={`${!isExpanded && 'hidden'} drop-shadow-[0px_0px_7px_rgba(0,0,0,0.7)] text-white text-[15px] flex origin-left font-medium whitespace-nowrap`}>Keluar</span>
              {!isExpanded && <span className='absolute whitespace-nowrap bg-[#E5BA73] px-2 py-1 rounded-l-lg rounded-r-full left-full ml-2 text-white shadow-[0px_0px_7px_rgba(0,0,0,0.7)] invisible -translate-x-7 transition-all opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 z-50'>
              Keluar
            </span>}
        </span>

        <section className={`relative flex items-center gap-x-2 border-t-[2px] pt-3 group`}>
          <span className={` ml-[7px] rounded-full text-center border-2 py-1 px-2 cursor-pointer`}>
            <Link to={'/dashboard/info-saya'}>
              <p className='text-[20px] font-semibold text-white'>ES</p>
            </Link>
          </span>
          <span className={`${!isExpanded ? 'translate-x-[50px]' : 'translate-x-0'} duration-500 ease-in-out transition-all text-[15px] text-white hover:scale-105 flex whitespace-nowrap overflow-hidden`}>
             <p title={name} className='font-semibold drop-shadow-[0px_0px_3px_rgba(0,0,0,0.7)] truncate'>{name}</p>
          </span>
          <Link to={'/dashboard/info-saya'}>
            <MdMoreVert title='Detail' className={`${isExpanded ? 'visible' : 'invisible'} text-[30px] text-white hover:scale-125 duration-100 ease-linear transition-all cursor-pointer`}/>
          </Link>
            {!isExpanded && <span className='absolute whitespace-nowrap bg-[#E5BA73] px-2 py-1 rounded-l-lg rounded-r-full left-full ml-5 text-white shadow-[0px_0px_7px_rgba(0,0,0,0.7)] invisible -translate-x-7 transition-all opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 z-50'>
              Info Saya
            </span>}
        </section>
    </aside>
  }}


  return (
    <>
    {renderMenuNav()}
    {isShowPopupLogout && <Popup btnCancel={true} title={'Keluar'} content={<p className='text-[18px] md:text-[22px]'>Anda yakin untuk keluar ?</p>} linkTo={'/dashboard/logout'} eventOnClick={handleLogout} setIsShow={setIsShowPopupLogout}/>}
    </>
  )
}

export default Sidebar