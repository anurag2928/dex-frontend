import { useEffect, useState } from "react";
import { useAccount, useChainId } from "wagmi";

import type { PriceResponse } from "../src/utils/types";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import SwapBox from "./components/SwapBox";
import QuoteView from "./components/Quote";
import Navigation from "./components/Navigation";
import {
  BASE_TOKENS,
  BASE_TOKENS_BY_ADDRESS,
  BASE_TOKENS_BY_SYMBOL,
} from "./constants";

function App() {
  const { address } = useAccount();

  const chainId = useChainId() || 1;
  console.log("chainId: ", chainId);

  const [finalize, setFinalize] = useState(false);
  const [showSelectToken, setshowSelectToken] = useState(false);
  const [price, setPrice] = useState<PriceResponse | undefined>();
  const [quote, setQuote] = useState();
  const [tokens, set_tokens] = useState(BASE_TOKENS);
  const [tokens_by_address, set_tokens_by_address] = useState(
    BASE_TOKENS_BY_ADDRESS
  );
  const [tokens_by_symbol, set_tokens_by_symbol] = useState(
    BASE_TOKENS_BY_SYMBOL
  );
  useEffect(() => {
    console.log(tokens_by_address);
  }, [tokens_by_address, tokens]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation setshowSelectToken={setshowSelectToken} />

      {finalize && price ? (
        <QuoteView
          BASE_TOKENS_BY_ADDRESS={tokens_by_address}
          taker={address}
          onClose={() => setFinalize(false)}
          price={price}
          quote={quote}
          setQuote={setQuote}
          chainId={chainId}
        />
      ) : (
        <SwapBox
          BASE_TOKENS_BY_SYMBOL={tokens_by_symbol}
          set_tokens_by_symbol= {set_tokens_by_symbol}
          set_tokens={set_tokens}
          set_tokens_by_address={set_tokens_by_address}
          BASE_TOKENS={tokens}
          showSelectToken={showSelectToken}
          setshowSelectToken={setshowSelectToken}
          //@ts-ignore
          taker={address}
          price={price}
          setPrice={setPrice}
          setFinalize={setFinalize}
          chainId={chainId}
        />
      )}
      {/* Decorative Blurs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-green-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default App;
