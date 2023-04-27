import styled from 'styled-components/native';
import color from '../../utils/colors';

const ChartContainer = styled.View`
  flex-direction: row;
  position: relative;
`;

const XLabel = styled.View`
  margin: -25px auto;
  flex-direction: row;
  gap: 15px;
`;

const LabelText = styled.Text`
  font-size: 10px;
  text-transform: uppercase;
`;

const DropDownBlock = styled.View`
  margin-top: 40px;
  margin-right: 20px;
  align-items: flex-end;
`;

export {ChartContainer, XLabel, LabelText, DropDownBlock};
