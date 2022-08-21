import React from 'react';
import useGasState from '../../../stores/GasState/useGasState';
import useUserApi from '../../../useApi/useUserApi';
import HeaderLogo from '../../atoms/HeaderLogo/HeaderLogo';
import MenuButton from '../../atoms/MenuButton/MenuButton';

const HomeHeader = () => {
  const { gas } = useGasState();
  const { fetchUser } = useUserApi();
  return (
    <div className="sticky top-0 z-40 bg-base flex p-1">
      <div>
        <button type="button" onClick={fetchUser}>
          <HeaderLogo />
        </button>
      </div>
      {/* <div className="ml-auto leading-10">現在のGas:</div> */}

      <fieldset className=" shadow-inner rounded-lg w-full text-center mx-auto">
        <legend className="font-mono text-xs text-gray-500">
          現在の手数料
        </legend>
        <span className="font-semibold text-red-500">{gas * 100}%</span>
      </fieldset>
      <div className="ml-auto">
        <MenuButton />
      </div>
    </div>
  );
};

export default HomeHeader;
