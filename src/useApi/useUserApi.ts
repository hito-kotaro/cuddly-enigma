import { AxiosResponse } from 'axios';
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
      console.log(error);
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
      console.log(error);
    }
  };
  return { fetchUser, fetchUserList };
};

export default useUserApi;
