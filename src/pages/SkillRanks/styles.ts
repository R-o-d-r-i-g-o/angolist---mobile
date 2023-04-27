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

const MainBlock = styled(DropDownBlock)`
  margin-top: 15px;
  background: ${color.darkBrown};
  border-radius: 18px;
  height: 50%;
`;

const MainTitle = styled.View`
  background: ${color.baseOrange};
  align-items: center;
  align-self: flex-start;
  margin-top: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 8px 20px;
`;

const MainText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${color.baseBrown};
`;

const HeadLine = styled.Text`
  margin-top: 15px;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  align-self: center;
`;

export {
  ChartContainer,
  XLabel,
  LabelText,
  DropDownBlock,
  MainBlock,
  MainTitle,
  MainText,
  HeadLine,
};
