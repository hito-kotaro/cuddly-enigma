import { atom } from 'recoil';
import { templateStateType } from '../../types/Template/templatesStateType';

const defaultState = {
  home: true,
  detail: false,
  list: false,
  request: false,
  approve: false,
  approveDetail: false,
};

export const templateState = atom<templateStateType>({
  key: 'TEMPLATES',
  default: defaultState,
});
