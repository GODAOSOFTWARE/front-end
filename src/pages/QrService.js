import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для переадресации
import './Votes.css'; // Подключаем объединенный файл стилей



const Votes = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate(); // Инициализируем хук useNavigate

    const cardsData = [

        {
            title: "Создать код с погашением по паролю",
            description: "После сканирования камерой необходимо ввести пароль для зачисления кэшбэка на личный счет",
            img: [
                "https://img.icons8.com/?size=200&id=QGXUO3LxhYrn&format=png",
            ],
        },
        {
            title: "Создать код с автоматическим погашением",
            description: "После сканирования камерой произойдет автоматическое зачисление кэшбека на личный счет ",
            img: [
                "https://img.icons8.com/?size=200&id=TYZP6liMd2uZ&format=png",
            ],
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
                            <img src={card.img[0]} alt={card.title} className="participant-avatar" />
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                            <button className="more-details-button" onClick={() => openModal(card)}>Создать QR код</button>
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
                        <img src={modalData.img[0]} alt={modalData.title} className="modal-avatar" />
                        <h3 className="card-title">{modalData.title}</h3>
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