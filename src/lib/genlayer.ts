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

// Fungsi untuk ambil chain
export const getChain = () => genlayerTestnet;

// Public client (untuk read-only seperti get_reserves)
export const publicClient = createClient({
  chain: getChain(),
});

// Wallet client (untuk write tx seperti add_liquidity/swap)
// Pakai MetaMask/WalletConnect secara default (account dari connector)
export const walletClient = createClient({
  chain: getChain(),
  // Account undefined = pakai wallet connect (MetaMask dll)
  // JANGAN pakai private key hardcode di production!
  account: undefined,
});
    }
  }
}
