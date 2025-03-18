// import React, { useState } from "react";
// import {
//   // Search,
//   // MoreHorizontal,
//   // ChevronDown,
//   // ArrowDownUp,
//   // ExternalLink,
//   X,
//   // Plus,
//   AlertCircle,
//   Clock,
//   ArrowRight,
// } from "lucide-react";
import {
    X,
  AlertCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { formatEther } from "ethers";

// Sample token list - in a real app, this would come from an API

export default function ConfirmationReceipt({
  sellAmount,
  buyAmount,
  sellToken,
  buyToken,
  totalNetworkFee,
  handleConfirmClick,
  isPending,
  isConfirming,
  hash,
  isConfirmed,
  onClose,
}: {
  sellAmount: any;
  buyAmount: any;
  sellToken: any;
  buyToken: any;
  totalNetworkFee: any;
  handleConfirmClick: any;
  isPending: boolean;
  isConfirming: boolean;
  hash: any;
  isConfirmed: boolean;
  onClose: any;
}) {
  const slippageTolerance = 0.5; // 0.5%
  const minimumReceived = buyAmount * (1 - slippageTolerance / 100);

  console.log("buyToken", buyToken);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 shadow-xl">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Confirm Swap
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swap Details */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <img
                src={sellToken.logoURI}
                className={`w-10 h-10 rounded-full`}
              />
              <div>
                <div className="text-2xl font-semibold text-gray-900">
                  {sellAmount.slice(0, 6)}
                </div>
                <div className="text-gray-500">{sellToken.symbol}</div>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <div className="flex items-center space-x-3">
              <img
                src={buyToken.logoURI}
                className={`w-10 h-10 rounded-full`}
              />
              <div>
                <div className="text-2xl font-semibold text-gray-900">
                  {String(buyAmount).slice(0, 6)}
                </div>
                <div className="text-gray-500">{buyToken.symbol}</div>
              </div>
            </div>
          </div>

          {/* Price and Impact */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Price</span>
              <span>
                1 {sellToken.symbol} ={" "}
                {(buyAmount < sellAmount
                  ? buyAmount / sellAmount
                  : sellAmount / buyAmount
                ).toFixed(9)}{" "}
                {buyToken.symbol}
              </span>
            </div>

            <div className="flex justify-between text-gray-500">
              <div className="flex items-center space-x-1">
                <span>Minimum received</span>
                <div className="group relative">
                  <AlertCircle className="w-4 h-4" />
                  <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-gray-800 text-white rounded-lg text-xs whitespace-nowrap">
                    The minimum amount you will receive after slippage (
                    {slippageTolerance}%)
                  </div>
                </div>
              </div>
              <span>
                {minimumReceived.toFixed(6)} {buyToken.symbol}
              </span>
            </div>

            <div className="flex justify-between text-gray-500">
              <div className="flex items-center space-x-1">
                <span>Network Fee</span>
                <div className="group relative">
                  <AlertCircle className="w-4 h-4" />
                  <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-gray-800 text-white rounded-lg text-xs whitespace-nowrap">
                    The fee paid to the Ethereum network to process your
                    transaction
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div>{formatEther(totalNetworkFee)} ETH</div>
              </div>
            </div>
          </div>

          {/* Expected Time */}
          <div className="flex items-center justify-center space-x-2 mt-6 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Expected confirmation: ~30 seconds</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mt-6">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 font-semibold"
              onClick={async () => {
                await handleConfirmClick();
              }}
            >
              {!isConfirming && (
                <> {isPending ? "Confirming..." : "Place Order"} </>
              )}
              {isConfirming && "  Waiting for confirmation ⏳ ..."}
            </button>
            <button
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-2xl py-4 font-semibold"
              onClick={onClose}
            >
              Cancel
            </button>
            {isConfirmed && (
              <div className="text-center pt-2">
                Transaction Confirmed! 🎉{" "}
                <a
                  className="text-blue-400"
                  href={`https://basescan.org/tx/${hash}`}
                >
                  Check Basescan
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
