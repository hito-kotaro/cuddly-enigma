import { atom } from 'recoil';
import { approveType } from '../../types/Approve/approveType';

export const approveListState = atom<approveType[]>({
  key: 'APPROVE_LIST',
  default: [],
});
