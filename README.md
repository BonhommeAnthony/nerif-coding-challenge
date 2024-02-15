# Nerif Coding Challenge

## Introduction
This project is a Next.js application designed for the Nerif coding challenge. It enables users to interact with the `GatewayFactory` smart contract deployed on the Polygon Mumbai testnet. Users can deploy a new gateway contract and view the address of the deployed contract.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js version 14.x or later installed on your system.
- An Ethereum wallet compatible with WalletConnect, such as MetaMask, installed in your browser.
- Access to the Polygon Mumbai testnet in your Ethereum wallet.

## Installation

To install the project, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/BonhommeAnthony/nerif-coding-challenge.git
cd nerif-coding-challenge
```

2. Install the necessary dependencies:
```bash
npm install
```

3. Create a `.env.local` file at the root of your project and add the following line:
```env
NEXT_PUBLIC_PROJECT_ID=your_project_id_here
```
Replace `your_project_id_here` with your actual project ID obtained from [WalletConnect Cloud](https://cloud.walletconnect.com).

## Usage

To run the application locally, follow these steps:

1. Start the development server:
```bash
npm run dev
```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Connect your web3 wallet using the Connect Wallet button.

4. Deploy a new gateway by clicking the Deploy New Gateway button. The address of the deployed gateway will be displayed on the UI.

### Deploying a New Gateway
- Click the "Deploy New Gateway" button to initiate the deployment process.
- Approve the transaction in your web3 wallet.
- Once the transaction is confirmed, the address of the newly deployed gateway will be displayed on the screen and saved to local storage for future reference.

You can also view the live version of the project at [Nerif Coding Challenge Live](https://nerif-coding-challenge.vercel.app/).


## License
This project is licensed under the MIT License - see the LICENSE file for details.
