"use client";

import Link from "next/link";
import { useAccount } from "wagmi";

import { EmptyState } from "@/components/empty-state";
import { ProfileCard } from "@/components/profile-card";
import { StatusChip } from "@/components/status-chip";
import { useProfile } from "@/hooks/use-profile";

export function ProfileDetailsView({ address }: { address: string }) {
  const { address: currentAddress } = useAccount();
  const { profile, status } = useProfile(address);
  const isOwner = currentAddress?.toLowerCase() === address.toLowerCase();

  if (status === "loading") {
    return (
      <section className="panel">
        <StatusChip tone="info">正在读取该地址的资料...</StatusChip>
      </section>
    );
  }

  if (!profile) {
    return (
      <EmptyState
        action={
          <Link className="button-ghost" href="/search">
            去查询其他地址
          </Link>
        }
        text="这个地址还没有创建公开资料卡。"
        title="未找到资料"
      />
    );
  }

  return (
    <div className="hero-stack">
      <ProfileCard
        featured
        actions={isOwner ? <Link className="button-ghost" href="/profile/edit">编辑我的资料</Link> : null}
        profile={profile}
      />
      <div className="row">
        <StatusChip tone="ok">公开可访问</StatusChip>
        <StatusChip tone="info">Base Address Card</StatusChip>
      </div>
    </div>
  );
}
