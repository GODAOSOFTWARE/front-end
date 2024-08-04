import React from 'react';
import styles from '../styles/QrService.module.css';


const QRCode = () => {
    const qrCardsData = [
        {
            logo: "https://img.icons8.com/?size=200&id=DNzhylvAeUk8&format=png",
            title: "QR коды для викторин и тестирований",
            description: "Создавайте вопросы, ответы и установите награду, которую получит пользователь за правильный ответ",
            buttonText: "Создать QR код",
        },
        {
            logo: "https://img.icons8.com/?size=200&id=Uv0J78DjutqZ&format=png",
            title: "QR коды для получения вознаграждения",
            description: "Установите сумму вознаграждения за сканирование QR кода .Пользователь получит его автоматически",
            buttonText: "Создать QR код",
        },
        {
            logo: "https://img.icons8.com/?size=200&id=gMZqjDbERCF7&format=png",
            title: "QR коды с уникальными паролями",
            description: "После сканирования камерой необходимо ввести пароль для зачисления кэшбека на личный счет",
            buttonText: "Создать QR код",
        },
        {
            logo: "https://img.icons8.com/?size=200&id=KfaNP9udCPNO&format=png",
            title: "QR коды для пополнения счета",
            description: "Пользователь автоматически станет вашим партнером и получит приветственное начисления монет от Вас",
            buttonText: "Создать QR код",
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
