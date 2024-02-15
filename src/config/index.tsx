import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { mainnet, polygonMumbai, sepolia } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
export const config = defaultWagmiConfig({
    chains: [polygonMumbai],
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    enableWalletConnect: true,
    enableInjected: true,
    enableEIP6963: true,
    enableCoinbase: true,
});
