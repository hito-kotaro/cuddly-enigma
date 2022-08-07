import { atom } from 'recoil';
import { requestType } from '../../types/Request/requestType';

export const requestListState = atom<requestType[]>({
  key: 'REQUEST_LIST',
  default: [],
});
