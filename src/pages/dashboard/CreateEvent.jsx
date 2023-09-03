import { ButtonCustom, InputCustom } from "../../components/ui"
import addImage from '../../assets/imgs/add-image.png'
import Datepicker from "react-tailwindcss-datepicker"
import { useState } from "react"
import instance from "../../services/api/api"
import Cookies from "js-cookie"

const CreateEvent = () => {
  const [img, setImg] = useState('')
  const [photo, setPhoto] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState(null)
  const [link, setLink] = useState('')
  const [value, setValue] = useState({ 
    startDate: null
    });
  
   
  const handleInputImg = (e) => {
    const file = e.target.files[0];
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    ) {
      if (file.size <= 3000000) {
        setImg(URL.createObjectURL(file));
        setPhoto(file);
      } else {
        alert("Ukuran file harus dibawah 3 MB!");
      }
    } else {
      alert("Format file harus berformat = png/jpeg/jpg !");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

  let data = new FormData();
  data.append('judul', title);
  data.append('gambar', photo);
  data.append('waktu', time);
  data.append('tanggal', date);
  data.append('link', link);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/createKajian',
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "multipart/formdata",
    },
    data : data
  };

  instance.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });


    console.log(photo,date)
  }


  return (
    <section className="h-screen w-full overflow-hidden px-5 md:px-0 mt-20 md:mt-0">
      <header className="hidden md:block py-4 bg-gradient-to-b from-[#E5BA73] to-[#FAEAB1] shadow-[6px_1px_10px_rgba(0,0,0,0.6)]">
        <h1 className="ml-10 font-bold text-[20px] text-white">Buat Kajian</h1>
      </header> 
      <form className="rounded-br-xl rounded-tl-xl lg:relative md:rounded-br-[40px] md:rounded-tl-[40px] gap-2 flex-col lg:flex-row h-fit flex md:mx-20 md:mt-10 p-5 md:p-10 bg-[lightgray]/60 backdrop-blur-sm" onSubmit={handleSubmit}>
        <section className="lg:my-3 lg:flex-1 lg:pr-20">
        <InputCustom placeholder={'Judul kajian'} className={'w-full lg:text-[29px] lg:mb-4 focus:ring-0 focus:border-white border-0 border-b-2'} value={title} eventOnChange={(e)=>setTitle(e.target.value)}/>
        <InputCustom placeholder={'Tautan kajian'} className={'w-full lg:text-[29px] lg:mb-4 focus:ring-0 focus:border-white border-0 border-b-2'} value={link} eventOnChange={(e)=>setLink(e.target.value)}/>
        <InputCustom type="number" placeholder={'Waktu acara'} className={'w-full lg:text-[29px] lg:mb-4 focus:ring-0 focus:border-white border-0 border-b-2'} value={time} eventOnChange={(e)=>setTime(e.target.value)}/>
        <Datepicker
            useRange={false} 
            asSingle={true} 
            placeholder='Tanggal acara' 
            value={value} onChange={(e)=>{
              setValue(e)
              setDate(e.startDate)
            }}
            readOnly={true}
            popoverClassName="bg-transparent"
            inputClassName={'bg-transparent border-none focus:ring-0 text-[18px] lg:text-[29px] text-white'}
            containerClassName={'border-0 border-slate-500 focus:border-white border-b-2 flex w-full self-center bg-transparent py-1 lg:py-0'}
            toggleClassName={'hidden'}
            />
          </section>
          <section className="lg:flex-1 lg:m-auto">
        <label tabIndex={0} htmlFor="tambah" title="Unggah Gambar" className="flex justify-center items-center cursor-pointer w-full h-[30vh] my-8 lg:mt-0 p-1 lg:h-[35vh] rounded-xl border-2 border-slate-500 focus:border-[#E5BA73] hover:border-white/70">
                  <div className="flex flex-col justify-center items-center w-full h-full opacity-100 background-image-div" 
                    style={{
                      objectFit: 'cover',
                      backgroundImage: img ? `url('${img}')` : `url('${addImage}')`,
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}>
                    <input id="tambah" type="file" className="hidden" onChange={handleInputImg} />
                    <p className="text-md py-5 md:pt-10 hidden">Tambah Gambar</p>
                  </div>
        </label>
        <ButtonCustom type="submit" value={'Buat'} className={'rounded-lg border-2 bg-[#E5BA73]/60 hover:bg-[#E5BA73] text-white py-2 text-[20px] font-bold'}/></section>
      </form>
    </section>
  )
}

export default CreateEvent