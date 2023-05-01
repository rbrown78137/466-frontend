import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataFunctions from "../../DataFunctions";

/**
 This modal should allow a user to post to the global message board.
 The modal will pop open, allow the user to type a message, and then
    post it to the global message board.
    */

const NewGlobalMessageModal = ({ setSettingOn }) => {
    let navigate = useNavigate();
    //used for text field
    const [currentMessage, setMessage] = useState("");
    
    const postMessage = async () => {
        //refresh the page
        window.location.reload();

        //TODO: post the message to the global message board

    };
    const handleCancelClick = () => {
        //If the user clicks out without saving, this is where that action goes
        setSettingOn(false);
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
                placeholder="Type your message here"
                onChange={setMessage}
                />
                <button
                className="h-10 w-20 bg-blockNavy text-white rounded-r-xl"
                onClick={postMessage}
                >
                Post
                </button>
            </div>
            {/*Cancel button*/}
            <button className="h-10 w-20 bg-blockNavy text-white rounded-xl mt-2" onClick={handleCancelClick}>
                Cancel
            </button>
            </div>
        </div>
        </div>
    );
};

export default NewGlobalMessageModal;