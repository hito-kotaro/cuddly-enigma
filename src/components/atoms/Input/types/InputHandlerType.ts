import React from 'react';

export type InputHandlerType = {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  clear: () => void;
};
