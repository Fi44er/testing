// import { Routes, Route, Link } from "react-router-dom";
// import styles from './Home.module.css'

import HeaderIntro from "./components/intro/HeaderIntro"
import AuthModal from "./components/modal/AuthModal"
import RegModal from "./components/modal/RegModal"

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
  return (
    <>
      <HeaderIntro />
      <AuthModal isOpen={isAuthOpen} onRequestClose={closeAuth} />
      <RegModal isOpen={isRegOpen} onRequestClose={closeReg} />
    </>
  )
}

export default Home
