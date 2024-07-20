import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthChecker from '../cheker/AuthChecker'; // Импортируем компонент AuthChecker для проверки состояния авторизации
import './Navbar.css'; // Импортируем стили для Navbar

const Navbar = () => {
    const navigate = useNavigate(); // Хук для навигации между маршрутами
    const avatarUrl = "https://backend.ddapps.io/storage/uploads/9/t/8/6/f/vAgMqFWkaqSd9Rtfzi7q6dMZsixTng7AUQBfcdZI.jpg"; // URL аватарки пользователя

    // Функция для обработки клика на кнопку "Начать работу"
    const handleSignInClick = () => {
        navigate('/sign-in'); // Перенаправляет пользователя на страницу входа
    };

    // Функция для обработки клика на кнопку "Выйти"
    const handleLogoutClick = () => {
        localStorage.removeItem('authToken'); // Удаляет токен авторизации из локального хранилища
        window.location.reload(); // Перезагружает страницу для обновления состояния
    };

    return (
        <AuthChecker>
            {(isAuthenticated) => ( // Проверяем состояние авторизации с помощью компонента AuthChecker
                <nav className="navbar">
                    <div className="navbar-container">
                        <div className="logo"></div>
                        <div className="actions">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-input"
                            />
                            <div className="avatar-container">
                                <img src={avatarUrl} alt="User Avatar" className="avatar-icon" />
                            </div>
                            {isAuthenticated ? ( // Если пользователь авторизован, отображаем кнопку "Выйти"
                                <button className="sign-out-button" onClick={handleLogoutClick}>
                                    Выйти
                                </button>
                            ) : ( // Если пользователь не авторизован, отображаем кнопку "Начать работу"
                                <button className="sign-in-button" onClick={handleSignInClick}>
                                    Начать работу
                                </button>
                            )}
                        </div>
                    </div>
                </nav>
            )}
        </AuthChecker>
    );
};

export default Navbar;
