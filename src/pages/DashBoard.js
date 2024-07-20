import React from 'react';
import './DashBoard.css'; // Убедитесь, что файл называется DashBoard.css
import { FaMoneyBillWave, FaUsers, FaUserPlus, FaChartLine } from 'react-icons/fa'; // Импорт иконок из библиотеки react-icons

const DashBoard = () => {
    return (
        <div className="p-6 dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="card bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="icon-container bg-gray-800 p-3 rounded-full">
                            <FaMoneyBillWave className="icon text-white" />
                        </div>
                        <div className="details ml-4">
                            <h5 className="text-gray-500">Today's Money</h5>
                            <h3 className="text-lg font-semibold">$53k</h3>
                            <p className="text-green-500">+55% чем на прошлой неделе</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="icon-container bg-gray-800 p-3 rounded-full">
                            <FaUsers className="icon text-white" />
                        </div>
                        <div className="details ml-4">
                            <h5 className="text-gray-500">Today's Users</h5>
                            <h3 className="text-lg font-semibold">2,300</h3>
                            <p className="text-green-500">+3% чем в прошлом месяце</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="icon-container bg-gray-800 p-3 rounded-full">
                            <FaUserPlus className="icon text-white" />
                        </div>
                        <div className="details ml-4">
                            <h5 className="text-gray-500">New Clients</h5>
                            <h3 className="text-lg font-semibold">3,462</h3>
                            <p className="text-red-500">-2% чем вчера</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="icon-container bg-gray-800 p-3 rounded-full">
                            <FaChartLine className="icon text-white" />
                        </div>
                        <div className="details ml-4">
                            <h5 className="text-gray-500">Sales</h5>
                            <h3 className="text-lg font-semibold">$103,430</h3>
                            <p className="text-green-500">+5% чем вчера</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
