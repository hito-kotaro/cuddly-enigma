import { useRecoilState } from 'recoil';
import { requestListState } from './requestListState';

const useRequestListState = () => {
  const [requestList, setRequestList] = useRecoilState(requestListState);
  return { requestList, setRequestList };
};

export default useRequestListState;
