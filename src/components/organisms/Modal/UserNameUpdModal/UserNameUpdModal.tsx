import { Modal, Box, TextField, Button } from '@mui/material';
import React, { VFC } from 'react';
import { modalType } from '../../../../types/Modal/modalType';
import { InputHandlerType } from '../../../atoms/Input/types/InputHandlerType';
import { style } from '../modalStyle';

type Props = {
  modal: modalType;
  inputHandler: InputHandlerType;
};
const UserNameUpdModal: VFC<Props> = (props) => {
  const { modal, inputHandler } = props;

  const clearClose = () => {
    inputHandler.clear();
    modal.closeHandler();
  };

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
          type="text"
          label="name"
          variant="outlined"
          placeholder="your new name"
          onChange={inputHandler.onChange}
          value={inputHandler.value}
        />

        <div className="h-5" />
        <div className="flex justify-around">
          <div className="text-center">
            <Button variant="contained" onClick={modal.closeHandler}>
              キャンセル
            </Button>
          </div>
          <div className="text-center">
            <Button
              disabled={false}
              variant="contained"
              onClick={() => console.log(inputHandler.value)}
            >
              変更
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default UserNameUpdModal;
