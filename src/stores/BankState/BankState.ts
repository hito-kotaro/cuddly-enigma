import { atom } from 'recoil';

export const BankState = atom<boolean>({
  key: 'IS_BANK',
  default: false,
});
