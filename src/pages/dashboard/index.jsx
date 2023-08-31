import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Sidebar } from "../../components"
import Main from "./Main"
import Admins from "./Admins"
import Users from "./Users"
import Event from "./Event"
import CreateEvent from "./CreateEvent"
import Article from "./Article"
import CreateArticle from "./CreateArticle"
import AboutMe from "./AboutMe"
import { useEffect } from "react"
import Cookies from "js-cookie"

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const checkUserToken = () => {
      const datasCookie = Cookies.get('token')
      if(datasCookie == '' || datasCookie == undefined) {
        navigate('/dashboard/masuk')
      }
    }
    checkUserToken()
  }, [navigate])
  return (
    <div className="w-full bg-[#E5BA73] flex">
      <Sidebar/>
      <Routes>
        <Route path='*' element={ <Navigate to="main"/>}/>
        <Route path={'/main'} element={<Main/>}/>
        <Route path={'/admin'} element={<Admins/>}/>
        <Route path={'/pengguna'} element={<Users/>}/>
        <Route path={'/kajian'} element={<Event/>}/>
        <Route path={'/buat-kajian'} element={<CreateEvent/>}/>
        <Route path={'/artikel'} element={<Article/>}/>
        <Route path={'/buat-artikel'} element={<CreateArticle/>}/>
        <Route path={'/info-saya'} element={<AboutMe/>}/>
      </Routes>
    </div>
  )
}

export default Dashboard