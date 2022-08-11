import { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useBankState from '../stores/BankState/useBankState';
import useUserListState from '../stores/UserState/useUserListState';
import useUserState from '../stores/UserState/useUserState';
import { userListType, userOptionType } from '../types/User/userType';

const useUserApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { isBank } = useBankState();
  const { setUser } = useUserState();
  const { setUserList } = useUserListState();

  const fetchUser = async () => {
    try {
      if (isBank) {
        const result: AxiosResponse = await authInstance.get('/bank/');
        setUser(result.data);
      } else {
        const result: AxiosResponse = await authInstance.get('/user/');
        setUser(result.data);
      }
    } catch (error) {
      toast.error('取得失敗');
    }
  };

  const fetchUserList = async () => {
    try {
      const result: AxiosResponse = await authInstance.get('/user/all');
      const options: userOptionType[] = result.data.users.map(
        (u: userListType) => {
          const tmp: userOptionType = {
            label: u.name,
            id: u.id,
          };
          return tmp;
        },
      );
      setUserList(options);
    } catch (error) {
      toast.error('取得失敗');
    }
  };
  return { fetchUser, fetchUserList };
};

export default useUserApi;
