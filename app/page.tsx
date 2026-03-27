import Link from "next/link";

import { ProfileSummaryPanel } from "@/components/profile-summary-panel";
import { StatusChip } from "@/components/status-chip";
import { WalletButton } from "@/components/wallet-button";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero-grid">
        <div className="hero-main">
          <div className="hero-main__kicker">Base Identity</div>
          <h1 className="hero-main__title">公开资料卡</h1>
          <p className="hero-main__copy">
            连接钱包，创建一张可分享、可更新、可公开查询的链上身份卡。
          </p>
          <div className="status-row">
            <StatusChip tone="info">资料写入 Base 合约</StatusChip>
            <StatusChip tone="ok">详情页可独立访问</StatusChip>
          </div>
        </div>
        <ProfileSummaryPanel />
      </section>

      <section className="shortcut-grid">
        <Link className="nav-card" href="/profile/edit">
          <div className="section-label">Create</div>
          <div className="nav-card__title">创建资料</div>
          <div className="nav-card__text">设置昵称、简介和头像链接，生成你的公开名片。</div>
        </Link>
        <Link className="nav-card" href="/search">
          <div className="section-label">Lookup</div>
          <div className="nav-card__title">查询地址</div>
          <div className="nav-card__text">输入钱包地址，直接查看该地址是否已有资料卡。</div>
        </Link>
      </section>

      <section className="panel">
        <div className="section-label">My Entry</div>
        <div className="section-title">我的卡片入口</div>
        <p className="section-copy">连接钱包后可直接查看当前资料状态，并进入编辑或详情页。</p>
        <div className="form-actions">
          <WalletButton />
          <Link className="button-ghost" href="/profile/edit">
            编辑资料
          </Link>
        </div>
      </section>
    </div>
  );
}
