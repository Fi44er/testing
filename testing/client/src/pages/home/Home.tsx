// import { Routes, Route, Link } from "react-router-dom";
// import styles from './Home.module.css'
import { useState } from "react";
import HeaderIntro from "./components/intro/HeaderIntro";
import Modal from "./components/modal/Modal";

function Home() {
    interface IUseState {
        modalActive:boolean
        setModalActive: void
    }
    const [modalActive, setModalActive] = useState<IUseState>()
  return (
    <>
      <HeaderIntro/>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Home
