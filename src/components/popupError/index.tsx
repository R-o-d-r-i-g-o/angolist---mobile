import styled from 'styled-components/native';
import color from './../../utils/colors';
import {Text} from 'react-native';

export const PopupError = () => {
  return (
    <BaseContainer>
      <Sample>
        <PopUpButton onPress={() => navigation.goBack()}>
          <Text>back for more</Text>
        </PopUpButton>
      </Sample>
    </BaseContainer>
  );
};

const BaseContainer = styled.View`
  position: absolute;
  right: 20%;
  left: 4.3%;
  top: 1.5%;
  bottom: 7%;
  background: ${color.baseBrown};
  border-radius: 20px;
`;

const Sample = styled.View`
  padding: 20px;
  /* justify-content: center; */
  /* align-items: center; */
`;

const PopUpButton = styled.TouchableOpacity`
  background: yellow;
  padding: 10px 20px;
  border-radius: 10px;
`;
