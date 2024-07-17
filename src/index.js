import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Web3ModalProvider} from "./components/Web3ModalProvider";


ReactDOM.render(
    <React.StrictMode>
        <Web3ModalProvider>
            <App/>
        </Web3ModalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
