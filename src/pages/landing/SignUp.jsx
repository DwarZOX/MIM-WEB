import { CiLock, CiUser, CiMail } from 'react-icons/ci'
import { PiPhoneLight }  from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'
import brandMIM from '../../assets/imgs/logo-mim-long.png'
import instance from '../../services/api/api'
import { useState } from 'react'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData,setFormData] = useState([{
    name: '',
    phoneNum: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }])

const handleSubmit = (e) => {
  e.preventDefault()

  let data = new FormData();
  data.append('name', formData.name);
  data.append('no_telp', formData.phoneNum);
  data.append('email', formData.email);
  data.append('password', formData.password);
  data.append('password_confirmation', formData.passwordConfirm);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/registerAdmin',
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
        } else if(errorMessage.includes('tgl_lahir')){
        alert('Format tanggal lahir harus |tahun-bulan-tanggal|')
      } else if(errorMessage.includes('no_telp')){
        alert('Nomor telepon sudah terdaftar!')
      } else if(errorMessage.includes('password')){
        alert('Pastikan kata sandi sama!')
      } else if(errorMessage.includes('email') && errorMessage.includes('no_telp')){
        alert('Email dan nomor telepon sudah terdaftar!')
      }else {
        alert('Gagal membuat akun. Coba lagi!')
      }
    } else {
      navigate('/dashboard/masuk')
      alert('Berhasil membuat akun')
    }
  })
  .catch((error) => {
    console.log(error);
  });
}
  return (
    <>
        <section className='absolute top-0 bg-[lightgray]/20 backdrop-blur-sm bottom-0 left-0 right-0 flex flex-col lg:flex-row lg:px-10 items-center justify-evenly gap-y-5'>
          <div className='w-1/2 md:w-1/1 lg:mb-20'>
            <Link to={'/'}><img src={brandMIM} alt="Your Logo" /></Link>
          </div>
          <div className='max-w-[98%] md:w-[70%] lg:w-[40%]'>
            <form className='p-5 bg-gradient-to-l from-[#C58940] from-20% via-[#E5BA73] via-45% to-[#FAEAB1] backdrop-blur-sm rounded-xl text-center shadow-[0px_0px_9px_rgba(0,0,0,0.3)]' onSubmit={(e)=>handleSubmit(e)}>
              <h1 className='text-2xl md:text-[35px] font-[700] mb-5 mt-2 text-white'>Daftar Admin</h1>
              <div className='h-[262px] md:h-[332px] overflow-y-auto scrollbar-hide '>
              <InputCustom placeholder={'Nama Lengkap'} value={formData.name} eventOnChange={(e)=>setFormData({...formData, name: e.target.value})} className={'md:text-[26px] text-white placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-white mb-5 md:mb-10'} icon={<CiUser className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='email' placeholder={'Email'} value={formData.email} eventOnChange={(e)=>setFormData({...formData, email: e.target.value})} className={'md:text-[26px] text-white placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-white'} icon={<CiMail className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='number' placeholder={'Nomor Telepon'} value={formData.phoneNum} eventOnChange={(e)=>setFormData({...formData, phoneNum: e.target.value})} className={'md:text-[26px] placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 appearance-none'} classNameDiv={'border-b-[1.7px] border-white'} icon={<PiPhoneLight className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='password' placeholder={'Kata Sandi'} value={formData.password} eventOnChange={(e)=>setFormData({...formData, password: e.target.value})} className={'md:text-[26px] placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-white'} icon={<CiLock className='text-xl md:text-[28px] text-white'/>}/>
              <InputCustom type='password' placeholder={'Konfirmasi Kata Sandi'} value={formData.passwordConfirm} eventOnChange={(e)=>setFormData({...formData, passwordConfirm: e.target.value})} className={'md:text-[26px] placeholder:text-white focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-white'} icon={<CiLock className='text-xl md:text-[28px] text-white'/>}/>
              </div>
              <ButtonCustom value={'Daftar'} type='submit' className={'bg-[#E5BA73] rounded-[20px] text-white text-[15px] md:text-[23px] font-[700] my-5 py-2 px-3 md:py-3'}/>
              <Link to={'/dashboard/masuk'} className='font-bold text-white rounded-full border-[2.5px] border-white hover:bg-white hover:text-[#E5BA73] p-2'>Masuk</Link>
            </form>
          </div>
        </section>
    </>
  )
}

export default SignUp