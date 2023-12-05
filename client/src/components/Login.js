import React from 'react'

const Login = () => {

  const handleLogin = () =>{
    window.open('http://localhost:5000/api/auth/google', '_self')
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        marginTop: "32px",
      }}
    >
      <button className="btn btn-primary" onClick={() => console.log("first")}>
        Facebook
      </button>
      <button className="btn btn-danger" onClick={handleLogin}>Google</button>
    </div>
  )
}

export default Login