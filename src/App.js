import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Votes from './pages/Votes';
import Notifications from './pages/Notifications';
import SignIn from './pages/SignIn';
import ConnectButton from "./components/ConnectButton";  // Добавляем импорт страницы SignIn

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
                                    <Route path="/votes" element={<Votes />} />
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
