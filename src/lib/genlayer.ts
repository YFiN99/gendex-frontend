// src/lib/genlayer.ts

// ... kode lain tetap ...

const privateKeyRaw = import.meta.env.VITE_PRIVATE_KEY;

let account = undefined;

if (privateKeyRaw && typeof privateKeyRaw === 'string' && privateKeyRaw.startsWith('0x')) {
  account = createAccount({ privateKey: privateKeyRaw as `0x${string}` });
} else {
  console.warn('Private key tidak valid atau tidak ada. Pakai wallet connect saja.');
  account = undefined; // Biar pakai MetaMask/WalletConnect
}

// Lalu lanjut walletClient seperti biasa
export const walletClient = createClient({
  chain: getChain(),
  account,
});
