import * as React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import ConnectButton from './ConnectButton';
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import MetaMaskAuth from "./MetaMaskAuth";

const Navbar = () => {
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
                <FaUserCircle className="text-gray-500 mx-2" /> {Profile}
                <ConnectButton /> {ConnectButton}
            </div>
        </nav>
    );
};

export default Navbar;
