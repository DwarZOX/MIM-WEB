import { useState } from "react"
import { ButtonCustom, InputCustom } from "../../components/ui"
import addImage from '../../assets/imgs/add-image.png'
import ReactQuill, { Quill } from "react-quill"
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react'
import instance from "../../services/api/api";
import Cookies from "js-cookie";

Quill.register('modules/imageResize', ImageResize);


const CreateArticle = () => {
const modules = {
  toolbar: [
    [{header : [1,2,3,4,5,6, false]}],
    [{font: []}],
    [{size: []}],
    [{align: []}],
    ["bold","italic","underline","strike","blockquote"],
    [{list: "ordered"},
      {list: "bullet"},
      {indent: "-1"},
      {indent: "+1"}
    ],
    ["link","image"]
  ],
  
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize']
  }
}

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
	const [content, setContent] = useState('');
  const [img, setImg] = useState('')
  const [photo, setPhoto] = useState('')
  
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
    data.append('deskripsi', content);
    data.append('author', author);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/createArtikel',
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


  }

  return (
    <section className="h-fit w-full overflow-hidden mt-20 md:mt-0">
      <header className="hidden md:block py-4 bg-gradient-to-b from-[#E5BA73] to-[#FAEAB1] shadow-[6px_1px_10px_rgba(0,0,0,0.6)]">
        <h1 className="ml-10 font-bold text-[20px] text-white">Buat Artikel</h1>
      </header>
      <form className="flex flex-col w-full gap-y-4 md:mt-3 md:px-10 px-4" onSubmit={handleSubmit}>
        <InputCustom placeholder={'Masukan judul Artikel'} className={'rounded-lg border-none w-full text-[22px] py-3 bg-white/70'} value={title} eventOnChange={(e)=>setTitle(e.target.value)}/>
        <InputCustom placeholder={'Masukan penulis'} className={'rounded-lg border-none w-full text-[22px] py-3 bg-white/70'} value={author} eventOnChange={(e)=>setAuthor(e.target.value)}/>
        <label tabIndex={0} htmlFor="tambah" title="Unggah Gambar" className="flex justify-center items-center cursor-pointer w-full h-[30vh] p-1 lg:h-[35vh] rounded-xl border-2 border-[#E5BA73] hover:border-white/70">
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
        <div className="w-full h-[35vh] max-h-[60vh] md:max-h-[40vh] lg:max-h-[25vh] overflow-hidden">
          <ReactQuill className="max-w-full h-[35vh] max-h-[60vh] md:max-h-[40vh] lg:max-h-[25vh] overflow-y-scroll border-2 rounded-lg border-white/70" theme="snow" value={content} onChange={setContent} modules={modules}/>
        </div>
        <ButtonCustom type="submit" value={'Buat'} className={'border-[#E5BA73] border-2 hover:border-white hover:text-white bg-white/70 hover:bg-white/40 font-bold text-[22px] rounded-lg py-2'}/>
      </form>

      {/* <div className="max-w-screen-md max-h-screen break-words" dangerouslySetInnerHTML={{ __html:content}}/> */}
    </section>
  )
}

export default CreateArticle