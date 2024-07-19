// src/components/web3/ConnectButton.tsx

import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import './ConnectButton.css';  // Импортируем стили

const ConnectButton: React.FC = () => {
    const { open } = useWeb3Modal();

    return (
        <button
            onClick={() => open()}
            className="connect-button"
        >
            Подключить кошелек
        </button>
    );
};

export default ConnectButton;