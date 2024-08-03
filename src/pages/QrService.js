import React from 'react';
import styles from '../styles/QrService.module.css';


const QRCode = () => {
    const qrCardsData = [
        {
            logo: "https://img.icons8.com/?size=200&id=QGXUO3LxhYrn&format=png",
            title: "Создать код с погашением по паролю",
            description: "После сканирования камерой необходимо ввести пароль для зачисления кэшбека на личный счет",
            buttonText: "Создать QR код",
        },
        {
            logo: "https://img.icons8.com/?size=200&id=TYZP6liMd2uZ&format=png",
            title: "Создать код с автоматическим погашением",
            description: "После сканирования камерой произойдет автоматическое зачисление кэшбека на личный счет",
            buttonText: "Создать QR код",
        }

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
