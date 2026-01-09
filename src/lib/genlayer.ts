// src/lib/genlayer.ts
import { createClient, createAccount } from 'genlayer-js';
import { defineChain } from 'viem'; // Import ini dari viem

// Define custom chain berdasarkan RPC & chain ID mu
export const genlayerCalderaTestnet = defineChain({
  id: 4221, // Chain ID mu
  name: 'GenLayer Testnet (Caldera)',
  nativeCurrency: {
    decimals: 18,
    name: 'GEN', // Asumsi native token GEN, bisa ganti kalau beda
    symbol: 'GEN',
  },
  rpcUrls: {
    default: { http: ['https://genlayer-testnet.rpc.caldera.xyz/http'] },
    public: { http: ['https://genlayer-testnet.rpc.caldera.xyz/http'] },
  },
  blockExplorers: {
    default: { name: 'GenLayer Explorer', url: 'https://explorer-asimov.genlayer.com' }, // Atau update kalau ada explorer spesifik
  },
  // Optional: testnet flag
  testnet: true,
});

// Export chain ini untuk dipake
export const getChain = () => genlayerCalderaTestnet;

// Public client (read-only)
export const publicClient = createClient({
  chain: getChain(),
});

// Wallet client (untuk write tx, butuh account)
const privateKey = import.meta.env.VITE_PRIVATE_KEY; // Optional, test only! Jangan commit
let account = privateKey ? createAccount({ privateKey }) : undefined;

export const walletClient = createClient({
  chain: getChain(),
  account, // Kalau undefined, nanti pakai MetaMask/wallet connect
});