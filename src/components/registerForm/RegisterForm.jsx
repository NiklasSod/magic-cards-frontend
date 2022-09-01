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

export default function RegisterForm() {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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
              type="firstName"
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
              type="lastName"
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
              type="email"
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
              type="password"
              // className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Have an account?{" "}
          <Link
            to="/register"
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
