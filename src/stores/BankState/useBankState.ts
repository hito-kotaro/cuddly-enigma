import { useRecoilState } from 'recoil';
import { BankState } from './BankState';

const useBankState = () => {
  const [isBank, setIsBank] = useRecoilState(BankState);

  const fetchIsBank = () => {
    const bank = localStorage.getItem('bank');
    setIsBank(bank === 'true');
  };
  return { isBank, setIsBank, fetchIsBank };
};

export default useBankState;
