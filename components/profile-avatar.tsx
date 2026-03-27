import { getAvatarFallback } from "@/lib/format";

export function ProfileAvatar({ avatar, nickname }: { avatar?: string; nickname?: string }) {
  return (
    <div className="profile-avatar">
      {avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={nickname || "profile avatar"} src={avatar} />
      ) : (
        <div className="profile-avatar__fallback">{getAvatarFallback(nickname)}</div>
      )}
    </div>
  );
}
