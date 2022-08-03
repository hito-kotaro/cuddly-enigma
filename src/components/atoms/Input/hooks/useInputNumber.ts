import React, { useState, useCallback } from 'react';

const useInputNumber = () => {
  const [valueNum, setValueNum] = useState<string>('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const re = /^[0-9\b]+$|\./;
      if (e.target.value === '' || re.test(e.target.value)) {
        setValueNum(e.target.value);
      }
    },
    [valueNum, setValueNum],
  );

  const clear = () => {
    setValueNum('');
  };

  return { valueNum, onChange, clear };
};

export default useInputNumber;
