import { createContext, useContext, useRef, useState } from "react";



const Context = createContext()

export const SteteContext = ({children}) => {
    const [showModal, setShowModal] = useState(false)
    const [isShowPopup, setIsShowPopup] = useState(false)
    const [isShowPopupAfterSignUp, setIsShowPopupAfterSignUp] = useState(false)
    const [isShowPopupLogout, setIsShowPopupLogout] = useState(false)
    const [screenView, setScreenView] = useState(innerWidth <= 485 ? 'mobile' : innerWidth > 485 && innerWidth < 886 ? 'tablet' : innerWidth > 885 ? 'desktop' : null)
    const [linkTo,setLinkTo] = useState({})
    const beranda = useRef(null)
    const tentang = useRef(null)
    const fitur = useRef(null)
    const fitur2 = useRef(null)
    const kajian = useRef(null)
    const artikel = useRef(null)
    

return (
    <Context.Provider value={{showModal,setShowModal,isShowPopup,setIsShowPopup,screenView,setScreenView,linkTo,setLinkTo,beranda,tentang,fitur,fitur2,kajian,artikel,isShowPopupAfterSignUp,setIsShowPopupAfterSignUp,isShowPopupLogout,setIsShowPopupLogout,}}>
        {children}
    </Context.Provider>
)
}

export const useSteteContext= () => useContext(Context)