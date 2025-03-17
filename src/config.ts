import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { polygon, base, arbitrum, mainnet } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
