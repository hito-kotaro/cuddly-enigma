import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { HiMenu } from 'react-icons/hi';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../../hooks/useLogin';

const MenuButton = () => {
  const { logout } = useLogin();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleIssueRequest = () => {
    handleClose();
    navigate('/request');
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <HiMenu size={32} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleIssueRequest}>依頼の発行</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;