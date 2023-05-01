import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataFunctions from "../../DataFunctions";

/**
 * Goal:
 * this modal should have an input field for usernames, then a button to search for the name.
 * if the username exists, create a new Conversation with the user
 * if the username does not exist, create an error message and have them try to find another username or cancel the modal.
 */

const NewMessageModal = ({ setSettingOn }) => {
  let navigate = useNavigate();
  //used for text field
  const [currentUsernameAttempt, setUsernameAttempt] = useState("");
  //used for error message to pop up
  const [errorUsername, setErrorUsername] = useState("");
  const [usernameIsInvalid, setUsernameIsInvalid] = useState(false);

  const searchForUser = async () => {
    setUsernameIsInvalid(false);
    //If the user searches for a person, this is where that action goes.
    //update the searchedUsername to return to the user
    //if user is found, delete the popup and create a new conversation tab with that person
    if (await DataFunctions.doesUserExist(currentUsernameAttempt)) {
      setSettingOn(false);
      navigate(`../Messages/${currentUsernameAttempt}`, { replace: true });
    } else {
      setErrorUsername(currentUsernameAttempt);
      setUsernameIsInvalid(true);
    }
  };
  const handleCancelClick = () => {
    //If the user clicks out without saving, this is where that action goes
    setSettingOn(false);
  };

  const updateUsername = (e) => {
    //keep updating this variable
    setUsernameAttempt(e.target.value);
    //Remove the error pop-up
    setUsernameIsInvalid(false);
  };

  return (
    <div className="fixed inset-0 z-50 h-auto bg-zinc-200 bg-opacity-90 ">
      {/*Above is used for unfocusing the background. Z is to ensure it's the highest priority */}
      <div className="flex h-screen items-center justify-center">
        {/*Below is the general pop-up box*/}
        <div className="flex flex-col items-center justify-center  rounded-xl border-2 border-blockNavy bg-blockBlue px-4 pb-4 pt-2 ">
          {/*Search  created below*/}
          <h1 className=" mb-3 text-lg font-bold">Send a new message</h1>
          {/*Search field and search button*/}
          <div className="flex-col">
            <input
              type="text"
              className="peer h-10 w-72 rounded-l-xl border-2 border-black outline-none invalid:rounded-r-xl invalid:border-red-600 invalid:text-red-600"
              id=""
              minLength={6}
              maxLength={18}
              size={20}
              pattern="[a-zA-Z0-9]*"
              placeholder="Search for user"
              value={currentUsernameAttempt}
              onChange={(e) => {
                updateUsername(e);
              }}
            />
            <button
              className="h-10 translate-y-1.25 rounded-r-xl bg-blockGold font-bold text-white hover:bg-blockLightGold peer-invalid:invisible"
              onClick={searchForUser}
            >
              <title>Search for User button</title>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/*Pop-up should only appear if the text box has something wrong with it*/}
            <div className=" invisible text-center  peer-invalid:visible ">
              <p>Minimum length: 6 characters</p>
              <p>Maximum length: 18 characters</p>
              <p>Only numbers and letters</p>
            </div>
          </div>

          {/*Cancel button below*/}
          <div className="mt-4 ml-4 flex self-center">
            <button
              onClick={handleCancelClick}
              className=" rounded bg-blockNavy px-4 py-2 font-bold text-white hover:bg-blockSky"
            >
              Cancel
            </button>
          </div>
        </div>
        {/*Pop-up if the username isn't in the system*/}
        {usernameIsInvalid && (
          <div className="h-auto w-20 rounded-r-xl border-y-2 border-r-2 border-black  bg-red-600">
            <p>
              {"Sorry, " + errorUsername + " is not a username in the system!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewMessageModal;
