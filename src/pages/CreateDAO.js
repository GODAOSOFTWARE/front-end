// src/pages/CreateDAO.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateDAO.css'; // Подключаем стили

const CreateDAO = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ownerName: '',
        ownerEmail: '',
        ownerPhone: '',
        teamMembers: '',
        projectWebsite: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data: ', formData);
        // здесь можно добавить логику для отправки данных формы
        navigate('/dashboard');
    };

    return (
        <div className="dashboard-container">
            <div className="create-dao-container">
                <h2>Создайте Ваше первое DAO</h2>
                <p>Заполните данные о вашей команде</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Название DAO"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Описание вашего DAO"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="ownerName"
                        placeholder="Имя владельца"
                        value={formData.ownerName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="ownerEmail"
                        placeholder="Email владельца"
                        value={formData.ownerEmail}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="ownerPhone"
                        placeholder="Телефон владельца"
                        value={formData.ownerPhone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="teamMembers"
                        placeholder="Имена членов команды через запятую"
                        value={formData.teamMembers}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="url"
                        name="projectWebsite"
                        placeholder="URL вебсайта проекта"
                        value={formData.projectWebsite}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Создать DAO</button>
                </form>
            </div>
        </div>
    );
};

export default CreateDAO;
