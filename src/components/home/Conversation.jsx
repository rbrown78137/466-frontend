import React from 'react'
import Message from './Message'
import { useParams,Link } from "react-router-dom"
import MessageInput from './MessageInput'
import { useState, useEffect } from 'react'
import DataFunctions from "../../DataFunctions";
import createAvatar from "../profile/AvatarInfo"


let testMessages = [
  {"text": "Hello this Is Dope",
  "fromUser" : true,
  key: 1},
  {"text": "I Know Right",
  "fromUser" : false,
  key: 2},
  {"text": "Thanks for all your work today!",
  "fromUser" : true,
  key: 3},
]

/**
 * A Conversation is the messages between two individual users
 * @returns 
 */
const Conversation = () => {
  let params = useParams();

  const [ emojiView, setEmojiView ] = useState('hidden')
  const [ convo, setConvo ] = useState([])

  const handleEmojiButton=()=>{
    emojiView === '' ? setEmojiView('hidden') : setEmojiView('')
  }

  const hideEmojis=()=>{
    setEmojiView('hidden')
  }

  //let avatarName = DataFunctions.avatarIDToName(profilePic);
  let avatarObj = createAvatar(DataFunctions.avatarIDToName(0));

  //Gets the conversation between to users
  useEffect(async() => {
    if(DataFunctions.getUser()){
      setConvo(await DataFunctions.getConversation(params.ConvoId))
    }
  });


  return (
    <div className='flex flex-col relative pt-5 h-screen ' >
      <img src={avatarObj.img} alt={avatarObj.name} className='h-20 w-20 rounded-full self-center' />

      {/*Back Button*/}
      <Link to={"/"}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute top-5 left-5 stroke-slate-900 hover:stroke-slate-500 cursor-pointer" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      </Link>

      {/*Name and divider*/}
      <div className=' self-center text-2xl pt-2'>{params.ConvoId}</div>
      <div className=' bg-slate-100 border-b mx-5 mt-2' ></div>

      {/*The Javascript in this portion maps through the messages and creates a message block (like iOS) for each message in an array*/}
      <div onClick={hideEmojis} className='flex-1 overflow-auto mb-16'>
        <div className='flex flex-col' >
          {convo.map((i) => <Message text={i.content} fromUser={i.senderId} key={i.id}/>)}
        </div>
      </div>

      {/*This is the sending a message Area */}
      <div className='absolute bottom-0 bg-slate-200 h-fit w-full flex flex-col justify-center p-2 '>
          <MessageInput emojiView={emojiView} onEmojiButtonClick={handleEmojiButton} otherUsername={params.ConvoId}/>
      </div>

    </div>
  )
}

export default Conversation