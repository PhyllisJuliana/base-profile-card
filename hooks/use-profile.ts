"use client";

import { useMemo } from "react";
import { useReadContract } from "wagmi";

import { profileCardAbi, profileCardAddress } from "@/lib/contracts";
import { getMockProfile } from "@/lib/mock-profiles";
import { normalizeProfile } from "@/lib/profile";

export function useProfile(address?: string) {
  const readEnabled = Boolean(address && profileCardAddress);

  const contractRead = useReadContract({
    abi: profileCardAbi,
    address: profileCardAddress,
    functionName: "getProfile",
    args: address ? [address as `0x${string}`] : undefined,
    query: {
      enabled: readEnabled
    }
  });

  const profile = useMemo(() => {
    if (!address) {
      return undefined;
    }

    if (contractRead.data) {
      const normalized = normalizeProfile(address, contractRead.data);
      return normalized.exists ? normalized : undefined;
    }

    return getMockProfile(address);
  }, [address, contractRead.data]);

  return {
    profile,
    status: contractRead.isLoading ? "loading" : "idle"
  };
}
