import React from 'react';
import styles from '../styles/VoteService.module.css';


const VoteService = () => {
    const qrCardsData = [
        {
            logo: "https://img.icons8.com/?size=200&id=rWegvKYgyOgP&format=png",
            title: "Одноранговые голосования",
            description: "Голосования с равной силой голоса для каждого участника голосований",
            buttonText: "Создать голосование",
        },
        {
            logo: "https://img.icons8.com/?size=200&id=klbo0tqOB1KI&format=png",
            title: "Корпоративные голосования",
            description: "Голосования для корпоративных клиентов с собственной CRM системой",
            buttonText: "Создать голосование",
        },
        {
            logo: "https://img.icons8.com/?size=200&id=HGxu03qfOJTr&format=png",
            title: "Голосования с вознаграждением",
            description: "Голосования с автоматическим вознаграждением за голос",
            buttonText: "Создать голосование",
        },
        {
            logo: "https://img.icons8.com/?size=200&id=EFLbMfpKrZze&format=png",
            title: "Кастомное голосование",
            description: "Голосования с ручным вводом параметров, определяющих силу голоса",
            buttonText: "Принять участие",
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

export default VoteService;
