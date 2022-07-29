import { useRecoilState } from 'recoil';
import { loadingState } from './loadingState';

const useLoadingState = () => {
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  return { isLoading, setIsLoading };
};

export default useLoadingState;
