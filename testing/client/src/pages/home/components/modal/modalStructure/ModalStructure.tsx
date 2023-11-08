import "./ModalStructure.css"
import { useState } from "react"

interface IModalProps {
  active: boolean
  setActive: (value: boolean) => void
  modulfunc: [boolean, boolean]
  modulfuncInfo: string
  typeModal: boolean

  children: React.ReactNode
}

const ModalStructure = ({
  active,
  setActive,
  modulfunc,
  modulfuncInfo,
  typeModal,
  children,
}: IModalProps) => {
  const [modalAuthActive, setModalAuthActive] = useState<boolean>(true)
  const [modalRegActive, setModalRegActive] = useState<boolean>(false)
  const modulFunc = (arg1: boolean, arg2: boolean) => {
    setModalAuthActive(arg1)
    setModalRegActive(arg2)
  }
  
  return (
    <div
      className={active && typeModal  ? "modalActive" : "modalClose"}
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
            {children}
            <a
            className="modalA"
            onClick={() => modulFunc(modulfunc[0], modulfunc[1])}
          >
            {modulfuncInfo}
            <img src="/src/assets/blackErrow.svg" alt="errow" />
          </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalStructure
