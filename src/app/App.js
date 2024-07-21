import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import { Web3ModalProvider } from '../components/web3/Web3ModalProvider.tsx';

const Votes = lazy(() => import('../pages/Votes'));
const QrService = lazy(() => import('../pages/QrService'));
const AirdropService = lazy(() => import('../pages/AirdropService'));
const Notifications = lazy(() => import('../pages/Notifications'));
const SignIn = lazy(() => import('../pages/SignIn'));
const DashBoard = lazy(() => import('../pages/DashBoard'));
const WalletConnectPage = lazy(() => import('../pages/WalletConnectPage'));
const StatusService = lazy(() => import('../pages/StatusService'));
const FarmingService = lazy(() => import('../pages/FarmingService'));

function App() {
    return (
        <Web3ModalProvider>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/walletconnect" element={<WalletConnectPage />} />
                        <Route path="*" element={
                            <div className="flex">
                                <Sidebar />
                                <div className="flex-1">

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
                </Suspense>
            </Router>
        </Web3ModalProvider>
    );
}

export default App;
