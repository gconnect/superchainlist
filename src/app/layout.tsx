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
const ReduxProvider = dynamic(() => import("@/store/reduxProviders"), {
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
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </Providers>
      </body>
    </html>
  );
}
