import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../stores/actions/authAction";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
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
      <button className="btn btn-primary" onClick={() => navigate("/login")}>
        Đăng Nhập
      </button>
      <button className="btn btn-danger" onClick={logoutUser}>
        Đăng Xuất
      </button>
    </div>
  );
};

export default Home;
