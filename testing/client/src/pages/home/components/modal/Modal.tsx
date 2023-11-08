import React, { FC, useContext } from "react"
import "./Modal.css"
import { useState } from "react"
import { Context } from "../../../../main"

interface IModalProps {
  active: boolean
  setActive: (value: boolean) => void
}

type TModFunc = {
  arg1: boolean,
  arg2: boolean
}

const Modal:React.FC<IModalProps> = ({ active, setActive }) => {
  // modal func
  const [modalAuthActive, setModalAuthActive] = useState<boolean>(true)
  const [modalRegActive, setModalRegActive] = useState<boolean>(false)
  const modulFunc = (arg1:boolean, arg2:boolean) => {
    setModalAuthActive(arg1)
    setModalRegActive(arg2)
  }

  // login func
  const [email, setEmail] = useState<string>('')
  const [passwordd, setPassword] = useState<string>('')
  const {} = useContext(Context)
  return (
    <>
      {/* login */}
      <div
        className={active && modalAuthActive ? "modalActive" : "modalClose"}
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
              <h1>Вход</h1>
              <div className="modalInput">
                <div className="input">
                  <img src="/src/assets/email.svg" alt="" />
                  <input type="text" placeholder="Почта" />
                </div>
                <div className="input">
                  <img src="/src/assets/pass.svg" alt="" />
                  <input type="password" placeholder="Пароль" />
                </div>
                <button className="formButton">Войти</button>
              </div>
              <a className="modalA" onClick={() => modulFunc(false, true)}>
                Создать аккаунт
                <img src="/src/assets/blackErrow.svg" alt="errow" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* register */}
      <div
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
      </div>
    </>
  )
}

export default Modal
