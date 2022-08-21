import { useRecoilState } from 'recoil';
import { spinState } from './spinState';

const useSpinState = () => {
  const [isSpin, setIsSpin] = useRecoilState(spinState);
  return { isSpin, setIsSpin };
};

export default useSpinState;
