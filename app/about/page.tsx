export default function AboutPage() {
  return (
    <div className="page">
      <section className="about-card">
        <div className="section-label">About</div>
        <div className="section-title">资料卡说明</div>
        <div className="about-list">
          <div className="meta-pill">
            <div className="meta-pill__label">公开查看</div>
            <div className="meta-pill__value">任何人都可以按地址访问资料详情页。</div>
          </div>
          <div className="meta-pill">
            <div className="meta-pill__label">可更新</div>
            <div className="meta-pill__value">资料可反复更新，链上保存最新版本。</div>
          </div>
          <div className="meta-pill">
            <div className="meta-pill__label">轻分享</div>
            <div className="meta-pill__value">详情页适合直接发送链接或截图分享。</div>
          </div>
        </div>
      </section>
    </div>
  );
}
