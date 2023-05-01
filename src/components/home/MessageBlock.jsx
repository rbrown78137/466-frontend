import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DataFunctions from "../../DataFunctions";
import createAvatar from '../profile/AvatarInfo';


/**
 * MesageBlock is the cards on the home screen that show a conversation that a user can select to view
 * 
 * @returns 
 */
const MessageBlock = ({username,firstMessage,read,image}) => {

  const handleChangeRead=()=>{
     read = true;
    {/* This will somehow need to update backend call eventually */}
  }

  //Sets correct avatar images
  let currentImgName = DataFunctions.avatarIDToName(image)
  let currentImgObj = createAvatar(currentImgName)

  
  return (
    
    <div className='bg-blockBlue rounded-2xl mx-2 mt-4 relative cursor-pointer hover:opacity-80' >
      <Link to={`/Messages/${username}`} key={username} onClick={handleChangeRead}>

      {/* Notification Tab, Conditional property in className sets if it is visible or not*/}
      <span className={`absolute top-0 Left-0 w-5 h-5 transform -translate-x-1/4 -translate-y-1/4 bg-blockOrange rounded-full ${read == true ? '' : 'hidden'}`}></span>

      <div className='p-5 flex flex-row overflow-hidden '>
        {/*image is for the profile image, currently random stock photo */}
        <img src={currentImgObj.img} alt="" className=" h-16 w-16 rounded-full md:self-start self-center"/>
        
        {/* For name and actual Message Content*/}
        <div className='pl-5 self-center text-ellipsis truncate'>
          <h1 className='text-xl'>{username}</h1>
          <p className=' text-neutral-800 '>{firstMessage}</p>
        </div>
      </div>
      </Link>

    </div>
  )
}

export default MessageBlock