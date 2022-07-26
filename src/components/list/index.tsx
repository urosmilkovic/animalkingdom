import React from 'react';
import { ListMain, ListItem, ListItemIcon } from 'components/list/styles';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';

const List = ({ items, ...props }: any) => (
  <ListMain {...props}>
    {items.map((x: string) => (
      <ListItem>
        <ListItemIcon>
          <KeyboardDoubleArrowRight />
        </ListItemIcon>
        {x}
      </ListItem>
    ))}
  </ListMain>
);

export default List;
