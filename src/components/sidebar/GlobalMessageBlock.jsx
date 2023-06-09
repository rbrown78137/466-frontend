import React from "react";
import { useState } from "react";
import { DataFunctions } from "../../DataFunctions";
import createAvatar from '../profile/AvatarInfo';
import { Link } from 'react-router-dom'


const GlobalMessageBlock = ({ username, message, image }) => {

    let currentImgName = DataFunctions.avatarIDToName(image)
    let currentImgObj = createAvatar(currentImgName)

    return (
        <div className='bg-blockBlue rounded-2xl mx-2 mt-4 relative cursor-pointer hover:opacity-80' >
            <Link to={`/Messages/${username}`} key={username} >

            {/* Notification Tab, Conditional property in className sets if it is visible or not*/}
            <span className={`absolute top-0 Left-0 w-5 h-5 transform -translate-x-1/4 -translate-y-1/4 bg-blockOrange rounded-full`}></span>

            <div className='p-5 flex flex-row overflow-hidden '>
            {/*image is for the profile image, currently random stock photo */}
            <img src={currentImgObj.img} alt="" className=" h-16 w-16 rounded-full md:self-start self-center"/>
            
            {/* For name and actual Message Content*/}
            <div className='pl-5 self-center text-ellipsis truncate'>
                <h1 className='text-xl'>{username}</h1>
                <p className=' text-neutral-800 '>{message}</p>
            </div>
            </div>
        </Link>

        </div>
    )
}

export default GlobalMessageBlock