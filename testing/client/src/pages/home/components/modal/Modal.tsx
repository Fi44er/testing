import React, { FC, useContext } from "react"
import "./Modal.css"
import { useState } from "react"
import { Context } from "../../../../main"
import AuthModal from "./authModal/AuthModal"
import RegModal from "./regModal/RegModal"

interface IModalProps {
  active: boolean
  setActive: (value: boolean) => void
}


const Modal:React.FC<IModalProps> = ({ active, setActive }) => {
  return (
    <>

      <AuthModal active={active} setActive={setActive}/>
      <RegModal active={active} setActive={setActive}/>

      {/* register */}
      {/* <div
        className={active && modalRegActive ? "modalActive" : "modalClose"}
        onClick={() => setActive(false)}
      >
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <a className="modalCloseBtn" onClick={() => setActive(false)}>
            <img src="/src/assets/close.svg" alt="close" />
          </a>
          <div className="modalInfo">
            <img
              style={{ width: "50%" }}
              src="/src/assets/formImg.svg"
              alt="noteBook"
            />
            <div className="modalForm">
              <h1>Регистрация</h1>
              <div className="modalInput">
                <div className="input">
                  <img src="/src/assets/fio.svg" alt="fio" />
                  <input type="text" placeholder="ФИО" />
                </div>
                <div className="input">
                  <img src="/src/assets/phone.svg" alt="phone" />
                  <input type="text" placeholder="Телефон" />
                </div>
                <div className="input">
                  <img src="/src/assets/email.svg" alt="" />
                  <input type="text" placeholder="Почта" />
                </div>
                <div className="input">
                  <img src="/src/assets/pass.svg" alt="" />
                  <input type="password" placeholder="Пароль" />
                </div>
                <button className="formButton">Зарегистрироваться</button>
              </div>
              <a className="modalA" onClick={() => modulFunc(true, false)}>
                Войти в аккаунт
                <img src="/src/assets/blackErrow.svg" alt="errow" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Modal
