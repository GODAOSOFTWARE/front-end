// src/components/MetaMaskAuth.js

/// Этот файл определяет компонент для аутентификации через MetaMask (MetaMaskAuth).
/// Компонент позволяет пользователю подключиться к MetaMask,
//  переключаться между сетями и управлять подключением.
/// Компонент обрабатывает события изменения аккаунтов и сетей,
// подключение и отключение MetaMask, а также переключение между различными сетями.

import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { Web3Provider } from '@ethersproject/providers';

const networks = {
    bsc: {
        chainId: '0x38',
        chainName: 'Binance Smart Chain',
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        blockExplorerUrls: ['https://bscscan.com/'],
    },
    ethereum: {
        chainId: '0x1',
        chainName: 'Ethereum Mainnet',
        rpcUrls: ['https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'],
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
        blockExplorerUrls: ['https://etherscan.io'],
    },
    decimal: {
        chainId: '0x4b',
        chainName: 'Decimal Smart Chain Mainnet',
        rpcUrls: ['https://node.decimalchain.com/web3'],
        nativeCurrency: {
            name: 'Decimal',
            symbol: 'DEL',
            decimals: 18,
        },
        blockExplorerUrls: ['https://explorer.decimalchain.com'],
    },
};

const MetaMaskAuth = ({ onClose, resetState }) => {
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);
    const [network, setNetwork] = useState(null);

    useEffect(() => {
        const loadProvider = async () => {
            const provider = await detectEthereumProvider();
            if (provider) {
                console.log('MetaMask detected');
                const web3Provider = new Web3Provider(provider);
                setProvider(web3Provider);

                provider.on('accountsChanged', (accounts) => {
                    if (accounts.length === 0) {
                        setError('No active wallet found');
                        setAccount(null);
                    } else {
                        setAccount(accounts[0]);
                    }
                });

                provider.on('chainChanged', (chainId) => {
                    if (chainId === networks.bsc.chainId) {
                        setNetwork(networks.bsc.chainName);
                    } else if (chainId === networks.ethereum.chainId) {
                        setNetwork(networks.ethereum.chainName);
                    } else if (chainId === networks.decimal.chainId) {
                        setNetwork(networks.decimal.chainName);
                    } else {
                        setError('Unsupported network');
                    }
                });

                const chainId = await provider.request({ method: 'eth_chainId' });
                if (chainId === networks.bsc.chainId) {
                    setNetwork(networks.bsc.chainName);
                } else if (chainId === networks.ethereum.chainId) {
                    setNetwork(networks.ethereum.chainName);
                } else if (chainId === networks.decimal.chainId) {
                    setNetwork(networks.decimal.chainName);
                } else {
                    setError('Unsupported network');
                }

                const accounts = await provider.request({ method: 'eth_accounts' });
                if (accounts.length === 0) {
                    setError('No active wallet found');
                } else {
                    setAccount(accounts[0]);
                }
            } else {
                setError('MetaMask not detected');
            }
        };
        loadProvider();

        // Сброс состояния при размонтировании компонента
        return () => {
            resetState();
        };
    }, [resetState]);

    const switchNetwork = async (networkKey) => {
        if (provider) {
            try {
                await provider.send('wallet_addEthereumChain', [networks[networkKey]]);
                setNetwork(networks[networkKey].chainName);
                const accounts = await provider.send('eth_accounts', []);
                setAccount(accounts[0]);
                setError(null);
            } catch (err) {
                setError(`Unable to switch to ${networks[networkKey].chainName}`);
            }
        }
    };

    const connectMetaMask = async () => {
        if (provider) {
            try {
                const accounts = await provider.send('eth_requestAccounts', []);
                setAccount(accounts[0]);
                setError(null);
                console.log('Connected account:', accounts[0]);
            } catch (err) {
                setError(err.message);
                console.error('Error connecting MetaMask:', err);
            }
        } else {
            setError('MetaMask not detected');
            console.error('MetaMask not detected');
        }
    };

    const disconnectMetaMask = () => {
        setAccount(null);
        setNetwork(null);
        setError('Disconnected');
        window.location.reload(); // Перезагрузка страницы для полного сброса состояния
    };

    return (
        <div>
            <h1>MetaMask Auth</h1>
            {error && <p>{error}</p>}
            {network && <p>Connected to {network}</p>}
            {account ? (
                <>
                    <p>Connected as {account}</p>
                    <button onClick={disconnectMetaMask} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Disconnect</button>
                </>
            ) : (
                <button onClick={connectMetaMask} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Connect MetaMask</button>
            )}
            <div className="mt-4 space-y-2">
                <button onClick={() => switchNetwork('decimal')} className="px-4 py-2 bg-green-500 text-white rounded">Switch to DRC-20</button>
                <button onClick={() => switchNetwork('ethereum')} className="px-4 py-2 bg-blue-500 text-white rounded">Switch to ERC-20</button>
                <button onClick={() => switchNetwork('bsc')} className="px-4 py-2 bg-yellow-500 text-white rounded">Switch to BEP-20</button>
            </div>
            <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded">Close</button>
        </div>
    );
};

export default MetaMaskAuth;
