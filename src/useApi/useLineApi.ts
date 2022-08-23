import { toast } from 'react-hot-toast';
import { postRequestType, postCompleteType } from '../types/Line/LineType';
import { createAxiosTokenInstance } from '../libs/axiosInstance';

const useLineApi = () => {
  const authInstance = createAxiosTokenInstance();

  const postRequest = async (params: postRequestType) => {
    try {
      await authInstance.post('/line/request/', params);
    } catch (error) {
      toast.error('line通知が失敗しました');
    }
  };

  const postComplete = async (params: postCompleteType) => {
    try {
      await authInstance.post('/line/complete/', params);
    } catch (error) {
      toast.error('line通知が失敗しました');
    }
  };

  const postApprove = async (params: postRequestType) => {
    try {
      await authInstance.post('/line/approve/', params);
    } catch (error) {
      toast.error('line通知が失敗しました');
    }
  };

  return { postRequest, postComplete, postApprove };
};

export default useLineApi;
