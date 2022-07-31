import { atom } from 'recoil';

export const UserAgentState = atom<string>({
  key: 'IS_SAFARI',
  default: 'h-screen',
});
