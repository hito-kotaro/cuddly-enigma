import React, { useState, VFC } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { BsFlower1 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { templateType } from '../../../types/Template/templateType';

type Props = {
  homeTemplate: templateType;
  requestTemplate: templateType;
};

const Footer: VFC<Props> = (props) => {
  const { requestTemplate, homeTemplate } = props;

  const onChange = (template: string) => {
    switch (template) {
      case 'home':
        homeTemplate.open();
        requestTemplate.close();
        break;
      case 'request':
        homeTemplate.close();
        requestTemplate.open();
        break;
      default:
        console.log('ha?');
        break;
    }
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
