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

  const fetchRequest = async () => {
    try {
      console.log('fetch Requests');
      const result: AxiosResponse = await authInstance.get('/request/');
      console.log(result.data.requests);
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
      fetchRequest();
      open('home');
    } catch (error) {
      toast.error('依頼作成失敗');
      // console.log(error);
    }
  };

  const closeRequest = async (id: number) => {
    try {
      await authInstance.post(`/request/update/${id}`);
      // console.log(result.data);
      toast.success('依頼終了');
      fetchRequest();
      open('home');
    } catch (error) {
      toast.error('依頼更新失敗');
      // console.log(error);
    }
  };

  return { fetchRequest, createRequest, closeRequest };
};

export default useRequestApi;
