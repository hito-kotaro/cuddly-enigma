import React from 'react';
import useUserAgentState from '../../../stores/UserAgentState/useUserAgentState';
import Footer from '../../organisms/Footer/Footer';
import HomeHeader from '../../organisms/HomeHeader/HomeHeader';
import HomeTemplate from './templates/HomeTemplate';

const HomePage = () => {
  const { isSafari } = useUserAgentState();

  return (
    <div className={`${isSafari} overflow-scroll`}>
      <HomeHeader />

      <div>
        <HomeTemplate />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
