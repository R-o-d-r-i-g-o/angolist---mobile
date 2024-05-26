import React from 'react';
import color from '../../utils/colors';
import {PageTemplate} from '../../templates/pageTemplate';
import {ListItems} from '../../components/listItems';
import {categories as CATEGORIES} from '../../mocks/Categories';
import * as S from './styles';

type category = {
  name: string;
  icon: string;
};

export const Categories = () => {
  const [filterCate, setFilterCate] = React.useState<Array<category>>([]);
  const [categories] = React.useState<Array<category>>(CATEGORIES);
  const [search, setSearch] = React.useState<string>('');

  React.useEffect(() => {
    setFilterCate(
      categories.filter(cat =>
        cat.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <PageTemplate mainText={'Categorias'}>
      <>
        <S.InputSettings>
          <S.SearchImage
            tintColor={color.baseWhite}
            source={require('./../../assets/search.png')}
          />
          <S.SearchField
            placeholder="Procurar por categoria ..."
            placeholderTextColor={color.baseWhite}
            onChangeText={(value: string) => setSearch(value)}
          />
        </S.InputSettings>
        <S.ScrollView>
          {filterCate.map((item: category) => (
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
