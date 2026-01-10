// src/lib/genlayer.ts
import { createClient } from 'genlayer-js';
import { defineChain } from 'viem';

// Custom chain GenLayer Testnet Caldera (Chain ID 4221)
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
