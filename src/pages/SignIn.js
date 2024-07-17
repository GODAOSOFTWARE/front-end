// src/pages/SignIn.js

/// Этот файл определяет страницу входа (SignIn).
/// Страница входа позволяет пользователю выбрать метод аутентификации:
// через электронную почту, Google или MetaMask.
/// Форма включает поле для ввода электронной почты
// и кнопки для выбора метода аутентификации.
/// При выборе MetaMask отображается компонент MetaMaskAuth.

import React, { useState } from 'react';
import MetaMaskAuth from '../components/web3/MetaMaskAuth';

const SignIn = () => {
    const [authMethod, setAuthMethod] = useState(null);

    const handleAuthMethod = (method) => {
        setAuthMethod(method);
    };

    const closeAuth = () => {
        setAuthMethod(null);
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-center text-3xl font-extrabold mb-4">Добро пожаловать в DAO</h2>
            <p className="text-center text-sm text-gray-600 mb-6">
                Новый способ управления организациями и сообществами в мире децентрализации.
            </p>
            {!authMethod ? (
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Адрес электронной почты
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="name@mail.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Начать работу
                    </button>
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
    );
};

export default SignIn;
