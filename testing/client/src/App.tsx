import { Link } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"

function App() {
  return (
    <>
      <header>
        <Link to="/" className="headerLogo">
          <h1>ОКЭИ</h1>
          <p>тестирование</p>
        </Link>
        <Link to="#" className="headerLoginBtn">
          Войти
        </Link>
      </header>
      <Home />
    </>
  )
}

export default App
