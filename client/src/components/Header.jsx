import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/"/>Home</li>
                <li><Link to="/login"/>Login</li>
                <li><Link to="/signup"/>Sign up</li>
            </ul>
        </nav>
    </header>
);
export default Header;