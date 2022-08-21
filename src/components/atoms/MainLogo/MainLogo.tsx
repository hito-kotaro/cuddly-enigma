import React from 'react';
import { BsFlower1 } from 'react-icons/bs';
import useSpinState from '../../../stores/SpinState/useSpinState';

export const MainLogo = () => {
  const { isSpin, setIsSpin } = useSpinState();
  return (
    <>
      <div className="flex justify-center">
        <button
          type="button"
          className={isSpin ? 'animate-spin' : ''}
          onClick={() => {
            setIsSpin(!isSpin);
          }}
        >
          <BsFlower1 size="48" />
        </button>
      </div>
      <div className="text-center">HANAMARU</div>
    </>
  );
};
