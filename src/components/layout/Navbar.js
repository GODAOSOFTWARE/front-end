import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthChecker from '../cheker/AuthChecker'; // Импортируем компонент AuthChecker
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const avatarUrl = "https://backend.ddapps.io/storage/uploads/9/t/8/6/f/vAgMqFWkaqSd9Rtfzi7q6dMZsixTng7AUQBfcdZI.jpg";

    const handleSignInClick = () => {
        navigate('/sign-in');
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('authToken');
        navigate('/sign-in');
    };

    return (
        <AuthChecker>
            {(isAuthenticated) => (
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
                            {isAuthenticated ? (
                                <button className="sign-out-button" onClick={handleLogoutClick}>
                                    Выйти
                                </button>
                            ) : (
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
