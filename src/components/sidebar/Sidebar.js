import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import { Link } from "@mui/material";
// import { Link } from 'react-router-dom';
// import Link  from "react-router-dom"
// import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <DashboardIcon className="icon_header" />
          
          Dashboard 2
        </div>
        <span className="icon close_icon">X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
         <a href="/" className="link">
         <HomeIcon className="icon" />
          Home
         </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/" className="link">
          <ShoppingBasketIcon className="icon" />
          Products
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="/" className="link">
          <CategoryIcon className="icon" />
          Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/" className="link">
          <PeopleAltIcon className="icon" />
          Customers
          </a>
        </li>
        <li className="sidebar-list-item">
        <a href="/"  className="link">
          <InventoryIcon className="icon" />
          Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a  href="/" className="link">
          <AssessmentIcon className="icon" />
          Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/" className="link">
          <SettingsIcon className="icon" />
          Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
