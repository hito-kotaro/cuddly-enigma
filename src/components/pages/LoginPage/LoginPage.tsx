import React, { useState } from 'react';
import LinkButton from '../../atoms/LinkButton/LinkButton';
import LoginTemplate from './templates/LoginTemplate';

const LoginPage = () => {
  const [isBank, setIsBank] = useState(false);

  const toggleLoginMode = () => {
    setIsBank(!isBank);
  };

  return (
    <>
      <LoginTemplate isBank={isBank} />
      <div className="flex justify-center">
        <LinkButton onClick={toggleLoginMode}>
          銀行アカウントでログイン
        </LinkButton>
      </div>
    </>
  );
};

export default LoginPage;
