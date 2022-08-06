/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@mui/material';
import useInput from '../../../atoms/Input/hooks/useInput';
import useInputNumber from '../../../atoms/Input/hooks/useInputNumber';
import useRequestApi from '../../../../useApi/useRequestApi';
import { createRequestType } from '../../../../types/Request/requestType';

const RequestTemplate = () => {
  type userOptionType = { label: String; id: number };
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabledAutomation, setIsDisableAutomation] = useState(false);
  const { createRequest } = useRequestApi();
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
    const newRequest: createRequestType = {
      title: titleInputHandler.value,
      description: descInputHandler.value,
      reward: Number(rewardInputHandler.valueNum),
      order_id: isChecked ? -1 : val.id,
      public: isChecked,
    };
    console.log(newRequest);
    // createRequest(newRequest);
  };

  const validateInput = () => {
    if (
      titleInputHandler.value === '' ||
      rewardInputHandler.valueNum === '' ||
      (val.id === -1 && !isChecked)
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  };

  useEffect(() => {
    validateInput();
  }, [rewardInputHandler.valueNum, titleInputHandler.value, val, isChecked]);

  const onCheck = () => {
    setIsChecked(!isChecked);
    setIsDisableAutomation(!isChecked);
  };

  return (
    <div className="px-2">
      <div className="h-3" />
      <div>依頼を発行する</div>
      <div className="h-3" />

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

      <div className="h-5 px-3" />

      <Autocomplete
        // public checkboxにチェックが入っている場合Disableにする
        disabled={isChecked}
        disablePortal
        options={top100Films}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(e, v) => onChange(v ?? { label: '', id: -1 })}
        renderInput={(params) => (
          <TextField {...params} fullWidth label="User" />
        )}
      />
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={onCheck} />}
        label="この依頼を全員に公開する"
      />
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
