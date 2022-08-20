import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Modal, TextField } from '@mui/material';
import stringToColor from '../../../../libs/stringToColor';
import useInput from '../../../atoms/Input/hooks/useInput';
import useUserState from '../../../../stores/UserState/useUserState';
import LinkButton from '../../../atoms/LinkButton/LinkButton';
import useModal from '../../../organisms/Modal/useModal';
import UserNameUpdModal from '../../../organisms/Modal/UserNameUpdModal/UserNameUpdModal';
import { modalType } from '../../../../types/Modal/modalType';
import UserPwdUpdModal from '../../../organisms/Modal/UserPwdUpdModal/UserPwdUpdModal';

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

      <UserPwdUpdModal
        modal={pwdUpdModal}
        currentPwd={currentPwdHandler}
        newPwd={newPwdHandler}
        confirmPwd={confirmPwdHandler}
      />
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
