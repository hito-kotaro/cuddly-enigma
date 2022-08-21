import { useState } from 'react';
import useApproveListState from '../../../../stores/Approves/useApproveListState';
import useRequestListState from '../../../../stores/Requests/useRequestListState';
import useTemplateState from '../../../../stores/TemplatesState/useTemplateState';
import { approveType } from '../../../../types/Approve/approveType';
import { requestType } from '../../../../types/Request/requestType';

const useHomePage = () => {
  const { open } = useTemplateState();
  const [filterList, setFilterList] = useState<requestType[]>([]);
  const display = 'absolute w-full translate-x-0 opacity-100 duration-1000';
  const hidden = 'absolute w-full -translate-x-full opacity-0 duration-500';
  const { requestList } = useRequestListState();
  const { approveList } = useApproveListState();
  const [approveDetailData, setApproveDetailData] = useState<approveType>({
    id: 0,
    title: '',
    applicant: '',
    applicant_id: 0,
    owner_id: 0,
    owner: '',
    description: '',
    reward: 0,
    status: '',
    is_bank: false,
    created_at: '',
    updated_at: '',
  });
  const [requestDetailData, setRequestDetailData] = useState<requestType>({
    id: 0,
    title: '',
    owner: '',
    owner_id: 0,
    description: '',
    reward: 0,
    status: false,
    created_at: '',
    updated_at: '',
    is_bank: false,
  });

  const positions = {
    display,
    hidden,
  };

  const onClickRequestListItem = (id: number) => {
    const req: requestType[] = requestList.filter((r: requestType) => {
      return r.id === id;
    });
    console.log(req[0]);
    setRequestDetailData(req[0]);
    open('detail');
  };

  const onClickApproveListItem = (id: number) => {
    // filter from ApproveList
    const req: approveType[] = approveList.filter((a: approveType) => {
      return a.id === id;
    });
    setApproveDetailData(req[0]);
    open('approveDetail');
  };

  return {
    requestDetailData,
    approveDetailData,
    positions,
    filterList,
    setFilterList,
    onClickApproveListItem,
    onClickRequestListItem,
  };
};

export default useHomePage;
