import React from 'react';
import './DashBoard.css';  // Подключаем стили

import { FaMoneyBillAlt, FaUserFriends, FaUserPlus, FaChartLine } from 'react-icons/fa';

const Dashboard = () => {
    const data = [
        { title: "Ликвидность пула", value: "$540k", percentage: "+2%", icon: <FaMoneyBillAlt /> },
        { title: "Члены DAO", value: "120", percentage: "+3%", icon: <FaUserFriends /> },
        { title: "Голосования", value: "3", percentage: "-2%", icon: <FaUserPlus /> },
        { title: "Sales", value: "$103,430", percentage: "+5%", icon: <FaChartLine /> }
    ];

    return (
        <div className="dashboard-container">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-icon">{item.icon}</div>
                    <div className="card-content">
                        <h2>{item.title}</h2>
                        <p>{item.value}</p>
                        <span>{item.percentage} than last month</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
