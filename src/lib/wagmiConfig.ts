import { createConfig, http } from 'wagmi';
import { defineChain } from 'viem';
import { metaMask, walletConnect, injected } from 'wagmi/connectors';

// Custom chain GenLayer Caldera Testnet
export const genlayerTestnet = defineChain({
  id: 4221,
  name: 'GenLayer Testnet (Caldera)',
  nativeCurrency: { name: 'GEN', symbol: 'GEN', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://genlayer-testnet.rpc.caldera.xyz/http'] },
    public: { http: ['https://genlayer-testnet.rpc.caldera.xyz/http'] },
  },
  testnet: true,
});

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'; // Dapetin gratis di https://cloud.walletconnect.com (optional kalau cuma pakai MetaMask)

export const config = createConfig({
  chains: [genlayerTestnet],
  transports: {
    [genlayerTestnet.id]: http(),
  },
  connectors: [
    metaMask(),          // MetaMask
    injected(),          // Injected (browser wallets lain)
    walletConnect({ projectId }), // Optional: WalletConnect untuk mobile
  ],
  ssr: true, // Optional: kalau ada SSR
});