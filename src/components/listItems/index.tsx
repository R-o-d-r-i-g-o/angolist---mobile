import React from 'react';
import {ListItemsProps} from './types';
import {
  ContainerItem,
  BallIcon,
  ItemTitle,
  ItemText,
  MenuImage,
} from './styles';

export const ListItems = (props: ListItemsProps) => {
  const {fieldName, iconLocal} = props;
  console.log(iconLocal);

  return (
    <ContainerItem>
      <BallIcon>
        <MenuImage source={require('./../../assets/menu_icon.png')} />
      </BallIcon>
      <ItemTitle>
        <ItemText>{fieldName}</ItemText>
      </ItemTitle>
    </ContainerItem>
  );
};
