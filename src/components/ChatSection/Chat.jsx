import React, { useState } from 'react'
import { MdSend } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { BsChatLeftFill } from "react-icons/bs";
import ChatBtnSvg from '../svg/ChatBtnSvg';

import './Chat.css'
function Chat({clientMessages,isOpen,setIsOpen}) {
  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className='chatSection'>
        <div className="chat">
          <div className="upper">
            <div className="clientMessage">
                {clientMessages.map((msg)=>{
                  return (<p>{msg}</p>)
                })}
              
            </div>
            <div className="serverMessage">
                <p>This is Server message</p>
            </div>
          </div>
          {(isOpen) &&
          <div className='chatIcon'>
              <BsChatLeftFill className="chatBtn" onClick={handleClick}/>
          </div>}
        </div> 
        {(!isOpen) &&
        <div className="textBox">
            <input type='text' name='textBox'></input>
            <GrAttachment className='attachment'/>
            <MdSend className='send'/>
        </div>}
    </div>
  )
}

export default Chat