import React from 'react'
import "./Header.css"
import AddAlertIcon from '@mui/icons-material/AddAlert';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  return (
    <div className='header'>
      <div className='menu-icon'>
        <MenuIcon className='icon'/>
        

      </div>

      <div className='header-left'>
        <SearchIcon className='icon'/>

      </div>

      <div className='header-right'>
        <MarkunreadIcon className='icon'/>
        <PersonIcon className='icon' />
        <AddAlertIcon className='icon' />


      </div>
      
    </div>
  )
}

export default Header
