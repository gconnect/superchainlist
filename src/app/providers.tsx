'use client';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { ConnectButton, darkTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import { useAppSelector } from './lib/hooks';
import StoreProvider from './StoreProvider';

const config = getDefaultConfig({
  appName: 'SuperchainList',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state: any) => state.theme.themeState);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
        theme={
          darkTheme({
          accentColor: `${theme ? "#B80018" : "#B80018"}`,
          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
          })}
        >
        <div className={`${theme ? "dark" : "light"}`}>
          {children}
        </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}