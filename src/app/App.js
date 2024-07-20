// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import Votes from '../pages/Votes';
import QrService from '../pages/QrService';
import AirdropService from '../pages/AirdropService';
import Notifications from '../pages/Notifications';
import SignIn from '../pages/SignIn';
import DashBoard from '../pages/Dashboard';
import WalletConnectPage from '../pages/WalletConnectPage';
import StatusService from '../pages/StatusService';
import FarmingService from '../pages/FarmingService';
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
                                        <Route path="/dashboard" element={<DashBoard />} />
                                        <Route path="/votes" element={<Votes />} />
                                        <Route path="/cashback" element={<QrService />} />
                                        <Route path="/airdrops" element={<AirdropService />} />
                                        <Route path="/notifications" element={<Notifications />} />
                                        <Route path="/sign-in" element={<SignIn />} />
                                        <Route path="/status" element={<StatusService />} />
                                        <Route path="/farming" element={<FarmingService />} />
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
