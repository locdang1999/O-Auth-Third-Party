import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import "./app.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json();
          }
          throw new Error("Authentication has been failed!");
        })
        .then((respObj) => {
          setUser(respObj.user);
          console.log(respObj.user)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return getUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/post/:id"
            element={user ? <PostPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
