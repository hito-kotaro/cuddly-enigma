import { atom } from 'recoil';
import { userType } from '../../types/User/userType';

export const userState = atom<userType>({
  key: 'USER',
  default: { id: 0, name: '', hmt: 0.0 },
});
