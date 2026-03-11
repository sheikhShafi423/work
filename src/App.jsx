import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./Component/Auth/firebase";

import Navbar from "./Component/Auth/Navbar";
import Signup from "./Component/Auth/Signup";
import Login from "./Component/Auth/Login";
import UserProfile from "./Component/Auth/UserProfile";
import Home from "./Component/Auth/Home";

function App() {
  const [user, setUser] = useState(null);

  // listen to firebase login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
