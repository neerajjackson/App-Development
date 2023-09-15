import "./App.css";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Slideshow from "./Slideshow/Sildeshow";


function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Slideshow/>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;