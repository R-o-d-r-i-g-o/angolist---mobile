import styled from 'styled-components/native';
import color from '../../../utils/colors';

const PageContainer = styled.View`
  align-items: center;
  gap: 20px;
`;

const InputContainer = styled.View`
  width: 100%;
  gap: 5px;
`;

const Label = styled.Text`
  color: ${color.baseWhite};
  margin-left: 5px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const InputInfo = styled.TextInput`
  font-size: 15px;
  color: ${color.baseWhite};
  background: ${color.lightOrange};
  border-radius: 15px;
  padding: 10px 15px;
`;

const EnterButton = styled.TouchableOpacity<{customWidth: number}>`
  background: ${color.baseBrown};
  width: ${props => props.customWidth || '100'}%;
  border-radius: 4px;
  height: 40px;
`;

const TextButton = styled.Text`
  margin: auto;
  color: ${color.baseWhite};
  font-weight: 800;
  letter-spacing: 1px;
`;

export {
  PageContainer,
  InputContainer,
  Label,
  InputInfo,
  EnterButton,
  TextButton,
};
