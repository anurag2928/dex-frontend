import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChevronDown, ArrowDownUp } from "lucide-react";
import { Address } from "viem";
import SelectToken from "./SelectToken";
import { useState } from "react";

const SwapCard = ({
  set_tokens_by_symbol,
  set_tokens,
  set_tokens_by_address,
  sellAmount,
  setSellAmount,
  buyAmount,
  setBuyAmount,
  taker,
  inSufficientBalance,
  TOKENS_BY_SYMBOL,
  TOKENS_ARRAY,
  sellToken,
  price,
  setFinalize,
  buyToken,
  ApproveOrReviewButton,
  setSellToken,
  setBuyToken,
  showSelectToken,
  setshowSelectToken,
}: {
  set_tokens_by_symbol: any;
  set_tokens: any;
  set_tokens_by_address: any;
  sellAmount: string;
  setSellAmount: React.Dispatch<React.SetStateAction<string>>;
  buyAmount: string;
  setBuyAmount: React.Dispatch<React.SetStateAction<string>>;
  taker: Address;
  inSufficientBalance: boolean;
  TOKENS_BY_SYMBOL: any;
  TOKENS_ARRAY: any;
  sellToken: string;
  price: any;
  setFinalize: any;
  buyToken: string;
  ApproveOrReviewButton: any;
  setSellToken: React.Dispatch<React.SetStateAction<string>>;
  setBuyToken: React.Dispatch<React.SetStateAction<string>>;
  showSelectToken: any;
  setshowSelectToken: any;
}) => {
  const [currentOpenSelection, setcurrentOpenSelection] = useState(1); // 1 = first box, 2 = second box

  const handleSelectTokenClickSell = () => {
    setcurrentOpenSelection(1);
    setshowSelectToken(true);
  };

  const handleSelectTokenClickBuy = () => {
    setcurrentOpenSelection(2);
    setshowSelectToken(true);
  };

  const handleSelectToken = (arg: any) => {
    if (currentOpenSelection == 1) {
      if (arg.symbol.toLowerCase() == buyToken) return;
      setSellToken(arg.symbol.toLowerCase());
    } else if (currentOpenSelection == 2) {
      if (arg.symbol.toLowerCase() == sellToken) return;
      setBuyToken(arg.symbol.toLowerCase());
    }

    setshowSelectToken(false);
  };

  const swithtokens = () => {
    const _buyToken = buyToken;
    const _sellToken = sellToken;
    setBuyToken(_sellToken);
    setSellToken(_buyToken);
  };

  return (
    <div className="bg-white rounded-3xl p-4 shadow-lg border">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-500">Sell</span>
      </div>
      {/* Sell Input */}
      <div className="bg-gray-100 rounded-2xl p-4 mb-1">
        <div className="flex justify-between">
          <input
            type="text"
            value={sellAmount}
            onChange={(e) => setSellAmount(e.target.value)}
            className="bg-transparent text-2xl w-full focus:outline-none"
            placeholder="0"
          />
          <button
            onClick={handleSelectTokenClickSell}
            className="flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm"
          >
            <img
              src={TOKENS_BY_SYMBOL[sellToken].logoURI}
              className="w-5 h-5 rounded-full "
            />
            <span>{TOKENS_BY_SYMBOL[sellToken].symbol}</span>
            <div className="w-9 h-4">
              <ChevronDown className="w-4 h-4" color="#000" />
            </div>
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          {" "}
          {sellAmount == "" ? 0 : sellAmount}{" "}
        </div>
      </div>
      {/* Swap Button */}
      <div className="flex justify-center -my-3 relative">
        <button
          onClick={swithtokens}
          className="bg-white p-2 rounded-xl border  hover:border-gray-700"
        >
          <ArrowDownUp className="w-4 h-4" />
        </button>
      </div>
      {/* Buy Input */}
      <div className="bg-gray-100 rounded-2xl p-4 mb-1">
        <div className="flex justify-between">
          <input
            type="text"
            value={buyAmount}
            onChange={(e) => setBuyAmount(e.target.value)}
            className="bg-transparent text-2xl w-full focus:outline-none"
            placeholder="0"
          />
          <button
            onClick={handleSelectTokenClickBuy}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3 py-1"
          >
            <img
              src={TOKENS_BY_SYMBOL[buyToken].logoURI}
              className="w-5 h-5 rounded-full "
            />
            <span>{TOKENS_BY_SYMBOL[buyToken].symbol}</span>
            <div className="w-9 h-4">
              <ChevronDown className="w-4 h-4" color="#fff" />
            </div>
          </button>
        </div>
        <div className="text-sm text-gray-400 mt-1">
          {" "}
          {buyAmount == "" ? 0 : buyAmount}{" "}
        </div>
      </div>
      {price?.liquidityAvailable != false ? (
        <>
          {taker ? (
            <ApproveOrReviewButton
              sellTokenAddress={TOKENS_BY_SYMBOL[sellToken].address}
              taker={taker}
              onClick={() => {
                setFinalize(true);
              }}
              disabled={inSufficientBalance}
              price={price}
            />
          ) : (
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 mt-4 font-semibold"
                            onClick={openConnectModal}
                            type="button"
                          >
                            Connect Wallet
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <button onClick={openChainModal} type="button">
                            Wrong network
                          </button>
                        );
                      }

                      return (
                        <div style={{ display: "flex", gap: 12 }}>
                          <button
                            onClick={openChainModal}
                            style={{ display: "flex", alignItems: "center" }}
                            type="button"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,

                                  borderRadius: 999,
                                  overflow: "hidden",
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    src={chain.iconUrl}
                                    alt={chain.name ?? "Chain icon"}
                                    width={12}
                                    height={12}
                                  />
                                )}
                              </div>
                            )}
                            {chain.name}
                          </button>

                          <button onClick={openAccountModal} type="button">
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""}
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          )}
        </>
      ) : (
        <button
          disabled
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 mt-4 font-semibold"
        >
          Liquidity not available
        </button>
      )}
      {showSelectToken && (
        <SelectToken
          set_tokens_by_symbol={set_tokens_by_symbol}
          set_tokens={set_tokens}
          set_tokens_by_address={set_tokens_by_address}
          popularTokens={TOKENS_ARRAY}
          taker={taker}
          onSelect={handleSelectToken}
          setshowSelectToken={setshowSelectToken}
        />
      )}
    </div>
  );
};

export default SwapCard;
