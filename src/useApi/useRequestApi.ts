import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useRequestListState from '../stores/Requests/useRequestListState';
import { createRequestType } from '../types/Request/requestType';
import useTemplateState from '../stores/TemplatesState/useTemplateState';

const useRequestApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { setRequestList } = useRequestListState();
  const { open } = useTemplateState();

  const fetchRequests = async () => {
    try {
      const result: AxiosResponse = await authInstance.get('/request/');
      // console.log(result.data.requests);
      setRequestList(result.data.requests);
    } catch (error) {
      toast.error('依頼取得失敗');
      // console.log(error);
    }
  };

  const createRequest = async (params: createRequestType) => {
    try {
      await authInstance.post('/request/create/', params);
      // console.log(result.data);
      toast.success('依頼作成');
      fetchRequests();
      open('home');
    } catch (error) {
      toast.error('依頼作成失敗');
      // console.log(error);
    }
  };
  return { fetchRequests, createRequest };
};

export default useRequestApi;
