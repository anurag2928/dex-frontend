import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Search } from "lucide-react";

const Navigation = ({ setshowSelectToken }: { setshowSelectToken: any }) => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b ">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="text-xl font-bold text-blue-600">Swapit</span>
        </div>
        <div className="flex space-x-6">
          <button className="text-gray-900">Trade</button>
          <button className="text-gray-900 hover:text-blue-600">Airdrop</button>
          <button className="text-gray-900 hover:text-blue-600">$BBB</button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setshowSelectToken(true)}
          className="relative hidden md:block"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            onChange={() => setshowSelectToken(true)}
            placeholder="Search tokens"
            className="bg-gray-100 rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </button>

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
                        className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2"
                        onClick={openConnectModal}
                        type="button"
                      >
                        Connect
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
                        <img src={chain.iconUrl} />
                      </button>

                      <button onClick={openAccountModal} type="button">
                        {account.displayName}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </nav>
  );
};

export default Navigation;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
