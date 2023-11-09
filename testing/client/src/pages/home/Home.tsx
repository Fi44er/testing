// import { Routes, Route, Link } from "react-router-dom";
// import styles from './Home.module.css'
<<<<<<< HEAD
=======
import { useState } from "react"
import HeaderIntro from "./components/intro/HeaderIntro"
import Modal from "./components/modal/Modal"
import IntroMain from "./components/introMain/IntroMain"
>>>>>>> a569aa2c7a352098532150e6f94a4759687e0f39

import HeaderIntro from "./components/intro/HeaderIntro"
import AuthModal from "./components/modal/AuthModal"
import RegModal from "./components/modal/RegModal"

interface IModProp {
  isAuthOpen: boolean
  closeAuth: () => void

  isRegOpen: boolean
  closeReg: () => void
}

<<<<<<< HEAD
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
=======
function Home({ modalAuthActive, setModalAuthActive }: IHomeProps) {
  return (
    <>
      <HeaderIntro />
      <Modal active={modalAuthActive} setActive={setModalAuthActive} />
      <IntroMain />
>>>>>>> a569aa2c7a352098532150e6f94a4759687e0f39
    </>
  )
}

export default Home
