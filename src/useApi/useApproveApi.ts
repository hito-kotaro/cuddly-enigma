import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useApproveListState from '../stores/Approves/useApproveListState';

const useApproveApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { setApproveList } = useApproveListState();

  const fetchApprove = async () => {
    try {
      const result: AxiosResponse = await authInstance.get('/approve/');
      console.log(result.data.approves);
      setApproveList(result.data.approves);
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchApprove };
};

export default useApproveApi;
