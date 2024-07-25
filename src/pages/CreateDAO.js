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
        <div className="create-dao-container">
            <div className="create-dao-card">
                <h1>Создайте Ваше первое DAO</h1>
                <h2>Заполните данные о вашей команде</h2>
                <div className="create-dao-form-container">
                    <form className="create-dao-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Название DAO</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Придумайте название для Вашей организации"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Описание вашего DAO</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Опишите цели и задачи вашего DAO"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ownerName">Имя владельца</label>
                            <input
                                type="text"
                                id="ownerName"
                                name="ownerName"
                                placeholder="Введите ваше имя"
                                value={formData.ownerName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ownerEmail">Email владельца</label>
                            <input
                                type="email"
                                id="ownerEmail"
                                name="ownerEmail"
                                placeholder="Введите ваш email"
                                value={formData.ownerEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ownerPhone">Телефон владельца</label>
                            <input
                                type="tel"
                                id="ownerPhone"
                                name="ownerPhone"
                                placeholder="Введите ваш номер телефона"
                                value={formData.ownerPhone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="teamMembers">Имена членов команды через запятую</label>
                            <input
                                type="text"
                                id="teamMembers"
                                name="teamMembers"
                                placeholder="Перечислите имена членов команды через запятую"
                                value={formData.teamMembers}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectWebsite">URL вебсайта проекта</label>
                            <input
                                type="url"
                                id="projectWebsite"
                                name="projectWebsite"
                                placeholder="Введите URL вебсайта проекта"
                                value={formData.projectWebsite}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>
                </div>
                <button className="create-dao-button" type="submit">Создать DAO</button>
            </div>
        </div>
    );
};

export default CreateDAO;
