// src/components/layout/Navbar.js

import * as React from 'react';
import { FaBell } from 'react-icons/fa';
import ConnectButton from '../web3/ConnectButton';
import './Navbar.css';

const Navbar = () => {
    const avatarUrl = "https://backend.ddapps.io/storage/uploads/9/t/8/6/f/vAgMqFWkaqSd9Rtfzi7q6dMZsixTng7AUQBfcdZI.jpg";

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">Go DAO Software</div>
                <div className="actions">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />
                    <div className="avatar-container">
                        <img src={avatarUrl} alt="User Avatar" className="avatar-icon" />
                    </div>
                    <ConnectButton />
                    <button className="sign-in-button">Личный кабинет</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
