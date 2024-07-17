# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# GO DAO VOTE
## Описание проекта
GO DAO VOTE - это платформа для голосования на базе DAO 
(Decentralized Autonomous Organization), использующая Web3Modal 
для подключения кошельков пользователей. Проект поддерживает 
несколько блокчейнов, включая Ethereum, Binance Smart Chain, 
Decimal Smart Chain и Telegram Open Network (TON).

## Задачи проекта
- Реализовать интерфейс для голосования с использованием технологии блокчейн.
- Обеспечить безопасное и удобное подключение кошельков пользователей с помощью Web3Modal.
- Поддержка различных блокчейнов для гибкости и масштабируемости.

## Поддерживаемые блокчейны и настройки сетей
1.  Ethereum Mainnet 
2. Binance Smart Chain Mainnet 
3. Decimal Smart Chain Mainnet 
4. Telegram Open Network (TON)


## Проблема с кнопкой "Connect Wallet"
- Описание проблемы
При попытке использовать компонент `ConnectButton` для подключения кошелька возникают следующие проблемы:
1. Ошибки в Web3ModelProvider.tsx
2. Ошибка TypeScript:TS2339: Property 'w3m-button' does not exist on type 'JSX.IntrinsicElements'.
2. Ошибка при импорте компонента `ConnectButton` в файл `Navbar.js`:Cannot find module './ConnectButton'

- Что нужно сделать
1. Исправить ошибки TypeScript, чтобы компонент `w3m-button` корректно распознавался как JSX элемент.
2. Убедиться, что компонент `ConnectButton` правильно импортируется и используется в файле `Navbar.js`.
3. Проверить и настроить Webpack/TypeScript для корректной работы с файлами `.tsx`.
4. Встроить поддержку сетей
- **Имя сети:** Ethereum Mainnet
- **URL сети:** https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
- **ID блокчейна:** 1
- **Символ валюты:** ETH
- **URL блок-эксплорера:** https://etherscan.io

### Binance Smart Chain Mainnet
- **Имя сети:** Binance Smart Chain Mainnet
- **URL сети:** https://bsc-dataseed.binance.org/
- **ID блокчейна:** 56
- **Символ валюты:** BNB
- **URL блок-эксплорера:** https://bscscan.com

### Decimal Smart Chain Mainnet
- **Имя сети:** Decimal Smart Chain Mainnet
- **URL сети:** https://node.decimalchain.com/web3
- **ID блокчейна:** 75
- **Символ валюты:** DEL


## Инструкция по созданию компонента ConnectButton
- [Документация WalletConnect](https://docs.walletconnect.com/appkit/react/core/installation)

