import { useRecoilState } from 'recoil';
import { authState } from './authState';

const useAuthState = () => {
  const [isAuth, useIsAuth] = useRecoilState(authState);
  return { isAuth, useIsAuth };
};

export default useAuthState;
