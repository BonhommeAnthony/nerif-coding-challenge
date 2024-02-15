import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import { ContextProvider } from "@/context";
import Header from "@/components/header";

export const metadata: Metadata = {
    title: "nerif coding challenge",
    description: "nerif coding challenge",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const initialState = cookieToInitialState(config, headers().get("cookie"));
    return (
        <html lang="en">
            <body>
                <ContextProvider initialState={initialState}>
                    <Header />
                    {children}
                </ContextProvider>
            </body>
        </html>
    );
}
