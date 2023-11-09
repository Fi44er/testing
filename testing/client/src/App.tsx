import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Tests from "./pages/profile/tests/components/Tests";
import Quiz from "./pages/profile/quiz/components/Quiz";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const openAuth = () => setIsAuthOpen(true);
  const closeAuth = () => setIsAuthOpen(false);

  const [isRegOpen, setIsRegOpen] = useState<boolean>(false);
  const openReg = () => setIsRegOpen(true);
  const closeReg = () => setIsRegOpen(false);
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isAuthOpen={isAuthOpen}
              closeAuth={closeAuth}
              isRegOpen={isRegOpen}
              closeReg={closeReg}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
