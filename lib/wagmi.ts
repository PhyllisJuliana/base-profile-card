import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const baseBuilderCode =
  process.env.NEXT_PUBLIC_BUILDER_CODE_SUFFIX || "bc_ggxl2wdn";

export const baseBuilderEncoded =
  process.env.NEXT_PUBLIC_BUILDER_CODE_ENCODED ||
  "0x62635f6767786c3277646e0b0080218021802180218021802180218021";

// Keep both the readable builder code and the encoded 8021 payload together
// so downstream attribution wiring can use a single source of truth.
export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    injected({
      target() {
        return {
          id: "injected",
          name: `Injected Wallet (${baseBuilderCode})`,
          provider:
            typeof window !== "undefined"
              ? (window as Window & typeof globalThis & { ethereum?: any }).ethereum
              : undefined
        };
      }
    })
  ],
  transports: {
    [base.id]: http(process.env.NEXT_PUBLIC_BASE_RPC_URL || "https://mainnet.base.org")
  }
});
