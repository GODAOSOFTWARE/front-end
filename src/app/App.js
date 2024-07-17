//src//App,js

//// Этот файл отвечает за маршрутизацию приложения.
// Он определяет маршруты для разных страниц и компоненты,
// которые должны быть отображены на этих маршрутах.
// Основная структура приложения включает боковую панель (Sidebar),
// навигационную панель (Navbar) и основное содержимое (main).
// В этом файле мы определяем маршруты для страниц Dashboard, Profile, Members и Notifications
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Members from '../pages/members';
import Notifications from '../pages/Notifications';
import SignIn from '../pages/SignIn';
import ConnectButton from "../components/web3/ConnectButton";  // Добавляем импорт страницы SignIn

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<ConnectButton />} />  {/* Добавляем маршрут для страницы SignIn */}
                <Route path="*" element={
                    <div className="flex">
                        <Sidebar />
                        <div className="flex-1">
                            <Navbar />
                            <main className="p-6 main-content">
                                <Routes>
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/votes" element={<Members />} />
                                    <Route path="/notifications" element={<Notifications />} />
                                </Routes>
                            </main>
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
