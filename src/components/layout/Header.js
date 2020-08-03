import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-Do List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link 
            style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#75485E',
    color: '#51A3A3',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#51A3A3',
    textDecoration: 'none'
}

export default Header;
