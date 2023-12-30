import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Auth from '../AuthComp/Auth'
import './Main.css'
function Main() {
  return (
    <div id='main'>
       <Navbar className="navbar"/>
       <div className="body">
           <Home/>
           <Auth/>
       </div>
    </div>
    
  )
}

export default Main