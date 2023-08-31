import { Link } from 'react-router-dom'
import ButtonCustom from '../ui/ButtonCustom'

const Popup = ({title,content,btnCancel,bgClose,classnameBtn,setIsShow,linkTo,eventOnClick}) => {
  return (
    <div 
      className='fixed top-0 w-full z-50'>
    <section className='rounded-2xl w-fit h-fit p-10 flex flex-col justify-center items-center gap-y-10 absolute left-0 right-0 top-0 bottom-0 bg-white m-auto z-50 overflow-auto'>
      <h1 className='text-[20px] md:text-[28px] font-[700]'>{title}</h1>
    <section>
      {content}
    </section>
      <span className='flex gap-x-5'>
        {linkTo == '' ? <Link to={linkTo} target='_blank'><ButtonCustom
                value={'OK'}        
                className={`${classnameBtn} border-[1.9px] border-[#C58940] font-[600] hover:bg-[#C58940] transition-all duration-600 text-[#C58940] hover:text-white rounded-lg py-1 md:py-2 px-3 md:px-4 text-[23px] md:text-[28px]`}/>
        </Link> : <Link to={linkTo}>
          <ButtonCustom
                value={'OK'}
                eventOnClick={eventOnClick}
                className={`${classnameBtn} border-[1.9px] border-[#C58940] font-[600] hover:bg-[#C58940] transition-all duration-600 text-[#C58940] hover:text-white rounded-lg py-1 md:py-2 px-3 md:px-4 text-[23px] md:text-[28px]`}/>
                
        </Link>}
        {btnCancel && 
                  <ButtonCustom 
                      value={'Cancel'} 
                      className={`${classnameBtn} border-[1.9px] border-[#C58940] font-[600] hover:bg-[#C58940] transition-all duration-600 text-[#C58940] hover:text-white rounded-lg py-1 md:py-2 px-3 md:px-4 text-[23px] md:text-[28px]`} 
                      eventOnClick={()=>setIsShow(false)} />}
       </span>
    </section>
    {bgClose ? 
            <div className='bg-black opacity-40 h-screen z-40 w-full' 
              onClick={()=>setIsShow(false)}>
            </div> 
            : 
            <div className='bg-black opacity-40 h-screen z-40 w-full'></div>}
</div>
  )
}

export default Popup