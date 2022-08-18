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
      {/* <div className="ml-auto leading-10">現在のGas:</div> */}

      <fieldset className=" shadow-inner rounded-lg w-20 text-center mx-auto">
        <legend className="font-mono text-gray-500">tax</legend>
        <span className="font-semibold text-red-500">{gas * 100}%</span>
      </fieldset>
      <div className="ml-auto">
        <MenuButton />
      </div>
    </div>
  );
};

export default HomeHeader;
