// import { Routes, Route, Link } from "react-router-dom";
// import styles from './Home.module.css'
import { useState } from "react"
import HeaderIntro from "./components/intro/HeaderIntro"
import Modal from "./components/modal/Modal"
import IntroMain from "./components/introMain/IntroMain"

interface IHomeProps {
  modalAuthActive: boolean
  setModalAuthActive: (value: boolean) => void
}

function Home({ modalAuthActive, setModalAuthActive }: IHomeProps) {
  return (
    <>
      <HeaderIntro />
      <Modal active={modalAuthActive} setActive={setModalAuthActive} />
      <IntroMain />
    </>
  )
}

export default Home
