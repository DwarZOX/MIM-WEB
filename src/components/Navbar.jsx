import BrandImgShort from '../assets/imgs/logo-mim.png'
import BrandImgLong from '../assets/imgs/logo-mim-long.png'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { IoIosArrowDown, IoIosClose } from 'react-icons/io'
import { Popup, Register } from './modal'
import { useSteteContext } from '../context/StateContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShowRegister, setIsShowRegister] = useState(false)
  const [scrollPx, setScrollPx] = useState(0)
  const [isShowNav, setIsShowNav] = useState(false)
  

  const {screenView,isShowPopup,setIsShowPopup,linkTo,beranda,tentang,fitur,kajian,artikel,isShowPopupAfterSignUp,setIsShowPopupAfterSignUp} = useSteteContext()

  const menuList = [{
    title: 'Beranda',
    event: 'beranda',
    path: '#'
  },{
    title: 'Tentang MIM',
    event: 'tentang',
    path: '#about-us'
  },{
    title: 'Fitur',
    event: 'fitur',
    path: '#feature'
  },{
    title: 'Informasi',
    event: 'alert("info")',
    icon : <IoIosArrowDown className='text-[21px] md:text-[32px] lg:text-[27px]'/>,
    submenu: [{
      title: 'Info Kajian',
      path: '#kajian-info',
      event: 'kajian'
    },{
      title: 'Artikel Dakwah',
      path: '#dakwah-article',
      event: 'artikel'
    }]
  },{
    title: 'Bergabung',
    path: '#',
    event: 'join'
  }]

const handleClick = (e) => {
  if(e == 'join'){
    setIsShowRegister(true)
    setIsOpen(!isOpen)
  } else if(e == 'beranda'){
    beranda.current?.scrollIntoView({behavior: 'smooth'})
  } else if(e == 'tentang'){
    tentang.current?.scrollIntoView({behavior: 'smooth'})
  }else if(e == 'fitur'){
    fitur.current?.scrollIntoView({behavior: 'smooth'})
  } else if(e == 'kajian'){
    kajian.current?.scrollIntoView({behavior: 'smooth'})
  } else if(e == 'artikel'){
    artikel.current?.scrollIntoView({behavior: 'smooth'})
  }
}

let lastScroll = window.scrollY
const handleScrolling = () => {
  let currScrollPx = (window.scrollY / 30).toFixed() * 10
  if (currScrollPx > 100) {
    setScrollPx(100)
  } else {
    setScrollPx(currScrollPx)
  }


  if (lastScroll < window.scrollY ) {
    setIsShowNav(false)
  }  else {
    setIsShowNav(true)
  }
  lastScroll = window.scrollY
}
window.addEventListener('scroll', handleScrolling)


