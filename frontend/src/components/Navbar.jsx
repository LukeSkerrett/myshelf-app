import React, { useState } from 'react'

import {Link, NavLink} from "react-router-dom"
import ShelfImage from '../assets/shelf.png'
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <nav>
        <Link to="/" className="title">myShelf <img src= {ShelfImage}/></Link>
        
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ?"open":""}>
            <li>
                <NavLink to= "/about">About</NavLink>
            </li>
            <li>
                <NavLink to= "/services">Services</NavLink>
            </li>
            <li>
                <NavLink to= "/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  )
}