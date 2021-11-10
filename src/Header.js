import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
    return (
        <nav className="Header">
            <ul>
                <li className="logo"><Link to="/">{title}</Link></li>
                <li className="add-button"><Link to="/post">Add Post</Link></li>
            </ul>
        </nav>
    )
}

export default Header;
