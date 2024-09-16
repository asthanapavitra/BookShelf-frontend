import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='navbar'>
      <div className='navbar-header'>
        <MenuBookIcon />
        <h1>My BookShelf</h1>
      </div>
      <div className='link-container'>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/about">About</Link>
        <Link className='add-new-book' to="/add-book">Add New Book</Link>
      </div>
      
      <button className='dropdown-trigger' onClick={toggleDropdown}>
        Menu
      </button>
      <div className={`dropdown ${dropdownOpen ? 'dropdown-active' : ''}`}>
        <Link className='links' to="/" onClick={toggleDropdown}>Home</Link>
        <Link className='links' to="/about" onClick={toggleDropdown}>About</Link>
        <Link className='add-new-book' to="/add-book" onClick={toggleDropdown}>Add New Book</Link>
      </div>
      
    </div>
  );
}

export default Navbar;
