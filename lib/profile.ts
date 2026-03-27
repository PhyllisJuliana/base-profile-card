import type { ProfileRecord } from "@/lib/types";

export function normalizeProfile(
  address: string,
  data: readonly [string, string, string, bigint, boolean]
): ProfileRecord {
  return {
    address,
    nickname: data[0],
    bio: data[1],
    avatar: data[2],
    updatedAt: Number(data[3]),
    exists: data[4]
  };
}
