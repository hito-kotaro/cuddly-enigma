import React from 'react';
import HeaderLogo from '../../atoms/HeaderLogo/HeaderLogo';
import MenuButton from '../../atoms/MenuButton/MenuButton';

const HomeHeader = () => {
  return (
    <div className="sticky top-0 z-40 bg-base drop-shadow-md border-b-1 flex p-1">
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
