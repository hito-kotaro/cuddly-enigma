import { atom } from 'recoil';
import { userOptionType } from '../../types/User/userType';

export const userListState = atom<userOptionType[]>({
  key: 'USER_OPTIONS',
  default: [],
});
