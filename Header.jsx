import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
    <div class="header">
    <input type="text" placeholder="Search.."/>
    <button type="button" class="btn btn-primary">Search</button>
    <div class="header-right">
    <h4 className='name'>Nazmul Hasan Anik</h4>
    <img className='admin' src="https://e1.pxfuel.com/desktop-wallpaper/439/680/desktop-wallpaper-avatar-the-last-airbender-for-android-avatar-anime-thumbnail.jpg" alt="Avatar"/>
    </div>
  </div>
    </div>
  )
}

export default Header
