// src/lib/genlayer.ts
// ... kode atas tetap ...

const privateKeyRaw = import.meta.env.VITE_PRIVATE_KEY;

// Gunakan type guard supaya TS aman
let account = undefined;

if (
  privateKeyRaw &&
  typeof privateKeyRaw === 'string' &&
  privateKeyRaw.startsWith('0x') &&
  privateKeyRaw.length === 66 // 0x + 64 hex chars
) {
  account = createAccount({ privateKey: privateKeyRaw as `0x${string}` });
} else {
  console.warn('Private key invalid atau tidak ada. Pakai MetaMask/WalletConnect saja.');
  account = undefined; // Default ke wallet connect
}

// Lanjut walletClient seperti biasa
export const walletClient = createClient({
  chain: getChain(),
  account,
});
