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

  const [message, setMessage] = useState("");
  
  const handleCancelClick = () => {
    //If the user clicks out without saving, this is where that action goes
    setSettingOn(false);
  };

  const sendMessage = () => {
    //If the user clicks out without saving, this is where that action goes
    DataFunctions.sendGlobalMessage(message, DataFunctions.getUser().id);
    setSettingOn(false);
  };

  const updateMessage = (e) => {
    //keep updating this variable
    setMessage(e.target.value);
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
              className="peer h-10 w-72 rounded-xl border-2 border-black outline-none"
              id=""
              minLength={2}
              maxLength={100}
              size={60}
              pattern="[a-zA-Z0-9]*"
              placeholder="Enter message here"
              value={message}
              onChange={(e) => {
                updateMessage(e);
              }}
            />
          </div>

          {/*Send button below*/}
          <div className="mt-4 ml-4 flex self-center">
            <button
              onClick={sendMessage}
              className=" rounded bg-blockNavy px-4 py-2 font-bold text-white hover:bg-blockSky"
            >
              Send
            </button>
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
      </div>
    </div>
  );
};

export default NewMessageModal;
