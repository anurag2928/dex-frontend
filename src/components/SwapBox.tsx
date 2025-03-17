import { useEffect, useState } from "react";
import { formatUnits, parseUnits } from "ethers";
import {
  useReadContract,
  useSimulateContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { erc20Abi, Address } from "viem";
import { MAX_ALLOWANCE, AFFILIATE_FEE, FEE_RECIPIENT } from "../constants";
import qs from "qs";
import { getBalance } from "@wagmi/core";
import { config } from "../config";
import { getPrice } from "../api/0x";
import SwapCard from "./SwapCard";

export const DEFAULT_BUY_TOKEN = (chainId: number) => {
  if (chainId === 1) {
    return "weth";
  }
};

export default function SwapBox({
  set_tokens_by_symbol,
  BASE_TOKENS_BY_SYMBOL,
  set_tokens,
  set_tokens_by_address,
  BASE_TOKENS,
  price,
  taker,
  setPrice,
  setFinalize,
  chainId,
  showSelectToken,
  setshowSelectToken,
}: {
  set_tokens_by_symbol: any;
  BASE_TOKENS_BY_SYMBOL: any;
  set_tokens: any;
  set_tokens_by_address: any;
  BASE_TOKENS: any;
  price: any;
  taker: Address;
  setPrice: (price: any) => void;
  setFinalize: (finalize: boolean) => void;
  chainId: number;
  showSelectToken: any;
  setshowSelectToken: any;
}) {
  const [sellToken, setSellToken] = useState("eth");
  const [buyToken, setBuyToken] = useState("usdc");
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");
  const [tradeDirection, setTradeDirection] = useState("sell");
  const [error, setError] = useState([]);
  const [inSufficientBalance, setinSufficientBalance] = useState(true);
  const [loadingPrice, setLoadingprice] = useState(false);
  const [buyTokenTax, setBuyTokenTax] = useState({
    buyTaxBps: "0",
    sellTaxBps: "0",
  });
  const [sellTokenTax, setSellTokenTax] = useState({
    buyTaxBps: "0",
    sellTaxBps: "0",
  });

  const tokensByChain = (chainId: number) => {
    if (chainId === 1) {
      return BASE_TOKENS_BY_SYMBOL;
    }
    return BASE_TOKENS_BY_SYMBOL;
  };

  const sellTokenObject = tokensByChain(chainId)[sellToken];
  const buyTokenObject = tokensByChain(chainId)[buyToken];

  const sellTokenDecimals = sellTokenObject.decimals;
  const buyTokenDecimals = buyTokenObject.decimals;
  const sellTokenAddress = sellTokenObject.address;

  const parsedSellAmount =
    sellAmount && tradeDirection === "sell"
      ? parseUnits(sellAmount, sellTokenDecimals).toString()
      : undefined;

  const parsedBuyAmount =
    buyAmount && tradeDirection === "buy"
      ? parseUnits(buyAmount, buyTokenDecimals).toString()
      : undefined;

  async function main() {
    const params = {
      chainId: chainId,
      sellToken: sellTokenObject.address,
      buyToken: buyTokenObject.address,
      sellAmount: parsedSellAmount,
      buyAmount: parsedBuyAmount,
      taker,
      swapFeeRecipient: FEE_RECIPIENT,
      swapFeeBps: AFFILIATE_FEE,
      swapFeeToken: buyTokenObject.address,
      tradeSurplusRecipient: FEE_RECIPIENT,
    };
    setLoadingprice(true);
    const data: any = await getPrice(`${qs.stringify(params)}`);
    setPrice(data);
    if (data?.validationErrors?.length > 0) {
      setError(data.validationErrors);
    } else {
      setError([]);
    }
    console.log("data", data);
    if (data.buyAmount) {
      setBuyAmount(formatUnits(data.buyAmount, buyTokenDecimals));
    }
    if (data?.tokenMetadata) {
      setBuyTokenTax(data.tokenMetadata.buyToken);
      setSellTokenTax(data.tokenMetadata.sellToken);
    }
    setLoadingprice(false);
  }

  // Fetch price data and set the buyAmount whenever the sellAmount changes
  useEffect(() => {
    setBuyAmount("");

    if (sellAmount !== "") {
      main();
    }

    const checkTokenbalance = async () => {
      const balance =
        sellTokenObject.address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
          ? await getBalance(config, {
              address: taker,
            })
          : await getBalance(config, {
              address: taker,
              token: sellTokenObject.address,
            });

      const _inSufficientBalance = sellAmount
        ? parseUnits(sellAmount, sellTokenDecimals) > balance.value
        : true;
      setinSufficientBalance(_inSufficientBalance);
    };
    checkTokenbalance();
  }, [
    buyToken,
    sellToken,
    sellTokenObject.address,
    buyTokenObject.address,
    parsedSellAmount,
    parsedBuyAmount,
    chainId,
    sellAmount,
    setPrice,
    FEE_RECIPIENT,
    AFFILIATE_FEE,
  ]);

  return (
    <div className="max-w-xl mx-auto mt-20 px-4">
      <h1 className="text-6xl font-bold text-center mb-16">
        Swap anytime,
        <br />
        anywhere.
      </h1>
      <SwapCard
        set_tokens_by_symbol={set_tokens_by_symbol}
        set_tokens={set_tokens}
        set_tokens_by_address={set_tokens_by_address}
        showSelectToken={showSelectToken}
        setshowSelectToken={setshowSelectToken}
        setBuyToken={setBuyToken}
        setSellToken={setSellToken}
        sellAmount={sellAmount}
        setSellAmount={setSellAmount}
        buyAmount={buyAmount}
        buyToken={buyToken}
        setBuyAmount={setBuyAmount}
        taker={taker}
        inSufficientBalance={inSufficientBalance}
        TOKENS_BY_SYMBOL={BASE_TOKENS_BY_SYMBOL}
        TOKENS_ARRAY={BASE_TOKENS}
        sellToken={sellToken}
        price={price}
        setFinalize={setFinalize}
        ApproveOrReviewButton={ApproveOrReviewButton}
      />
      <p className="text-center text-gray-500 mt-6">
        The largest onchain marketplace. Buy and sell crypto
        <br />
        on Ethereum with 210+ tokens.
      </p>
    </div>
  );

  function ApproveOrReviewButton({
    taker,
    onClick,
    sellTokenAddress,
    disabled,
    price,
  }: {
    taker: Address;
    onClick: () => void;
    sellTokenAddress: Address;
    disabled?: boolean;
    price: any;
  }) {
    // If price.issues.allowance is null, show the Review Trade button

    console.log("price allowance check");
    console.log(price);

    if (sellAmount == "")
      if (!price || loadingPrice) {
        return (
          <button
            type="button"
            disabled={true}
            onClick={() => {
              // fetch data, when finished, show quote view
              onClick();
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 mt-4 font-semibold"
          >
            {"Enteer a value"}
          </button>
        );
      }

    if (Number(sellAmount) == 0)
      if (!price || loadingPrice) {
        return (
          <button
            type="button"
            disabled={true}
            onClick={() => {
              // fetch data, when finished, show quote view
              onClick();
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 mt-4 font-semibold"
          >
            {"Value cannot be 0"}
          </button>
        );
      }

    if (!price || loadingPrice) {
      return (
        <button
          type="button"
          disabled={true}
          onClick={() => {
            // fetch data, when finished, show quote view
            onClick();
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 mt-4 font-semibold"
        >
          {"Fetching Price"}
        </button>
      );
    }

    if (price?.issues.allowance === null) {
      return (
        <button
          type="button"
          disabled={disabled}
          onClick={() => {
            // fetch data, when finished, show quote view
            onClick();
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 mt-4 font-semibold"
        >
          {disabled ? "Insufficient Balance" : "Review Trade"}
        </button>
      );
    }

    // Determine the spender from price.issues.allowance
    const spender = price?.issues.allowance.spender;

    // 1. Read from erc20, check approval for the determined spender to spend sellToken
    const { data: allowance, refetch } = useReadContract({
      address: sellTokenAddress,
      abi: erc20Abi,
      functionName: "allowance",
      args: [taker, spender],
    });

    // 2. (only if no allowance): write to erc20, approve token allowance for the determined spender
    const { data } = useSimulateContract({
      address: sellTokenAddress,
      abi: erc20Abi,
      functionName: "approve",
      args: [spender, MAX_ALLOWANCE],
    });

    // Define useWriteContract for the 'approve' operation
    const {
      data: writeContractResult,
      writeContractAsync: writeContract,
      error,
    } = useWriteContract();

    // useWaitForTransactionReceipt to wait for the approval transaction to complete
    const { data: approvalReceiptData, isLoading: isApproving } =
      useWaitForTransactionReceipt({
        hash: writeContractResult,
      });

    // Call `refetch` when the transaction succeeds
    useEffect(() => {
      if (data) {
        refetch();
      }
    }, [data, refetch]);

    if (error) {
      return <div>Something went wrong: {error.message}</div>;
    }

    if (allowance === 0n) {
      return (
        <>
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 mt-4 font-semibold"
            onClick={async () => {
              await writeContract({
                abi: erc20Abi,
                address: sellTokenAddress,
                functionName: "approve",
                args: [spender, MAX_ALLOWANCE],
              });

              refetch();
            }}
          >
            {isApproving ? "Approving…" : "Approve"}
          </button>
        </>
      );
    }

    return (
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          // fetch data, when finished, show quote view
          onClick();
        }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 mt-4 font-semibold"
      >
        {disabled ? "Insufficient Balance" : "Review Trade"}
      </button>
    );
  }
}
