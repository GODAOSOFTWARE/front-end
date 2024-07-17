import React from 'react';
import Card from '../components/Card';

const Dashboard = () => {
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
        }
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Активные голосования</h1>
                <button className="bg-white text-gray-800 bg-white p-6 shadow-md rounded-lg flex flex-col py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white">Создать голосование</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        projectNumber={card.projectNumber}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        members={card.members}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
