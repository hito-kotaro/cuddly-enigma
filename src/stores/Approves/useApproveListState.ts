import { useRecoilState } from 'recoil';
import { approveListState } from './approvesListState';

const useApproveListState = () => {
  const [approveList, setApproveList] = useRecoilState(approveListState);
  return { approveList, setApproveList };
};

export default useApproveListState;
