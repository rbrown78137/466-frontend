import React, { useEffect } from "react";
import BlocksCard from "./BlocksCard";
import SettingsModal from "./SettingsModal";
import AvatarsModal from "./AvatarsModal";
import { useState } from "react";
import createCard from "../store/CardInfo";
import DataFunctions from "../../DataFunctions";
import createAvatar from "./AvatarInfo";

//will be filled with call from backend hopefully
let testTrophyData = [
  createCard("pig"),
  createCard("zebra"),
  createCard("basic city"),
];

const Profile = () => {
  //provide sample user data so we know what it's supposed to look like
  let exampleUser = {
    id: 0,
    name: "",
    password: "",
    email: "",
    avatarId: 0,
    privacySetting: 0,
    spendablePoints: 0,
    giftablePoints: 0,
    totalPoints: 0,
    lastLoginTime: "2022-03-02T20:57:01.805Z",
  };

  //get user data
  const [currentUser, setCurrentUser] = React.useState(exampleUser);

  //call backend to populate with current user's data
  useEffect(async () => {
    if (DataFunctions.getUser()) {
      setCurrentUser(await DataFunctions.getUser());
    }
  }, []);

  //provide sample trophy data so we know what it's supposed to look like
  let exampleTrophy = [7, 8, 9];

  //trophy data
  const [trophyIDs, setTrophyData] = React.useState(exampleTrophy);

  //call backend to populate trophyData
  useEffect(async () => {
    if (DataFunctions.getUser()) {
      setTrophyData(await DataFunctions.getTrophies());
    }
  }, []);

  //turn trophy ids to names
  let trophyNames = [];
  if (trophyIDs.length > 0) {
    for (let index = 0; index < trophyIDs.length; index++) {
      trophyNames.push(DataFunctions.blockIDToName(trophyIDs[index]));
    }
    console.log("Trophy names: " + trophyNames);
  }
  //turn names into cards
  let actualTrophyData = [];
  if (trophyNames.length > 0) {
    for (let index = 0; index < trophyNames.length; index++) {
      actualTrophyData.push(createCard(trophyNames[index]));
    }
  }

  //get current avatar img
  let currentImgName = DataFunctions.avatarIDToName(currentUser.avatarId);

  //turn into an img object
  let currentImgObj = createAvatar(currentImgName);

  //get current privacy settings
  let privacySettings = DataFunctions.interpretPrivacySetting(
    currentUser.privacySetting
  );

  //Used for modal pop-ups

  //Variables used for pop-ups
  //Settings
  const [settingModalOn, setSettingModalOn] = useState(false);
  // Choose an avatar
  const [avatarModalOn, setAvatarModalOn] = useState(false);

  //onClick event for toggling settings modal
  const settingsClicked = () => {
    setSettingModalOn(true);
  };

  //onClick event for toggling avatar modal
  const editClicked = () => {
    setAvatarModalOn(true);
  };

  return (
    //Main screen
    <div className="h-screen overflow-auto">
      {/*Pop-ups*/}
      <div>
        {/*Only created when settingModalON == true (when the cog is clicked) */}
        {settingModalOn && (
          <SettingsModal
            setSettingOn={setSettingModalOn}
            /*Expected inputs include current privacy settings */
            currentBlocksArePublic={privacySettings.publicCanSeePurchases}
            currentPointsArePublic={privacySettings.publicCanSeePoints}
          />
        )}
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

        {/*Settings icon:*/}
        <div
          className="absolute top-10 right-10 hover:cursor-pointer"
          /* Create modal when clicked */
          onClick={settingsClicked}
        >
          <title>Change Settings Button</title>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 stroke-blockGold hover:stroke-blockLightGold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/*End Header*/}
      </div>

      {/*Header for trophies section*/}
      <div className="ml-0 pb-1 text-center text-5xl md:ml-10 md:text-left">
        Your blocks
      </div>

      {/* use trophyData to fill in blocks */}
      <div className="flex flex-wrap justify-center pl-1">
        {actualTrophyData.map((i) => (
          //Map each trophyData into a blocksCard for formatting purposes
          <BlocksCard blockImg={i.img} blockName={i.name} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
