import React from 'react';
import useUserAgentState from '../../../stores/UserAgentState/useUserAgentState';
import HomeTemplate from './templates/HomeTemplate';

const HomePage = () => {
  const { isSafari } = useUserAgentState();
  return (
    <div className={`bg-red-200 ${isSafari}`}>
      <HomeTemplate />
    </div>
  );
};

export default HomePage;
