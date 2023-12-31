import { Link, useLocation } from "react-router-dom"

const Header = ({ isAuthOpen, isRegOpen, value }:any) => {
    const { pathname } = useLocation()
    console.log(value);
    

    
  if (localStorage.getItem("token")) {
    
    return (
      <>
        <header style={{display: pathname === value ? 'none' : 'flex'}}>
          <Link to="/" className="headerLogo">
            <h1>ОКЭИ</h1>
            <p>тестирование</p>
          </Link>
          <div className="buttonBlock">
            <Link to="/profile" className="headerLoginBtn">
              Личный кабинет
            </Link>
          </div>
        </header>
      </>
    )
  } else {
    return (
      <>
        <header style={{display: pathname === value ? 'none' : 'flex'}}>
          <Link to="/" className="headerLogo">
            <h1>ОКЭИ</h1>
            <p>тестирование</p>
          </Link>
          <div className="buttonBlock">
            <button className="headerLoginBtn" onClick={() => isAuthOpen()}>
              Войти
            </button>
            <button className="headerLoginBtn" onClick={() => isRegOpen()}>
              Зарегистрироваться
            </button>
          </div>
        </header>
      </>
    )
  }
}

export default Header
