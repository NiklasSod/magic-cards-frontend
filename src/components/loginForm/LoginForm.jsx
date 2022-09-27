/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../helpers/axios";
import ForgotPassBtn from "../forgotPassword/ForgotPassBtn";
import ForgotPassForm from "../forgotPassword/ForgotPassForm";

import {
  LoginContainer,
  LoginInnerContainer,
  LoginLabel,
  Input,
} from "./login.style";
import InfoModal from "../infoModal/InfoModal";

const ipAddress = process.env.REACT_APP_IP_ADDRESS ?? "127.0.0.1";

export default function LoginForm() {
  const [newPassForm, setNewPassForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputs = (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const passwordResetForm = () => {
    setNewPassForm(true);
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`http://${ipAddress}:4444/login`, loginData)
      .then((res) => {
        setStatus(res.status);
        setMessage(`Welcome ${res.data.message.user.firstName}!`);
        if (res.data.message.adminToken) {
          localStorage.setItem(
            "adminToken",
            JSON.stringify(res.data.message.adminToken)
          );
        }
        if (res.data.message.token) {
          localStorage.setItem("token", JSON.stringify(res.data.message.token));
        }
        setShowModal(true);
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((err) => {
        setStatus(err.response.status);
        setMessage(err.response.data.message);
        setShowModal(true);
      });
  };

  useEffect(() => {}, [newPassForm]);

  return (
    <>
      <LoginContainer>
        <LoginInnerContainer>
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
            Sign in
          </h1>
          <form className="mt-6" autoComplete="off" onSubmit={(e) => login(e)}>
            <div className="mb-2">
              <LoginLabel htmlFor="email">Email</LoginLabel>
              <Input
                autoComplete="off"
                min="3"
                max="60"
                onChange={(e) => handleInputs(e)}
                type="email"
                name="email"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <Input
                autoComplete="off"
                min="5"
                max="60"
                onChange={(e) => handleInputs(e)}
                type="password"
                name="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don´t have an account?{" "}
            <Link
              to="/register"
              href="#Test"
              className="font-medium text-purple-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </LoginInnerContainer>
      </LoginContainer>
      {!newPassForm && <ForgotPassBtn passwordResetForm={passwordResetForm} />}
      {newPassForm && <ForgotPassForm />}
      {showModal && <InfoModal status={status} message={message} />}
    </>
  );
}
