import Modal from "react-modal"
import "./Modal.css"
import { Context } from "../../../../main"
import { useContext, useState } from "react"
import { observer } from "mobx-react-lite"


interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const RegModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [fio, setFio] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const { store } = useContext(Context)
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onRequestClose}
      className="modal"
      style={{
        content: {
          maxWidth: "49%",
          margin: "auto",
        },
        overlay: {
          display: "flex",
          background: "rgba(0, 0, 0, 0.40)",
        },
      }}
    >
      <a className="modalCloseBtn" onClick={() => onRequestClose()}>
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
          <h4 className="font-light text-red-600 pb-5">{store.messageReg}</h4>
          <div className="modalInput">
            <div className="input">
              <img src="/src/assets/fio.svg" alt="fio" />
              <input
                type="text"
                placeholder="ФИО"
                onChange={(e) => setFio(e.target.value)}
                value={fio}
              />
            </div>
            <div className="input">
              <img src="/src/assets/phone.svg" alt="phone" />
              <input
                type="text"
                placeholder="Телефон"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>
            <div className="input">
              <img src="/src/assets/email.svg" alt="" />
              <input
                type="text"
                placeholder="Почта"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="input">
              <img src="/src/assets/pass.svg" alt="" />
              <input
                type="password"
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="formButton" onClick={() => store.registration(email, password, fio, phoneNumber)}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default observer(RegModal)
