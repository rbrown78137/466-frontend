import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import DataFunctions from "../../DataFunctions";

const Login = ({
  handleNeedAccount,
  handleSubmit,
  userName,
  password,
  setUsername,
  setPassword,
  errorMessage,
  setUser,
}) => {
  const [text, setText] = React.useState("");
  const [username1, setUsername1] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [loginIsInvalid, setLoginIsInvalid] = useState(false);

  let navigate = useNavigate();

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const token = await DataFunctions.loginUser(username1, password1);
    //only set user if the tokenId is valid
    if ((await token.id) != -1) {
      setUser(token.id);
    } else {
      //create popup
      setLoginIsInvalid(true);
      console.log("Bad username");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername1(e.target.value);
    setLoginIsInvalid(false);
  };

  const handlePasswordChange = (e) => {
    setPassword1(e.target.value);
    setLoginIsInvalid(false);
  };

  return (
    /* Styling for login box */
    <div class="flex h-screen items-center">
      <div class="mt-80 ml-80 h-screen w-full max-w-xs">
        <form
          class="mb-4 rounded bg-blockSky px-8 pt-6 pb-3 shadow-md"
          onSubmit={handleSubmit2}
        >
          {/*Styling and spacing for Username submission and functionality  */}
          <div class="mb-4">
            <label
              class="mb-2 block text-sm font-bold text-gray-700"
              for="username"
            >
              Username
            </label>
            <input
              class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
              value={username1}
              onChange={(e) => {
                handleUsernameChange(e);
              }}
            />
          </div>
          {/* Styling and spacing for Password submission and functionality*/}
          <div class="mb-6">
            <label
              class="mb-2 block text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              class="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="******************"
              value={password1}
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
            <p className="text-xs italic text-red-800"></p>
          </div>
          {/*Styling and spacing for submit button and forgot password button */}
          <div class="flex items-center justify-between">
            <button
              class="focus:shadow-outline rounded bg-blockNavy py-2 px-4 font-bold text-white hover:bg-blockDarkBlue focus:outline-none"
              type="submit"
              onClick={handleSubmit2}
            >
              Submit
            </button>
            <a
              class="inline-block align-baseline text-sm font-bold text-blockNavy hover:text-blockDarkBlue"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          {/*Outside of the login box styling */}
          <a
            class="mt-6 ml-10 inline-block align-baseline text-sm font-bold text-blockNavy hover:text-blockDarkBlue"
            onClick={handleNeedAccount}
            type="button"
          >
            <Link to={"/"}>Don't have an account?</Link>
          </a>
        </form>
        <p class="text-center text-xs text-gray-500">
          &copy;2022 block. All rights reserved.
        </p>
      </div>
      {/*Pop-up if the login isn't in the system*/}
      {loginIsInvalid && (
        <div className=" -translate-y-10 font-bold w-24 rounded-r-xl border-y-2 border-r-2 border-black  bg-red-600">
          <p>{"Sorry, the username/ password you entered is not correct."}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
