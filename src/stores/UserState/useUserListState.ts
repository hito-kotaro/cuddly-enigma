import { useRecoilState } from 'recoil';
import { userListState } from './userListState';

const useUserListState = () => {
  const [userList, setUserList] = useRecoilState(userListState);
  return { userList, setUserList };
};

export default useUserListState;
