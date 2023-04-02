import styled from 'styled-components/native';
import color from '../../utils/colors';

const ContainerItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const BallIcon = styled.View`
  background: ${color.baseBrown};
  border-radius: 100px;
  height: 50px;
  width: 50px;
  z-index: 1;
`;

const ItemTitle = styled.View`
  background: ${color.baseWhite};
  width: 80%;
  margin-left: -10px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 8px;
`;

const ItemText = styled.Text`
  font-weight: 600;
  margin-left: 10px
  font-size: 12px;
  letter-spacing: 0.5px;
  color: black;
  text-transform: uppercase;
`;

const MenuImage = styled.Image`
  height: 25px;
  width: 25px;
  margin: auto;
`;

export {ContainerItem, BallIcon, ItemTitle, ItemText, MenuImage};
