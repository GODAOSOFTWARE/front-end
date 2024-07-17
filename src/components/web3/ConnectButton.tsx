// src/components/ConnectButton.tsx

/// Этот файл определяет компонент кнопки подключения (ConnectButton).
/// Кнопка используется для подключения к Web3-сервисам.
/// Кнопка обернута в элемент `w3m-button`, который предоставляет стили
// и функциональность для подключения.

/// Принцип работы:
/// 1. Компонент `ConnectButton` использует `w3m-button`,
// который является встроенным элементом Web3Modal.
/// 2. При нажатии на кнопку `w3m-button` открывается модальное окно,
// предоставляемое Web3Modal.
/// 3. Пользователь может выбрать кошелек для подключения (например, MetaMask).
/// 4. После успешного подключения Web3Modal управляет состоянием
// подключения и предоставляет информацию о подключении компоненту `ConnectButton`.


import React from 'react';

const ConnectButton: React.FC = () => {
    return (
        <div className="mx-2">
            <w3m-button className="py-2 px-4 rounded-lg"></w3m-button>
        </div>
    );
};

export default ConnectButton;
