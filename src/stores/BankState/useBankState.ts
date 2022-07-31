import { useRecoilState } from 'recoil';
import { BankState } from './BankState';

const useBankState = () => {
  const [isBank, setIsBank] = useRecoilState(BankState);

  return { isBank, setIsBank };
};

export default useBankState;
