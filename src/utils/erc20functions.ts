import { ethers } from "ethers";
import { erc20ABI } from "./erc20abi";

export const getTokenDetails = async (
  rpc_provider: string,
  token_address_address: string,
) => {
  const provider = new ethers.JsonRpcProvider(rpc_provider);
  const contract = new ethers.Contract(
    token_address_address,
    erc20ABI,
    provider
  );
  let decimals = await contract.decimals();
  let name = await contract.name();
  let symbol = await contract.symbol();
  console.log(decimals)
  return {
    decimals,
    name,
    symbol,
  };
};
