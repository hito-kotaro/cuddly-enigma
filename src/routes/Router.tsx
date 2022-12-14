import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
// @ts-ignore
import SlideRoutes from 'react-slide-routes';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import HomePage from '../components/pages/HomePage/HomePage';
import useUserAgentState from '../stores/UserAgentState/useUserAgentState';

const Router = () => {
  const location = useLocation();
  const { check } = useUserAgentState();

  useEffect(() => {
    check();
  }, []);

  return (
    <SlideRoutes location={location} duration={500}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </SlideRoutes>
  );
};

export default Router;
