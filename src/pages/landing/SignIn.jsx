import { ButtonCustom, InputCustom } from '../../components/ui'
import { CiLock, CiMail } from 'react-icons/ci'
import { Link, useNavigate } from 'react-router-dom'
import brandMIM from '../../assets/imgs/logo-mim-long.png'
import instance from '../../services/api/api'
import { useState } from 'react'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  
  useEffect(() => {
    const datasCookie = Cookies.get('data_login')
    if(datasCookie) {
      const { email, password, rememberMe } = JSON.parse(datasCookie)
      setEmail(email)
      setPassword(password)
      setRememberMe(rememberMe)
    } else {
      navigate('/dashboard/masuk')
    }
  },[navigate])
  

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/login',
      headers: {},
      data : data
    };

    instance.request(config)
    .then((response) => {
      console.log(response);
      if(response.data.error === true){
        const errorMessage = Object.keys(response.data.message)
        if(errorMessage.includes('email')){
          alert('Email sudah terdaftar!')
        } else if(errorMessage.includes('password')){
          alert('Pastikan kata sandi sama!')
        }else {
          alert('Gagal masuk akun. Coba lagi!')
        }
        Cookies.remove('token')
      } else {
        Cookies.set('token', response.data.token)
        if(rememberMe){
          Cookies.set('data_login',JSON.stringify({email,password,rememberMe}),{expires: 7})
        } else {
          Cookies.remove('data_login')
        }
        navigate('/dashboard/')
        alert('Berhasil masuk')

      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
        <section className='absolute top-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#C58940] from-1% lg:from-5% to-[#FAEAB1] to-8% lg:via-[#FAEAB1] lg:to-[#FFFFFF] text-[#C58940] flex flex-col lg:flex-row lg:px-10 items-center justify-evenly bottom-0 gap-y-5 left-0 right-0'>
          <div className='w-1/2 lg:mb-20'>
            <Link to={'/'}><img src={brandMIM} alt="Your Logo" /></Link>
          </div>
          <div className='max-w-[98%] md:w-[70%] lg:w-[40%]'>
            <form className='p-5 bg-[lightgray]/20 backdrop-blur-sm rounded-xl text-center shadow-[0px_0px_9px_rgba(0,0,0,0.3)]' onSubmit={(e)=>handleSubmit(e)}>
              <h1 className='text-2xl md:text-[35px] text-white font-[700] mb-5 mt-2 '>Masuk Dashboard</h1>
              <InputCustom type='email' placeholder={'Email'} value={email} eventOnChange={(e)=>setEmail(e.target.value)} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 text-white placeholder:text-white'} classNameDiv={'border-b-[1.7px] border-white'} icon={<CiMail className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='password' placeholder={'Kata Sandi'} value={password} eventOnChange={(e)=>setPassword(e.target.value)} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 text-white placeholder:text-white'} classNameDiv={'border-b-[1.7px] border-white'} icon={<CiLock className='text-xl md:text-[28px] text-white'/>}/>
              <div className='flex justify-between items-center mt-14'>
              <span className='flex items-center gap-x-2 text-[12px] md:text-[17px] font-[600] text-white ml-1'>
              <InputCustom type={'checkbox'} value={rememberMe} eventOnChange={(e)=>setRememberMe(e.target.checked)} className={'rounded-full text-black'} id={'remember'}/>
              <label htmlFor="remember">Ingatkan saya</label></span>
              <span className='text-[13px] md:text-[21px] mr-1 text-white'>
                <Link to={'reset-password'}>Lupa kata sandi?</Link>
              </span></div>
              <ButtonCustom value={'Masuk'} type='submit' className={'bg-[#C58940] rounded-[20px] text-[15px] md:text-[20px] lg:text-[23px] text-white font-[700] my-5 py-2 px-3 md:py-3'}/>
              <div className='h-[1.7px] w-full flex justify-center relative bg-[#C58940] before:absolute before:content-["ATAU"] before:bg-[#C58940]/80 before:text-[12px] before:text-white before:rounded-full before:w-10 before:-top-[10px] before:font-[600]'></div>
            <Link to={'/dashboard/registrasi'}><ButtonCustom value={'Buat Akun'} className={'border-white hover:border-white/70 border-2 text-[15px] md:text-[20px] lg:text-[23px] bg-white hover:bg-white/70 rounded-[20px] text-[#C58940] font-[700] my-5 py-2 px-3 md:py-3'}/></Link>
            </form>
          </div>
        </section>
    </>
  )
}

export default SignIn