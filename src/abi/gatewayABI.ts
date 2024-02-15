export const abi = [
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: "address", name: "gatewayAddr", type: "address" },
            { indexed: false, internalType: "address", name: "gatewayOwnerAddr", type: "address" },
        ],
        name: "GatewayDeployed",
        type: "event",
    },
    {
        inputs: [{ internalType: "address", name: "_gatewayOwner", type: "address" }],
        name: "deployGateway",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "nonpayable",
        type: "function",
    },
] as const;
