// import { Routes, Route, Link } from "react-router-dom";
// import styles from './Home.module.css'
import { useContext, useEffect } from "react"
import HeaderIntro from "./components/intro/HeaderIntro"
import IntroMain from "./components/introMain/IntroMain"

import AuthModal from "./components/modal/AuthModal"
import RegModal from "./components/modal/RegModal"
import { Context } from "../../main"
import { observer } from "mobx-react-lite"
import { Navigate } from "react-router-dom"

interface IModProp {
  isAuthOpen: boolean
  closeAuth: () => void

  isRegOpen: boolean
  closeReg: () => void
}

const Home: React.FC<IModProp> = ({
  isAuthOpen,
  closeAuth,
  isRegOpen,
  closeReg,
}) => {
  const { store } = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth()
    }
  }, [])
  if (store.isAuth) {
      location.href = '/profile'
  }
  return (
    
    <>
      <HeaderIntro />
      <AuthModal isOpen={isAuthOpen} onRequestClose={closeAuth} />
      <RegModal isOpen={isRegOpen} onRequestClose={closeReg} />
      {/* <h1>{store.isAuth ? "Пользователь авторизован" : "АВТОРИЗУЙТЕСЬ"}</h1> */}
      <IntroMain />
    </>
  )
}

export default observer(Home)
