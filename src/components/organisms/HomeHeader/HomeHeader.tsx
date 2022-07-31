import React from 'react';
import HeaderLogo from '../../atoms/HeaderLogo/HeaderLogo';
import MenuButton from '../../atoms/MenuButton/MenuButton';

const HomeHeader = () => {
  return (
    <div className="border-b-1 flex p-1">
      <div>
        <HeaderLogo />
      </div>
      <div className="ml-auto">
        <MenuButton />
      </div>
    </div>
  );
};

export default HomeHeader;
