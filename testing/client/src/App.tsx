import { Route, Routes, useLocation } from "react-router-dom"

import "./App.css"
import { useState } from "react"

import Profile from "./pages/profile/Profile"
import Home from "./pages/home/Home"
import Tests from "./pages/profile/tests/components/Tests"
import Quiz from "./pages/profile/quiz/components/Quiz"
import NotFound from "./pages/NotFound/NotFound"
import Header from "./components/Header"

const App = () => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false)
  const openAuth = () => setIsAuthOpen(true)
  const closeAuth = () => setIsAuthOpen(false)

  const [isRegOpen, setIsRegOpen] = useState<boolean>(false)
  const openReg = () => setIsRegOpen(true)
  const closeReg = () => setIsRegOpen(false)



  return (
    <>
      <Header
        isAuthOpen={openAuth}
        closeAuth={closeAuth}
        isRegOpen={openReg}
        closeReg={closeReg}
      />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
