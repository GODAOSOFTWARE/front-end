import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { IoQrCodeOutline } from 'react-icons/io5';
import { MdHowToVote } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { GiMining } from "react-icons/gi";
import { GiParachute } from "react-icons/gi";
import { RiNftFill } from "react-icons/ri";
import { IoMdBusiness } from "react-icons/io";
import AuthChecker from '../cheker/AuthChecker';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/sign-in');
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
    };

    return (
        <aside className="sidebar">
            <ul className="sidebar-list">
                <div className="logo"></div>
                <li>
                    <Link to="/company" className="sidebar-link">
                        <IoMdBusiness className="icon"/>
                        <span>Компании</span>
                    </Link>
                </li>
                <li>
                    <Link to="/votes" className="sidebar-link">
                        <MdHowToVote className="icon"/>
                        <span>Голосования</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cashback" className="sidebar-link">
                        <IoQrCodeOutline className="icon"/>
                        <span>QR Коды</span>
                    </Link>
                </li>
                <li>
                    <Link to="/status" className="sidebar-link">
                        <FaRegAddressCard className="icon"/>
                        <span>Статусы</span>
                    </Link>
                </li>
                <li>
                    <Link to="/farming" className="sidebar-link">
                        <GiMining className="icon"/>
                        <span>Фарминг</span>
                    </Link>
                </li>
                <li>
                    <Link to="/airdrops" className="sidebar-link">
                        <GiParachute className="icon"/>
                        <span>Промо Акции</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tables" className="sidebar-link">
                        <RiNftFill className="icon"/>
                        <span>NFT Витрина</span>
                    </Link>
                </li>
            </ul>
            <div className="sidebar-auth-buttons">
                <AuthChecker>
                    {(isAuthenticated) => (
                        isAuthenticated ? (
                            <button className="sign-out-button" onClick={handleLogoutClick}>
                                Выйти
                            </button>
                        ) : null
                    )}
                </AuthChecker>
            </div>
        </aside>
    );
};

export default Sidebar;
