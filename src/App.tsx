import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Router from './routes/Router';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Toaster position="top-right" reverseOrder={false} />
          <Router />
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
};

export default App;
