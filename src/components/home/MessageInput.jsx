import React from 'react'
import { useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import DataFunctions from '../../DataFunctions'


/**
 * MessageInput is at the bottom of a conversation and includes the text input, emoji picker, and submit buttom.
 * 
 * @returns React Component
 */
const MessageInput = ({emojiView, onEmojiButtonClick, otherUsername}) => {

  //Text in the massage
  const [ text, setText ] = useState('')

  //Actually sends the message
  const handleSubmit= async(e)=>{
    if (text){
      DataFunctions.sendMessage(otherUsername,text)
      setText('')
    }
    
  }

  //Handles typing in the text area
  const handleChange=(e)=>{
    setText(e.target.value)
  }

  

  return (
    <form onSubmit={(e) => {handleSubmit(e)}} className="flex flex-row justify-between">

      {/*Emoji Picker */}
      <div className="flex relative pr-2" >
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onEmojiButtonClick}  className="h-7 w-7 cursor-pointer bg-blockLightGold hover:bg-blockGold rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className={`absolute left-0 bottom-14 ${emojiView}`}>
          <Picker showPreview = {false} emoji="" title={<div className=' hover:text-zinc-600 cursor-pointer underline' onClick={onEmojiButtonClick}>close</div>} onClick={(emoji) => {setText(text + emoji.native)}} />
        </div>
      </div>

      {/*Text Area */}
      <textarea maxLength={400} type={"text"} value={text} onChange={(e)=> {handleChange(e)}} placeholder="type message here" className=' outline-none w-11/12 rounded-md resize-none'/>
      
      {/*Submit Button */}
      <div onClick={handleSubmit} className="pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer bg-blockSky hover:bg-white rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      </div>
     </form>
  )
}

export default MessageInput