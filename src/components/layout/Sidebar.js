import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.css'; // Новый путь импорта
import { IoQrCodeOutline } from 'react-icons/io5';
import { MdHowToVote } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import AuthChecker from '../cheker/AuthChecker';


const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/sign-in');
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
    };

    return (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                Сервисы
                <li>
                    <Link to="/vote-service" className={styles.sidebarLink}>
                        <MdHowToVote className={styles.icon}/>
                        <span>Голосования</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cashback" className={styles.sidebarLink}>
                        <IoQrCodeOutline className={styles.icon}/>
                        <span>QR Коды</span>
                    </Link>
                </li>
                Мониторинг
                <li>
                    <Link to="/company" className={styles.sidebarLink}>
                        <IoMdBusiness className={styles.icon}/>
                        <span>Компании</span>
                    </Link>
                </li>
                <li>
                    <Link to="/votes-list" className={styles.sidebarLink}>
                        <IoMdBusiness className={styles.icon}/>
                        <span>Голосования</span>
                    </Link>
                </li>
                Личный кабинет
                <li>
                    <Link to="/dashboard" className={styles.sidebarLink}>
                        <IoMdBusiness className={styles.icon}/>
                        <span>Мои компании</span>
                    </Link>
                </li>
                <li>
                    <Link to="/votes" className={styles.sidebarLink}>
                        <IoMdBusiness className={styles.icon}/>
                        <span>Мои голосования</span>
                    </Link>
                </li>
                <li>
                    <Link to="/votes" className={styles.sidebarLink}>
                        <IoMdBusiness className={styles.icon}/>
                        <span>DAO голосования</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cashback" className={styles.sidebarLink}>
                        <IoMdBusiness className={styles.icon}/>
                        <span>Мои QR коды</span>
                    </Link>
                </li>


            </ul>
            <div className={styles.sidebarAuthButtons}>
                <AuthChecker>
                    {(isAuthenticated) => (
                        isAuthenticated ? (
                            <button className={styles.signOutButton} onClick={handleLogoutClick}>
                                Выйти
                            </button>
                        ) : (
                            <button className={styles.signInButton} onClick={handleSignInClick}>
                                Войти
                            </button>
                        )
                    )}
                </AuthChecker>
            </div>
        </aside>
    );
};

export default Sidebar;