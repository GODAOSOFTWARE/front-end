// src/pages/Votes.js

import React from 'react';
import MediumCard from '../components/cards/content/MediumCard';
import './Votes.css'; // Подключаем стили

const Votes = () => {
    const cardsData = [
        {
            projectNumber: 1,
            title: "Статусы PRO",
            description: "Изменить монету для начисления ревардов.",
            image: "https://public.bnbstatic.com/static/academy/uploads-original/f2634dc4a87d4b73a22713b6884bbbd0.jpg",
            members: [
                "https://randomuser.me/api/portraits/men/1.jpg",
                "https://randomuser.me/api/portraits/women/2.jpg",
                "https://randomuser.me/api/portraits/men/3.jpg"
            ]
        },
        {
            projectNumber: 2,
            title: "Эмиссия PRO",
            description: "Увелчить эмиссию на один миллион",
            image: "https://public.bnbstatic.com/static/academy/uploads-original/f2634dc4a87d4b73a22713b6884bbbd0.jpg",
            members: [
                "https://randomuser.me/api/portraits/men/1.jpg",
                "https://randomuser.me/api/portraits/women/2.jpg",
                "https://randomuser.me/api/portraits/men/3.jpg"
            ]
        },
        {
            projectNumber: 3,
            title: "Статусы TMT",
            description: "Создать первый статус для партнеров",
            image: "https://public.bnbstatic.com/static/academy/uploads-original/f2634dc4a87d4b73a22713b6884bbbd0.jpg",
            members: [
                "https://randomuser.me/api/portraits/men/1.jpg",
                "https://randomuser.me/api/portraits/women/2.jpg",
                "https://randomuser.me/api/portraits/men/3.jpg"
            ]
        },
        {
            projectNumber: 4,
            title: "Проект 4",
            description: "Описание проекта 4.",
            image: "https://public.bnbstatic.com/static/academy/uploads-original/f2634dc4a87d4b73a22713b6884bbbd0.jpg",
            members: [
                "https://randomuser.me/api/portraits/men/1.jpg",
                "https://randomuser.me/api/portraits/women/2.jpg",
                "https://randomuser.me/api/portraits/men/3.jpg"
            ]
        },
        {
            projectNumber: 5,
            title: "Проект 5",
            description: "Описание проекта 5.",
            image: "https://public.bnbstatic.com/static/academy/uploads-original/f2634dc4a87d4b73a22713b6884bbbd0.jpg",
            members: [
                "https://randomuser.me/api/portraits/men/1.jpg",
                "https://randomuser.me/api/portraits/women/2.jpg",
                "https://randomuser.me/api/portraits/men/3.jpg"
            ]
        }
    ];

    return (
        <div className="votes-container">
            <div className="votes-grid">
                {cardsData.map((card, index) => (
                    <MediumCard
                        key={index}
                        voteNumber={card.projectNumber}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        members={card.members}
                        className="vote-card"
                    />
                ))}
                <div className="vote-card add-new-card">
                    <span>+</span>
                </div>
            </div>
        </div>
    );
};

export default Votes;
