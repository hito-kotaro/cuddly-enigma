import React from 'react';
import useTemplate from '../../../hooks/useTemplate';
import useUserAgentState from '../../../stores/UserAgentState/useUserAgentState';
import Footer from '../../organisms/Footer/Footer';
import HomeHeader from '../../organisms/HomeHeader/HomeHeader';
import HomeTemplate from './templates/HomeTemplate';
import RequestTemplate from './templates/RequestTemplate';

const HomePage = () => {
  const { isSafari } = useUserAgentState();
  const requestTemplate = useTemplate();
  const homeTemplate = useTemplate();
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0 h-1';

  return (
    <div className={`${isSafari} overflow-scroll`}>
      <HomeHeader />

      <div
        className={`${homeTemplate.isOpen ? display : hidden} duration-1000`}
      >
        <HomeTemplate />
      </div>

      <div
        className={`${requestTemplate.isOpen ? display : hidden} duration-1000`}
      >
        <RequestTemplate />
      </div>

      <div>
        <Footer requestTemplate={requestTemplate} homeTemplate={homeTemplate} />
      </div>
    </div>
  );
};

export default HomePage;
