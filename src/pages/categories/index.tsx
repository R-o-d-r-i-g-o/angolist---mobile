import React from 'react';
import color from '../../utils/colors';
import {data} from './data';
import {PageTemplate} from '../../templates/pageTemplate';
import {ListItems} from '../../components/listItems';
import * as S from './styles';
import {category} from './types';

export const Categories: React.FC = () => {
  return (
    <PageTemplate mainText={'Categorias'}>
      <>
        <S.InputSettings>
          <S.SearchImage
            tintColor={color.baseWhite}
            source={require('./../../assets/search.png')}
          />
          <S.SearchField
            type="search"
            placeholder="Procurar por categoria ..."
            placeholderTextColor={color.baseWhite}
          />
        </S.InputSettings>
        <S.ScrollView>
          {data.map((item: category) => (
            <ListItems
              key={item.name}
              fieldName={item.name}
              iconLocal={item.icon}
            />
          ))}
        </S.ScrollView>
      </>
    </PageTemplate>
  );
};
