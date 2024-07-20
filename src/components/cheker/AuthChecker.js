import { useEffect, useState } from 'react';

const AuthChecker = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Проверяем наличие токена в локальном хранилище при загрузке компонента
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return children(isAuthenticated);
};

export default AuthChecker;
