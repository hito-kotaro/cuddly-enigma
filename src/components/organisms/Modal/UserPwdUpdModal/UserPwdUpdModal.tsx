import React, { useEffect, useState, VFC } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { style } from '../modalStyle';
import { modalType } from '../../../../types/Modal/modalType';
import { InputHandlerType } from '../../../atoms/Input/types/InputHandlerType';
import useUserApi from '../../../../useApi/useUserApi';
import { userUpdatePwdType } from '../../../../types/User/userType';

type Props = {
  modal: modalType;
  currentPwd: InputHandlerType;
  newPwd: InputHandlerType;
  confirmPwd: InputHandlerType;
};

const UserPwdUpdModal: VFC<Props> = (props) => {
  const { modal, currentPwd, newPwd, confirmPwd } = props;
  const [isDisable, setIsDisable] = useState(true);
  const [validationFailedMsg, setValidationFailedMsg] = useState('');
  const { updateUserPwd } = useUserApi();

  const clearClose = () => {
    console.log('clear');
    currentPwd.clear();
    newPwd.clear();
    confirmPwd.clear();
    setValidationFailedMsg('');
    modal.closeHandler();
  };

  const onClickSubmit = () => {
    const params: userUpdatePwdType = {
      current_pwd: currentPwd.value,
      new_pwd: newPwd.value,
    };
    updateUserPwd(params);
    clearClose();
  };

  const validateInput = () => {
    // 特殊文字チェックは後で
    if (
      currentPwd.value === '' ||
      newPwd.value === '' ||
      confirmPwd.value === '' ||
      newPwd.value !== confirmPwd.value
    ) {
      if (newPwd.value !== confirmPwd.value) {
        setValidationFailedMsg('パスワードの再入力が一致しません');
      } else {
        setValidationFailedMsg('');
      }
      setIsDisable(true);
    } else {
      setIsDisable(false);
      setValidationFailedMsg('');
    }
  };

  useEffect(() => {
    validateInput();
    console.log(validationFailedMsg);
  }, [currentPwd.value, newPwd.value, confirmPwd.value]);

  return (
    <Modal
      open={modal.isOpen}
      onClose={clearClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          fullWidth
          type="password"
          label="現在のパスワード"
          variant="outlined"
          placeholder="Enter Current Password"
          onChange={currentPwd.onChange}
          value={currentPwd.value}
        />

        <div className="h-10" />

        <TextField
          fullWidth
          type="password"
          label="新しいパスワード"
          variant="outlined"
          placeholder="Enter new password"
          onChange={newPwd.onChange}
          value={newPwd.value}
        />
        <div className="h-3 " />
        <TextField
          fullWidth
          type="password"
          label="新しいパスワードを再入力"
          variant="outlined"
          placeholder="Enter new password confirm"
          onChange={confirmPwd.onChange}
          value={confirmPwd.value}
        />

        <div className="text-rose-500">{validationFailedMsg}</div>

        <div className="h-5" />
        <div className="flex justify-around">
          <div className="text-center">
            <Button variant="contained" onClick={clearClose} color="warning">
              キャンセル
            </Button>
          </div>
          <div className="text-center">
            <Button
              disabled={isDisable}
              variant="contained"
              onClick={onClickSubmit}
            >
              変更
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default UserPwdUpdModal;
