import { Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import { useState } from "react"

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false)
  const openAuth = () => setIsAuthOpen(true)
  const closeAuth = () => setIsAuthOpen(false)

  const [isRegOpen, setIsRegOpen] = useState<boolean>(false)
  const openReg = () => setIsRegOpen(true)
  const closeReg = () => setIsRegOpen(false)
  return (
    <>
      <header>
        <Link to="/" className="headerLogo">
          <h1>ОКЭИ</h1>
          <p>тестирование</p>
        </Link>
        <div className="buttonBlock">
          <button className="headerLoginBtn" onClick={() => openAuth()}>
            Войти
          </button>
          <button className="headerLoginBtn" onClick={() => openReg()}>
            Зарегистрироваться
          </button>
        </div>
      </header>
      <Home
        isAuthOpen={isAuthOpen}
        closeAuth={closeAuth} 
        isRegOpen={isRegOpen}
        closeReg={closeReg}
      />
    </>
  )
}

export default App
