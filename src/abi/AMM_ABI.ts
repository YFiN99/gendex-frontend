export const AMM_ABI = [
  {
    name: 'get_reserves',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [
      { name: 'reserve0', type: 'uint256' },
      { name: 'reserve1', type: 'uint256' },
    ],
  },
  {
    name: 'add_liquidity',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'amount0', type: 'uint256' },
      { name: 'amount1', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    name: 'swap0_to1',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'amount_in', type: 'uint256' },
      { name: 'min_amount_out', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
  },
  // Tambah swap1_to0, remove_liquidity kalau perlu
] as const;