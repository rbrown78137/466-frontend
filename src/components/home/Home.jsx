import React, { useState, useEffect } from "react";
import DataFunctions from "../../DataFunctions";
import MessageBlock from "./MessageBlock";
import NewMessageModal from "./NewMessageModal";

const Home = () => {
  //Used for modal pop-ups

  //Variables used for pop-ups
  //SendMessage
  const [messageModalOn, setMessageModalOn] = useState(false);
  const [messageList, setMessageList] = useState([]);
  //onClick event for toggling modal
  const newMessageClicked = () => {
    setMessageModalOn(true);
  };

  //Backend call to get All Messages for a user
  useEffect(async() => {
    if(DataFunctions.getUser()){
      setMessageList(await DataFunctions.getMessageList())
      await DataFunctions.setUser(DataFunctions.user);
    }
  });

  return (
    <>
      {/*Main Div*/}
      <div className="flex h-screen flex-col pt-5">
        <div>
          {/*Only created when settingModalON == true (when the cog is clicked) */}
          {messageModalOn && (
            <NewMessageModal setSettingOn={setMessageModalOn} />
          )}
        </div>

        {/* Header*/}
        <div className=" mx-5 flex justify-between border-b-2">
          <h1 className="pb-2 text-3xl ">Messages</h1>
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
        <div className="mt-5 overflow-auto px-5">
          {messageList.map((i) => (
            <MessageBlock
              username={i.username}
              firstMessage={""}
              read={false}
              key={i.id}
              image={i.avatarId}
            />
          ))}
          <div className="h-5" />
        </div>
      </div>
    </>
  );
};

export default Home;
