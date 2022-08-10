import { atom } from 'recoil';

export const gasState = atom<number>({
  key: 'GAS',
  default: 0,
});
