// src/pages/WalletConnectPage.js
import React from 'react';
import ConnectButton from '../components/web3/ConnectButton';
import './WalletConnectPage.css';

const WalletConnectPage = () => {
    return (
        <div className="wallet-connect-container">
            <div className="wallet-connect-form">
                <h1 className="title">Откройте для себя Web 3</h1>
                <p className="business-benefits">
                    Имея Web3 кошелек, вы можете строить проекты на готовых решениях для бизнеса, используя передовые технологии блокчейна.
                </p>
                <ConnectButton />
                <p className="terms">
                    Подключая свой кошелек, вы соглашаетесь с нашими <a href="#">Условиями использования</a> и <a href="#">Политикой конфиденциальности</a>.
                </p>
            </div>
        </div>
    );
};

export default WalletConnectPage;
