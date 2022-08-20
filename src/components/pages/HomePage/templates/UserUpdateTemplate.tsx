import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Grid, Modal, TextField } from '@mui/material';
import stringToColor from '../../../../libs/stringToColor';
import useInput from '../../../atoms/Input/hooks/useInput';
import useUserState from '../../../../stores/UserState/useUserState';
import LinkButton from '../../../atoms/LinkButton/LinkButton';

const UserUpdateTemplate = () => {
  const { user } = useUserState();
  const [isModal, setIsModel] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const nameInputHandler = useInput(user.name);
  const currentPwdHandler = useInput();
  const newPwdHandler = useInput();

  // Material UIのModalのスタイル
  // 位置調整などめんどくさそうなので公式をこぴぺ
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => {
    nameInputHandler.clear();
    setIsModel(false);
  };

  const handleOpen = () => {
    setIsModel(true);
  };

  const validateInput = () => {
    // 特殊文字チェックは後で
    if (
      nameInputHandler.value === '' ||
      nameInputHandler.value === user.name ||
      nameInputHandler.value.length > 20
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  };

  useEffect(() => {
    validateInput();
  }, [nameInputHandler]);

  return (
    <div>
      <Modal
        open={isModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            type="text"
            label="name"
            variant="outlined"
            placeholder="your new name"
            onChange={nameInputHandler.onChange}
            value={nameInputHandler.value}
          />

          <div className="h-5" />
          <div className="flex justify-around">
            <div className="text-center">
              <Button variant="contained" onClick={handleClose}>
                キャンセル
              </Button>
            </div>
            <div className="text-center">
              <Button
                disabled={isDisable}
                variant="contained"
                onClick={() => console.log(nameInputHandler.value)}
              >
                変更
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="h-10" />
      <div className="flex justify-center">
        <Avatar
          sx={{ width: 64, height: 64, bgcolor: stringToColor(user.name) }}
        >
          {user.name ? user.name[0].toUpperCase() : ''}
        </Avatar>
      </div>

      <div className="flex justify-center">
        <div className="text-xl">{user.name}</div>
      </div>

      <div className="h-5" />
      <div className="flex justify-center">
        <LinkButton onClick={handleOpen}>ユーザー名を変更</LinkButton>
      </div>

      <div className="h-5" />

      <div className="flex justify-center">
        <LinkButton onClick={handleOpen}>パスワードを変更</LinkButton>
      </div>
    </div>
  );
};

export default UserUpdateTemplate;
