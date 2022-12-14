import { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../libs/axiosInstance';
import useAuthState from '../stores/AuthState/useAuthState';
import useBankState from '../stores/BankState/useBankState';
import useLoadingState from '../stores/LoadingState/useLoadingState';
import useSpinState from '../stores/SpinState/useSpinState';
import type { loginParams } from '../types/ApiParams/loginParams';

const useLogin = () => {
  const { setIsLoading } = useLoadingState();
  const { setIsSpin } = useSpinState();
  const { setIsBank } = useBankState();
  const { setIsAuth } = useAuthState();
  const navigate = useNavigate();

  const login = async (params: loginParams) => {
    try {
      setIsLoading(true);
      setIsSpin(true);
      const result: AxiosResponse = await axiosInstance.post('/auth/', params);
      if (params.is_bank) {
        setIsBank(true);
        localStorage.setItem('bank', 'true');
      } else {
        localStorage.setItem('bank', 'false');
        setIsBank(false);
      }
      localStorage.setItem('token', result.data.access_token);

      setIsLoading(false);
      setIsSpin(false);
      setIsAuth(true);
      navigate('/home');
      toast.success('welcome');
    } catch (error) {
      toast.error('login failed');
      setIsSpin(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('bank');
    navigate('/');
    toast.success('logout');
  };

  return { login, logout };
};

export default useLogin;
