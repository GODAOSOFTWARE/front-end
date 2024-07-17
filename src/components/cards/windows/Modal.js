// src/components/Modal.js

/// Этот файл определяет компонент модального окна (Modal).
/// Модальное окно используется для отображения контента поверх основного приложения.
/// Модальное окно отображается только в том случае,
// если оно открыто (проверяется через проп `isOpen`).


import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-75 backdrop-blur-sm">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
