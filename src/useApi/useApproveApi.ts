import { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
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
      setApproveList(result.data.approves);
    } catch (error) {
      toast.error('取得失敗');
    }
  };

  const updateApprove = async (params: updateApproveType) => {
    try {
      await authInstance.put('/approve/update/', params);
      fetchApprove();
      fetchUser();
    } catch (error) {
      toast.error('取得失敗');
    }
  };
  return { fetchApprove, updateApprove };
};

export default useApproveApi;
