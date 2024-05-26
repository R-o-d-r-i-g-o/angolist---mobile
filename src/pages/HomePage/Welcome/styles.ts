import styled from 'styled-components/native';
import color from '../../../utils/colors';

const Container = styled.View`
  gap: 10px;
`;

const EnterButton = styled.TouchableOpacity`
  background: ${color.baseBrown};
  border-radius: 4px;
  height: 40px;
`;

const TextButton = styled.Text`
  margin: auto;
  color: ${color.baseWhite};
  font-weight: 800;
  letter-spacing: 1px;
`;

export {Container, EnterButton, TextButton};
