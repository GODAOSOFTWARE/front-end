import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ message, duration, onEnd }) => {
    const [progressWidth, setProgressWidth] = useState(100);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const interval = setInterval(() => {
            setProgressWidth(prev => prev - 100 / (duration / 100));
        }, 100);

        const timeout = setTimeout(() => {
            setVisible(false);
            setTimeout(onEnd, 500); // Ждем завершения анимации скрытия
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [duration, onEnd]);

    return (
        <div className={`notification ${visible ? 'show' : 'hide'}`}>
            {message}
            <div className="progress">
                <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
            </div>
        </div>
    );
};

export default Notification;
