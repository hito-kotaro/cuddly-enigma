import { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useBankState from '../stores/BankState/useBankState';
import useSpinState from '../stores/SpinState/useSpinState';
import useUserListState from '../stores/UserState/useUserListState';
import useUserState from '../stores/UserState/useUserState';
import {
  userListType,
  userOptionType,
  userUpdateNameType,
  userUpdatePwdType,
} from '../types/User/userType';

const useUserApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { isBank } = useBankState();
  const { setIsSpin } = useSpinState();
  const { setUser } = useUserState();
  const { setUserList } = useUserListState();

  const fetchUser = async () => {
    try {
      console.log('fetch user');
      if (isBank) {
        const result: AxiosResponse = await authInstance.get('/bank/');
        setIsSpin(true);
        setUser(result.data);
      } else {
        const result: AxiosResponse = await authInstance.get('/user/');
        setIsSpin(true);
        setUser(result.data);
      }
      setIsSpin(false);
    } catch (error) {
      toast.error('取得失敗');
      setIsSpin(false);
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

  const updateUserName = async (params: userUpdateNameType) => {
    try {
      await authInstance.put('/user/update/name', params);
      fetchUser();
      fetchUserList();
      toast.success('更新完了');
    } catch (error) {
      toast.error('更新失敗');
    }
  };

  const updateUserPwd = async (params: userUpdatePwdType) => {
    try {
      await authInstance.put('/user/update/pwd', params);
      toast.success('更新完了');
    } catch (error) {
      toast.error('更新失敗');
    }
  };
  return { fetchUser, fetchUserList, updateUserName, updateUserPwd };
};

export default useUserApi;
