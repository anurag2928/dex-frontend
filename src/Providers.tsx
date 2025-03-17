import * as React from "react";
import { midnightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import { config } from "./config";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider showRecentTransactions={true} initialChain={base}>
          {children}
        </RainbowKitProvider>{" "}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
