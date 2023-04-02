import React from 'react';
import styled from 'styled-components/native';
import data from './data.json';
import color from '../../utils/colors';
import {PageTemplate} from '../../components/pageTemplate';
import {ListItems} from '../../components/listItems';

export const Categories: React.FC = () => {
  return (
    <PageTemplate mainText={'Categorias'}>
      <>
        <SearchField type="search" placeholder="Procurar por categoria ..." />
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

const SearchField = styled.TextInput`
  background: ${color.baseBrown};
  border-radius: 15px;
  opacity: 0.4;
  margin-top: 15px;
  margin-right: 20px;
  padding: 8px 20px;
  color: ${color.baseWhite};
`;

const ScrollView = styled.ScrollView`
  margin-top: 10px;
  min-height: 85%;
  height: 700px;
`;
