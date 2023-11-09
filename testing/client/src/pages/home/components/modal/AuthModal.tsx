import Modal from "react-modal"
import "./Modal.css"

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const AuthModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
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
              <input type="text" placeholder="Почта" />
            </div>
            <div className="input">
              <img src="/src/assets/pass.svg" alt="" />
              <input type="password" placeholder="Пароль" />
            </div>
            <button className="formButton">Войти</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AuthModal
