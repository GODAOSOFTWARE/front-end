import React, { useState } from 'react';
import './Votes.css'; // Подключаем объединенный файл стилей

const Votes = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const cardsData = [
        {
            logo: "https://storage.yandexcloud.net/ds-ods/files/media/hub/icon/170957ff3ff5/sber.png",
            dao: "DAO",
            daoName: "Сбербанк",
            creator: "Василий Чернышевский",
            description: "Предлагаю создать платформу для привлечения новой аудитории в экосистему проектов, построенных на базе блокчейна Decimal.",
            participants: [
                "https://randomuser.me/api/portraits/men/1.jpg",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB7psH_iUqd6AZROsDJZXwI6nS5uR5xynCg&s",
            dao: "DAO",
            daoName: "Тиньков",
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

    return (
        <div className="votes-container">
            <div className="votes-grid">
                {cardsData.map((card, index) => (
                    <div key={index} className="vote-card">
                        <div className="card-header">
                            <img src={card.logo} alt={card.daoName} className="card-logo" />
                            <div className="card-dao-info">
                                <span className="card-dao-subtitle">{card.dao}</span>
                                <span className="card-dao-name">{card.daoName}</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={card.participants[0]} alt={card.creator} className="participant-avatar" />
                            <h3 className="card-title">{card.creator}</h3>
                            <p className="card-description">{card.description}</p>
                            <button className="more-details-button" onClick={() => openModal(card)}>Подробнее</button>
                        </div>
                        <div className="card-footer">
                            <div className="participants-count">{card.participantsCount} Participants</div>
                            <div className="due-date">{card.dueDate} Due date</div>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={modalData.logo} alt={modalData.daoName} className="modal-logo" />
                        <img src={modalData.participants[0]} alt={modalData.creator} className="modal-avatar" />
                        <h3 className="card-title">{modalData.creator}</h3>
                        <p className="card-description">{modalData.description}</p>
                        <button className="support-button">Поддержать</button>
                        <button className="decline-button">Отклонить</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Votes;
