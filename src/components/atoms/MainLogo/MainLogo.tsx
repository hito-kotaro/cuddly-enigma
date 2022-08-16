import React from 'react';
import { BsFlower1 } from 'react-icons/bs';
import useSpingState from '../../../stores/SpingState/useSpinState';

export const MainLogo = () => {
  const { isSpin, setIsSpin } = useSpingState();
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
