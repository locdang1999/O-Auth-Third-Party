import React from "react";
import Google from "../assets/imgs/google.png";
import Facebook from "../assets/imgs/facebook.png";
import Github from "../assets/imgs/github.png";

const LoginPage = () => {
  const handleLogin = (type) => {
    window.open(`http://localhost:5000/auth/${type}`, "_self");
  };
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div
            className="loginButton btnGg"
            onClick={() => handleLogin("google")}
          >
            <img src={Google} alt="Google" className="icon" />
            Google
          </div>
          <div
            className="loginButton btnFb"
            onClick={() => handleLogin("facebook")}
          >
            <img src={Facebook} alt="Facebook" className="icon" />
            Facebook
          </div>
          <div
            className="loginButton btnGitH"
            onClick={() => handleLogin("github")}
          >
            <img src={Github} alt="Github" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="btnLogin">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
