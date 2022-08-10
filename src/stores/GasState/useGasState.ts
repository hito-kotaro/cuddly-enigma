import { useRecoilState } from 'recoil';
import { gasState } from './gasState';

const useGasState = () => {
  const [gas, setGas] = useRecoilState(gasState);
  return { gas, setGas };
};

export default useGasState;
