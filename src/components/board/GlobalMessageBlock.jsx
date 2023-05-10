import React from "react";
import createAvatar from '../profile/AvatarInfo';
import DataFunctions from "../../DataFunctions";
import { useNavigate } from "react-router-dom";


const GlobalMessageBlock = ({ username,message,image }) => {

    //Sets correct avatar images
    let currentImgName = DataFunctions.avatarIDToName(image)
    let currentImgObj = createAvatar(currentImgName)

    return (
        <div className='bg-blockBlue rounded-2xl mx-2 mt-4 relative' >
            <div className='p-5 flex flex-row overflow-hidden '>
                {/*image is for the profile image, currently random stock photo */}
                <img src={currentImgObj.img} alt="" className=" h-16 w-16 rounded-full md:self-start self-center"/>
                
                {/* For name and actual Message Content*/}
                <div className='pl-5 self-center text-ellipsis truncate'>
                <h1 className='text-xl'>{username}</h1>
                <p className=' text-neutral-800 '>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default GlobalMessageBlock;

            