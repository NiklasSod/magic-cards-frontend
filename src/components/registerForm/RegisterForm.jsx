/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint no-unused-vars: "off" */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../helpers/axios";
import InfoModal from "../infoModal/InfoModal";

import {
  RegisterContainer,
  RegisterInnerContainer,
  RegisterLabel,
  Input,
} from "./register.style";

const ipAddress = process.env.REACT_APP_IP_ADDRESS ?? "127.0.0.1";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState("");
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://${ipAddress}:4444/register`, registerData)
      .then((res) => {
        setStatus(res.status);
        setMessage(res.data.message);
        setShowModal(true);
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((err) => {
        setStatus(err.response.status);
        setMessage(err.response.data.message);
        setShowModal(true);
      });
  };

  return (
    <div>
      <RegisterContainer>
        <RegisterInnerContainer>
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
            Register
          </h1>
          <form
            className="mt-6"
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="mb-2">
              <RegisterLabel htmlFor="firstName">First Name</RegisterLabel>
              <Input
                autoComplete="off"
                min="1"
                max="60"
                onChange={(e) => handleInputs(e)}
                type="text"
                name="firstName"
              />
            </div>
            <div className="mb-2">
              <RegisterLabel htmlFor="lastName">Last Name</RegisterLabel>
              <Input
                autoComplete="off"
                min="1"
                max="60"
                onChange={(e) => handleInputs(e)}
                type="text"
                name="lastName"
              />
            </div>
            <div className="mb-2">
              <RegisterLabel htmlFor="email">Email</RegisterLabel>
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
                Register
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Have an account?{" "}
            <Link
              to="/login"
              href="#Test"
              className="font-medium text-purple-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </RegisterInnerContainer>
      </RegisterContainer>
      {showModal && <InfoModal status={status} message={message} />}
    </div>
  );
}
