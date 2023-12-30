import React from 'react'
import Video from '../VideoSection/Video'
import Chat from '../ChatSection/Chat'
import Navbar from '../Navbar/Navbar'
import { FaPause } from "react-icons/fa6";
import { LuPause } from "react-icons/lu";
import { useState } from 'react';

import './Dashboard.css'
function Dashboard() {
  const [isOpen,setIsOpen]=useState(true);
  const [clientMessage,setClientMessage]=useState(["hello"]);
  // const handleClick=()=>{
  //   setIsOpen(!isOpen);
  // }
  return (
    <div className='Dashboard'>
        <Navbar/>
        {(isOpen)?(<Video clientMessage={clientMessage} setClientMessage={setClientMessage}/>):(<Chat clientMessages={clientMessage} isOpen={isOpen} setIsOpen={setIsOpen}/>)}
        <div className="lower">
           {(!isOpen)?(<Video clientMessage={clientMessage} setClientMessage={setClientMessage}/>):(<Chat clientMessages={clientMessage} isOpen={isOpen} setIsOpen={setIsOpen}/>)}
           <div className="pauseIcon">
              <LuPause className='pausebtn'/>
           </div>
           
        </div>
       
    </div>
  )
}

export default Dashboard




