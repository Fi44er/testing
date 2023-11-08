// import { Routes, Route, Link } from "react-router-dom";
// import styles from './Home.module.css'
import { useState } from "react";
import HeaderIntro from "./components/intro/HeaderIntro";
import Modal from "./components/modal/Modal";

interface IHomeProps {
  modalActive: boolean
  setModalActive: (value: boolean) => void
}

function Home({modalActive, setModalActive}:IHomeProps) {
    
  return (
    <>
      <HeaderIntro/>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Home
