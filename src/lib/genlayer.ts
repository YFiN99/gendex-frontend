// src/lib/genlayer.ts

// ... kode atas tetap ...

const privateKeyRaw = import.meta.env.VITE_PRIVATE_KEY;

let account = undefined;

if (typeof privateKeyRaw === 'string' && privateKeyRaw.startsWith('0x')) {
  // Force assertion ke tipe yang diharapkan
  account = createAccount({ privateKey: privateKeyRaw as `0x${string}` });
} else {
  console.warn('Private key tidak valid atau tidak ada (harus mulai dengan 0x). Pakai MetaMask saja.');
  account = undefined;
}

// Lanjut export walletClient
export const walletClient = createClient({
  chain: getChain(),
  account,
});
