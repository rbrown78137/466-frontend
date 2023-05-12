import React, { useEffect } from "react";
import AvatarsModal from "./AvatarsModal";
import { useState } from "react";
import DataFunctions from "../../DataFunctions";
import createAvatar from "./AvatarInfo";

const Profile = () => {

  const adjList = [
    'Attractive',
    'Bald',
    'Beautiful',
    'Chubby',
    'Clean',
    'Dazzling',
    'Drab',
    'Elegant',
    'Fancy',
    'Fit',
    'Flabby',
    'Glamorous',
    'Gorgeous',
    'Handsome',
    'Long',
    'Magnificent',
    'Muscular',
    'Plain',
    'Plump',
    'Quaint',
    'Scruffy',
    'Shapely',
    'Short',
    'Skinny',
    'Stocky',
  ];
  let exampleUser = {
    id: 0,
    name: "",
    password: "",
    email: "",
    avatarId: 0,
    lastLoginTime: "2022-03-02T20:57:01.805Z",
  };
  const nounList = [
    'Tiger', 'Elephant', 'Giraffe', 'Lion', 'Gorilla', 'Polar Bear', 'Chimpanzee', 'Penguin', 'Kangaroo', 'Dolphin', 'Zebra', 'Crocodile', 'Koala', 'Platypus', 'Bald Eagle', 'Octopus', 'Whale', 'Cheetah', 'Orangutan', 'Panda'
  ];



  //get user data
  const [currentUser, setCurrentUser] = React.useState(exampleUser);
  useEffect(async () => {
    if (DataFunctions.getUser()) {
      setCurrentUser(await DataFunctions.getUser());
    }
  }, []);
  var [adj, setAdj] = React.useState(currentUser.name.split(" ")[0]);
  var [noun, setNoun] = React.useState(currentUser.name.split(" ")[1]);

  let resetName = (adj, noun) => {
    let newName = adj + " " + noun;
    currentUser.name = newName;
    DataFunctions.updateName(newName);
  }

  let pickNoun = () => {
    let newNoun = nounList[Math.floor(Math.random() * nounList.length)];
    setNoun(newNoun);
    resetName(adj, newNoun);
  }

  let pickAdj = () => {
    let newAdj = adjList[Math.floor(Math.random() * adjList.length)];
    setAdj(newAdj);
    resetName(newAdj, noun);
  }

  //call backend to populate with current user's data
  useEffect(async () => {
    if (DataFunctions.getUser()) {
      setCurrentUser(await DataFunctions.getUser());
    }
  }, []);
  //get current avatar img
  let currentImgName = DataFunctions.avatarIDToName(currentUser.avatarId);

  //turn into an img object
  let currentImgObj = createAvatar(currentImgName);

  //Used for modal pop-ups

  //Variables used for pop-ups
  // Choose an avatar
  const [avatarModalOn, setAvatarModalOn] = useState(false);

  //onClick event for toggling avatar modal
  const editClicked = () => {
    setAvatarModalOn(true);
  };

  return (
    //Main screen
    <div className="h-screen overflow-auto">
      {/*Pop-ups*/}
      <div>
        {/*Avatar pop-up*/}
        {avatarModalOn && (
          <AvatarsModal
            setAvatarOn={setAvatarModalOn}
            currentImage={currentImgObj.img}
          />
        )}
      </div>

      {/* Header */}
      <div className=" relative flex items-center  justify-center border-b-2 border-blockSky bg-white">
        {/*Image avatar goes here*/}
        <div className="relative mt-5 mb-16 flex h-60 w-60 flex-col rounded-full bg-gray-400 text-center">
          <img
            src={currentImgObj.img}
            alt={currentImgObj.name}
            className="rounded-full"
          />

          {/*edit avatar button*/}
          <div
            className="group absolute top-0 right-10 h-10 w-10 items-center justify-center rounded-full bg-blockGold text-center hover:cursor-pointer hover:bg-blockLightGold"
            /* Create modal when clicked */
            onClick={editClicked}
          >
            <title>Change Avatar Button</title>
            {/*edit icon*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" mt-1.5 inline-flex h-6 w-6 stroke-blockOrange group-hover:stroke-blockGold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </div>

        {/*username*/}
        <div className=" absolute bottom-5 text-5xl">
          {/*username loaded from user*/}
          <h1>{currentUser.name}</h1>
        </div>

        {/*End Header*/}
      </div>

      {/*Body*/}
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold">Edit Name</h1>
        <div className="flex">
          <div className="flex-2 flex flex-col items-center justify-center mx-16 text-center">
            <h3 className="text-xl font-bold">Generate Adjective</h3>
            <h4 className="text-lg font-bold">{adj}</h4>
            <button className="bg-blockGold text-white rounded-lg px-4 py-2 m-2 hover:bg-blockLightGold" onClick={pickAdj}>
              Generate
            </button>
          </div>
          <div className="flex-2 flex flex-col items-center justify-center mx-16 text-center">
            <h3 className="text-xl font-bold">Generate Noun</h3>
            <h4 className="text-lg font-bold">{noun}</h4>
            <button className="bg-blockGold text-white rounded-lg px-4 py-2 m-2 hover:bg-blockLightGold" onClick={pickNoun}>
              Generate
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Profile;
