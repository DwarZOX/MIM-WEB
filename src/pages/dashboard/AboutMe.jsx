import { ButtonCustom, InputCustom } from "../../components/ui";

const AboutMe = () => {
  const name = 'Edward supratman'
  const getInitial = (name) => {
    let initial = name.match(/(\b\S)?/g).join("");
    return initial.toUpperCase()

  }
  return (
    <section className="flex-1 h-screen overflow-scroll scrollbar-hide">
      <header className="hidden md:block py-4 bg-gradient-to-b from-[#E5BA73] to-[#FAEAB1] shadow-[6px_1px_10px_rgba(0,0,0,0.6)]">
        <h1 className="ml-10 font-bold text-[20px] text-white">Informasi Saya</h1>
      </header>
      <main className="flex flex-col md:flex-row gap-x-10 items-center mt-20 lg:mt-10 text-[#C58940] my-5 mx-auto rounded-md bg-[white]/50 backdrop-blur-sm w-fit">
      <section className="flex flex-col p-5 items-center justify-center mx-auto rounded-md bg-[white]/40 backdrop-blur-sm md:flex-1">
        <div className="rounded-full w-40 h-40 mb-2 cursor-pointer shadow-[inset_0px_0px_10px_rgba(0,0,0,0.5)] bg-white text-[80px] font-semibold text-[#E5BA73] flex justify-center items-center ">
          {getInitial(name)}
        </div>
        <span className="text-[21px] text-black italic underline animate-pulse">Administrator</span>

        <section className="mt-20">
          <p className="rounded-md bg-[gray]/30 w-full p-2 mb-14 text-[30px] font-medium relative before:absolute before:-top-10 before:left-0 before:content-['Nama'] before:w-fit before:p-1 before:text-[21px] before:underline">{name}</p>
          <p className="rounded-md bg-[gray]/30 w-full p-2 mb-8 text-[30px] font-medium relative before:absolute before:-top-10 before:left-0 before:content-['Email'] before:w-fit before:p-1 before:text-[21px] before:underline">edward@gmail.com</p>
        </section>
        </section>
        <form className="mt-0 self-start p-10 md:p-0 md:py-2 w-full mr-10 md:flex-3" onSubmit={(e)=> e.preventDefault()}>
          <h2 className="font-bold text-[25px] my-10 md:mt-0 md:mb-16 border-t-2 border-[#C58940] md:border-t-0">Ubah akun</h2>
          <p>Email</p>
          <InputCustom className="rounded-xl bg-[gray]/30 w-full py-4 px-2 mb-10 text-[23px] border-0 border-b-2 border-t-2 focus:ring-0 font-medium" value={'edward@gmail.com'} disabled={false}/>
          <p>Kata sandi</p>
          <InputCustom className="rounded-xl bg-[gray]/30 w-full py-4 px-2 mb-10 text-[23px] border-0 border-b-2 border-t-2 focus:ring-0 font-medium" value={'**********'} disabled={false}/>
          <p>Konfirmasi kata sandi</p>
          <InputCustom className="rounded-xl bg-[gray]/30 w-full py-4 px-2 mb-10 text-[23px] border-0 border-b-2 border-t-2 focus:ring-0 font-medium" value={'**********'} disabled={false}/>
          <ButtonCustom type="submit" value={'SIMPAN'} className={'rounded-xl py-4 px-2 bg-white font-bold'}/>
        </form>
      </main>
    </section>
  )
}

export default AboutMe