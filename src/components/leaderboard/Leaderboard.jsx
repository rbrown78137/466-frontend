import React, { useEffect, useState } from "react";
import DataFunctions from "../../DataFunctions";
import LeaderboardPanel from "./LeaderboardPanel";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(async () => {
    if (DataFunctions.getUser()) {
      setLeaders(await DataFunctions.getLeaderboard());
      console.log(leaders);
    }
  });

  return (
    <div className="flex w-full flex-col divide-y divide-gray-400">
      <div className="p-5" id="header">
        <h1 className=" mt-5 ml-10 text-5xl">Leaderboard</h1>
      </div>
      <div className="" id="body">
        {leaders.map((i) => (
          <LeaderboardPanel
            leader={i.username}
            totalpoints={i.totalPoints}
            place={i.position}
            profilePic={i.avatarId}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
