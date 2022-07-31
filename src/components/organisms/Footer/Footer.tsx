import React, { useState, useEffect } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { BsFlower1 } from 'react-icons/bs';

const Footer = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="ホーム" icon={<BsFlower1 />} value="a" />
        <BottomNavigationAction
          label="依頼発行"
          icon={<BsFlower1 />}
          value="b"
        />
        <BottomNavigationAction label="" icon={<BsFlower1 />} value="c" />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
