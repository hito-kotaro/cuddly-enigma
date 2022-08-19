import React, { useState, useCallback } from 'react';

const useInput = (defaultVal?: string) => {
  const [value, setValue] = useState(defaultVal ?? '');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [value, setValue],
  );

  const clear = () => {
    setValue('');
  };

  return { value, onChange, clear };
};

export default useInput;
