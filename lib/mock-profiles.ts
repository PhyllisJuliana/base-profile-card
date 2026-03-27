import type { ProfileInput, ProfileRecord } from "@/lib/types";

const storageKey = "base-profile-card:profiles";

const defaults: Record<string, ProfileRecord> = {
  "0x1111111111111111111111111111111111111111": {
    address: "0x1111111111111111111111111111111111111111",
    nickname: "Aster",
    bio: "Building quiet identity layers on Base.",
    avatar: "",
    updatedAt: 1738000000,
    exists: true
  },
  "0x2222222222222222222222222222222222222222": {
    address: "0x2222222222222222222222222222222222222222",
    nickname: "Nami",
    bio: "Minimal profile card for sharing an onchain self.",
    avatar: "",
    updatedAt: 1738200000,
    exists: true
  }
};

function canUseStorage() {
  return typeof window !== "undefined";
}

function readStorage(): Record<string, ProfileRecord> {
  if (!canUseStorage()) {
    return defaults;
  }

  const raw = window.localStorage.getItem(storageKey);
  if (!raw) {
    return defaults;
  }

  try {
    return {
      ...defaults,
      ...(JSON.parse(raw) as Record<string, ProfileRecord>)
    };
  } catch {
    return defaults;
  }
}

export function getMockProfile(address: string) {
  return readStorage()[address.toLowerCase()] || readStorage()[address] || undefined;
}

export function persistMockProfile(address: string, input: ProfileInput) {
  if (!canUseStorage()) {
    return;
  }

  const profiles = readStorage();
  profiles[address.toLowerCase()] = {
    address,
    nickname: input.nickname.trim(),
    bio: input.bio.trim(),
    avatar: input.avatar.trim(),
    updatedAt: Math.floor(Date.now() / 1000),
    exists: true
  };

  window.localStorage.setItem(storageKey, JSON.stringify(profiles));
}
