"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { isAddress } from "viem";

import { AddressSearchBar } from "@/components/address-search-bar";
import { EmptyState } from "@/components/empty-state";
import { ProfileCard } from "@/components/profile-card";
import { StatusChip } from "@/components/status-chip";
import { useProfile } from "@/hooks/use-profile";

export function SearchPagePanel() {
  const router = useRouter();
  const [address, setAddress] = useState<string | undefined>();
  const { profile, status } = useProfile(address);

  return (
    <section className="panel search-result">
      <div className="section-label">Quick Search</div>
      <AddressSearchBar buttonLabel="打开资料" />
      <div className="divider" />
      <div className="field">
        <label htmlFor="inline-address">先预览地址状态</label>
        <div className="search-row">
          <input
            id="inline-address"
            onChange={(event) => setAddress(event.target.value.trim())}
            placeholder="输入地址查看是否存在资料"
          />
          <button
            className="button-ghost"
            onClick={() => address && isAddress(address) && router.push(`/profile/${address}`)}
            type="button"
          >
            前往
          </button>
        </div>
      </div>

      {!address ? <StatusChip tone="muted">输入地址后显示查询状态</StatusChip> : null}
      {address && !isAddress(address) ? <StatusChip tone="warn">地址格式不正确</StatusChip> : null}
      {address && isAddress(address) && status === "loading" ? <StatusChip tone="info">查询中...</StatusChip> : null}
      {address && isAddress(address) && status !== "loading" && profile ? (
        <>
          <ProfileCard profile={profile} />
          <div className="search-result__actions">
            <Link className="button" href={`/profile/${address}`}>
              打开详情页
            </Link>
          </div>
        </>
      ) : null}
      {address && isAddress(address) && status !== "loading" && !profile ? (
        <EmptyState text="该地址暂时没有资料卡记录。" title="无查询结果" />
      ) : null}
    </section>
  );
}
