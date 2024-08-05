import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import { ThemeProvider } from '@material-tailwind/react';
import { Web3ModalProvider } from './components/web3/Web3ModalProvider.tsx';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Web3ModalProvider>
                <App />
            </Web3ModalProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();