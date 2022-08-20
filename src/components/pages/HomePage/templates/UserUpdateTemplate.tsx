import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Modal, TextField } from '@mui/material';
import stringToColor from '../../../../libs/stringToColor';
import useInput from '../../../atoms/Input/hooks/useInput';
import useUserState from '../../../../stores/UserState/useUserState';
import LinkButton from '../../../atoms/LinkButton/LinkButton';
import useModal from '../../../organisms/Modal/useModal';
import UserNameUpdModal from '../../../organisms/Modal/UserNameUpdModal/UserNameUpdModal';
import { modalType } from '../../../../types/Modal/modalType';

const UserUpdateTemplate = () => {
  const { user } = useUserState();

  const nameUpdModal: modalType = useModal();
  const pwdUpdModal: modalType = useModal();

  // ユーザー名更新モーダルのボタン用
  const [isDisable, setIsDisable] = useState(true);

  // ユーザー名更新モーダルのインプットハンドラ
  const nameInputHandler = useInput(user.name);

  // パスワード更新モーダルのインプットハンドラ
  const currentPwdHandler = useInput();
  const newPwdHandler = useInput();
  const confirmPwdHandler = useInput();

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
      <UserNameUpdModal modal={nameUpdModal} inputHandler={nameInputHandler} />

      <Modal
        open={pwdUpdModal.isOpen}
        onClose={pwdUpdModal.closeHandler}
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
            onChange={currentPwdHandler.onChange}
            value={currentPwdHandler.value}
          />

          <div className="h-10" />

          <TextField
            fullWidth
            type="password"
            label="新しいパスワード"
            variant="outlined"
            placeholder="Enter new password"
            onChange={newPwdHandler.onChange}
            value={newPwdHandler.value}
          />
          <div className="h-3 " />
          <TextField
            fullWidth
            type="password"
            label="新しいパスワードを再入力"
            variant="outlined"
            placeholder="Enter new password confirm"
            onChange={confirmPwdHandler.onChange}
            value={confirmPwdHandler.value}
          />

          <div className="h-5" />
          <div className="flex justify-around">
            <div className="text-center">
              <Button variant="contained" onClick={pwdUpdModal.closeHandler}>
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
        <LinkButton onClick={nameUpdModal.openHandler}>
          ユーザー名を変更
        </LinkButton>
      </div>

      <div className="h-5" />

      <div className="flex justify-center">
        <LinkButton onClick={pwdUpdModal.openHandler}>
          パスワードを変更
        </LinkButton>
      </div>
    </div>
  );
};

export default UserUpdateTemplate;
