import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { axiosInstance } from '../libs/axiosInstance';
import useGasState from '../stores/GasState/useGasState';

const useBankApi = () => {
  const { setGas } = useGasState();
  const fetchGasValue = async () => {
    try {
      const result: AxiosResponse = await axiosInstance.get('/bank/gas');
      setGas(result.data);
    } catch (error) {
      toast.error('取得失敗');
    }
  };
  return { fetchGasValue };
};

export default useBankApi;
