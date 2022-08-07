import { useState } from 'react';
import useRequestListState from '../../../../stores/Requests/useRequestListState';
import useTemplateState from '../../../../stores/TemplatesState/useTemplateState';
import { requestType } from '../../../../types/Request/requestType';

const useHomePage = () => {
  const { open } = useTemplateState();
  const [filterList, setFilterList] = useState<requestType[]>([]);
  const display = 'absolute w-full translate-x-0 opacity-100 duration-1000';
  const hidden = 'absolute w-full -translate-x-full opacity-0 duration-500';
  const { requestList } = useRequestListState();
  const [detailData, setDetailData] = useState<requestType>({
    id: 0,
    title: '',
    owner: '',
    owner_id: 0,
    description: '',
    reward: 0,
    status: false,
    created_at: '',
    updated_at: '',
  });

  const positions = {
    display,
    hidden,
  };

  const onClickListItem = (id: number) => {
    // filter from RequestList
    const req: requestType[] = requestList.filter((r: requestType) => {
      return r.id === id;
    });
    setDetailData(req[0]);
    open('detail');
  };

  return {
    detailData,
    positions,
    filterList,
    setFilterList,
    onClickListItem,
  };
};

export default useHomePage;
