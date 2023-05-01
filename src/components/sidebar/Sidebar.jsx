import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from 'react-router-dom'
import { DataFunctions } from '../../DataFunctions'
import NewGlobalMessageModal from "./NewGlobalMessageModal";


/**
 * The Right sidebar with relavent content for a user
 * @returns 
 */
const Sidebar = () => {

  const [messageModalOn, setMessageModalOn] = useState(false);
  const newMessageClicked = () => {
    setMessageModalOn(true);
  };
  
  

  /*This is the format that the HTTP response will be in, so this can simply be swapped out with a call to the backend! */
  let exampleUser = {
        "id": 0,
        "name": "",
        "password": "",
        "email": "",
        "avatarId": 0,
        "privacySetting": true,
        "spendablePoints": 0,
        "giftablePoints": 0,
        "totalPoints": 0,
        "lastLoginTime": "2022-03-02T20:57:01.805Z"
      }

  const [sideUser, setSideUser] = React.useState(exampleUser)

  useEffect(() => {
    if(DataFunctions.getUser()){
      setSideUser(DataFunctions.getUser())
      
    }
    
  });


  useEffect(async() => {
    DataFunctions.setUser(DataFunctions.user.id)
  }, [sideUser]);
    



  
  /* returns the general sidebar block with a function call content() to get the array of content that will fill the sidebar*/ 
  return (
    <div className="w-2/6 h-screen bg-blockNavy md:p-10 p-3 flex flex-col absolute right-0 top-0 overflow-y-auto gap-10">
    <>
      {/*Main Div*/}
      <div className="flex h-screen flex-col pt-5">
        <div>
          {/*Only created when settingModalON == true (when the cog is clicked) */}
          {messageModalOn && (
            <NewGlobalMessageModal setSettingOn={setMessageModalOn} />
          )}
        </div>

        {/* Header*/}
        <div className=" mx-5 flex justify-between border-b-2">
          <h1 className="pb-2 text-3xl ">Global Messages</h1>
          {/*New Message Icon */}
          <div
            className="group h-10 w-16 items-center rounded-lg bg-blockGold hover:cursor-pointer hover:bg-blockLightGold"
            onClick={newMessageClicked}
          >
            <title>Create New Message Button</title>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-10 w-10 translate-x-3 stroke-blockOrange group-hover:stroke-blockGold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>
        {/* End Header*/}
        {/* Messages List*/}
        </div>
    </>
    </div>
  );
};

export default Sidebar