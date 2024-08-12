import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from "./providers";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperchainList",
  description: "Superchain Health Dashboard",
  openGraph: {
    title: "SuperchainList",
    images: []
  }
};
// setting ssr to false will make it persist
const StoreProvider = dynamic(() => import("@/StoreProvider"), {
  ssr: false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <Providers>
        <StoreProvider>
          {children}
        </StoreProvider>
      </Providers>
      </body>
    </html>
  );
}
