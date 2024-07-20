// src/components/layout/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Подключение CSS файла
import { IoQrCodeOutline } from 'react-icons/io5';
import { MdHowToVote } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { GiMining } from "react-icons/gi";
import { GiParachute } from "react-icons/gi";
import { RiNftFill } from "react-icons/ri";
import { TbInfoHexagon } from "react-icons/tb";


const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className="sidebar-list">
                <div className="logo">Сервисы</div>
                <li>
                    <Link to="/dashboard" className="sidebar-link">
                        <TbInfoHexagon className="icon"/>
                        <span>Дашборд</span>
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
                        <span>NFT Маркет</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
