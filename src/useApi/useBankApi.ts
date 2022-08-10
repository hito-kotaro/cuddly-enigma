import { AxiosResponse } from 'axios';
import { axiosInstance } from '../libs/axiosInstance';
import useGasState from '../stores/GasState/useGasState';

const useBankApi = () => {
  const { setGas } = useGasState();
  const fetchGasValue = async () => {
    try {
      const result: AxiosResponse = await axiosInstance.get('/bank/gas');
      console.log(result.data);
      setGas(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchGasValue };
};

export default useBankApi;
