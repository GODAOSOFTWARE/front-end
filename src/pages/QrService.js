import React from 'react';
import styles from '../styles/QrService.module.css';


const QRCode = () => {
    const qrCardsData = [
        {
            logo: "https://img.icons8.com/?size=200&id=PlxPvBS2zQOP&format=png",
            title: "QR коды c личным паролем",
            description: "Создавайте вопросы, ответы и установите награду, которую получит пользователь за правильный ответ",
            buttonText: "Создать QR код",
        },
        {
            logo: "https://img.icons8.com/?size=512&id=8OdwzXFjBVH2&format=png",
            title: "QR коды без пароля",
            description: "Cоздайте вознаграждение за сканирование QR кода .Пользователь получит за это кэшбек ",
            buttonText: "Создать QR код",
        },
        {
            logo: "https://img.icons8.com/?size=512&id=8OdwzXFjBVH2&format=png",
            title: "Текстовые коды с паролем",
            description: "После сканирования камерой необходимо ввести пароль для зачисления кэшбека на личный счет",
            buttonText: "Создать партию",
        },
        {
            logo: "https://img.icons8.com/?size=512&id=8OdwzXFjBVH2&format=png",
            title: "Текстовые код без пароля",
            description: "После сканирования камерой произойдет автоматическое зачисление кэшбека на личный счет",
            buttonText: "Создать партию",
        },

    ];

    return (
        <div className={styles.qrContainer}>
            <div className={styles.qrGrid}>
                {qrCardsData.map((card, index) => (
                    <div key={index} className={styles.qrCard}>
                        <div className={styles.cardHeader}>
                            <img src={card.logo} alt={card.title} className={styles.cardLogo} />
                        </div>
                        <div className={styles.cardBody}>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                            <button className={styles.moreDetailsButton}>{card.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QRCode;
