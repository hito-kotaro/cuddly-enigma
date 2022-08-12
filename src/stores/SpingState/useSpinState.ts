import { useRecoilState } from 'recoil';
import { spinState } from './spinState';

const useSpingState = () => {
  const [isSpin, setIsSpin] = useRecoilState(spinState);
  return { isSpin, setIsSpin };
};

export default useSpingState;
