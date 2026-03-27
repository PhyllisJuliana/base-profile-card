"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

import { shortenAddress } from "@/lib/format";

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  const connector = connectors[0];

  if (isConnected && address) {
    return (
      <button className="wallet-button" onClick={() => disconnect()} type="button">
        {shortenAddress(address)}
      </button>
    );
  }

  return (
    <button
      className="wallet-button"
      disabled={!connector || isPending}
      onClick={() => connector && connect({ connector })}
      type="button"
    >
      {isPending ? "连接中..." : "连接钱包"}
    </button>
  );
}
