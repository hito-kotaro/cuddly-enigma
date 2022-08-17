import React, { VFC } from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@mui/material';
import stringToColor from '../../../libs/stringToColor';

type Props = {
  id: number;
  name: string;
  title: string;
  reward: number;
  description: string;
  onClick: (id: number) => void;
};

const PrimaryListItem: VFC<Props> = (props) => {
  const { id, name, title, reward, description, onClick } = props;

  return (
    <ListItem key={id} alignItems="flex-start" onClick={() => onClick(id)}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: stringToColor(name) }}>
          {name ? name[0].toUpperCase() : ''}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {`${reward}HMT`}
            </Typography>
            {` - ${description}`}
          </>
        }
      />
    </ListItem>
  );
};

export default PrimaryListItem;
