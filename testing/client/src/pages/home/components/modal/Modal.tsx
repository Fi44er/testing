import React from "react"
import"./Modal.css"



interface IModalProps {
  active: boolean
  setActive: (value: boolean) => void
}

const Modal = ({active, setActive}:IModalProps) => {
  return (
    <div className={active ? "modalActive" : "modalClose"} onClick={() => setActive(false)}>
      <div className='modalContent' onClick={e => e.stopPropagation()}>
        <a href="#" className='modalCloseBtn' onClick={() => setActive(false)}>
          <img src="/src/assets/close.svg" alt="close" />
        </a>
        <div className='modalInfo'>
          <img
            style={{ width: "50%" }}
            src="/src/assets/formImg.svg"
            alt="noteBook"
          />
          <div className='modalForm'>
            <h1>Войти</h1>
            <div className='modalInput'>
              <div className='input'>
                <img src="/src/assets/email.svg" alt="" />
                <input type="text" placeholder="Почта" />
              </div>
              <div className='input'>
              <img src="/src/assets/pass.svg" alt="" />
                <input type="password" placeholder="Пароль" />
              </div>
              <button className='formButton'>Войти</button>
            </div>
            <a href="#" className='modalA'>
              Создать аккаунт
              <img src="/src/assets/blackErrow.svg" alt="errow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
