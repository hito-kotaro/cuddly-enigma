import React from 'react';
import useUserAgentState from '../../../stores/UserAgentState/useUserAgentState';
import Footer from '../../organisms/Footer/Footer';
import HomeHeader from '../../organisms/HomeHeader/HomeHeader';
import HomeTemplate from './templates/HomeTemplate';
import RequestTemplate from './templates/RequestTemplate';
import { requests } from '../../../dev/TestData/requests';
import DetailTemplate from './templates/DetailTemplate';
import ListTemplate from './templates/ListTemplate';
import useHomePage from './hooks/useHomePage';
import useTemplateState from '../../../stores/TemplatesState/useTemplateState';

const HomePage = () => {
  const { isSafari } = useUserAgentState();
  const { templates, closeDetail } = useTemplateState();
  const { home, detail, request, list } = templates;
  const { detailData, positions, onClickListItem } = useHomePage();
  const { display, hidden } = positions;

  return (
    <div className={`${isSafari} overflow-scroll`}>
      <HomeHeader />

      <div className={` ${home ? display : hidden}`}>
        <HomeTemplate onClick={onClickListItem} requests={requests} />
      </div>

      <div className={`${detail ? display : hidden}`}>
        <DetailTemplate detail={detailData} />
      </div>

      <div className={`${list ? display : hidden}`}>
        <ListTemplate />
      </div>

      <div className={`${request ? display : hidden}`}>
        <RequestTemplate />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
