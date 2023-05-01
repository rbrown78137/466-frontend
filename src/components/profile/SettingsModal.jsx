import React from "react";
import DataFunctions from "../../DataFunctions";

/**
 *
 * Requires the following:
 * setSettingOn to turn off the modal
 *
 * currentBlocksArePublic to see previous preference
 * currentPointsArePublic to see previous
 *
 *
 *
 * @returns Settings modal. If the user confirms changes, returns updated preferences
 */
const SettingsModal = ({
  setSettingOn,
  currentBlocksArePublic,
  currentPointsArePublic,
}) => {

  //These will be subsituted for whatever the backend has recorded for them to initialize appearance
  const [blocksArePublic, setBlocksArePublic] = React.useState(
    currentBlocksArePublic
  );
  const [pointsArePublic, setPointsArePublic] = React.useState(
    currentPointsArePublic
  );

  //Change States
  const togglePublicBlocks = () => {
    setBlocksArePublic(!blocksArePublic);
  };

  const togglePublicPoints = () => {
    setPointsArePublic(!pointsArePublic);
  };

  const handleSavedChanges = () => {
    //If the user chooses their settings and wants to save them, this is where that action goes
    //This will update the backend when everything is connected
    DataFunctions.updatePrivacySetting(pointsArePublic, blocksArePublic);
    setSettingOn(false);
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
        <div className="flex-col justify-center rounded-xl border-2 border-blockNavy bg-blockBlue px-8 pt-4 pb-8 ">
          {/*All the settings created below*/}
          <div className="mb-10 mt-5 flex columns-2 gap-4 text-right text-lg font-bold text-zinc-600">
            {/*Setting descriptions below */}
            <div className=" columns-1 space-y-3">
              <div>allow public to see points</div>
              <div>allow public to see purchases</div>
            </div>
            {/*Setting buttons below */}
            <div className="flex flex-col space-y-5">
              {/*Blocks public?*/}
              <input
                type="checkbox"
                id="toggle-switch"
                className=" relative h-8 w-20 cursor-pointer appearance-none rounded-full bg-white transition duration-200 checked:bg-green-400 hover:opacity-70"
                value={blocksArePublic}
                defaultChecked={blocksArePublic}
                onChange={togglePublicBlocks}
                alt={"Blocks can be seen by the public: "+ blocksArePublic}
              />

              {/*Points public?*/}
              <input
                type="checkbox"
                id="toggle-switch"
                className=" relative h-8 w-20 cursor-pointer appearance-none rounded-full bg-white transition duration-200 checked:bg-green-400 hover:opacity-70"
                value={pointsArePublic}
                defaultChecked={pointsArePublic}
                onChange={togglePublicPoints}
                alt={"Points can be seen by the public: "+ pointsArePublic}
              />
            </div>
          </div>

          {/*Buttons below*/}
          <div className="flex justify-center">
            <button
              onClick={handleSavedChanges}
              className=" rounded bg-blockGold px-4 py-2 font-bold  text-white hover:bg-blockLightGold "
            >
              Save Changes
            </button>
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

export default SettingsModal;
