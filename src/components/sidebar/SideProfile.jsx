import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DataFunctions from "../../DataFunctions";
import createAvatar from "../profile/AvatarInfo";

const SideProfile = ({ user }) => {
  //change avatarID to name
  
  let avatarName = DataFunctions.avatarIDToName(user.avatarId);
  let avatarObj = createAvatar(avatarName);

  
  return (
    <div className=" flex h-min w-full flex-col rounded-xl bg-blockBlue p-5">
      <div className="flex flex-col overflow-hidden md:flex-row">
        {/*image is for the profile image, currently random stock photo */}
        <img
          src={avatarObj.img}
          alt={avatarObj.name}
          className=" h-12 w-12 self-center rounded-full md:self-start"
        />
        <h1 className="self-center text-xl md:pl-5">{user.name}</h1>
      </div>

      <div className="mt-5 flex w-full flex-col justify-between overflow-hidden rounded-md bg-blockSky md:flex-row">
        <h1 className=" self-center p-2 text-2xl font-semibold text-blockGold md:self-start">
          {user.spendablePoints}
        </h1>
        <p className=" self-center md:pr-2">spendables</p>
      </div>

      <div className="mt-5 flex w-full flex-col justify-between overflow-hidden rounded-md bg-blockSky md:flex-row">
        <h1 className=" self-center p-2 text-2xl font-semibold text-blockGold md:self-start">
          {user.giftablePoints}
        </h1>
        <p className=" self-center md:pr-2">giftables</p>
      </div>

      <Link
        to="/Profile"
        className=" my-5 self-center rounded-md bg-blockGold px-3 py-1 shadow-md hover:bg-blockLightGold md:self-end "
      >
        my blocks
      </Link>
    </div>
  );
};

export default SideProfile;
