export type ProfileRecord = {
  address: string;
  nickname: string;
  bio: string;
  avatar: string;
  updatedAt: number;
  exists: boolean;
};

export type ProfileInput = {
  nickname: string;
  bio: string;
  avatar: string;
};
