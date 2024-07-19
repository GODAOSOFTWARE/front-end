// src/components/layout/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaTable } from 'react-icons/fa';
import './Sidebar.css'; // Подключение CSS файла
import { IoQrCodeOutline } from 'react-icons/io5';
import { MdHowToVote } from "react-icons/md";


const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="sidebar-list">
                <li>
                    <Link to="/dashboard" className="sidebar-link active-link">
                        <MdHowToVote className="icon"/>
                        <span>Голосования</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="sidebar-link">
                        <IoQrCodeOutline className="icon"/>
                        <span>QR Коды</span>
                    </Link>
                </li>

                <li>
                    <Link to="/tables" className="sidebar-link">
                        <FaTable className="icon"/>
                        <span>Члены DAO</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
