/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint no-unused-vars: "off" */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  LoginContainer,
  LoginInnerContainer,
  LoginLabel,
  Input,
} from "./register.style";

const ipAddress = process.env.REACT_APP_IP_ADDRESS ?? "127.0.0.1";

export default function RegisterForm() {
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
    console.log(registerData);
    axios.post(`http://${ipAddress}:4444/register`, registerData);
  };

  return (
    // <div className="relative flex flex-col justify-center mt-12 overflow-hidden m-8">
    <LoginContainer>
      {/* <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl"> */}
      <LoginInnerContainer>
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Register
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <LoginLabel
              htmlFor="firstName"
              // className="block text-sm font-semibold text-gray-800"
            >
              First Name
            </LoginLabel>
            <Input
              min="1"
              max="60"
              onChange={(e) => handleInputs(e)}
              type="text"
              name="firstName"
              // className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <LoginLabel
              htmlFor="lastName"
              // className="block text-sm font-semibold text-gray-800"
            >
              Last Name
            </LoginLabel>
            <Input
              min="1"
              max="60"
              onChange={(e) => handleInputs(e)}
              type="text"
              name="lastName"
              // className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <LoginLabel
              htmlFor="email"
              // className="block text-sm font-semibold text-gray-800"
            >
              Email
            </LoginLabel>
            <Input
              min="3"
              max="60"
              onChange={(e) => handleInputs(e)}
              type="email"
              name="email"
              // className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              min="5"
              max="60"
              onChange={(e) => handleInputs(e)}
              type="password"
              name="password"
              // className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={(e) => handleSubmit(e)}
              type="button"
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
      </LoginInnerContainer>
    </LoginContainer>
  );
}
