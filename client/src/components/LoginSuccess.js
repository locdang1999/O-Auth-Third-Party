import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../stores/actions/authAction";

const LoginSuccess = () => {
  const { userId, tokenLogin } = useParams();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loginSuccess(userId, tokenLogin));
  }, []);

  return <div>{isLoggedIn ? <Navigate to={"/"} replace={true} />:<h3>Please log in properly!</h3>}</div>;
};

export default LoginSuccess;
