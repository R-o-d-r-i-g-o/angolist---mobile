import React from 'react';
import color from '../../utils/colors';
import data from './data.json';
import {PageTemplate} from '../../components/pageTemplate';
import {ListItems} from '../../components/listItems';
import {SearchField, ScrollView} from './styles';

export const Categories: React.FC = () => {
  return (
    <PageTemplate mainText={'Categorias'}>
      <>
        <SearchField
          type="search"
          placeholder="Procurar por categoria ..."
          placeholderTextColor={color.baseWhite}
        />
        <ScrollView>
          {data.categories.map(item => (
            <ListItems
              key={item.text}
              fieldName={'acessibilidade & perfil'}
              iconLocal={''}
            />
          ))}
        </ScrollView>
      </>
    </PageTemplate>
  );
};
