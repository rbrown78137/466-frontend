import React from 'react'
import DataFunctions from '../../DataFunctions'
import Leaderboard from './Leaderboard'
import createAvatar from "../profile/AvatarInfo";

const LeaderboardPanel = ({leader, totalpoints, place, profilePic}) => {

  let avatarName = DataFunctions.avatarIDToName(profilePic);
  let avatarObj = createAvatar(avatarName);
    return (
      <div className='pt-8 px-10'>
            
        {/* large blue block holding all information*/}
        <div className="bg-blockBlue rounded-xl w-full h-30 p-3 ">
           <div className='grid grid-cols-2'>
            <div className='flex justify-self-start'>

              {/* place number, user profile picture and name */}
              <div className="text-5xl text-gray-700 items-center px-4 pt-1">{place}</div>
                <div className='p-1'>
                 <img src={avatarObj.img} alt="" className=" h-12 w-12 rounded-full md:self-start "/>
                 </div>
                <div className="text-2xl text-gray-900 pl-3 py-3">{leader}</div> 
                </div> 

                {/* amount of points on the right */}
                <div className='flex justify-self-end'>
                <div className='bg-blockSky rounded-xl h-14 text-right'>
                <p className='text-4xl text-blockGold font-bold p-2'>{totalpoints}</p>
                </div>
                </div>
                </div>
              
         
          
          </div>
          
        
  
  
 
      </div>
    
    )
  }
  
  export default LeaderboardPanel