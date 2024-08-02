import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для переадресации
import './DashBoard.css';  // Подключаем стили
import PaginationRounded from '../components/pagination/PaginationRounded';  // Обновляем путь импорта

const Dashboard = () => {
    const [votePage, setVotePage] = useState(1);
    const daoPerPage = 5;
    const navigate = useNavigate(); // Инициализируем хук useNavigate

    const daoList = [
       {}
    ];


    const handleDAOPageChange = (event, value) => {
        setVotePage(value);
    };

    const displayedDAO = daoList.slice((votePage - 1) * daoPerPage, votePage * daoPerPage);

    const handleBannerClick = () => {
        navigate('/createDAO'); // Переадресация на страницу создания DAO
    };

    return (
        <div className="dashboard-container">
            <div className="banner" onClick={handleBannerClick}>
                <h2>Зарегистрируйте Ваше первое DAO и начните бизнес компанию на блокчейне</h2>
            </div>
            <div className="custom-mt space-y-6">
                <div className="fixed-height-card">  {/* Копируем стили для активных голосований */}
                    <h2 className="text-xl font-semibold mb-2">Зарегистрированные компании</h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="table-header">#</th>
                            <th scope="col" className="table-header">Название</th>
                            <th scope="col" className="table-header">Участники</th>
                            <th scope="col" className="table-header">Основатель</th>
                            <th scope="col" className="table-header">Голосования</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {displayedDAO.map((vote, index) => (
                            <tr key={index}>
                                <td className="table-cell">{vote.id}</td>
                                <td className="table-cell">{vote.title}</td>
                                <td className="table-cell">{vote.members}</td>
                                <td className="table-cell">{vote.company}</td>
                                <td className="table-cell">{vote.choice_count}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="pagination-container">
                        <PaginationRounded
                            count={Math.ceil(daoList.length / daoPerPage)}
                            page={votePage}
                            onChange={handleDAOPageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
