import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useUserState from '../stores/UserState/useUserState';

const useUserApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { setUser } = useUserState();
  const fetchUser = async () => {
    try {
      const result: AxiosResponse = await authInstance.get('/user/');
      console.log(result.data);
      setUser(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchUser };
};

export default useUserApi;
