// src/components/Sidebar.js

/// Этот файл определяет компонент боковой панели (Sidebar).
/// Боковая панель содержит ссылки на разные страницы приложения,
// такие как панель управления,профиль и таблицы.
// Включает иконки для каждой ссылки, используемые
// компоненты из библиотеки `react-icons`.


import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaTable, FaBell } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="bg-white text-gray-800 w-64 min-h-screen shadow-lg">
            <div className="p-4">
                <h2 className="text-xl font-bold">DAO Decimal Dapps</h2>
            </div>
            <ul className="p-4 space-y-2">
                <li>
                    <Link to="/dashboard" className="flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-gray-100">
                        <FaHome />
                        <span>Голосования</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-gray-100">
                        <FaUser />
                        <span>Профиль</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tables" className="flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-gray-100">
                        <FaTable />
                        <span>Члены DAO</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;