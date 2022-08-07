import React, { useEffect } from 'react';
import useUserAgentState from '../../../stores/UserAgentState/useUserAgentState';
import Footer from '../../organisms/Footer/Footer';
import HomeHeader from '../../organisms/HomeHeader/HomeHeader';
import HomeTemplate from './templates/HomeTemplate';
import RequestTemplate from './templates/RequestTemplate';
import DetailTemplate from './templates/DetailTemplate';
import ListTemplate from './templates/ListTemplate';
import useHomePage from './hooks/useHomePage';
import useTemplateState from '../../../stores/TemplatesState/useTemplateState';
import useRequestApi from '../../../useApi/useRequestApi';
import useRequestListState from '../../../stores/Requests/useRequestListState';

const HomePage = () => {
  const { isSafari } = useUserAgentState();
  const { templates } = useTemplateState();
  const { requestList } = useRequestListState();
  const { home, detail, request, list } = templates;
  const { detailData, positions, onClickListItem } = useHomePage();
  const { fetchRequests } = useRequestApi();
  const { display, hidden } = positions;

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className={`${isSafari}`}>
      <HomeHeader />
      <div className="relative">
        <div className={`${home ? display : hidden} h-screen overflow-scroll`}>
          <HomeTemplate onClick={onClickListItem} requests={requestList} />
        </div>

        <div className={`${detail ? display : hidden}`}>
          <DetailTemplate detail={detailData} />
        </div>

        <div className={`${list ? display : hidden} h-screen overflow-scroll`}>
          <ListTemplate onClick={onClickListItem} requests={requestList} />
        </div>

        <div className={`${request ? display : hidden}`}>
          <RequestTemplate />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
