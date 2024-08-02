import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import { Web3ModalProvider } from '../components/web3/Web3ModalProvider.tsx';
import CreateDAO from '../pages/CreateDAO';
import LandingPage from '../pages/LandingPage/LandingPage';

const Votes = lazy(() => import('../pages/Votes'));
const QrService = lazy(() => import('../pages/QrService'));
const AirdropService = lazy(() => import('../pages/AirdropService'));
const Notifications = lazy(() => import('../pages/Notifications'));
const SignIn = lazy(() => import('../pages/SignIn'));
const WalletConnectPage = lazy(() => import('../pages/WalletConnectPage'));
const StatusService = lazy(() => import('../pages/StatusService'));
const FarmingService = lazy(() => import('../pages/FarmingService'));
const Company = lazy(() => import('../pages/Company')); // Импорт нового компонента

function App() {
    return (
        <Web3ModalProvider>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/walletconnect" element={<WalletConnectPage />} />
                        <Route path="/createDAO" element={<CreateDAO />} />
                        <Route path="/" element={<LandingPage />} />
                        <Route path="*" element={
                            <div className="flex">
                                <Sidebar />
                                <div className="flex-1">
                                    <main className="p-6 main-content">
                                        <Routes>
                                            <Route path="/votes" element={<Votes />} />
                                            <Route path="/cashback" element={<QrService />} />
                                            <Route path="/airdrops" element={<AirdropService />} />
                                            <Route path="/notifications" element={<Notifications />} />
                                            <Route path="/status" element={<StatusService />} />
                                            <Route path="/farming" element={<FarmingService />} />
                                            <Route path="/company" element={<Company />} /> {/* Новый маршрут */}
                                        </Routes>
                                    </main>
                                </div>
                            </div>
                        } />
                    </Routes>
                </Suspense>
            </Router>
        </Web3ModalProvider>
    );
}

export default App;
