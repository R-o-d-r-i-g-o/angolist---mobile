import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from './../../App';
import color from './../../utils/colors';

export const Home: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <FullScreen>
      <MenuOption>
        <TouchableOpacity onPress={() => navigation.navigate('PopUp')}>
          <MenuImage source={require('./../../assets/menu_icon.png')} />
        </TouchableOpacity>
      </MenuOption>
      <LogoImage source={require('./../../assets/angolist_logo.png')} />
      <EmptyView />
      <BaseContainer>
        {true && (
          <MainTitle>
            <MainText>Como usar</MainText>
          </MainTitle>
        )}
        {/* <SearchFiled /> */}
        <Container>
          <DiscoveryText>
            Para ter melhor resultado com o uso deste, acesse a aba de
            "CATEGORIAS & QUESTIONÁRIOS" e respondá-os.
            {'\n\n'}
            Mais adiante, acesse pelo menu as suas "PONTUAÇÕES" e verifique onde
            seu software deve melhorar para maior desempenho e satisfação dos
            usuários.
            {'\n\n'}
            Não somente isso, ainda na mesma aba, serão mostrados os pontos
            totais arrecadados e sugestões de mudança para um aumento desse
            número.
            {'\n\n'}
            *OBS.: Responda os questionários com seriedade, caso contrário de
            nada valerão os feedbacks.
            {'\n\n'}
          </DiscoveryText>
          <AvaliationText>
            GOSTOU DA INICIATIVA?{'\n'}(Ajude-nos com boas avaliações 😜👍)
          </AvaliationText>
        </Container>
      </BaseContainer>
    </FullScreen>
  );
};

const FullScreen = styled.View`
  background: ${color.baseWhite};
  width: 100%;
  height: 100%;
  position: relative;
`;

const LogoImage = styled.Image`
  height: 60px;
  width: 90px;
  position: absolute;
  right: 10%;
  top: 10px;
`;

const MenuImage = styled.Image`
  height: 30px;
  width: 30px;
`;

const MenuOption = styled.View`
  margin: 10px 18px;
  width: 40%;
  height: 250px;
  display: flex;
  position: absolute;
  background: ${color.baseBrown};
  border-radius: 10px;
  padding: 20px;
  border-radius: 20px;
  z-index: -1;
`;

const EmptyView = styled(MenuOption)`
  width: 70%;
  height: 30%;
  right: 2px;
  bottom: -6px;
`;

const BaseContainer = styled.View`
  margin: 75px auto 0px;
  background: ${color.baseOrange};
  height: 86%;
  width: 84%;
  padding: 30px 0px 50px 20px;
  border-radius: 20px;
`;

const MainTitle = styled.View`
  background: ${color.baseWhite};
  align-items: center;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  margin-left: 30%;
  padding: 8px;
`;

const MainText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${color.baseBrown};
`;

const Container = styled.View`
  /* width: 80%; */
  margin: 20px 20px 20px 0px;
  background: ${color.baseBrown};
  opacity: 0.38;
  padding: 10px 20px;
  border-radius: 20px;
  height: 450px;
`;

const DiscoveryText = styled.Text`
  font-weight: 600;
  font-size: 14.5px;
  text-align: justify;
  color: black;
`;

const AvaliationText = styled(DiscoveryText)`
  text-align: center;
`;

// const SearchFiled = styled.TextInput`
//   background: ${color.baseGray};
//   margin-top: 15px;
//   margin-right: 20px;
//   border-radius: 10px;
//   padding: 8px 15px;
// `;
