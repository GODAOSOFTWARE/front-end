// src/pages/WalletConnectPage.js
import React from 'react';
import ConnectButton from '../components/web3/ConnectButton';
import './WalletConnectPage.css';

const WalletConnectPage = () => {
    return (
        <div className="wallet-connect-container">
            <ConnectButton />
        </div>
    );
};

export default WalletConnectPage;
