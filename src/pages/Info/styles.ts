import styled from 'styled-components/native';
import color from '../../utils/colors';

const Container = styled.View`
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

export {Container, DiscoveryText, AvaliationText};
