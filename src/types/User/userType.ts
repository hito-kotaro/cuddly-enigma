export type userType = {
  id: number;
  name: string;
  hmt: number;
};

export type userListType = { id: number; name: string };

export type userOptionType = { label: string; id: number };

export type userUpdateNameType = { name: string };

export type userUpdatePwdType = { current_pwd: string; new_pwd: string };
