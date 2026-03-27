import Link from "next/link";

import { CopyAddressButton } from "@/components/copy-address-button";
import { ProfileDetailsView } from "@/components/profile-details-view";

type Props = {
  params: { address: string };
};

export default function ProfileDetailPage({ params }: Props) {
  const { address } = params;

  return (
    <div className="page">
      <div className="row">
        <Link className="button-ghost" href="/">
          返回入口
        </Link>
        <CopyAddressButton address={address} />
      </div>
      <ProfileDetailsView address={address} />
    </div>
  );
}
