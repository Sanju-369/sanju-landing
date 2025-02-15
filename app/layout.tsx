import { ReactNode } from "react";
import Head from "next/head";
import "./globals.css"; // ✅ Import global styles

export const metadata = {
  title: "TubeTrend",
  description: "YouTube Research",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification Meta Tag */}
        <meta name="google-site-verification" content="ZZC8q4luOrUBcrBjClrqL__Gt9OrXRcfsnTtCcl6-u4" />
      </head>
      <body>{children}</body>
    </html>
  );
}
