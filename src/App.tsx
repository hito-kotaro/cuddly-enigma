import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import Router from './routes/Router';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
