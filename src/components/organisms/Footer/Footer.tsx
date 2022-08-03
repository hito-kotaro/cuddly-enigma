import React, { VFC } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { BsFlower1 } from 'react-icons/bs';
import { templateType } from '../../../types/Template/templateType';

type Props = {
  detailTemplate: templateType;
  homeTemplate: templateType;
  requestTemplate: templateType;
  listTemplate: templateType;
};

const Footer: VFC<Props> = (props) => {
  const { detailTemplate, homeTemplate, requestTemplate, listTemplate } = props;

  const onChange = (template: string) => {
    switch (template) {
      case 'home':
        homeTemplate.open();
        detailTemplate.close();
        requestTemplate.close();
        listTemplate.close();
        break;
      case 'request':
        homeTemplate.close();
        detailTemplate.close();
        requestTemplate.open();
        listTemplate.close();
        break;
      case 'list':
        homeTemplate.close();
        detailTemplate.close();
        requestTemplate.close();
        listTemplate.open();
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
          value="request"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
