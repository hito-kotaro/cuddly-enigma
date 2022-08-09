import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { BsFlower1 } from 'react-icons/bs';
import useTemplateState from '../../../stores/TemplatesState/useTemplateState';

const Footer = () => {
  const { open } = useTemplateState();

  const onChange = (template: string) => {
    open(template);
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
          label="一覧"
          icon={<BsFlower1 />}
          value="list"
        />

        <BottomNavigationAction
          label="発行"
          icon={<BsFlower1 />}
          value="request"
        />

        <BottomNavigationAction
          label="承認"
          icon={<BsFlower1 />}
          value="approve"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
