import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/designs" className={({ isActive }) => isActive ? "active" : ""}>Designs</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
