import styled from 'styled-components/native';
import color from './../../utils/colors';

const BaseContainer = styled.View`
  margin: auto;
  height: 40%;
  padding: 20px;
  width: 70%;
  background: ${color.baseBrown};
  border-radius: 40px;
`;

const SignalImage = styled.Image`
  height: 100px;
  width: 100px;
  margin: -25% 0 0;
  transform: rotate(-15deg);
`;

const Title = styled.Text`
  margin: 0 auto 10px;
  font-size: 35px;
  color: ${color.baseWhite};
  letter-spacing: 0.5px;
`;

const Message = styled(Title)`
  font-size: 16px;
  text-align: center;
`;

const PopUpButton = styled.TouchableOpacity`
  background: ${color.baseOrange};
  width: 50%;
  margin: auto;
  padding: 10px 20px;
  border-radius: 20px;
`;

const ButtonCTA = styled(Title)`
  font-size: 16px;
  margin: 0 auto;
`;

export {BaseContainer, SignalImage, Title, Message, PopUpButton, ButtonCTA};
