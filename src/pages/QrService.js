import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для переадресации
import './Votes.css'; // Подключаем объединенный файл стилей

const Votes = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate(); // Инициализируем хук useNavigate

    const cardsData = [
        {
            logo: "https://storage.yandexcloud.net/ds-ods/files/media/hub/icon/170957ff3ff5/sber.png",
            dao: "DAO",
            daoName: "Сбербанк",
            creator: "Создать личный чек",
            description: "Предлагаю создать платформу для привлечения новой аудитории в экосистему проектов, построенных на базе блокчейна Decimal.",
            participants: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49MbJrRqd0q-OizJgU9RHiTIF-9ksD3gDUg&s",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB7psH_iUqd6AZROsDJZXwI6nS5uR5xynCg&s",
            dao: "DAO",
            daoName: "Т-Банк",
            creator: "QR код для адреса",
            description: "Предлагаю создать функционал выпуска QR кодов с кэшбеком для стимулирования покупок.",
            participants: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49MbJrRqd0q-OizJgU9RHiTIF-9ksD3gDUg&s",
            ],
            participantsCount: 50,
            dueDate: "15.04.22"
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5m5sgZTU5pW_2im4QDQhBZivrDe79r1RUig&s",
            dao: "DAO",
            daoName: "Федерация Самбо",
            creator: "Кэшбек QR коды",
            description: "Предлагаю внедрить систему голосований для улучшения взаимодействия с пользователями.",
            participants: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49MbJrRqd0q-OizJgU9RHiTIF-9ksD3gDUg&s",
            ],
            participantsCount: 120,
            dueDate: "30.06.22"
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
        navigate('/createVote'); // Переадресация на страницу создания голосования
    };

    return (
        <div className="votes-container">

            <div className="votes-grid">
                {cardsData.map((card, index) => (
                    <div key={index} className="vote-card">
                        <div className="card-header">
                            <div className="card-dao-info">
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={card.participants[0]} alt={card.creator} className="participant-avatar" />
                            <h3 className="card-title">{card.creator}</h3>
                            <p className="card-description">{card.description}</p>
                            <button className="more-details-button" onClick={() => openModal(card)}>Создать промо код</button>
                        </div>
                        <div className="card-footer">


                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
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