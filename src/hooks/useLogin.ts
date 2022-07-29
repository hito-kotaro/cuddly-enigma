import { AxiosResponse } from 'axios';
import { axiosInstance } from '../libs/axiosInstance';
import type { loginParams } from '../types/ApiParams/loginParams';

const useLogin = () => {
  const login = async (params: loginParams) => {
    try {
      const result: AxiosResponse = await axiosInstance.post('/auth/', params);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};

export default useLogin;
