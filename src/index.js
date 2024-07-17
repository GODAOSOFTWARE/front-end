// src/index.js

// Этот файл является точкой входа для React-приложения.
// Он загружает основное приложение (App) и монтирует его в HTML-документ.
// Также подключается провайдер Web3Modal для работы с Web3.
// В будущем, когда проект будет разрастаться, этот файл может расширяться для включения дополнительных провайдеров,
// настроек глобального состояния (например, Redux или Context API), инициализации различных сервисов (например, аналитики, логирования ошибок)
// и других необходимых компонентов на уровне приложения.


import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import './pages/index.css';
import {Web3ModalProvider} from "./components/web3/Web3ModalProvider";


ReactDOM.render(
    <React.StrictMode>
        <Web3ModalProvider>
            <App/>
        </Web3ModalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
