import { ReactNode } from "react";
import "./globals.css"; // ✅ Import global styles

export const metadata = {
  title: "TubeTrend",
  description: "YouTube Research",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="ZZC8q4luOrUBcrBjClrqL__Gt9OrXRcfsnTtCcl6-u4"
        />

        {/* Favicon set to 48x48 for Google Search Bar and browser tabs */}
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="https://media-hosting.imagekit.io//a59e0786d1b84a56/Dark%20Green%20Modern%20Initial%20Logo%20(1).png?Expires=1834671916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ecOKI9nLnj6BM1ZaAE~JryouTtFAHq5eN0OKyJvP9xChi5E7vuoT7hQbVk~gLB2oPj8a72eA2PilJDfiIviggET3LF3uJ2yRdXw5hZ1dcR22JKue5NV2wkGHVaDpxwbl4G235NZeVsTOBf2E41XIJAtLqaLu95RuAypVPd7lw6VyVfimxq8e9f3iK3rxEKa0s~t1M9YY6spGxRjeLwItHAgoJ8~FBnnohD2YwnjD~~wjalNq~H7xgBR37XPLQ-dy9p-nv68L7WCj2H9GUE~c4ySz5HoJEDd6kyH2hrmUkQxaDXf7HAR2rUdC-sJEc1Zzo0CA6R5IsWJlPzoe~qhs9A__"
        />

        {/* Apple Touch Icon for iOS devices */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://media-hosting.imagekit.io//a59e0786d1b84a56/Dark%20Green%20Modern%20Initial%20Logo%20(1).png?Expires=1834671916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ecOKI9nLnj6BM1ZaAE~JryouTtFAHq5eN0OKyJvP9xChi5E7vuoT7hQbVk~gLB2oPj8a72eA2PilJDfiIviggET3LF3uJ2yRdXw5hZ1dcR22JKue5NV2wkGHVaDpxwbl4G235NZeVsTOBf2E41XIJAtLqaLu95RuAypVPd7lw6VyVfimxq8e9f3iK3rxEKa0s~t1M9YY6spGxRjeLwItHAgoJ8~FBnnohD2YwnjD~~wjalNq~H7xgBR37XPLQ-dy9p-nv68L7WCj2H9GUE~c4ySz5HoJEDd6kyH2hrmUkQxaDXf7HAR2rUdC-sJEc1Zzo0CA6R5IsWJlPzoe~qhs9A__"
        />

      </head>
      <body>{children}</body>
    </html>
  );
}
