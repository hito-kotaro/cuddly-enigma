import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { HiMenu } from 'react-icons/hi';
import { Menu, MenuItem } from '@mui/material';
import useLogin from '../../../hooks/useLogin';
import useTemplateState from '../../../stores/TemplatesState/useTemplateState';

const MenuButton = () => {
  const { logout } = useLogin();
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { open } = useTemplateState();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleUserUpdate = () => {
    handleClose();
    open('userUpdate');
  };

  const handleHistory = () => {
    handleClose();
    open('history');
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={menuOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <HiMenu size={32} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleUserUpdate}>ユーザー更新</MenuItem>
        <MenuItem onClick={handleHistory}>履歴</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuButton;
