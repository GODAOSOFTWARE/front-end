import React from 'react';
import './DashBoard.css';  // Подключаем стили

const Dashboard = () => {
    const projects = [
        {
            title: "DAO Decimal Dapps",
            owner: "Константин Медведев",
            ownerAvatar: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53",
            activeVotes: 3,
            members: 4,
            icon: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53"
        },
        {
            title: "DAO COD",
            owner: "Евгений Краснов",
            ownerAvatar: "https://backend.ddapps.io/storage/uploads/j/3/n/z/m/2FXCaBRlAGdKQyWGzAWvRcVr8dXqqavAMidSaba4.jpg",
            activeVotes: 1,
            members: 2,
            icon: "https://backend.ddapps.io/storage/uploads/j/3/n/z/m/2FXCaBRlAGdKQyWGzAWvRcVr8dXqqavAMidSaba4.jpg"
        },
        {
            title: "DAO Decimal Chain",
            owner: "Анатолий Бердников",
            ownerAvatar: "https://s.gravatar.com/avatar/a4128713caa8e6be6e333f4542358e97",
            activeVotes: 4,
            members: 3,
            icon: "https://s.gravatar.com/avatar/a4128713caa8e6be6e333f4542358e97"
        },
        {
            title: "DAO Makarovsky",
            owner: "Дмитрий Макаровский",
            ownerAvatar: "https://s.gravatar.com/avatar/3e8d415cee91e27bc86f3ea8d0c94a20",
            activeVotes: 2,
            members: 5,
            icon: "https://s.gravatar.com/avatar/3e8d415cee91e27bc86f3ea8d0c94a20"
        },
        {
            title: "DAO Школа экспертов",
            owner: "Константин Константинов",
            ownerAvatar: "https://backend.ddapps.io/storage/uploads/m/x/g/9/4/A8MLoDQtu8GwyBDM7Zmp1QHqG3GyMoXroSLWkvbQ.jpg",
            activeVotes: 0,
            members: 1,
            icon: "https://backend.ddapps.io/storage/uploads/m/x/g/9/4/A8MLoDQtu8GwyBDM7Zmp1QHqG3GyMoXroSLWkvbQ.jpg"
        },
    ];

    const activeVotes = [
        {
            title: "Vote 1",
            subtitle: "Subtitle 1",
            description: "Description of vote 1",
            voter: "0x123...",
            choice: "За",
            wallet_address: "0x456..."
        },
        {
            title: "Vote 2",
            subtitle: "Subtitle 2",
            description: "Description of vote 2",
            voter: "0x789...",
            choice: "Против",
            wallet_address: "0xabc..."
        },
        {
            title: "Vote 3",
            subtitle: "Subtitle 3",
            description: "Description of vote 3",
            voter: "0xdef...",
            choice: "За",
            wallet_address: "0xghi..."
        },
    ];

    return (
        <div className="dashboard-container">
            <div className="custom-mt space-y-6">
                <div className="fixed-height-card">
                    <h2 className="text-xl font-semibold mb-2">Список зарегистрированных DAO</h2> {/* Уменьшаем отступ до содержимого */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="table-header">Название</th>
                            <th scope="col" className="table-header">Создатель</th>
                            <th scope="col" className="table-header">Участники</th>
                            <th scope="col" className="table-header">Голосования</th>
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
                                        <img src={project.ownerAvatar} alt={project.owner} className="vote-icon owner-avatar" />
                                        <div className="text-sm text-gray-900">{project.owner}</div>
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="votes-container">
                                        {Array(3).fill().map((_, i) => (
                                            <img key={i} src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="member" className="vote-icon" />
                                        ))}
                                        <a href="#" className="text-sm text-blue-500">Показать все</a>
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="votes-container">
                                        {Array(3).fill().map((_, i) => (
                                            <img key={i} src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="vote" className="vote-icon" />
                                        ))}
                                        <a href="#" className="text-sm text-blue-500">Показать все</a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button className="pagination-button">Previous</button>
                        <button className="pagination-button">Next</button>
                    </div>
                </div>

                <div className="fixed-height-card">  {/* Копируем стили для активных голосований */}
                    <h2 className="text-xl font-semibold mb-2">Активные голосования</h2> {/* Уменьшаем отступ до содержимого */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="table-header">Название</th>
                            <th scope="col" className="table-header">Подзаголовок</th>
                            <th scope="col" className="table-header">Описание</th>
                            <th scope="col" className="table-header">Голосующий</th>
                            <th scope="col" className="table-header">Выбор</th>
                            <th scope="col" className="table-header">Адрес кошелька</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {activeVotes.map((vote, index) => (
                            <tr key={index}>
                                <td className="table-cell">{vote.title}</td>
                                <td className="table-cell">{vote.subtitle}</td>
                                <td className="table-cell">{vote.description}</td>
                                <td className="table-cell">{vote.voter}</td>
                                <td className="table-cell">{vote.choice}</td>
                                <td className="table-cell">{vote.wallet_address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button className="pagination-button">Previous</button>
                        <button className="pagination-button">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
