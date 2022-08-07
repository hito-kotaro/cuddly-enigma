import { atom } from 'recoil';

export const authState = atom<number>({
  key: 'IS_AUTH',
  default: -1,
});
