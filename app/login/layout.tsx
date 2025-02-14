"use client";

import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
               <meta name="google-site-verification" content="ZZC8q4luOrUBcrBjClrqL__Gt9OrXRcfsnTtCcl6-u4" />
            </Head>
            {children}
        </>
    );
}
