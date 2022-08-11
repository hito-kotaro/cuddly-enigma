import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useApproveListState from '../stores/Approves/useApproveListState';
import { updateApproveType } from '../types/Approve/approveType';
import useUserApi from './useUserApi';

const useApproveApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { setApproveList } = useApproveListState();
  const { fetchUser } = useUserApi();

  const fetchApprove = async () => {
    try {
      const result: AxiosResponse = await authInstance.get('/approve/');
      console.log(result.data.approves);
      setApproveList(result.data.approves);
    } catch (error) {
      console.log(error);
    }
  };

  const updateApprove = async (params: updateApproveType) => {
    try {
      console.log(params);
      const result: AxiosResponse = await authInstance.put(
        '/approve/update/',
        params,
      );
      console.log(result.data.approves);
      fetchApprove();
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchApprove, updateApprove };
};

export default useApproveApi;
