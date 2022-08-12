import { atom } from 'recoil';

export const isSping = atom<boolean>({
  key: 'IS_SPIN',
  default: false,
});
