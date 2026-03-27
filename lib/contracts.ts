export const profileCardAddress = "0x64d346b6f3209c308233661eaaebb73c0cf307bd" as const;

export const profileCardAbi = [
  {
    type: "function",
    name: "createProfile",
    stateMutability: "nonpayable",
    inputs: [
      { name: "nickname", type: "string" },
      { name: "bio", type: "string" },
      { name: "avatar", type: "string" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "updateProfile",
    stateMutability: "nonpayable",
    inputs: [
      { name: "nickname", type: "string" },
      { name: "bio", type: "string" },
      { name: "avatar", type: "string" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "getProfile",
    stateMutability: "view",
    inputs: [{ name: "user", type: "address" }],
    outputs: [
      { name: "nickname", type: "string" },
      { name: "bio", type: "string" },
      { name: "avatar", type: "string" },
      { name: "updatedAt", type: "uint256" },
      { name: "exists", type: "bool" }
    ]
  }
] as const;
