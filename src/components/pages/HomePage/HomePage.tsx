import React, { useEffect, useState } from 'react';
import useTemplate from '../../../hooks/useTemplate';
import useUserAgentState from '../../../stores/UserAgentState/useUserAgentState';
import Footer from '../../organisms/Footer/Footer';
import HomeHeader from '../../organisms/HomeHeader/HomeHeader';
import HomeTemplate from './templates/HomeTemplate';
import RequestTemplate from './templates/RequestTemplate';
import { requestType } from '../../../types/Request/requestType';
import { requests } from '../../../dev/TestData/requests';
import DetailTemplate from './templates/DetailTemplate';

const HomePage = () => {
  const { isSafari } = useUserAgentState();
  const homeTemplate = useTemplate();
  const detailTemplate = useTemplate();
  const requestTemplate = useTemplate();
  const display = ' w-full translate-x-0 opacity-100 duration-1000';
  const hidden = 'w-full -translate-x-full opacity-0 h-1 duration-100';
  const [detail, setDetail] = useState<requestType>({
    id: 0,
    title: '',
    owner: '',
    description: '',
    reward: 0,
    status: '',
    created_at: '',
    updated_at: '',
  });

  const onClickListItem = (id: number) => {
    // filter from RequestList
    const req: requestType[] = requests.filter((r: requestType) => {
      return r.id === id;
    });
    setDetail(req[0]);
    detailTemplate.open();
    homeTemplate.close();
  };

  const closeDetail = () => {
    detailTemplate.close();
    homeTemplate.open();
  };
  useEffect(() => {
    homeTemplate.open();
  }, []);

  return (
    <div className={`${isSafari} overflow-scroll`}>
      <HomeHeader />

      <div className={` ${homeTemplate.isOpen ? display : hidden} `}>
        <HomeTemplate onClick={onClickListItem} requests={requests} />
      </div>

      <div className={`${detailTemplate.isOpen ? display : hidden} `}>
        <DetailTemplate detail={detail} close={closeDetail} />
      </div>

      <div className={`${requestTemplate.isOpen ? display : hidden} `}>
        <RequestTemplate />
      </div>

      <div>
        <Footer
          requestTemplate={requestTemplate}
          homeTemplate={homeTemplate}
          detailTemplate={detailTemplate}
        />
      </div>
    </div>
  );
};

export default HomePage;
