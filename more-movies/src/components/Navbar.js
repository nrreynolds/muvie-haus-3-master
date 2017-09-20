import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1> Movie Haus </h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/search'>Search</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;