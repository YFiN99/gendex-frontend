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

// Optional: Kalau mau pakai private key test (local dev only, jangan commit!)
if (import.meta.env.DEV) {
  const privateKeyRaw = import.meta.env.VITE_PRIVATE_KEY;

  if (
    typeof privateKeyRaw === 'string' &&
    privateKeyRaw.startsWith('0x') &&
    privateKeyRaw.length === 66
  ) {
    try {
      const { createAccount } = await import('genlayer-js');
      const testAccount = createAccount({ privateKey: privateKeyRaw as `0x${string}` });
      walletClient.account = testAccount;
      console.log('Test private key loaded (DEV mode only)');
    } catch (err) {
      console.error('Gagal load private key:', err);
    }
  }
}
