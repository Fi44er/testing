import Modal from "react-modal"
import "./Modal.css"
import { Context } from "../../../../main"
import { useContext, useState } from "react"
import { observer } from "mobx-react-lite"

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const AuthModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
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
          <h1>Вход</h1>
          <div className="modalInput">
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
            <button
              className="formButton"
              onClick={() => store.login(email, password)}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default observer(AuthModal)
