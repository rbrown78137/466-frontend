import React from "react";
import { Navigate, Link } from "react-router-dom";
import DataFunctions from "../../DataFunctions";

const Register = ({ handleHaveAccount, errorMessage }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    console.log(email);
    console.log(username);
    console.log(password);
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const token = await DataFunctions.registerUser(username, password, email);
    window.location.reload(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    /*Styling for the Register Page*/
    <div class="mt-80 ml-80 w-full max-w-xs">
      {/*Register banner at the top of the box*/}
      <form
        className="mb-4 rounded bg-blockSky px-8 pt-6 pb-3 shadow-md"
        onSubmit={handleSubmit2}
      >
        <h1 class="px-24 pb-6 text-lg font-bold text-blockNavy">Register</h1>
        {/*Email box styling*/}
        <div class="mb-4">
          <label class="mb-2 block text-sm font-bold text-gray-700" for="email">
            Email
          </label>
          <input
            class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            placeholder="email@site.com"
            type="text"
            value={email}
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
        </div>
        {/*Username box styling*/}
        <div class="mb-4">
          <label
            class="mb-2 block text-sm font-bold text-gray-700"
            for="username"
          >
            Username
            <p>Length: 6-18 charachters</p>
            <p>Must be letters and numbers</p>
            <input
              class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                handleUsernameChange(e);
              }}
              maxLength={18}
              minLength={6}
              pattern={"[a-zA-Z0-9]*"}
            />
          </label>
        </div>
        {/*Password box styling*/}
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
            value={password}
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <p className="text-xs italic text-red-800">{errorMessage}</p>
        </div>
        {/*Submit button and "Do you have an account?" styling*/}
        <div class="flex items-center justify-between">
          <button
            class="focus:shadow-outline mb-6 rounded bg-blockNavy py-2 px-4 font-bold text-white hover:bg-blockDarkBlue focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <a
            class=" inline-block pb-5 align-baseline text-sm font-bold text-blockNavy hover:text-blockDarkBlue"
            onClick={handleHaveAccount}
            type="button"
          >
            <Link to={"/"}>Have an account?</Link>
          </a>
        </div>
      </form>
      <p class="text-center text-xs text-gray-500">
        &copy;2022 block. All rights reserved.
      </p>
    </div>
  );
};

export default Register;
