// src/components/web3/ConnectButton.tsx
import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';

const ConnectButton: React.FC = () => {
    const { open } = useWeb3Modal();

    return (
        <button onClick={() => open()}>
            Connect Wallet
        </button>
    );
};

export default ConnectButton;
