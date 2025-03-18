import { Address } from "viem";


export const MAGIC_CALLDATA_STRING = "f".repeat(130); // used when signing the eip712 message

export const AFFILIATE_FEE = 100; // 1% affiliate fee. Denoted in Bps.
// export const FEE_RECIPIENT = "0x75A94931B81d81C7a62b76DC0FcFAC77FbE1e917"; // The ETH address that should receive affiliate fees
export const FEE_RECIPIENT = "0x557F0cA834f6a5904228cC0BBf8909AE936Fd366"; // The ETH address that should receive affiliate fees

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const MAINNET_TOKENS: Token[] = [
  {
    chainId: 1,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
  },
  {
    chainId: 1,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  {
    chainId: 1,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  {
    chainId: 1,
    name: "FLOKI",
    symbol: "FLOKI",
    decimals: 9,
    address: "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/c37119334a24f9933f373c6cc028a5bdbad2ecb4/blockchains/ethereum/assets/0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E/logo.png",
  },
];

export const MAINNET_TOKENS_BY_SYMBOL: Record<string, Token> = {
  weth: {
    chainId: 1,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
  },
  usdc: {
    chainId: 1,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  dai: {
    chainId: 1,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  floki: {
    chainId: 1,
    name: "FLOKI",
    symbol: "FLOKI",
    decimals: 9,
    address: "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/c37119334a24f9933f373c6cc028a5bdbad2ecb4/blockchains/ethereum/assets/0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E/logo.png",
  },
};

export const MAINNET_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
    chainId: 1,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
  },
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": {
    chainId: 1,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  "0x6b175474e89094c44da98b954eedeac495271d0f": {
    chainId: 1,
    name: "Dai - PoS",
    symbol: "DAI",
    decimals: 18,
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e": {
    chainId: 1,
    name: "FLOKI",
    symbol: "FLOKI",
    decimals: 9,
    address: "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/c37119334a24f9933f373c6cc028a5bdbad2ecb4/blockchains/ethereum/assets/0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E/logo.png",
  },
};

export const BASE_TOKENS: Token[] = [
  {
    chainId: 8453,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
  },
  {
    chainId: 8453,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x4200000000000000000000000000000000000006",
    logoURI:
      "data:image/jpeg;base64,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",
  },
  {
    chainId: 8453,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  {
    chainId: 8453,
    name: "Mantra",
    symbol: "MANTRA",
    decimals: 18,
    address: "0x3992b27da26848c2b19cea6fd25ad5568b68ab98",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6536.png",
  },
  {
    chainId: 8453,
    name: "Virtual Protocol",
    symbol: "VIRTUAL",
    decimals: 18,
    address: "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b",
    logoURI:
      "https://s3.coinmarketcap.com/static-gravity/image/e0b3ac990f9f4954843dacaf605e0eec.png",
  },
  {
    chainId: 8453,
    name: "space at SPX",
    symbol: "SPX",
    decimals: 18,
    address: "0x50da645f148798f68ef2d7db7c1cb22a6819bb2c",
    logoURI:
      "https://s3.coinmarketcap.com/static/img/portraits/63351fb59b613d345489037c.png",
  },
  {
    chainId: 8453,
    name: "AXBIT",
    symbol: "AXBIT",
    decimals: 18,
    address: "0x4f9fd6be4a90f2620860d680c0d4d5fb53d1a825",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34103.png",
  },
  {
    chainId: 8453,
    name: "CreatorBid",
    symbol: "BID",
    decimals: 18,
    address: "0xa1832f7f4e534ae557f9b5ab76de54b1873e498b",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/35430.png",
  },
  {
    chainId: 8453,
    name: "Aerodrome Finance",
    symbol: "AERO",
    decimals: 18,
    address: "0x940181a94a35a4569e4529a3cdfb74e38fd98631",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/29270.png",
  },
  {
    chainId: 8453,
    name: "ZBU",
    symbol: "zbu",
    decimals: 18,
    address: "0x2c8c89c442436cc6c0a77943e09c8daf49da3161",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27765.png",
  },
  {
    chainId: 8453,
    name: "TOSHI",
    symbol: "TOSHI",
    decimals: 18,
    address: "0xac1bd2486aaf3b5c0fc3fd868558b082a531b2b4",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27750.png",
  },
  {
    chainId: 8453,
    name: "BONK",
    symbol: "BONK",
    decimals: 18,
    address: "0x72499bddb67f4ca150e1f522ca82c87bc9fb18c8",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png",
  },
  {
    chainId: 8453,
    name: "Curve DAO Token",
    symbol: "CRV",
    decimals: 18,
    address: "0x8ee73c484a26e0a5df2ee2a4960b789967dd0415",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png",
  },
  {
    chainId: 8453,
    name: "Onyxcoin",
    symbol: "XCN",
    decimals: 18,
    address: "0x9c632e6aaa3ea73f91554f8a3cb2ed2f29605e0c",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18679.png",
  },
  {
    chainId: 8453,
    name: "Morpho",
    symbol: "MORPHO",
    decimals: 18,
    address: "0xbaa5cc21fd487b8fcc2f632f3f4e8d37262a0842",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34104.png",
  },
  {
    chainId: 8453,
    name: "Reserve Rights",
    symbol: "RSR",
    decimals: 18,
    address: "0xab36452dbac151be02b16ca17d8919826072f64a",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3964.png",
  },
  {
    chainId: 8453,
    name: "PancakeSwap",
    symbol: "CAKE",
    decimals: 18,
    address: "0x3055913c90fcc1a6ce9a358911721eeb942013a1",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png",
  },
  {
    chainId: 8453,
    name: "Mog Coin",
    symbol: "MOG",
    decimals: 18,
    address: "0x2da56acb9ea78330f947bd57c54119debda7af71",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27659.png",
  },
  {
    chainId: 8453,
    name: "Mog Axelar",
    symbol: "AXL",
    decimals: 18,
    address: "0x23ee2343b892b1bb63503a4fabc840e0e2c6810f",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/17799.png",
  },
  {
    chainId: 8453,
    name: "Echelon Prime",
    symbol: "PRIME",
    decimals: 18,
    address: "0xfa980ced6895ac314e7de34ef1bfae90a5add21b",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/23711.png",
  },
  {
    chainId: 8453,
    name: "SushiSwap",
    symbol: "SUSHI",
    decimals: 18,
    address: "0x7d49a065d17d6d4a55dc13649901fdbb98b2afba",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png",
  },
  {
    chainId: 8453,
    name: "IoTeX",
    symbol: "IOTX",
    decimals: 18,
    address: "0xbcbaf311cec8a4eac0430193a528d9ff27ae38c1",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png",
  },
  {
    chainId: 8453,
    name: "Freysa",
    symbol: "FAI",
    decimals: 18,
    address: "0xb33ff54b9f7242ef1593d2c9bcd8f9df46c77935",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34330.png",
  },
];

export const BASE_TOKENS_BY_SYMBOL: Record<string, Token> = {
  eth: {
    chainId: 8453,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
  },
  weth: {
    chainId: 8453,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x4200000000000000000000000000000000000006",
    logoURI:
      "data:image/jpeg;base64,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",
  },
  usdc: {
    chainId: 8453,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  mantra: {
    chainId: 8453,
    name: "Mantra",
    symbol: "MANTRA",
    decimals: 18,
    address: "0x3992b27da26848c2b19cea6fd25ad5568b68ab98",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6536.png",
  },
  virtual: {
    chainId: 8453,
    name: "Virtual Protocol",
    symbol: "VIRTUAL",
    decimals: 18,
    address: "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b",
    logoURI:
      "https://s3.coinmarketcap.com/static-gravity/image/e0b3ac990f9f4954843dacaf605e0eec.png",
  },
  spx: {
    chainId: 8453,
    name: "space at SPX",
    symbol: "SPX",
    decimals: 18,
    address: "0x50da645f148798f68ef2d7db7c1cb22a6819bb2c",
    logoURI:
      "https://s3.coinmarketcap.com/static/img/portraits/63351fb59b613d345489037c.png",
  },
  axbit: {
    chainId: 8453,
    name: "AXBIT",
    symbol: "AXBIT",
    decimals: 18,
    address: "0x4f9fd6be4a90f2620860d680c0d4d5fb53d1a825",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34103.png",
  },
  bid: {
    chainId: 8453,
    name: "CreatorBid",
    symbol: "BID",
    decimals: 18,
    address: "0xa1832f7f4e534ae557f9b5ab76de54b1873e498b",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/35430.png",
  },

  aero: {
    chainId: 8453,
    name: "Aerodrome Finance",
    symbol: "AERO",
    decimals: 18,
    address: "0x940181a94a35a4569e4529a3cdfb74e38fd98631",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/29270.png",
  },
  zbu: {
    chainId: 8453,
    name: "ZBU",
    symbol: "zbu",
    decimals: 18,
    address: "0x2c8c89c442436cc6c0a77943e09c8daf49da3161",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27765.png",
  },
  toshi: {
    chainId: 8453,
    name: "TOSHI",
    symbol: "TOSHI",
    decimals: 18,
    address: "0xac1bd2486aaf3b5c0fc3fd868558b082a531b2b4",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27750.png",
  },
  bonk: {
    chainId: 8453,
    name: "BONK",
    symbol: "BONK",
    decimals: 18,
    address: "0x72499bddb67f4ca150e1f522ca82c87bc9fb18c8",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png",
  },
  crv: {
    chainId: 8453,
    name: "Curve DAO Token",
    symbol: "CRV",
    decimals: 18,
    address: "0x8ee73c484a26e0a5df2ee2a4960b789967dd0415",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png",
  },
  xcn: {
    chainId: 8453,
    name: "Onyxcoin",
    symbol: "XCN",
    decimals: 18,
    address: "0x9c632e6aaa3ea73f91554f8a3cb2ed2f29605e0c",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18679.png",
  },
  morpho: {
    chainId: 8453,
    name: "Morpho",
    symbol: "MORPHO",
    decimals: 18,
    address: "0xbaa5cc21fd487b8fcc2f632f3f4e8d37262a0842",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34104.png",
  },
  rsr: {
    chainId: 8453,
    name: "Reserve Rights",
    symbol: "RSR",
    decimals: 18,
    address: "0xab36452dbac151be02b16ca17d8919826072f64a",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3964.png",
  },
  cake: {
    chainId: 8453,
    name: "PancakeSwap",
    symbol: "CAKE",
    decimals: 18,
    address: "0x3055913c90fcc1a6ce9a358911721eeb942013a1",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png",
  },
  mog: {
    chainId: 8453,
    name: "Mog Coin",
    symbol: "MOG",
    decimals: 18,
    address: "0x2da56acb9ea78330f947bd57c54119debda7af71",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27659.png",
  },
  axl: {
    chainId: 8453,
    name: "Mog Axelar",
    symbol: "AXL",
    decimals: 18,
    address: "0x23ee2343b892b1bb63503a4fabc840e0e2c6810f",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/17799.png",
  },
  prime: {
    chainId: 8453,
    name: "Echelon Prime",
    symbol: "PRIME",
    decimals: 18,
    address: "0xfa980ced6895ac314e7de34ef1bfae90a5add21b",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/23711.png",
  },
  sushi: {
    chainId: 8453,
    name: "SushiSwap",
    symbol: "SUSHI",
    decimals: 18,
    address: "0x7d49a065d17d6d4a55dc13649901fdbb98b2afba",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png",
  },
  iotx: {
    chainId: 8453,
    name: "IoTeX",
    symbol: "IOTX",
    decimals: 18,
    address: "0xbcbaf311cec8a4eac0430193a528d9ff27ae38c1",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png",
  },
  fai: {
    chainId: 8453,
    name: "Freysa",
    symbol: "FAI",
    decimals: 18,
    address: "0xb33ff54b9f7242ef1593d2c9bcd8f9df46c77935",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34330.png",
  },
};

export const BASE_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
    chainId: 8453,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
  },
  "0x4200000000000000000000000000000000000006": {
    chainId: 8453,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x4200000000000000000000000000000000000006",
    logoURI:
      "data:image/jpeg;base64,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",
  },
  "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": {
    chainId: 8453,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  "0x3992b27da26848c2b19cea6fd25ad5568b68ab98": {
    chainId: 8453,
    name: "Mantra",
    symbol: "MANTRA",
    decimals: 18,
    address: "0x3992b27da26848c2b19cea6fd25ad5568b68ab98",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6536.png",
  },
  "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b": {
    chainId: 8453,
    name: "Virtual Protocol",
    symbol: "VIRTUAL",
    decimals: 18,
    address: "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b",
    logoURI:
      "https://s3.coinmarketcap.com/static-gravity/image/e0b3ac990f9f4954843dacaf605e0eec.png",
  },
  "0x50da645f148798f68ef2d7db7c1cb22a6819bb2c": {
    chainId: 8453,
    name: "space at SPX",
    symbol: "SPX",
    decimals: 18,
    address: "0x50da645f148798f68ef2d7db7c1cb22a6819bb2c",
    logoURI:
      "https://s3.coinmarketcap.com/static/img/portraits/63351fb59b613d345489037c.png",
  },
  "0x4f9fd6be4a90f2620860d680c0d4d5fb53d1a825": {
    chainId: 8453,
    name: "AXBIT",
    symbol: "AXBIT",
    decimals: 18,
    address: "0x4f9fd6be4a90f2620860d680c0d4d5fb53d1a825",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34103.png",
  },
  "0xa1832f7f4e534ae557f9b5ab76de54b1873e498b": {
    chainId: 8453,
    name: "CreatorBid",
    symbol: "BID",
    decimals: 18,
    address: "0xa1832f7f4e534ae557f9b5ab76de54b1873e498b",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/35430.png",
  },
  "0x940181a94a35a4569e4529a3cdfb74e38fd98631": {
    chainId: 8453,
    name: "Aerodrome Finance",
    symbol: "AERO",
    decimals: 18,
    address: "0x940181a94a35a4569e4529a3cdfb74e38fd98631",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/29270.png",
  },
  "0x2c8c89c442436cc6c0a77943e09c8daf49da3161": {
    chainId: 8453,
    name: "ZBU",
    symbol: "zbu",
    decimals: 18,
    address: "0x2c8c89c442436cc6c0a77943e09c8daf49da3161",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27765.png",
  },
  "0xac1bd2486aaf3b5c0fc3fd868558b082a531b2b4": {
    chainId: 8453,
    name: "TOSHI",
    symbol: "TOSHI",
    decimals: 18,
    address: "0xac1bd2486aaf3b5c0fc3fd868558b082a531b2b4",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27750.png",
  },
  "0x72499bddb67f4ca150e1f522ca82c87bc9fb18c8": {
    chainId: 8453,
    name: "BONK",
    symbol: "BONK",
    decimals: 18,
    address: "0x72499bddb67f4ca150e1f522ca82c87bc9fb18c8",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png",
  },
  "0x8ee73c484a26e0a5df2ee2a4960b789967dd0415": {
    chainId: 8453,
    name: "Curve DAO Token",
    symbol: "CRV",
    decimals: 18,
    address: "0x8ee73c484a26e0a5df2ee2a4960b789967dd0415",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png",
  },
  "0x9c632e6aaa3ea73f91554f8a3cb2ed2f29605e0c": {
    chainId: 8453,
    name: "Onyxcoin",
    symbol: "XCN",
    decimals: 18,
    address: "0x9c632e6aaa3ea73f91554f8a3cb2ed2f29605e0c",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/18679.png",
  },
  "0xbaa5cc21fd487b8fcc2f632f3f4e8d37262a0842": {
    chainId: 8453,
    name: "Morpho",
    symbol: "MORPHO",
    decimals: 18,
    address: "0xbaa5cc21fd487b8fcc2f632f3f4e8d37262a0842",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34104.png",
  },
  "0xab36452dbac151be02b16ca17d8919826072f64a": {
    chainId: 8453,
    name: "Reserve Rights",
    symbol: "RSR",
    decimals: 18,
    address: "0xab36452dbac151be02b16ca17d8919826072f64a",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/3964.png",
  },
  "0x3055913c90fcc1a6ce9a358911721eeb942013a1": {
    chainId: 8453,
    name: "PancakeSwap",
    symbol: "CAKE",
    decimals: 18,
    address: "0x3055913c90fcc1a6ce9a358911721eeb942013a1",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png",
  },
  "0x2da56acb9ea78330f947bd57c54119debda7af71": {
    chainId: 8453,
    name: "Mog Coin",
    symbol: "MOG",
    decimals: 18,
    address: "0x2da56acb9ea78330f947bd57c54119debda7af71",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/27659.png",
  },
  "0x23ee2343b892b1bb63503a4fabc840e0e2c6810f": {
    chainId: 8453,
    name: "Mog Axelar",
    symbol: "AXL",
    decimals: 18,
    address: "0x23ee2343b892b1bb63503a4fabc840e0e2c6810f",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/17799.png",
  },
  "0xfa980ced6895ac314e7de34ef1bfae90a5add21b": {
    chainId: 8453,
    name: "Echelon Prime",
    symbol: "PRIME",
    decimals: 18,
    address: "0xfa980ced6895ac314e7de34ef1bfae90a5add21b",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/23711.png",
  },
  "0x7d49a065d17d6d4a55dc13649901fdbb98b2afba": {
    chainId: 8453,
    name: "SushiSwap",
    symbol: "SUSHI",
    decimals: 18,
    address: "0x7d49a065d17d6d4a55dc13649901fdbb98b2afba",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png",
  },
  "0xbcbaf311cec8a4eac0430193a528d9ff27ae38c1": {
    chainId: 8453,
    name: "IoTeX",
    symbol: "IOTX",
    decimals: 18,
    address: "0xbcbaf311cec8a4eac0430193a528d9ff27ae38c1",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png",
  },
  "0xb33ff54b9f7242ef1593d2c9bcd8f9df46c77935": {
    chainId: 8453,
    name: "Freysa",
    symbol: "FAI",
    decimals: 18,
    address: "0xb33ff54b9f7242ef1593d2c9bcd8f9df46c77935",
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/34330.png",
  },
};
