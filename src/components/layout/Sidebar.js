import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.css'; // Новый путь импорта
import { IoQrCodeOutline } from 'react-icons/io5';
import { MdHowToVote } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { GiMining, GiParachute } from "react-icons/gi";
import { RiNftFill } from "react-icons/ri";
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
                <li>
                    <Link to="/company" className={styles.sidebarLink}>
                        <IoMdBusiness className={styles.icon}/>
                        <span>Компании</span>
                    </Link>
                </li>
                <li>
                    <Link to="/votes" className={styles.sidebarLink}>
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
                <li>
                    <Link to="/status" className={styles.sidebarLink}>
                        <FaRegAddressCard className={styles.icon}/>
                        <span>Статусы</span>
                    </Link>
                </li>
                <li>
                    <Link to="/farming" className={styles.sidebarLink}>
                        <GiMining className={styles.icon}/>
                        <span>Фарминг</span>
                    </Link>
                </li>
                <li>
                    <Link to="/airdrops" className={styles.sidebarLink}>
                        <GiParachute className={styles.icon}/>
                        <span>Промо Акции</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tables" className={styles.sidebarLink}>
                        <RiNftFill className={styles.icon}/>
                        <span>NFT Витрина</span>
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