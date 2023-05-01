import React from "react";

const BlocksCard = ({ blockName, blockImg }) => {
  return (
    <div className="p-1">
      {/*Outline */}
      <div className=" h-80 w-72 items-center justify-center rounded-xl bg-blockBlue px-6 pt-4">
        {/* Item image */}
        <div className="  w-60 items-center justify-center rounded-xl bg-gray-200 text-center">
          <img src={blockImg} className="rounded-xl" alt={blockName}></img>
        </div>
        {/* Item name */}
        <p className="text-center text-4xl ">{blockName}</p>
      </div>
    </div>
  );
};

export default BlocksCard;
