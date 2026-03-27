"use client";

import { useState } from "react";

export function CopyAddressButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="button-ghost" onClick={handleCopy} type="button">
      {copied ? "已复制地址" : "复制地址"}
    </button>
  );
}
