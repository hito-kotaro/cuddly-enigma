import React from 'react';
import { Avatar, Button } from '@mui/material';
import stringToColor from '../../../../libs/stringToColor';
import useInput from '../../../atoms/Input/hooks/useInput';
import useUserState from '../../../../stores/UserState/useUserState';
import useModal from '../../../organisms/Modal/useModal';
import UserNameUpdModal from '../../../organisms/Modal/UserNameUpdModal/UserNameUpdModal';
import { modalType } from '../../../../types/Modal/modalType';
import UserPwdUpdModal from '../../../organisms/Modal/UserPwdUpdModal/UserPwdUpdModal';

const UserUpdateTemplate = () => {
  const { user } = useUserState();

  // モーダルのステート管理
  const nameUpdModal: modalType = useModal();
  const pwdUpdModal: modalType = useModal();

  // ユーザー名更新モーダルのインプットハンドラ
  const nameInputHandler = useInput();

  // パスワード更新モーダルのインプットハンドラ
  const currentPwdHandler = useInput();
  const newPwdHandler = useInput();
  const confirmPwdHandler = useInput();

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
        <Button variant="contained" onClick={nameUpdModal.openHandler}>
          <span className="text-lg">ユーザー名を変更</span>
        </Button>
      </div>

      <div className="h-5" />

      <div className="flex justify-center">
        <Button variant="contained" onClick={pwdUpdModal.openHandler}>
          <span className="text-lg">パスワードを変更</span>
        </Button>
      </div>
    </div>
  );
};

export default UserUpdateTemplate;
