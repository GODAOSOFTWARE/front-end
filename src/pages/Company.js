import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Votes.css';

const Company = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate();

    const cardsData = [
        {
            logo: "https://randomuser.me/api/portraits/men/1.jpg",
            dao: "Коммерческий директор",
            daoName: "Виктор Логинов",
            creator: "ПАО Сбербанк",
            participants: [
                "https://storage.yandexcloud.net/ds-ods/files/media/hub/icon/170957ff3ff5/sber.png",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },
        {
            logo: "https://randomuser.me/api/portraits/women/2.jpg",
            dao: "Менеджер по продажам",
            daoName: "Дарья Авдеева",
            creator: "Т-Банк",
            participants: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB7psH_iUqd6AZROsDJZXwI6nS5uR5xynCg&s",
            ],
            participantsCount: 50,
            dueDate: "15.04.22"
        },
        {
            logo: "https://randomuser.me/api/portraits/men/3.jpg",
            dao: "Финансовый аналитик",
            daoName: "Иван Петров",
            creator: "Газпром",
            participants: [
                "https://habrastorage.org/getpro/moikrug/uploads/company/100/007/604/0/logo/big_96821ac49491ed824047c2ffa1217f78.png",
            ],
            participantsCount: 80,
            dueDate: "10.05.22"
        },
        {
            logo: "https://randomuser.me/api/portraits/women/4.jpg",
            dao: "Маркетолог",
            daoName: "Ольга Кузнецова",
            creator: "МТС",
            participants: [
                "https://play-lh.googleusercontent.com/R5c-XEghIzwSIgmqw1J0_dV-V724eg6qBrqk3g-i6SBFx7nHHVtBVUDwJNP7C9cbYw",
            ],
            participantsCount: 60,
            dueDate: "20.07.22"
        },
        {
            logo: "https://randomuser.me/api/portraits/men/5.jpg",
            dao: "Разработчик",
            daoName: "Сергей Иванов",
            creator: "Яндекс",
            participants: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLECL-Hein-9IKFhXLxg1q0BglAOrElg6e-g&s",
            ],
            participantsCount: 90,
            dueDate: "30.06.22"
        },
        {
            logo: "https://randomuser.me/api/portraits/women/6.jpg",
            dao: "HR-менеджер",
            daoName: "Мария Смирнова",
            creator: "Ростелеком",
            participants: [
                "https://www.company.rt.ru/about/identity/files/RGB_RT_logo-vertical_main_en.png",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
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
                            <button className="more-details-button" onClick={() => openModal(card)}>О компании</button>
                        </div>
                        <div className="card-footer">
                            <div className="participants-count">{card.participantsCount} Participants</div>
                            <div className="due-date">{card.dueDate} Due date</div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Company;
