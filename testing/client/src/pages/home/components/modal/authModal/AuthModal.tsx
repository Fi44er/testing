import ModalStructure from "../modalStructure/ModalStructure"


interface IModalProps {
  active: boolean
  setActive: (value: boolean) => void
}

const AuthModal: React.FC<IModalProps> = ({ active, setActive }) => {
    
  return (
    <ModalStructure
      active={active}
      setActive={setActive}
      typeModal={false}
      modulfuncInfo="Создать аккаунт"
      modulfunc={[false, true]}
    >
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
    </ModalStructure>
  )
}

export default AuthModal
