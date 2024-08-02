import React from 'react';
import './Votes.css'; // Подключаем объединенный файл стилей

const Votes = () => {
    const cardsData = [
        {
            logo: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53", // Замените на фактический URL логотипа
            creator: "Константин Медведев",
            description: "Предлагаю создать тапалку для привлечения новой аудитории в ...",
            participants: [
                "https://randomuser.me/api/portraits/men/1.jpg",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },
        {
            logo: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53", // Замените на фактический URL логотипа
            creator: "Константин Медведев",
            description: "Предлагаю создать тапалку для привлечения новой аудитории в ...",
            participants: [
                "https://randomuser.me/api/portraits/men/1.jpg",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },
        {
            logo: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53", // Замените на фактический URL логотипа
            creator: "Константин Медведев",
            description: "Предлагаю создать тапалку для привлечения новой аудитории в ...",
            participants: [
                "https://randomuser.me/api/portraits/men/1.jpg",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },
        {
            logo: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53", // Замените на фактический URL логотипа
            creator: "Константин Медведев",
            description: "Предлагаю создать тапалку для привлечения новой аудитории в ...",
            participants: [
                "https://randomuser.me/api/portraits/men/1.jpg",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },
        {
            logo: "https://s.gravatar.com/avatar/9b3d2786ac7fe60b8902e198994d5f53", // Замените на фактический URL логотипа
            creator: "Константин Медведев",
            description: "Предлагаю создать тапалку для привлечения новой аудитории в ...",
            participants: [
                "https://randomuser.me/api/portraits/men/1.jpg",
            ],
            participantsCount: 70,
            dueDate: "02.03.22"
        },




    ];

    return (
        <div className="votes-container">
            <div className="votes-grid">
                {cardsData.map((card, index) => (
                    <div key={index} className="vote-card">
                        <div className="card-header">
                            <img src={card.logo} alt={card.creator} className="card-logo" />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{card.creator}</h3>
                            <div className="card-participants">
                                {card.participants.map((participant, idx) => (
                                    <img key={idx} src={participant} alt={`participant-${idx}`} className="participant-avatar" />
                                ))}
                            </div>
                            <p className="card-description">{card.description}</p>
                            <button className="more-details-button">Подробнее</button>
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
};

export default Votes;
