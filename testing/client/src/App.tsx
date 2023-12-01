<<<<<<< HEAD
import { Route, Routes, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
=======
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
>>>>>>> 9fe937045fe386c4b5c4544a0ce9e5c81cf87604

import "./App.css";
import { useState } from "react";

import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Tests from "./pages/profile/tests/components/Tests";
import Quiz from "./pages/profile/quiz/components/Quiz";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header";

import ProtectedRoute from "./components/ProtectedRoute";
import Parcer from "./pages/profile/parcer/Parcer";
import Resalts from "./pages/profile/resalts/Resalts";

const App = () => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const openAuth = () => setIsAuthOpen(true);
  const closeAuth = () => setIsAuthOpen(false);

  const [isRegOpen, setIsRegOpen] = useState<boolean>(false);
  const openReg = () => setIsRegOpen(true);
  const closeReg = () => setIsRegOpen(false);

  // nptFound page location
  const [value, setValue] = useState("");
  const handleChange = (pathNotFound: any) => {
    setValue(pathNotFound);
  };

  let authenticated;
  if (!localStorage.getItem("token")) {
    authenticated = false;
  } else {
    authenticated = true;
  }

  return (
    <>
      <BrowserRouter>
        <Header
          isAuthOpen={openAuth}
          closeAuth={closeAuth}
          isRegOpen={openReg}
          closeReg={closeReg}
          value={value}
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
          <Route
            path="/"
            element={<ProtectedRoute authenticated={authenticated} />}
          >
            <Route path="/profile" element={<Profile />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/parcer" element={<Parcer />} />
            <Route path="/resultat" element={<Resalts />} />
          </Route>

          <Route path="*" element={<NotFound onChange={handleChange} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
