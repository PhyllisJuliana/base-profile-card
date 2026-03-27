export function shortenAddress(address?: string, size = 4) {
  if (!address) {
    return "--";
  }

  return `${address.slice(0, 2 + size)}...${address.slice(-size)}`;
}

export function formatDate(timestamp?: number) {
  if (!timestamp) {
    return "Just now";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(timestamp * 1000));
}

export function getAvatarFallback(nickname?: string) {
  return (nickname?.trim()[0] || "B").toUpperCase();
}
