import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../stores/actions/authAction";
import { apiGetInfUser } from "../apis/userService";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const [useInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      let response = await apiGetInfUser(token);
      
      if (response?.data.err === 0) {
        setUserInfo(response.data?.response);
      }
    };

    token && fetchUser();
  }, [token]);

  const logoutUser = () => {
    dispatch(logout());
    setUserInfo({});
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
      <div>
        {isLoggedIn ? (
          <button className="btn btn-danger" onClick={logoutUser}>
            Đăng Xuất
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Đăng Nhập
          </button>
        )}
      </div>
      {token && (
        <div>
          <h4>{useInfo?.name}</h4>
          <h4>{useInfo?.email}</h4>
          <img
            src={useInfo?.avatarUrl}
            alt="avatar"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
