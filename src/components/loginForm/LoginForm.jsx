/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ForgotPassBtn from "../forgotPassword/ForgotPassBtn";
import ForgotPassForm from "../forgotPassword/ForgotPassForm";

import {
  LoginContainer,
  LoginInnerContainer,
  LoginLabel,
  Input,
} from "./login.style";

export default function LoginForm() {
  const [newPassForm, setNewPassForm] = useState(false);

  const passwordResetForm = () => {
    setNewPassForm(true);
  };

  useEffect(() => {}, [newPassForm]);

  return (
    <>
      <LoginContainer>
        <LoginInnerContainer>
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <LoginLabel htmlFor="email">Email</LoginLabel>
              <Input type="email" />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <Input type="password" />
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
    </>
  );
}
