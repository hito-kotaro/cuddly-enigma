import React from 'react';
import useUserAgentState from '../../../stores/UserAgentState/useUserAgentState';
import HomeTemplate from './templates/HomeTemplate';

const HomePage = () => {
  const { isSafari } = useUserAgentState();
  return (
    <div className={`${isSafari}`}>
      <HomeTemplate />
    </div>
  );
};

export default HomePage;
