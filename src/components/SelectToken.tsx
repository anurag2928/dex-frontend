import React, { useState } from "react";
import { Search, ExternalLink, X, Plus } from "lucide-react";
import { Address } from "abitype";
import { getTokenDetails } from "../utils/erc20functions";

const SelectToken = ({
  set_tokens_by_symbol,
  set_tokens,
  set_tokens_by_address,
  setshowSelectToken,
  onSelect,
  popularTokens,
}: {
  set_tokens_by_symbol: any;
  set_tokens: any;
  set_tokens_by_address: any;
  setshowSelectToken: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: any;
  popularTokens: any;
  taker: Address;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewTokenForm, setShowNewTokenForm] = useState(false);
  const [new_token_address, set_new_token_address] = useState("");
  const [loading, set_loading] = useState(false);

  const filteredTokens = popularTokens.filter(
    (token: any) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImportTokenClick = async () => {
    set_loading(true);
    const rpc_provider = "https://mainnet.base.org";

    try {
      const { decimals, symbol, name } = await getTokenDetails(
        rpc_provider,
        new_token_address
      );
      const new_token = {
        chainId: 8453,
        name,
        symbol,
        decimals: Number(decimals),
        address: new_token_address.toLowerCase(),
        logoURI:
          "data:image/jpeg;base64,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",
      };
      if (name && decimals && symbol) {
        let token_exists = false;
        set_tokens((prev: any) => {
          prev.map((_token: any) => {
            if (_token.address == new_token_address) {
              token_exists = true;
              alert("Token already exists");
            }
          });
          if (token_exists) return [...prev];
          set_tokens_by_address((prev: any) => {
            return {
              [new_token.address.toLowerCase()]: new_token,
              ...prev,
            };
          });
          set_tokens_by_symbol((prev: any) => {
            return {
              [new_token.symbol.toLowerCase()]: new_token,
              ...prev,
            };
          });
          alert("Token added Successfully !!");
          return [new_token, ...prev];
        });
        setShowNewTokenForm(false);
      } else {
        alert("invalid contract address ..");
      }
    } catch (e) {
      alert("invalid contract address .. eror");
    }
    set_loading(false);
    set_new_token_address("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 shadow-xl">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Select a token
            </h2>
            <button
              onClick={() => setshowSelectToken(false)}
              className="p-1 hover:bg-gray-100 rounded-lg text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or paste address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 rounded-2xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Popular tokens */}
        <div className="px-4 pt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {popularTokens?.slice(0, 4).map((token: any) => (
              <button
                key={token.symbol}
                onClick={() => onSelect(token)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1"
              >
                <img className={`w-5 h-5 rounded-full`} src={token.logoURI} />
                <span>{token.symbol}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Token list */}
        <div className="overflow-y-auto max-h-64 w-full px-4">
          {filteredTokens?.map((token: any) => (
            <button
              key={token.symbol}
              onClick={() => onSelect(token)}
              className=" w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-100"
            >
              <div className="flex w-full items-center space-x-3">
                <img className={`w-5 h-5 rounded-full`} src={token.logoURI} />
                <div className="text-left">
                  <div className="font-semibold w-full text-gray-900">
                    {token.symbol}
                  </div>
                  <div className="text-sm text-gray-500">{token.name}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Add custom token */}
        <div className="px-4 pb-4">
          <button
            onClick={() => setShowNewTokenForm(!showNewTokenForm)}
            className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-100 mt-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Plus className="w-5 h-5 text-gray-500" />
              </div>
              <div className="font-semibold text-gray-900">
                Add custom token
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400" />
          </button>

          {showNewTokenForm && (
            <div className="mt-4 p-4 bg-gray-100 rounded-2xl">
              <input
                type="text"
                value={new_token_address}
                onChange={(e) =>
                  set_new_token_address(e.target.value.toLowerCase())
                }
                placeholder="Token Contract Address"
                className="w-full bg-white rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold"
                onClick={handleImportTokenClick}
              >
                {loading ? "Loading..." : "Import Token"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectToken;
