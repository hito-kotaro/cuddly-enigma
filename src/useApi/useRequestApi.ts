import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../libs/axiosInstance';
import useRequestListState from '../stores/Requests/useRequestListState';
import { createRequestType } from '../types/Request/requestType';
import useTemplateState from '../stores/TemplatesState/useTemplateState';
import useUserApi from './useUserApi';
import { postRequestType, postCompleteType } from '../types/Line/LineType';
import useLineApi from './useLineApi';

const useRequestApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { setRequestList } = useRequestListState();
  const { open } = useTemplateState();
  const { fetchUser } = useUserApi();
  const { postRequest, postComplete } = useLineApi();

  const fetchRequest = async () => {
    try {
      const result: AxiosResponse = await authInstance.get('/request/');
      setRequestList(result.data.requests);
    } catch (error) {
      toast.error('依頼取得失敗');
    }
  };

  const createRequest = async (params: createRequestType) => {
    const notifyParams: postRequestType = { request_title: params.title };
    try {
      await authInstance.post('/request/create/', params);
      toast.success('依頼作成');
      postRequest(notifyParams);
      fetchRequest();
      fetchUser();
      open('home');
    } catch (error) {
      toast.error('依頼作成失敗');
    }
  };

  const closeRequest = async (requestId: number) => {
    try {
      await authInstance.put(`/request/close/${requestId}`);
      toast.success('依頼終了');
      fetchRequest();
      fetchUser();
    } catch (error) {
      toast.error('依頼更新失敗');
    }
  };

  const completeRequest = async (
    requestId: number,
    title: string,
    owner: string,
  ) => {
    const notifyParams: postCompleteType = {
      request_title: title,
      owner,
    };
    try {
      await authInstance.put(`/request/complete/${requestId}`);
      toast.success('依頼完了を申請しました。 承認されるまでお待ちください。');
      postComplete(notifyParams);
      fetchRequest();
      fetchUser();
    } catch (error) {
      toast.error('依頼更新失敗');
    }
  };

  return { fetchRequest, createRequest, closeRequest, completeRequest };
};

export default useRequestApi;
