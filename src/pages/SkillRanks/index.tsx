import React from 'react';
import color from '../../utils/colors';

import {DropDownInput} from '../../components/DropDownInput';
import {PageTemplate} from '../../templates/pageTemplate';
import {Graph} from '../../components/Graph';

import {
  DropDownBlock,
  MainBlock,
  MainTitle,
  MainText,
  HeadLine,
  Container,
  BodyText,
  NavigationView,
  NavImage,
} from './styles';

const data = [
  {
    value: '1',
    label: 'teste 1',
  },
  {
    value: '2',
    label: 'Batman',
  },
  {
    value: '3',
    label: 'tese de mestrado',
  },
  {
    value: '4',
    label: 'avião',
  },
  {
    value: '5',
    label: 'Country 5',
  },
];

export const SkillRanks = () => {
  return (
    <PageTemplate mainText={'Pontuação'}>
      <>
        <Graph />
        <DropDownBlock>
          <DropDownInput content={data} />
        </DropDownBlock>

        <MainBlock>
          <MainTitle>
            <MainText>Feedback</MainText>
          </MainTitle>
          <HeadLine>Fluxo de telas</HeadLine>
          <Container>
            <BodyText>
              Atenha-se em deixar suas telas com um vínculo mais forte e
              emotivo.
              {'\n\n'}
              Não permita com que suas telas fiquem compartilhando informações
              desenfreadamente. Faça com que cada uma deixe o usuário ter acesso
              àquilo que seja referente ao tópico em questão.
            </BodyText>
            <NavigationView>
              <NavImage
                tintColor={color.baseWhite}
                source={require('../../assets/nav/previous.png')}
              />
              <NavImage
                tintColor={color.baseWhite}
                source={require('../../assets/nav/foward.png')}
              />
            </NavigationView>
          </Container>
        </MainBlock>
        
      </>
    </PageTemplate>
  );
};
