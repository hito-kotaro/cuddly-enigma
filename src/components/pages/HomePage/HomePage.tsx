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
import ListTemplate from './templates/ListTemplate';
import useHomePage from './hooks/useHomePage';

const HomePage = () => {
  const { isSafari } = useUserAgentState();
  const { templates, detailData, positions, onClickListItem, closeDetail } =
    useHomePage();
  const { home, detail, request, list } = templates;
  const { display, hidden } = positions;

  useEffect(() => {
    home.open();
  }, []);

  return (
    <div className={`${isSafari} overflow-scroll`}>
      <HomeHeader />

      <div className={` ${home.isOpen ? display : hidden} `}>
        <HomeTemplate onClick={onClickListItem} requests={requests} />
      </div>

      <div className={`${detail.isOpen ? display : hidden} `}>
        <DetailTemplate detail={detailData} close={closeDetail} />
      </div>

      <div className={`${list.isOpen ? display : hidden} `}>
        <ListTemplate />
      </div>

      <div className={`${request.isOpen ? display : hidden} duration-1000`}>
        <RequestTemplate />
      </div>

      <div>
        <Footer
          requestTemplate={request}
          homeTemplate={home}
          detailTemplate={detail}
          listTemplate={list}
        />
      </div>
    </div>
  );
};

export default HomePage;
