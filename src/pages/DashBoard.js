import React from 'react';
import './DashBoard.css';  // Подключаем стили

const Dashboard = () => {
    const projects = [
        { title: "DAO Decimal Dapps", owner: "Alice", ownerAvatar: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53", activeVotes: 3, members: 4, icon: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53" },
        { title: "DAO COD", owner: "Bob", ownerAvatar: "https://backend.ddapps.io/storage/uploads/j/3/n/z/m/2FXCaBRlAGdKQyWGzAWvRcVr8dXqqavAMidSaba4.jpg", activeVotes: 1, members: 2, icon: "https://backend.ddapps.io/storage/uploads/j/3/n/z/m/2FXCaBRlAGdKQyWGzAWvRcVr8dXqqavAMidSaba4.jpg" },
        { title: "DAO Decimal Chain", owner: "Charlie", ownerAvatar: "https://s.gravatar.com/avatar/a4128713caa8e6be6e333f4542358e97", activeVotes: 4, members: 3, icon: "https://s.gravatar.com/avatar/a4128713caa8e6be6e333f4542358e97" },
        { title: "DAO Makarovsky", owner: "Dave", ownerAvatar: "https://s.gravatar.com/avatar/3e8d415cee91e27bc86f3ea8d0c94a20", activeVotes: 2, members: 5, icon: "https://s.gravatar.com/avatar/3e8d415cee91e27bc86f3ea8d0c94a20" },
        { title: "DAO Школа экспертов", owner: "Eve", ownerAvatar: "https://backend.ddapps.io/storage/uploads/m/x/g/9/4/A8MLoDQtu8GwyBDM7Zmp1QHqG3GyMoXroSLWkvbQ.jpg", activeVotes: 0, members: 1, icon: "https://backend.ddapps.io/storage/uploads/m/x/g/9/4/A8MLoDQtu8GwyBDM7Zmp1QHqG3GyMoXroSLWkvbQ.jpg" },
    ];

    const orders = [
        { description: "$2400, Design changes", date: "22 DEC 7:20 PM" },
        { description: "New order #1832412", date: "21 DEC 11 PM" },
        { description: "Server payments for April", date: "21 DEC 9:34 PM" },
        { description: "New card added for order #4395133", date: "20 DEC 2:20 AM" },
        { description: "Unlock packages for development", date: "18 DEC 4:54 AM" },
        { description: "New order #9583120", date: "17 DEC" },
    ];

    return (
        <div className="dashboard-container">
            <div className="mt-10 space-y-6">
                <div className="projects-card">
                    <h2 className="text-xl font-semibold mb-4">Список зарегистрированных DAO</h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="table-header">Название</th>
                            <th scope="col" className="table-header">Создатель</th>
                            <th scope="col" className="table-header">Подтвержденные участники</th>
                            <th scope="col" className="table-header">Активные голосования</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {projects.map((project, index) => (
                            <tr key={index}>
                                <td className="table-cell">
                                    <div className="icon-container">
                                        <img src={project.icon} alt={project.title} className="project-icon" />
                                        <div className="text-sm font-medium text-gray-900">{project.title}</div>
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="icon-container">
                                        <img src={project.ownerAvatar} alt={project.owner} className="owner-avatar" />
                                        <div className="text-sm text-gray-900">{project.owner}</div>
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="votes-container">
                                        {Array(5).fill().map((_, i) => (
                                            <img key={i} src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="vote" className="vote-icon" />
                                        ))}
                                        <a href="#" className="text-sm text-blue-500">Показать все</a>
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="votes-container">
                                        {Array(5).fill().map((_, i) => (
                                            <img key={i} src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="vote" className="vote-icon" />
                                        ))}
                                        <a href="#" className="text-sm text-blue-500">Показать все</a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="orders-card">
                    <h2 className="text-xl font-semibold mb-4">Orders Overview</h2>
                    <div className="space-y-4">
                        {orders.map((order, index) => (
                            <div key={index} className="order flex justify-between items-center bg-white p-4 rounded-lg shadow">
                                <div className="flex-grow">
                                    <div className="text-gray-700">{order.description}</div>
                                    <div className="text-sm text-gray-500">{order.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
