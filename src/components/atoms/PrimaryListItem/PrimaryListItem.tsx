import React, { VFC } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import stringToColor from '../../../libs/stringToColor';
import Badge from '../Badge/Badge';

type Props = {
  id: number;
  name: string;
  title: string;
  reward: number;
  description: string;
  updatedAt: string;
  status: boolean;
  onClick: (id: number) => void;
};

const PrimaryListItem: VFC<Props> = (props) => {
  const { id, name, title, reward, description, updatedAt, status, onClick } =
    props;

  return (
    <ListItem key={id} alignItems="flex-start" onClick={() => onClick(id)}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: stringToColor(name) }}>
          {name ? name[0].toUpperCase() : ''}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className="flex">
            <div className="">
              <div>{title}</div>
              <div className="text-xs text-gray-400">{updatedAt}</div>
            </div>
            <div className="ml-auto">
              <Badge color={status ? 'emerald' : 'rose'}>
                {status ? 'open' : 'close'}
              </Badge>
            </div>
          </div>
        }
        secondary={
          <div>
            <div className="flex">
              <Badge color="blue">{`${String(reward)} hmt`}</Badge>
            </div>
            {description}
          </div>
        }
      />
    </ListItem>
  );
};

export default PrimaryListItem;
