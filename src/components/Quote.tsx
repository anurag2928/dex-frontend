import { useEffect } from "react";
import { formatUnits } from "ethers";
import {
  useSignTypedData,
  useSendTransaction,
  useWaitForTransactionReceipt,
  useWalletClient,
} from "wagmi";
import { Address, concat, numberToHex, size, type Hex } from "viem";
import type { PriceResponse, QuoteResponse } from "../../src/utils/types";
import { AFFILIATE_FEE, FEE_RECIPIENT } from "../../src/constants";
import qs from "qs";
import { getQuote } from "../api/0x";
import ConfirmationReceipt from "./Reciept";

export default function QuoteView({
  BASE_TOKENS_BY_ADDRESS,
  taker,
  price,
  quote,
  setQuote,
  chainId,
  onClose,
}: {
  BASE_TOKENS_BY_ADDRESS: any;
  taker: Address | undefined;
  price: PriceResponse;
  quote: QuoteResponse | undefined;
  setQuote: (price: any) => void;
  chainId: number;
  onClose: any;
}) {
  const sellTokenInfo = (chainId: number) => {
    if (chainId === 1) {
      return BASE_TOKENS_BY_ADDRESS[price.sellToken.toLowerCase()];
    }
    return BASE_TOKENS_BY_ADDRESS[price.sellToken.toLowerCase()];
  };

  const buyTokenInfo = (chainId: number) => {
    if (chainId === 1) {
      return BASE_TOKENS_BY_ADDRESS[price.buyToken.toLowerCase()];
    }
    return BASE_TOKENS_BY_ADDRESS[price.buyToken.toLowerCase()];
  };

  const { signTypedDataAsync } = useSignTypedData();
  const { data: walletClient } = useWalletClient();
  console.log(
    "buyTokenInfo",
    BASE_TOKENS_BY_ADDRESS[price.buyToken.toLowerCase()]
  );
  // Fetch quote data
  useEffect(() => {
    const params = {
      chainId: chainId,
      sellToken: price.sellToken,
      buyToken: price.buyToken,
      sellAmount: price.sellAmount,
      taker,
      swapFeeRecipient: FEE_RECIPIENT,
      swapFeeBps: AFFILIATE_FEE,
      swapFeeToken: price.buyToken,
      tradeSurplusRecipient: FEE_RECIPIENT,
    };

    async function main() {
      const data = await getQuote(`${qs.stringify(params)}`);
      setQuote(data);
    }
    main();
  }, [
    chainId,
    price.sellToken,
    price.buyToken,
    price.sellAmount,
    taker,
    setQuote,
    FEE_RECIPIENT,
    AFFILIATE_FEE,
  ]);

  const {
    data: hash,
    isPending,
   // error,
    sendTransaction,
  } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  if (!quote) {
    return <div>Getting best quote...</div>;
  }

  const handleConfirmClick = async () => {
    if (quote.permit2?.eip712) {
      let signature: Hex | undefined;
      try {
        signature = await signTypedDataAsync(quote.permit2.eip712);
        console.log("Signed permit2 message from quote response");
      } catch (error) {
        console.error("Error signing permit2 coupon:", error);
      }
      if (signature && quote?.transaction?.data) {
        const signatureLengthInHex = numberToHex(size(signature), {
          signed: false,
          size: 32,
        });

        const transactionData = quote.transaction.data as Hex;
        const sigLengthHex = signatureLengthInHex as Hex;
        const sig = signature as Hex;

        quote.transaction.data = concat([transactionData, sigLengthHex, sig]);
      } else {
        throw new Error("Failed to obtain signature or transaction data");
      }
    }

    // (3) Submit the transaction with Permit2 signature

    sendTransaction &&
      sendTransaction({
        account: walletClient?.account.address,
        gas: !!quote?.transaction.gas
          ? BigInt(quote?.transaction.gas)
          : undefined,
        to: quote?.transaction.to,
        data: quote.transaction.data, // submit
        value: quote?.transaction.value
          ? BigInt(quote.transaction.value)
          : undefined, // value is used for native tokens
        chainId: chainId,
      });
  };

  return (
    <div>
      <ConfirmationReceipt
        totalNetworkFee={quote.totalNetworkFee}
        sellAmount={formatUnits(
          quote.sellAmount,
          sellTokenInfo(chainId)?.decimals
        )}
        buyAmount={formatUnits(
          quote.buyAmount,
          buyTokenInfo(chainId)?.decimals
        )}
        onClose={onClose}
        sellToken={BASE_TOKENS_BY_ADDRESS[price.sellToken.toLowerCase()]}
        buyToken={BASE_TOKENS_BY_ADDRESS[price.buyToken.toLowerCase()]}
        handleConfirmClick={handleConfirmClick}
        isPending={isPending}
        isConfirming={isConfirming}
        hash={hash}
        isConfirmed={isConfirmed}
      />
    </div>
  );
}
