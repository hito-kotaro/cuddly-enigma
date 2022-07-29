import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../libs/axiosInstance';
import useAuthState from '../stores/AuthState/useAuthState';
import useLoadingState from '../stores/LoadingState/useLoadingState';
import type { loginParams } from '../types/ApiParams/loginParams';

const useLogin = () => {
  const { setIsLoading } = useLoadingState();
  const { setIsAuth } = useAuthState();
  const navigate = useNavigate();

  const login = async (params: loginParams) => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await axiosInstance.post('/auth/', params);
      localStorage.setItem('token', result.data.access_token);
      localStorage.setItem('id', result.data.user_id);
      setIsLoading(false);
      setIsAuth(true);
      navigate('/home');
    } catch (error) {
      alert('ログイン失敗');
    }
  };

  return { login };
};

export default useLogin;
