import React from "react";

const Login = () => {
  const handleLogin = (ro) => {
    window.open(`http://localhost:5000/api/auth/${ro}`, "_self");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        marginTop: "32px",
      }}
    >
      <button
        className="btn btn-primary"
        onClick={() => handleLogin("facebook")}
      >
        Facebook
      </button>
      <button className="btn btn-danger" onClick={() => handleLogin("google")}>
        Google
      </button>
    </div>
  );
};

export default Login;