const renderMenuNav = () => {
      if (screenView == 'mobile' || screenView == 'tablet') {
        return <nav 
                  className={`mobile ${!isOpen && scrollPx == 100 && !isShowNav ? ' -top-80 transition-all ease-in-out duration-500' : 'top-0 transition-all ease-out duration-500'} w-full h-[9vh] md:h-[8vh] fixed px-10 md:px-20 flex justify-between items-center shadow-[3px_0px_10px_1px_rgba(0,0,0,0.40)] z-50`}
                  style={{backgroundColor: `rgba(229,186,115,${scrollPx}%)`}}
                  >
                  {isOpen ? 
                            <span 
                              className='bg-slate-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            >
                              <IoIosClose 
                                className='text-[26px]'
                              />
                            </span>
                          : 
                            <span 
                              className='bg-slate-300 w-10 md:w-[65px] h-10 md:h-[65px] rounded-full flex justify-center items-center cursor-pointer' 
                              onClick={()=>setIsOpen(true)}
                            >
                              <HiMenu 
                               className='text-[26px] md:text-[35px]'
                              />
                            </span>
                  }
        
                <section 
                  className='w-[40vw] md:w-[24vw]'
                >
                  <img 
                    src={BrandImgLong} 
                    alt="Logo MIM - Menghafal Itu Mudah"
                  />
                </section>
                                                                
                <>
                  <aside 
                    className={`absolute h-screen w-[49%] ${isOpen ? 'translate-x-[0px] duration-300 transiton-all ease-in-out' : 'translate-x-[-500px] duration-500 transiton-all ease-in'} flex flex-col justify-between items-center pt-2 md:pt-4 pb-10 md:pb-20 top-0 left-0 bg-[#E5BA73] shadow-[3px_0px_10px_1px_rgba(0,0,0,0.40)] z-50 overflow-hidden`}
                  >
                    <span 
                      className='bg-slate-300 w-10 md:w-[65px] h-10 md:h-[65px] rounded-full self-start ml-10 md:ml-20 flex justify-center items-center cursor-pointer' 
                      onClick={()=>setIsOpen(false)}
                    >
                      <IoIosClose 
                        className='text-[26px] md:text-[40px]'
                        />
                    </span>
                    <ul>
                    {menuList.map((data) => {
                      return <li 
                                key={data.title} 
                                onClick={()=>handleClick(data.event)} 
                                className='group text-[19px] md:text-[32px] text-white font-[600] my-5 md:my-10 px-3 py-1 flex justify-center items-center gap-4 border-[3.1px] md:border-[4.5px] rounded-md md:rounded-lg hover:bg-white hover:border-white hover:text-[#C58940] last:mt-40 md:last:mt-60 last:border-none last:bg-[#C58940] last:p-2 md:last:p-3 cursor-pointer relative' 
                                >
                                  {data.title}
                                  {data.icon && 
                                              <>
                                              <span 
                                                className='text-[22px]'
                                              >
                                                {data.icon}
                                              </span>
                                              <section 
                                                className={`invisible group-hover:visible absolute w-full top-9 md:top-14 bg-slate-700`}
                                              >
                                                {data.submenu.map(sub => {
                                                                    return <span 
                                                                                key={sub.title} 
                                                                                className='text-[18px] md:text-[30px] bg-[#C58940] text-white hover:bg-slate-600 block w-full' 
                                                                                onClick={()=>handleClick(sub.event)}
                                                                                >
                                                                                  {sub.title}
                                                                            </span>
                                                                          }
                                                                  )
                                                }
                                              </section>
                                              </>
                                  }
                              </li>
                    })
                    }
                    </ul>
                  </aside>
                    {isOpen && <div className='bg-black opacity-40 h-screen w-full fixed top-0 left-0' onClick={()=>setIsOpen(false)}></div>}
                </>
              </nav>
      } else { 
        return <nav 
                  className={`desktop ${scrollPx == 100 && !isShowNav ? ' -top-80 transition-all ease-in-out duration-500' : 'top-0 transition-all ease-out duration-500'} w-full h-[10vh] fixed flex items-center justify-between px-20 z-50`}
                  style={{backgroundColor: `rgba(229,186,115,${scrollPx}%)`}}
                  >
                    <section 
                      className='w-[5vw] bg-slate-200 rounded-full p-2'
                    >
                      <img 
                      src={BrandImgShort} 
                        alt="Logo MIM - Menghafal Itu Mudah"
                      />
                    </section>
                    <section>
                      <ul 
                        className='flex'
                        >
                          {menuList.map((data) => {
                                        return <li 
                                                  key={data.title} 
                                                  onClick={()=>handleClick(data.event)} 
                                                  className='group text-[20px] text-white font-[500] mx-4 px-4 py-1 border-[3.8px] rounded-xl last:border-none last:bg-[#C58940] last:ml-[143px] cursor-pointer flex justify-center items-center relative' 
                                                  >
                                                    {data.title}
                                                    {data.icon && <>
                                                                  <span 
                                                                  
                                                                  className='text-[22px] ml-4'
                                                                  >
                                                                    {data.icon}
                                                                  </span>
                                                                  <section 
                                                                    className={`invisible group-hover:visible rounded-b-md absolute w-full top-[38px] bg-[#C58940] -z-10`}
                                                                  >
                                                                    {data.submenu.map(sub => {
                                                                                    return <span 
                                                                                              key={sub.title} 
                                                                                              className='text-[20px] p-2 hover:bg-slate-200 block w-full' 
                                                                                              onClick={()=>handleClick(sub.event)}
                                                                                              >
                                                                                                {sub.title}
                                                                                              </span>
                                                                                            }
                                                                                      )
                                                                    }
                                                                  </section>
                                                                  </>
                                                    }
                                                </li>
                                      })
                        }
                      </ul>
                    </section>
                </nav>
        }
      } 
  return (
    <>
    {renderMenuNav()}
    {isShowRegister && <Register setIsShow={setIsShowRegister}/>}
    {isShowPopup && <Popup bgClose={true} btnCancel={true} linkTo={linkTo.join} title={`Simak ${linkTo.title}`} content={<span className='text-center text-[20px]'><p>Yang berlangsung<p>{linkTo.date}</p> Pada pukul {linkTo.time} WIB</p></span>} setIsShow={setIsShowPopup}/>}
    {isShowPopupAfterSignUp && <Popup title={`Verifikasi Email`} content={<span className='text-center text-[20px]'><p>Lakukan verifikasi email untuk menyelasaikan pembuatan akun.</p></span>} eventOnClick={()=>setIsShowPopupAfterSignUp(false)} setIsShow={setIsShowPopupAfterSignUp}/>}
    </>
  )
}

export default Navbar