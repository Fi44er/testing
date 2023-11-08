import { Link } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import { useState } from "react";



function App() {
  const [modalActive, setModalActive] = useState<boolean>(false)
  return (
    <>
      <header>
        <Link to="/" className="headerLogo">
          <h1>ОКЭИ</h1>
          <p>тестирование</p>
        </Link>
        <button className="headerLoginBtn" onClick={() => setModalActive(true)}>
          Войти
        </button>
      </header>
      <Home modalActive={modalActive} setModalActive={setModalActive} />  
    </>
  )
}

export default App
