// src/components/Card.js

/// Этот файл определяет компонент карточки (Card).
/// Карточка используется для отображения информации о чем-либо,
/// включая изображение, заголовок, описание и список участников.
/// Компонент принимает пропсы для заголовка, описания, изображения,
// ID и списка связанных с этим пользователей


import React from 'react';

const Card = ({ title, description, image, projectNumber, members }) => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col">
            <img src={image} alt={title} className="rounded-lg mb-4 w-full h-40 object-cover" />
            <div className="mb-4 flex-1">
                <h3 className="text-sm font-semibold text-gray-500">Голосование #{projectNumber}</h3>
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-white text-gray-800 border border-gray-800 py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white">Подробнее</button>
                <div className="flex -space-x-2">
                    {members.map((member, index) => (
                        <img
                            key={index}
                            src={member}
                            alt="member"
                            className="w-8 h-8 rounded-full border-2 border-white"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
