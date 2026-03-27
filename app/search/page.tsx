import { SearchPagePanel } from "@/components/search-page-panel";

export default function SearchPage() {
  return (
    <div className="page">
      <section className="search-panel">
        <div className="section-label">Address Lookup</div>
        <div className="section-title">查询资料卡</div>
        <p className="section-copy">输入钱包地址，快速查看该地址是否存在公开资料。</p>
      </section>
      <SearchPagePanel />
    </div>
  );
}
