import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParallaxClientProvider from "./parallaxprovider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body data-overlayscrollbars-initialize="">
        <ParallaxClientProvider>{children}</ParallaxClientProvider>
      </body>
    </html>
  );
}
