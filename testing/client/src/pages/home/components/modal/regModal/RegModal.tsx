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
      modulfuncInfo="Войти в аккаунт"
      modulfunc={[true, false]}
    >
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
    </ModalStructure>
  )
}

export default AuthModal
