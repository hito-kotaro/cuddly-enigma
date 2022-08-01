import React, { useState } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { BsFlower1 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const onChange = (template: string) => {
    console.log(template);
  };

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
      >
        <BottomNavigationAction
          label="ホーム"
          icon={<BsFlower1 />}
          value="home"
        />
        <BottomNavigationAction
          label="依頼発行"
          icon={<BsFlower1 />}
          value="request"
        />
        <BottomNavigationAction label="" icon={<BsFlower1 />} value="c" />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
