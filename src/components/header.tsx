import * as React from "react";
import ConnectButton from "./connect-button";

export default function Header(): JSX.Element {
    return (
        <header className="absolute w-full flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold">Nerif</h1>
            <nav>
                <ConnectButton />
            </nav>
        </header>
    );
}
