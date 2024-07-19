// src/components/layout/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaTable } from 'react-icons/fa';
import './Sidebar.css'; // Подключение CSS файла

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2 className="sidebar-title">DAO Decimal Dapps</h2>
            </div>
            <ul className="sidebar-list">
                <li>
                    <Link to="/dashboard" className="sidebar-link active-link">
                        <FaHome className="icon"/>
                        <span>Голосования</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="sidebar-link">
                        <FaUser className="icon"/>
                        <span>Профиль</span>
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
