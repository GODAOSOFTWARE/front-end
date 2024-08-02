import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Votes.css';

const Company = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate();

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
    ];

    const openModal = (card) => {
        setModalData(card);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleBannerClick = () => {
        navigate('/createCompany'); // Переадресация на страницу создания компании
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
}

export default Company;
