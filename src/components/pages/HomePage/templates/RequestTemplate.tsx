/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import useInput from '../../../atoms/Input/hooks/useInput';
import useInputNumber from '../../../atoms/Input/hooks/useInputNumber';

const RequestTemplate = () => {
  type userOptionType = { label: String; id: number };
  const rewardInputHandler = useInputNumber();
  const titleInputHandler = useInput();
  const descInputHandler = useInput();
  const [val, setVal] = useState<userOptionType>({ label: '', id: -1 });
  const [isDisable, setIsDisable] = useState(false);

  const top100Films = [
    { label: 'Public', id: 0 },
    { label: 'User1', id: 1 },
    { label: 'User2', id: 2 },
    { label: 'User3', id: 3 },
  ];

  const onChange = (value: { label: string; id: number }) => {
    setVal(value);
  };

  const testConsole = () => {
    const newRequest = {
      title: titleInputHandler.value,
      reward: rewardInputHandler.valueNum,
      order: val.id,
    };
    console.log(newRequest);
  };

  const validateInput = () => {
    if (
      titleInputHandler.value === '' ||
      rewardInputHandler.valueNum === '' ||
      val.id === -1
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  };

  useEffect(() => {
    validateInput();
  }, [rewardInputHandler.valueNum, titleInputHandler.value, val]);

  return (
    <div className="px-2">
      <div className="h-10" />

      <div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              onChange={titleInputHandler.onChange}
              value={titleInputHandler.value}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Reward"
              variant="outlined"
              onChange={rewardInputHandler.onChange}
              value={rewardInputHandler.valueNum}
            />
          </Grid>
        </Grid>
      </div>

      <div className="h-5" />

      <Autocomplete
        disablePortal
        options={top100Films}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(e, v) => onChange(v ?? { label: '', id: -1 })}
        renderInput={(params) => (
          <TextField {...params} fullWidth label="User" />
        )}
      />

      <div className="h-5" />

      <TextField
        label="Comment"
        fullWidth
        multiline
        minRows={10}
        maxRows={10}
        value={descInputHandler.value}
        onChange={descInputHandler.onChange}
      />
      <div className="h-5" />
      <div className="flex justify-center w-11/12 mx-auto">
        <Button onClick={testConsole} variant="contained" disabled={isDisable}>
          依頼発行
        </Button>
      </div>
    </div>
  );
};

export default RequestTemplate;
