import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import BootstrapClient from "./components/BootstrapClient";
import "./globals.css";
import React from "react";
import { ReactQueryClientProvider } from "./components/ReactQueryClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <BootstrapClient />
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}

