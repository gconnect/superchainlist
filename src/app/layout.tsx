import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from "./providers";
import dynamic from "next/dynamic";
import { SideBar } from "./components/Sidebar/SideBar";
import { Header } from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({subsets: ['latin']})

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
      <body className={`${dmSans.className}`}>
      <StoreProvider>
      <Providers>
        <div className="flex">
          <div className="w-1/4">
            <SideBar/>
          </div>
          <div className="flex-grow">
            <div className="flex-shrink-0">
              <Header/>
            </div>
            {children}
          </div>
        </div>
      </Providers>        
      </StoreProvider>
      </body>
    </html>
  );
}
