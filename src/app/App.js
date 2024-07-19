// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import Dashboard from '../pages/Dashboard';
import QrService from '../pages/QrService';
import Members from '../pages/Members';
import Notifications from '../pages/Notifications';
import SignIn from '../pages/SignIn';
import WalletConnectPage from '../pages/WalletConnectPage';
import { Web3ModalProvider } from '../components/web3/Web3ModalProvider.tsx';

function App() {
    return (
        <Web3ModalProvider>
            <Router>
                <Routes>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/walletconnect" element={<WalletConnectPage />} />
                    <Route path="*" element={
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1">
                                <Navbar />
                                <main className="p-6 main-content">
                                    <Routes>
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/profile" element={<QrService />} />
                                        <Route path="/votes" element={<Members />} />
                                        <Route path="/notifications" element={<Notifications />} />
                                        <Route path="/sign-in" element={<SignIn />} />
                                    </Routes>
                                </main>
                            </div>
                        </div>
                    } />
                </Routes>
            </Router>
        </Web3ModalProvider>
    );
}

export default App;
