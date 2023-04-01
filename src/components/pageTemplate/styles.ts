import styled from 'styled-components/native';
import color from './../../utils/colors';

const FullScreen = styled.View`
  background: ${color.baseWhite};
  width: 100%;
  height: 100%;
  position: relative;
`;

const LogoImage = styled.Image`
  height: 60px;
  width: 90px;
  position: absolute;
  right: 10%;
  top: 10px;
`;

const MenuImage = styled.Image`
  height: 30px;
  width: 30px;
`;

const MenuOption = styled.View`
  margin: 10px 18px;
  width: 40%;
  height: 250px;
  display: flex;
  position: absolute;
  background: ${color.baseBrown};
  border-radius: 10px;
  padding: 20px;
  border-radius: 20px;
  z-index: -1;
`;

const EmptyView = styled(MenuOption)`
  width: 70%;
  height: 30%;
  right: 2px;
  bottom: -6px;
`;

const BaseContainer = styled.View`
  margin: 75px auto 0px;
  background: ${color.baseOrange};
  height: 86%;
  width: 84%;
  padding: 30px 0px 50px 20px;
  border-radius: 20px;
`;

const MainTitle = styled.View`
  background: ${color.baseWhite};
  align-items: center;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  margin-left: 30%;
  padding: 8px;
`;

const MainText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${color.baseBrown};
`;

export {
  FullScreen,
  LogoImage,
  MenuImage,
  MenuOption,
  EmptyView,
  BaseContainer,
  MainTitle,
  MainText,
};