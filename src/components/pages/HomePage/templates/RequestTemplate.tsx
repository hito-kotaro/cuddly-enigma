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
import { BiWallet } from 'react-icons/bi';
import useInput from '../../../atoms/Input/hooks/useInput';
import useInputNumber from '../../../atoms/Input/hooks/useInputNumber';
import useRequestApi from '../../../../useApi/useRequestApi';
import { createRequestType } from '../../../../types/Request/requestType';
import type { userOptionType } from '../../../../types/User/userType';
import useUserListState from '../../../../stores/UserState/useUserListState';
import useUserState from '../../../../stores/UserState/useUserState';
import useBankState from '../../../../stores/BankState/useBankState';

const RequestTemplate = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { createRequest } = useRequestApi();
  const rewardInputHandler = useInputNumber();
  const titleInputHandler = useInput();
  const descInputHandler = useInput();
  const [val, setVal] = useState<userOptionType>({ label: '', id: -1 });
  const [isDisable, setIsDisable] = useState(false);
  const { userList } = useUserListState();
  const { user } = useUserState();
  const [filterd, setFilterd] = useState<userOptionType[]>(userList);
  const { isBank } = useBankState();

  const onChange = (value: { label: string; id: number }) => {
    setVal(value);
  };

  useEffect(() => {
    if (isBank) {
      setFilterd(userList);
    } else {
      const filter = userList.filter((u: userOptionType) => {
        return user.id !== u.id;
      });
      setFilterd(filter);
    }
  }, [userList]);

  const create = () => {
    const newRequest: createRequestType = {
      title: titleInputHandler.value,
      description: descInputHandler.value,
      reward: Number(rewardInputHandler.valueNum),
      order_id: isChecked ? -1 : val.id,
      public: isChecked,
      is_bank: isBank,
    };
    titleInputHandler.clear();
    descInputHandler.clear();
    rewardInputHandler.clear();
    setIsChecked(false);
    createRequest(newRequest);
  };

  const validateInput = () => {
    if (
      titleInputHandler.value === '' ||
      rewardInputHandler.valueNum === '' ||
      Number(rewardInputHandler.valueNum) > user.hmt ||
      Number(rewardInputHandler.valueNum) < 0.01 ||
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
  };

  return (
    <div className="px-2">
      <div className="h-3" />
      <div className="flex">
        <Button onClick={create} variant="contained" disabled={isDisable}>
          依頼発行
        </Button>
        <div className="ml-auto">
          <div className="flex">
            <BiWallet size={24} />
            <div className="w-2" />
            <span className="font-bold">{user.hmt.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="h-3" />

      <div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="タイトル"
              variant="outlined"
              onChange={titleInputHandler.onChange}
              value={titleInputHandler.value}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="報酬"
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
        options={filterd}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(e, v) => onChange(v ?? { label: '', id: -1 })}
        renderInput={(params) => (
          <TextField {...params} fullWidth label="対象者" />
        )}
      />
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={onCheck} />}
        label="この依頼を全員に公開する"
      />
      <TextField
        label="コメント"
        fullWidth
        multiline
        minRows={10}
        maxRows={10}
        value={descInputHandler.value}
        onChange={descInputHandler.onChange}
      />
      <div className="h-5" />
      {/* <div className="flex justify-center w-11/12 mx-auto pb-10">
        <Button onClick={create} variant="contained" disabled={isDisable}>
          依頼発行
        </Button>
      </div> */}
    </div>
  );
};

export default RequestTemplate;
