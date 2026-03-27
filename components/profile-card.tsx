import type { ReactNode } from "react";

import type { ProfileRecord } from "@/lib/types";

import { ProfileAvatar } from "@/components/profile-avatar";
import { ProfileMeta } from "@/components/profile-meta";

export function ProfileCard({
  profile,
  featured,
  actions
}: {
  profile: ProfileRecord;
  featured?: boolean;
  actions?: ReactNode;
}) {
  return (
    <section className={`profile-card${featured ? " profile-card--featured" : ""}`}>
      <div className="profile-card__header">
        <ProfileAvatar avatar={profile.avatar} nickname={profile.nickname} />
        {actions}
      </div>
      <ProfileMeta profile={profile} />
    </section>
  );
}
