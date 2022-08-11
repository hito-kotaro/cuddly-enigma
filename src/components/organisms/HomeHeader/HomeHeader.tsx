import React from 'react';
import useGasState from '../../../stores/GasState/useGasState';
import HeaderLogo from '../../atoms/HeaderLogo/HeaderLogo';
import MenuButton from '../../atoms/MenuButton/MenuButton';

const HomeHeader = () => {
  const { gas } = useGasState();
  return (
    <div className="sticky top-0 z-40 bg-base flex p-1">
      <div>
        <HeaderLogo />
      </div>
      <div className="ml-auto leading-10">
        現在のGas:
        <span className="font-semibold text-red-500">{gas * 100}%</span>
      </div>
      <div className="ml-auto">
        <MenuButton />
      </div>
    </div>
  );
};

export default HomeHeader;
