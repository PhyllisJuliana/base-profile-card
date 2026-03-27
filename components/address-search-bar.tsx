"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isAddress } from "viem";

export function AddressSearchBar({
  initialValue = "",
  buttonLabel = "查询资料"
}: {
  initialValue?: string;
  buttonLabel?: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isAddress(value)) {
      setError("请输入有效的钱包地址");
      return;
    }

    setError("");
    router.push(`/profile/${value}`);
  }

  return (
    <form className="field-grid" onSubmit={handleSubmit}>
      <div className="search-row">
        <input
          aria-label="钱包地址"
          onChange={(event) => setValue(event.target.value.trim())}
          placeholder="0x..."
          value={value}
        />
        <button className="button" type="submit">
          {buttonLabel}
        </button>
      </div>
      {error ? <div className="field__hint">{error}</div> : null}
    </form>
  );
}
