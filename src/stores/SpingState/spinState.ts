import { atom } from 'recoil';

export const spinState = atom<boolean>({
  key: 'IS_SPIN',
  default: false,
});
