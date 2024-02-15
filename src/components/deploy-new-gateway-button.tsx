"use client";
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "../abi/gatewayABI";
import ConnectButton from "./connect-button";
import { useEffect, useState } from "react";

const GATEWAY_FACTORY_ADDRESS = "0x4c91065597eE71D9711F998bcaf8BefB0b0E9392";

export default function DeployNewGatewayButton() {
    const [gateway, setGateway] = useState("");
    const { address, isConnected } = useAccount();
    console.log("🚀 ~ DeployNewGatewayButton ~ isConnected:", isConnected);
    const { writeContract, isError, isPending, isSuccess, data } = useWriteContract();

    useEffect(() => {
        const currGateway = localStorage.getItem("gateway");
        if (currGateway && isConnected) {
            setGateway(currGateway);
        }
    }, [isConnected, data]);

    const handleDeployGateway = () => {
        if (!address) return;
        writeContract(
            {
                abi,
                address: GATEWAY_FACTORY_ADDRESS,
                functionName: "deployGateway",
                args: [address],
            },
            {
                onSuccess: (data) => {
                    localStorage.setItem("gateway", String(data));
                },
                onError: (error) => {
                    console.error("Error deploying gateway", error);
                },
            }
        );
    };

    if (!isConnected) return <ConnectButton />;

    return (
        <div className="container flex flex-col justify-center items-center gap-3 ">
            <button onClick={handleDeployGateway} className="border p-4 rounded-lg bg-blue-500 hover:bg-blue-300 ">
                Deploy new gateway
            </button>
            {isError && <div>Error deploying gateway</div>}
            {isPending && <div>Deploying gateway...</div>}
            {isSuccess && <div>Gateway deployed!</div>}
            {gateway && (
                <>
                    <p>Gateway address: </p>
                    <p className=" break-words overflow-hidden ">{gateway}</p>
                </>
            )}
            {/* {gateway && <div >Gateway address: {gateway}</div>} */}
        </div>
    );
}
