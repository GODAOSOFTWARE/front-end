import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Votes.module.css'; // Обновленный путь импорта

const Votes = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate();

    const cardsData = [
        {
            logo: "https://storage.yandexcloud.net/ds-ods/files/media/hub/icon/170957ff3ff5/sber.png",
            dao: "DAO",
            daoName: "Сбербанк",
            creator: "Василий Чернышевский",
            description: "Создание платформы для привлечения новой аудитории — это стратегический шаг, направленный на расширение клиентской базы и увеличение охвата целевой аудитории. Платформа должна быть интерактивной и интуитивно понятной, предоставляя пользователям уникальный опыт и ценность. Основные функциональные возможности могут включать в себя личные кабинеты, систему рекомендаций, персонализированный контент и удобные инструменты для взаимодействия с сервисом. Важно также учитывать тренды и предпочтения целевой аудитории, чтобы максимально соответствовать их ожиданиям и потребностям.\n" +
                "\n" +
                "Для успешного привлечения новой аудитории необходимо тщательно проработать маркетинговую стратегию, которая будет включать использование различных каналов продвижения, таких как социальные сети, контекстная реклама, SEO-оптимизация и партнерские программы. Важно создать запоминающийся бренд и укрепить его узнаваемость через регулярное взаимодействие с потенциальными клиентами. Особое внимание следует уделить контент-маркетингу: качественные статьи, видеоматериалы, вебинары и инфографика помогут привлечь внимание и завоевать доверие новых пользователей.\n" +
                "\n" +
                "Не менее важно обеспечить качественную поддержку и обслуживание клиентов. Быстрое и эффективное решение возникающих у пользователей вопросов и проблем значительно повысит их удовлетворенность и лояльность к платформе. Внедрение обратной связи и возможность участия пользователей в развитии и улучшении сервиса создаст ощущение вовлеченности и ценности их мнения. Всё это в совокупности будет способствовать устойчивому росту и успешному привлечению новой аудитории на платформу.",
            participants: [
                "https://randomuser.me/api/portraits/men/1.jpg",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB7psH_iUqd6AZROsDJZXwI6nS5uR5xynCg&s",
            dao: "DAO",
            daoName: "Т-Банк",
            creator: "Семен Иванов",
            description: "Предлагаю создать функционал выпуска QR кодов с кэшбеком для стимулирования покупок.",
            participants: [
                "https://randomuser.me/api/portraits/men/2.jpg",
            ],
            participantsCount: 50,
            dueDate: "15.04.22"
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5m5sgZTU5pW_2im4QDQhBZivrDe79r1RUig&s",
            dao: "DAO",
            daoName: "Федерация Самбо",
            creator: "Алексей Иванов",
            description: "Предлагаю внедрить систему голосований для улучшения взаимодействия с пользователями.",
            participants: [
                "https://randomuser.me/api/portraits/men/3.jpg",
            ],
            participantsCount: 120,
            dueDate: "30.06.22"
        },
        {
            logo: "https://play-lh.googleusercontent.com/R5c-XEghIzwSIgmqw1J0_dV-V724eg6qBrqk3g-i6SBFx7nHHVtBVUDwJNP7C9cbYw",
            dao: "DAO",
            daoName: "МТС",
            creator: "Мария Смирнова",
            description: "Предлагаю создать образовательный портал для обучения работе с блокчейном.",
            participants: [
                "https://randomuser.me/api/portraits/women/1.jpg",
            ],
            participantsCount: 90,
            dueDate: "10.05.22"
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfokYSvIS-eP64Jf2UMXFWwta2ZEQHDs0UGQ&s",
            dao: "DAO",
            daoName: "Ростелеком",
            creator: "Иван Петров",
            description: "Предлагаю разработать мобильное приложение для отслеживания криптовалютных транзакций.",
            participants: [
                "https://randomuser.me/api/portraits/men/4.jpg",
            ],
            participantsCount: 60,
            dueDate: "20.07.22"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Emblem_of_Central_Election_Commission_of_Russia.svg/1200px-Emblem_of_Central_Election_Commission_of_Russia.svg.png",
            dao: "DAO",
            daoName: "ЦИК России",
            creator: "Ольга Кузнецова",
            description: "Предлагаю создать платформу для проведения онлайн-конференций по блокчейну.",
            participants: [
                "https://randomuser.me/api/portraits/women/2.jpg",
            ],
            participantsCount: 80,
            dueDate: "05.08.22"
        }
    ];

    const openModal = (card) => {
        setModalData(card);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleBannerClick = () => {
        navigate('/createVote'); // Переадресация на страницу создания голосования
    };

    return (
        <div className={styles.votesContainer}>

            <div className={styles.votesGrid}>
                {cardsData.map((card, index) => (
                    <div key={index} className={styles.voteCard}>
                        <div className={styles.cardHeader}>
                            <img src={card.logo} alt={card.daoName} className={styles.cardLogo} />
                            <div className={styles.cardDaoInfo}>
                                <span className={styles.cardDaoSubtitle}>{card.dao}</span>
                                <span className={styles.cardDaoName}>{card.daoName}</span>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <img src={card.participants[0]} alt={card.creator} className={styles.participantAvatar} />
                            <h3 className={styles.cardTitle}>{card.creator}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                            <button className={styles.moreDetailsButton} onClick={() => openModal(card)}>Участвовать</button>
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.dueDate}>{card.dueDate} </div>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <span className={styles.close} onClick={closeModal}>&times;</span>
                        <img src={modalData.participants[0]} alt={modalData.creator} className={styles.modalAvatar} />
                        <h3 className={styles.cardTitle}>{modalData.creator}</h3>
                        <p className={styles.cardDescription}>{modalData.description}</p>
                        <button className={styles.supportButton}>Поддержать</button>
                        <button className={styles.declineButton}>Отклонить</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Votes;
