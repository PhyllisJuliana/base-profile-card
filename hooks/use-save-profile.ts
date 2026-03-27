"use client";

import { useState } from "react";
import { useWriteContract } from "wagmi";

import { trackTransaction } from "@/utils/track";
import { profileCardAbi, profileCardAddress } from "@/lib/contracts";
import { persistMockProfile } from "@/lib/mock-profiles";
import type { ProfileInput } from "@/lib/types";

type SaveArgs = {
  address?: string;
  exists: boolean;
  input: ProfileInput;
};

type SaveResult = {
  address: string;
  txHash?: string;
};

export function useSaveProfile() {
  const { writeContractAsync } = useWriteContract();
  const [status, setStatus] = useState<"idle" | "pending" | "success">("idle");
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState<string>();

  async function saveProfile({ address, exists, input }: SaveArgs): Promise<SaveResult | undefined> {
    if (!address) {
      setError("请先连接钱包");
      return undefined;
    }

    if (!input.nickname.trim()) {
      setError("昵称不能为空");
      return undefined;
    }

    setError("");
    setStatus("pending");

    try {
      let hash: string | undefined;

      if (profileCardAddress) {
        hash = await writeContractAsync({
          abi: profileCardAbi,
          address: profileCardAddress,
          functionName: exists ? "updateProfile" : "createProfile",
          args: [input.nickname.trim(), input.bio.trim(), input.avatar.trim()]
        });
      }

      persistMockProfile(address, input);

      if (hash) {
        setTxHash(hash);
        trackTransaction("app-00X", "base-profile-card", address, hash);
      }

      setStatus("success");

      return {
        address,
        txHash: hash
      };
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "保存失败";
      setError(message);
      setStatus("idle");
      return undefined;
    }
  }

  return {
    saveProfile,
    status,
    error,
    txHash
  };
}
