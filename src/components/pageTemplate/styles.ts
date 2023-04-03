import styled from 'styled-components/native';
import {MenuProps} from './types';
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

const MenuListIcons = styled(MenuImage)``;

const MenuOption = styled.View<MenuProps>`
  margin: 10px 18px;
  display: flex;
  position: absolute;
  background: ${color.baseBrown};
  border-radius: 10px;
  padding: 20px;
  border-radius: 20px;
  z-index: ${(props: MenuProps) => (props.showContent ? '1' : '-1')};
  height: ${(props: MenuProps) => (props.showContent ? '90%' : '250px')};
  width: ${(props: MenuProps) => (props.showContent ? '75%' : '40%')};
`;

const MenuListItems = styled.View`
  margin-top: 50px;
  gap: 15px;
`;

const MenuItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuText = styled.Text`
  color: ${color.baseWhite};
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-left: 5px;
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
  MenuListIcons,
  MenuOption,
  MenuListItems,
  MenuItem,
  MenuText,
  EmptyView,
  BaseContainer,
  MainTitle,
  MainText,
};
