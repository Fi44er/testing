import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

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
import MapResult from "./pages/profile/map/Map";

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
          <Route path="/map" element={<MapResult />} />

          <Route path="*" element={<NotFound onChange={handleChange} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
