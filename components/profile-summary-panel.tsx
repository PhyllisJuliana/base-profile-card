"use client";

import Link from "next/link";
import { useAccount } from "wagmi";

import { EmptyState } from "@/components/empty-state";
import { ProfileCard } from "@/components/profile-card";
import { StatusChip } from "@/components/status-chip";
import { useProfile } from "@/hooks/use-profile";

export function ProfileSummaryPanel() {
  const { address, isConnected } = useAccount();
  const { profile, status } = useProfile(address);

  if (!isConnected || !address) {
    return (
      <section className="panel">
        <div className="section-label">Wallet Status</div>
        <div className="section-title">未连接钱包</div>
        <p className="section-copy">连接后即可查看自己是否已经拥有资料卡。</p>
      </section>
    );
  }

  if (status === "loading") {
    return (
      <section className="panel">
        <div className="section-label">Wallet Status</div>
        <div className="section-title">读取我的资料</div>
        <StatusChip tone="info">正在读取链上资料...</StatusChip>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="panel">
        <div className="section-label">Wallet Status</div>
        <div className="section-title">还没有资料卡</div>
        <EmptyState
          action={
            <Link className="button" href="/profile/edit">
              立即创建
            </Link>
          }
          text="这个地址目前没有公开资料，创建后即可生成独立详情页。"
          title="空白资料"
        />
      </section>
    );
  }

  return (
    <div className="hero-stack">
      <ProfileCard
        featured
        actions={
          <div className="chip-row">
            <StatusChip tone="ok">已创建</StatusChip>
          </div>
        }
        profile={profile}
      />
      <div className="row">
        <Link className="button" href={`/profile/${address}`}>
          查看我的资料
        </Link>
        <Link className="button-ghost" href="/profile/edit">
          更新资料
        </Link>
      </div>
    </div>
  );
}
