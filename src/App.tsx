import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useGetReserves, useAddLiquidity, useSwap0To1 } from './hooks/useAMM';
import { useState } from 'react';

function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  // ... kode ConnectWallet lengkap dari pesan sebelumnya ...

  // (paste seluruh function ConnectWallet di sini)
}

function App() {
  const { data: reservesData, isLoading: reservesLoading } = useGetReserves();
  const { addLiquidity } = useAddLiquidity();
  const { swap } = useSwap0To1();

  const [amount0, setAmount0] = useState('');
  const [amount1, setAmount1] = useState('');
  const [swapIn, setSwapIn] = useState('');

  const reserves = reservesData ? reservesData : [0n, 0n];
  const [res0, res1] = reserves;

  if (reservesLoading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading reserves...</div>;

  return (
    <div style={{ padding: '30px', maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Gendex DEX AMM</h1>

      <ConnectWallet />

      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '12px', margin: '20px 0' }}>
        <h2 style={{ textAlign: 'center' }}>
          Reserves: {res0.toString()} Token0 / {res1.toString()} Token1
        </h2>
      </div>

      {/* ... sisanya input Add Liquidity dan Swap seperti sebelumnya ... */}
    </div>
  );
}

export default App;  // <-- PASTIKAN BARIS INI ADA DI PALING BAWAH!