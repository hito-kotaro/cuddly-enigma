import React, { VFC } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { BsFlower1 } from 'react-icons/bs';
import { templateType } from '../../../types/Template/templateType';

type Props = {
  detailTemplate: templateType;
  homeTemplate: templateType;
  requestTemplate: templateType;
};

const Footer: VFC<Props> = (props) => {
  const { detailTemplate, homeTemplate, requestTemplate } = props;

  const onChange = (template: string) => {
    switch (template) {
      case 'home':
        homeTemplate.open();
        detailTemplate.close();
        requestTemplate.close();
        break;
      case 'request':
        homeTemplate.close();
        detailTemplate.close();
        requestTemplate.open();
        break;
      default:
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
