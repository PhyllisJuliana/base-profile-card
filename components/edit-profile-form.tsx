"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

import type { ProfileInput } from "@/lib/types";

import { StatusChip } from "@/components/status-chip";
import { WalletButton } from "@/components/wallet-button";
import { useProfile } from "@/hooks/use-profile";
import { useSaveProfile } from "@/hooks/use-save-profile";

const initialState: ProfileInput = {
  nickname: "",
  bio: "",
  avatar: ""
};

export function EditProfileForm() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { profile, status } = useProfile(address);
  const { saveProfile, status: saveStatus, error, txHash } = useSaveProfile();
  const [form, setForm] = useState<ProfileInput>(initialState);

  useEffect(() => {
    if (profile) {
      setForm({
        nickname: profile.nickname,
        bio: profile.bio,
        avatar: profile.avatar
      });
    }
  }, [profile]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await saveProfile({
      address,
      exists: Boolean(profile?.exists),
      input: form
    });

    if (result?.address) {
      router.push(`/profile/${result.address}`);
    }
  }

  return (
    <form className="panel field-grid" onSubmit={handleSubmit}>
      <div className="section-label">Editor</div>
      {!isConnected ? <WalletButton /> : null}
      {status === "loading" ? <StatusChip tone="info">正在读取当前资料...</StatusChip> : null}
      {profile?.exists ? <StatusChip tone="ok">检测到已有资料，将执行更新。</StatusChip> : null}
      {saveStatus === "pending" ? <StatusChip tone="info">交易发送中...</StatusChip> : null}
      {saveStatus === "success" ? (
        <StatusChip tone="ok">{txHash ? `已提交 ${txHash.slice(0, 10)}...` : "保存成功"}</StatusChip>
      ) : null}
      {error ? <StatusChip tone="warn">{error}</StatusChip> : null}

      <div className="field">
        <label htmlFor="nickname">昵称</label>
        <input
          id="nickname"
          maxLength={32}
          onChange={(event) => setForm((prev) => ({ ...prev, nickname: event.target.value }))}
          placeholder="例如：Aster"
          value={form.nickname}
        />
        <div className="field__hint">最多 32 个字符</div>
      </div>

      <div className="field">
        <label htmlFor="bio">简介</label>
        <textarea
          id="bio"
          maxLength={160}
          onChange={(event) => setForm((prev) => ({ ...prev, bio: event.target.value }))}
          placeholder="写一句简洁介绍"
          value={form.bio}
        />
        <div className="field__hint">最多 160 个字符</div>
      </div>

      <div className="field">
        <label htmlFor="avatar">头像链接</label>
        <input
          id="avatar"
          maxLength={200}
          onChange={(event) => setForm((prev) => ({ ...prev, avatar: event.target.value }))}
          placeholder="https://..."
          value={form.avatar}
        />
        <div className="field__hint">留空时会显示默认头像块</div>
      </div>

      <div className="form-actions">
        <button className="button button--block" disabled={!isConnected || saveStatus === "pending"} type="submit">
          {profile?.exists ? "更新资料" : "创建资料"}
        </button>
      </div>
    </form>
  );
}
