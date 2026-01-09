import { useReadContract, useWriteContract } from 'wagmi';

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS as `0x${string}`;

const AMM_ABI = [
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
] as const;

export const useGetReserves = () => {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: AMM_ABI,
    functionName: 'get_reserves',
  });
};

export const useAddLiquidity = () => {
  const { writeContract } = useWriteContract();

  return {
    addLiquidity: (amount0: bigint, amount1: bigint) =>
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: AMM_ABI,
        functionName: 'add_liquidity',
        args: [amount0, amount1],
      }),
  };
};

export const useSwap0To1 = () => {
  const { writeContract } = useWriteContract();

  return {
    swap: (amountIn: bigint, minOut: bigint = 0n) =>
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: AMM_ABI,
        functionName: 'swap0_to1',
        args: [amountIn, minOut],
      }),
  };
};