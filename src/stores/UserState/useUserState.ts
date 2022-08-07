import { useRecoilState } from 'recoil';
import { userState } from './userState';

const useUserState = () => {
  const [user, setUser] = useRecoilState(userState);
  return { user, setUser };
};

export default useUserState;
