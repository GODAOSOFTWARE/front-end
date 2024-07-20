// src/components/layout/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const avatarUrl = "https://backend.ddapps.io/storage/uploads/9/t/8/6/f/vAgMqFWkaqSd9Rtfzi7q6dMZsixTng7AUQBfcdZI.jpg";

    const handleSignInClick = () => {
        navigate('/sign-in');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo"></div>
                <div className="actions">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />
                    <div className="avatar-container">
                        <img src={avatarUrl} alt="User Avatar" className="avatar-icon" />
                    </div>
                    <button className="sign-in-button" onClick={handleSignInClick}>
                        Личный кабинет
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
