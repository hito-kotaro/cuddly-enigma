import React, { VFC } from 'react';
import useGasState from '../../../stores/GasState/useGasState';
import HeaderLogo from '../../atoms/HeaderLogo/HeaderLogo';
import MenuButton from '../../atoms/MenuButton/MenuButton';

type Props = {
  updatePage: () => void;
};

const HomeHeader: VFC<Props> = (props) => {
  const { updatePage } = props;
  const { gas } = useGasState();
  return (
    <div className="sticky top-0 z-40 bg-base flex p-1">
      <div>
        <button type="button" onClick={updatePage}>
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
