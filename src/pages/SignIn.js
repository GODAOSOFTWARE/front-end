import React, { useState } from 'react';
import MetaMaskAuth from '../components/web3/MetaMaskAuth';
import { login } from '../api/AuthAPI';

const SignIn = () => {
    const [authMethod, setAuthMethod] = useState(null);
    const [credentials, setCredentials] = useState({ login: '', password: '', device_name: 'web' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleAuthMethod = (method) => {
        setAuthMethod(method);
    };

    const closeAuth = () => {
        setAuthMethod(null);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (response.ok) {
                // Логирование ответа сервера
                console.log('Ответ сервера:', data);
                if (data.token) {
                    // Сохранение токена в localStorage
                    localStorage.setItem('authToken', data.token);
                    // Показ успешного сообщения
                    setSuccess('Авторизация успешна');
                } else {
                    setError('Не удалось получить токен');
                }
            } else {
                // Показ сообщения об ошибке
                setError('Неверный логин или пароль');
            }
        } catch (error) {
            console.error('Ошибка входа:', error);
            setError('Ошибка входа');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-extrabold mb-4">Добро пожаловать в DAO</h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Новый способ управления организациями и сообществами в мире децентрализации.
                </p>
                {!authMethod ? (
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="login" className="block text-gray-700 text-sm font-bold mb-2">
                                Логин
                            </label>
                            <input
                                type="text"
                                id="login"
                                name="login"
                                value={credentials.login}
                                onChange={handleInputChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Логин"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Пароль
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleInputChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Ваш пароль"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember-me"
                                className="mr-2 leading-tight"
                            />
                            <label htmlFor="remember-me" className="text-sm text-gray-700">
                                Запомнить меня
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Начать работу
                        </button>
                        {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
                        {success && <p className="text-green-500 text-xs mt-4">{success}</p>}
                        <div className="flex flex-col gap-2">
                            <button
                                type="button"
                                className="w-full bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-gray-300 flex items-center justify-center"
                                onClick={() => handleAuthMethod('google')}
                            >
                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6 mr-2" />
                                Войти через Google
                            </button>
                            <button
                                type="button"
                                className="w-full bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-gray-300 flex items-center justify-center"
                                onClick={() => handleAuthMethod('metamask')}
                            >
                                <img src="https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png?f=webp" alt="MetaMask" className="w-6 h-6 mr-2" />
                                Войти через кошелек
                            </button>
                        </div>
                    </form>
                ) : (
                    <div>
                        {authMethod === 'metamask' && <MetaMaskAuth onClose={closeAuth} />}
                        <button onClick={closeAuth} className="mt-4">Назад</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignIn;
