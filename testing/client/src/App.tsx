import { Link } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import { useState } from "react"

function App() {
  const [modalAuthActive, setModalAuthActive] = useState<boolean>(false)
  return (
    <>
      <header>
        <Link to="/" className="headerLogo">
          <h1>ОКЭИ</h1>
          <p>тестирование</p>
        </Link>
        <button
          className="headerLoginBtn"
          onClick={() => setModalAuthActive(true)}
        >
          Личный кабинет
        </button>
      </header>
      <Home
        modalAuthActive={modalAuthActive}
        setModalAuthActive={setModalAuthActive}
      />
    </>
  )
}

export default App
