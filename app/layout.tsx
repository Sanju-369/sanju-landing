import { ReactNode } from "react";
import Head from "next/head";
import "./globals.css"; // ✅ Import global styles

export const metadata = {
  title: "Tube Trends",
  description: "YouTube Research",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ZZC8q4luOrUBcrBjClrqL__Gt9OrXRcfsnTtCcl6-u4" />
      </head>
      <body className="bg-[#fcdede] p-2 rounded-md flex items-center">
        {/* Tube Trend-style tab with logo and filename */}
        <div className="flex items-center bg-[#fcdede] px-3 py-1 rounded-md shadow-md">
          <img
            src="https://media-hosting.imagekit.io//a59e0786d1b84a56/Dark%20Green%20Modern%20Initial%20Logo%20(1).png?Expires=1834671916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ecOKI9nLnj6BM1ZaAE~JryouTtFAHq5eN0OKyJvP9xChi5E7vuoT7hQbVk~gLB2oPj8a72eA2PilJDfiIviggET3LF3uJ2yRdXw5hZ1dcR22JKue5NV2wkGHVaDpxwbl4G235NZeVsTOBf2E41XIJAtLqaLu95RuAypVPd7lw6VyVfimxq8e9f3iK3rxEKa0s~t1M9YY6spGxRjeLwItHAgoJ8~FBnnohD2YwnjD~~wjalNq~H7xgBR37XPLQ-dy9p-nv68L7WCj2H9GUE~c4ySz5HoJEDd6kyH2hrmUkQxaDXf7HAR2rUdC-sJEc1Zzo0CA6R5IsWJlPzoe~qhs9A__" // Replace with the actual URL
            alt="Tube Trend Logo"
            className="w-6 h-6 mr-2 rounded-full"
          />
          <span className="text-sm text-gray-700">sanju-landing/app/layout.tsx</span>
        </div>
        {children}
      </body>
    </html>
  );
}
