import { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
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
      localStorage.setItem('id', result.data.id);
      setIsLoading(false);
      setIsAuth(true);
      navigate('/home');
      toast.success('welcome');
    } catch (error) {
      toast.error('login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    // localStorage.removeItem('id');
    navigate('/');
    toast.success('logout');
  };

  return { login, logout };
};

export default useLogin;
