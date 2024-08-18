import React from 'react'
import './Main.css'
import { Link } from "react-router-dom";
const Main = ({children}) => {
  return (
    <div>
    
    <div class="sidebar">
    <img src="https://www.beximco.com/themes/beximco/assets/images/beximco-logo.png" alt="Girl in a jacket" width="150" height="60"/>
    <br/>
    <br/>
    <Link to="dashboard"><i class="fa fa-fw fa-dashboard"></i> Dashboard</Link>
    <Link to="home"><i class="fa fa-fw fa-home"></i> Home</Link>  
    <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
    <Link to ="client"><i class="fa fa-fw fa-user"></i> Client</Link>
    <Link to ="contact"><i class="fa fa-fw fa-envelope"></i> Contact</Link>
    <main className="content">{children}</main>
  </div>
    </div>
  )
}

export default Main

