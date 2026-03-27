import { formatDate, shortenAddress } from "@/lib/format";
import type { ProfileRecord } from "@/lib/types";

export function ProfileMeta({ profile }: { profile: ProfileRecord }) {
  return (
    <div className="profile-meta">
      <div className="profile-meta__name">{profile.nickname || "Unnamed"}</div>
      <div className="profile-meta__bio">{profile.bio || "这个地址还没有填写简介。"}</div>
      <div className="meta-grid">
        <div className="meta-pill">
          <div className="meta-pill__label">Wallet</div>
          <div className="meta-pill__value">{shortenAddress(profile.address)}</div>
        </div>
        <div className="meta-pill">
          <div className="meta-pill__label">Updated</div>
          <div className="meta-pill__value">{formatDate(profile.updatedAt)}</div>
        </div>
      </div>
    </div>
  );
}
