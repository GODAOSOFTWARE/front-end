// src/components/web3/ConnectButton.tsx

import React, { useState } from 'react';
import WalletConnectModal from '../cards/windows/authModals/WalletConnectModal';
import './ConnectButton.css';

const ConnectButton: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="mx-2">
            <button className="sign-in-button" onClick={openModal}>Connect Wallet</button>
            <WalletConnectModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default ConnectButton;
