import Head from "next/head";
import React, { ChangeEvent } from "react";
import Header from "./Header";

export default function Layout(
    { children, onLangChange }:
        { children: React.ReactNode, onLangChange: (e: ChangeEvent<HTMLSelectElement>) => void }) {
    return (
        <>
            <Head>
                <title>FLF RSVP</title>
            </Head>
            <Header onLangChange={onLangChange} />
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}