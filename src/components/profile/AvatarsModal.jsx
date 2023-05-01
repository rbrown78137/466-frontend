import React from "react";
import createAvatar from "./AvatarInfo";
import DataFunctions from "../../DataFunctions";

/*
Here, users will be able to select a new avatar and keep their changes

Actions:
1. Click the icon you'd like
2. click confirm changes
3. when confirmed, the users current avatar will be updated to be the selected avatar


Needed:
When each icon is clicked, the selectedAvatar should be updated

When changes are confirmed, send a post to the backend to update the user id
*/

//Avatars to choose from
let avatarData = [
  createAvatar("boat"),
  createAvatar("cactus"),
  createAvatar("cherry"),
  createAvatar("clownfish"),
  createAvatar("cocoa"),
  createAvatar("cookie"),
  createAvatar("moon"),
  createAvatar("music note"),
  createAvatar("rainbow"),
  createAvatar("sun"),
  createAvatar("sushi"),
  createAvatar("watermelon"),
];

const AvatarsModal = ({ setAvatarOn, currentImage }) => {
  //if user saves changes without selecting, default to their previous option
  var currentID = currentImage;
  function updateID(newID) {
    currentID = newID;
  }

  //when save is selected, call backend to update avatar
  const handleSavedChanges = () => {
    //If the user chooses their settings and wants to save them, this is where that action goes

    DataFunctions.updateAvatarID(currentID);

    //Update user profile image with the button pressed
    setAvatarOn(false);
  };

  //when cancel is selected, just close the modal
  const handleCancelClick = () => {
    //If the user clicks out without saving, this is where that action goes
    setAvatarOn(false);
  };

  return (
    //modal setup
    <div className="fixed inset-0 z-50 h-auto bg-zinc-200 bg-opacity-90 ">
      {/*Above is used for unfocusing the background. Z is to ensure it's the highest priority */}
      <div className="flex h-screen items-center justify-center ">
        <div className="flex-col justify-center rounded-xl border-2 border-blockNavy bg-blockBlue px-8 pt-4 pb-8 ">
          {/*Below contains the header */}
          <div className="pb-4 text-center text-2xl font-bold text-black">
            Change Avatar
          </div>
          {/*Below is all the avatars */}
          <div className="mb-4 grid grid-cols-4 gap-2 text-lg text-zinc-600 ">
            {avatarData.map((i) => (
              <button
                className="h-12 w-12 rounded-full ring-gray-600 hover:ring-4 hover:brightness-125  focus:ring-4"
                onClick={() => updateID(i.name)}
              >
                <img src={i.img} alt="Boat Avatar" className=" rounded-full" />
              </button>
            ))}
          </div>

          {/*Below contains the buttons*/}
          <div className="flex">
            {/*save changes */}
            <button
              onClick={handleSavedChanges}
              className="rounded bg-blockGold px-4 py-2 font-bold  text-white hover:bg-blockLightGold "
            >
              Confirm Selection
            </button>

            {/*cancel*/}
            <button
              onClick={handleCancelClick}
              className="ml-4 rounded bg-blockNavy px-4 py-2 font-bold text-white hover:bg-blockSky"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarsModal;
