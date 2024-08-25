import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function ConnectWallet() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Connect Your Wallet
        </h1>
        <p className="text-gray-600 mb-6">
          Please connect your wallet to continue and access all features of the
          platform.
        </p>
        <div className="w-full flex items-center justify-center">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
