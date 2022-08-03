import { useState } from 'react';
import { requests } from '../../../../dev/TestData/requests';
import useTemplate from '../../../../hooks/useTemplate';
import { requestType } from '../../../../types/Request/requestType';

const useHomePage = () => {
  const homeTemplate = useTemplate();
  const detailTemplate = useTemplate();
  const listTemplate = useTemplate();
  const requestTemplate = useTemplate();
  const display = ' w-full translate-x-0 opacity-100 duration-1000';
  const hidden = 'w-full -translate-x-full opacity-0 h-1 duration-500';
  const [detailData, setDetailData] = useState<requestType>({
    id: 0,
    title: '',
    owner: '',
    description: '',
    reward: 0,
    status: '',
    created_at: '',
    updated_at: '',
  });

  const positions = {
    display,
    hidden,
  };

  const templates = {
    home: homeTemplate,
    detail: detailTemplate,
    list: listTemplate,
    request: requestTemplate,
  };

  const onClickListItem = (id: number) => {
    // filter from RequestList
    const req: requestType[] = requests.filter((r: requestType) => {
      return r.id === id;
    });
    setDetailData(req[0]);
    detailTemplate.open();
    homeTemplate.close();
  };

  const closeDetail = () => {
    detailTemplate.close();
    homeTemplate.open();
  };

  return {
    templates,
    detailData,
    positions,
    onClickListItem,
    closeDetail,
  };
};

export default useHomePage;
