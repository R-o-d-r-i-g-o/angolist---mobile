import React from 'react';
import color from './../../utils/colors';
import * as S from './styles';

type ListItemsProps = {
  fieldName: string;
  iconLocal: string;
};

export const ListItems = (props: ListItemsProps) => {
  const {fieldName, iconLocal} = props;
  console.log(iconLocal);

  return (
    <S.ContainerItem>
      <S.BallIcon>
        <S.MenuImage
          tintColor={color.baseWhite}
          source={require('./../../assets/menu/menu_icon.png')}
        />
      </S.BallIcon>
      <S.ItemTitle>
        <S.ItemText>{fieldName}</S.ItemText>
      </S.ItemTitle>
    </S.ContainerItem>
  );
};
