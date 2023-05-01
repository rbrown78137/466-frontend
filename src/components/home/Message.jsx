import React from 'react'
import DataFunctions from '../../DataFunctions'


/**
 * This is an actual Message in a conversation and changes based on if it is incoming or outgoing
 * 
 * @returns 
 */
const Message = ({text,fromUser}) => {

  //Checks if message is from the current user or sent to them
  const isMessageFromUser = () => {
    if(DataFunctions.getUser()){
      let user = DataFunctions.getUser();
      if(fromUser == user.id){
        return(true)
      }
      return(false)
      
    }
  }
  
  
  return (
      <div className={`${isMessageFromUser() ? "self-end" : "self-start"} space-y-2 p-2 w-3/4`}>
        {/* Message uses conditional to style based on if it is an incoming or outgoing message*/}
        {/*This allows the message to be light or dark blue and come from the left or ride side of the screen*/}
	      <div className={` p-5 rounded-2xl ${isMessageFromUser() ? "rounded-tr-none bg-blockBlue" : "rounded-tl-none bg-blockSky"}`}>
		        {text}
	      </div>
      </div>
  )
}

export default Message