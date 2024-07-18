import * as React from 'react';
import { FaBell } from 'react-icons/fa';
import ConnectButton from '../web3/ConnectButton.tsx';
import Notifications from "../../pages/Notifications";
import './Navbar.css'; // Подключаем CSS файл

const Navbar = () => {
    const avatarUrl = "https://backend.ddapps.io//storage/uploads/q/6/7/d/u/jQmUFUKzzGcBxCsgoKix9rXYeDls5E8tadVPH3Id.jpg"; // Ссылка на изображение-заглушку

    return (
        <nav className="bg-[#F5F7F8] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <span className="text-gray-500">Dashboard /</span>
                <span className="text-black font-bold">Home</span>
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <FaBell className="text-gray-500 mx-2" /> {Notifications}
                <div className="avatar-container mx-2">
                    <img src={avatarUrl} alt="User Avatar" className="avatar-icon" />
                </div>
                <ConnectButton /> {ConnectButton}
                <button className="sign-in-button mx-2">Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;
