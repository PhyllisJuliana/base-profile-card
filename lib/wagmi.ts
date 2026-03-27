import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { injected } from "wagmi/connectors";

const builderCodeSuffix =
  process.env.NEXT_PUBLIC_BUILDER_CODE_SUFFIX ||
  "TODO_REPLACE_WITH_BASE_BUILDER_CODE_SUFFIX";

// TODO: Replace builderCodeSuffix with the real Base builder code / encoded string
// provided for this app so all attribution remains consistent across the app.
export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    injected({
      target() {
        return {
          id: "injected",
          name: `Injected Wallet (${builderCodeSuffix})`,
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
