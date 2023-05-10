import styled from 'styled-components/native';
import color from '../../utils/colors';

const Container = styled.View`
  margin: 20px 20px 20px 0px;
  background: ${color.darkBrown};
  padding: 20px;
  border-radius: 20px;
  height: 94%;
`;

const DiscoveryText = styled.Text`
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: justify;
`;

const AvaliationText = styled(DiscoveryText)`
  text-align: center;
`;

export {Container, DiscoveryText, AvaliationText};
