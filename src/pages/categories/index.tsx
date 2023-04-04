import React from 'react';
import color from '../../utils/colors';
import {data} from './data';
import {PageTemplate} from '../../components/pageTemplate';
import {ListItems} from '../../components/listItems';
import {SearchField, ScrollView} from './styles';
import {category} from './types';

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
          {data.map((item: category) => (
            <ListItems
              key={item.name}
              fieldName={item.name}
              iconLocal={item.icon}
            />
          ))}
        </ScrollView>
      </>
    </PageTemplate>
  );
};
