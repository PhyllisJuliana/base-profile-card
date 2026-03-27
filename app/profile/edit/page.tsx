import { EditProfilePanel } from "@/components/edit-profile-panel";

export default function EditProfilePage() {
  return (
    <div className="page page--tight">
      <section className="panel">
        <div className="section-label">Profile Studio</div>
        <div className="section-title">编辑我的资料卡</div>
        <p className="section-copy">只保留三个字段，填写完成后直接创建或更新。</p>
      </section>
      <EditProfilePanel />
    </div>
  );
}
