// src/lib/genlayer.ts

// ... kode atas tetap ...

const privateKeyRaw = import.meta.env.VITE_PRIVATE_KEY;

// Ganti jadi:
let account = undefined; // Pakai wallet connect (MetaMask)

export const walletClient = createClient({
  chain: getChain(),
  account,
});

// Lanjut export walletClient
export const walletClient = createClient({
  chain: getChain(),
  account,
});
