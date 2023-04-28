import styled from 'styled-components/native';
import color from '../../utils/colors';

const DropDownBlock = styled.View`
  margin-top: 40px;
  margin-right: 20px;
  align-items: flex-end;
`;

const MainBlock = styled.View`
  margin-top: 15px;
  margin-right: 20px;
  background: ${color.darkBrown};
  border-radius: 18px;
  height: 50%;
`;

const MainTitle = styled.View`
  background: ${color.baseOrange};
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

const Container = styled.View`
  padding: 10px 20px;
`;

const BodyText = styled.Text`
  font-size: 12px;
  text-align: justify;
`;

const HeadLine = styled(BodyText)`
  margin-top: 10px;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  align-self: center;
`;

const NavigationView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const NavImage = styled.Image`
  height: 20px;
  width: 20px;
`;

export {
  DropDownBlock,
  MainBlock,
  MainTitle,
  MainText,
  HeadLine,
  Container,
  BodyText,
  NavigationView,
  NavImage,
};
