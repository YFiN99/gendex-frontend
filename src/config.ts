// src/config.ts
import { createConfig, http } from 'wagmi';
import { defineChain } from 'viem';
import { metaMask, injected } from 'wagmi/connectors';

export const genlayerTestnet = defineChain({
  id: 4221,
  name: 'GenLayer Testnet (Caldera)',
  nativeCurrency: {
    name: 'GEN',
    symbol: 'GEN',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://genlayer-testnet.rpc.caldera.xyz/http'],
    },
    public: {
      http: ['https://genlayer-testnet.rpc.caldera.xyz/http'],
    },
  },
  testnet: true,
});

export const config = createConfig({
  chains: [genlayerTestnet],
  transports: {
    [genlayerTestnet.id]: http(),
  },
  connectors: [
    metaMask(),
    injected(),
  ],
});