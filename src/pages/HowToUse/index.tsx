import React from 'react';
import {PageTemplate} from '../../templates/pageTemplate';
import {Container, DiscoveryText, AvaliationText} from './styles';

export const HowToUse = () => {
  return (
    <PageTemplate mainText={'Como usar'}>
      <Container>
        <DiscoveryText>
          Para ter melhor resultado com o uso deste, acesse a aba de "CATEGORIAS
          & QUESTIONÁRIOS" e respondá-os.
          {'\n\n'}
          Mais adiante, acesse pelo menu as suas "PONTUAÇÕES" e verifique onde
          seu software deve melhorar para maior desempenho e satisfação dos
          usuários.
          {'\n\n'}
          Não somente isso, ainda na mesma aba, serão mostrados os pontos
          arrecadados e sugestões de mudança para um aumento desse número.
          {'\n\n'}
          *OBS.: Responda os questionários com seriedade, caso contrário de nada
          valerão os feedbacks.
          {'\n\n'}
        </DiscoveryText>
        <AvaliationText>
          GOSTOU DA INICIATIVA?{'\n'}(Ajude-nos com boas avaliações 😜👍)
        </AvaliationText>
      </Container>
    </PageTemplate>
  );
};
