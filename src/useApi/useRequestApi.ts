import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import { createRequestType } from '../types/Request/requestType';

const useRequestApi = () => {
  const authInstance = createAxiosTokenInstance();
  const createRequest = async (params: createRequestType) => {
    try {
      const result: AxiosResponse = await authInstance.post(
        '/request/create/',
        params,
      );
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { createRequest };
};

export default useRequestApi;
