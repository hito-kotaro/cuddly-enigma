import { Modal, Box, Button } from '@mui/material';
import React, { VFC } from 'react';
import { modalType } from '../../../../types/Modal/modalType';
import { style } from '../modalStyle';

type Props = {
  confirmMsg: string;
  alertMsg?: string;
  submitMsg: string;
  modal: modalType;
  submitHandler: () => void;
};

const ConfirmModal: VFC<Props> = (props) => {
  const { confirmMsg, alertMsg, submitMsg, modal, submitHandler } = props;
  return (
    <Modal
      open={modal.isOpen}
      onClose={modal.closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p>{confirmMsg}</p>
        <p className="text-sm text-rose-500">{alertMsg ?? ''}</p>
        <div className="h-5" />
        <div className="flex justify-around">
          <div className="text-center">
            <Button
              variant="contained"
              onClick={modal.closeHandler}
              color="warning"
            >
              キャンセル
            </Button>
          </div>
          <div className="text-center">
            <Button variant="contained" onClick={submitHandler}>
              {submitMsg}
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
