import * as React from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const projectId = '6de755e98304adc1e36a371e36db0f7b'; // Замените на ваш project ID от WalletConnect

const metadata = {
    name: 'GO DAO VOTE',
    description: 'Web3Modal Example',
    url: 'https://a907-89-47-163-126.ngrok-free.app',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
});

createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true,
    enableOnramp: true,
});

export const Web3ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
};