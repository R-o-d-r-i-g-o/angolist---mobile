import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {PageTemplateProps, MenuItemProps} from './types';
import {useNavigation} from '../../routes';
import {useAuth} from '../../context/Auth';
import {menuOptions} from '../../mocks/MenuOptions';
import color from '../../utils/colors';
import * as S from './styles';

export const PageTemplate = (props: PageTemplateProps) => {
  const {mainText, children} = props;
  const {signOut} = useAuth();
  const {useNavigateApp, useNavigateAuth} = useNavigation();

  const navigationAuth = useNavigateAuth();
  const navigationApp = useNavigateApp();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <S.FullScreen>
      <S.MenuOption showContent={isVisible}>
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <S.MenuImage
            tintColor={color.baseWhite}
            source={require('./../../assets/menu/menu_icon.png')}
          />
        </TouchableOpacity>
        {isVisible && (
          <S.MenuListItems>
            {menuOptions.map((item: MenuItemProps) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => {
                  if (menuOptions[menuOptions.length - 1] === item) {
                    signOut();
                    navigationAuth.navigate('Welcome');
                    return;
                  }

                  navigationApp.navigate(item.path);
                  setIsVisible(false);
                }}>
                {menuOptions[menuOptions.length - 1] === item && (
                  <S.Seperator />
                )}
                <S.MenuItem>
                  <S.MenuListIcons
                    tintColor={color.baseWhite}
                    source={item.image}
                  />
                  <S.MenuText>{item.name}</S.MenuText>
                </S.MenuItem>
              </TouchableOpacity>
            ))}
          </S.MenuListItems>
        )}
      </S.MenuOption>
      <S.LogoImage source={require('./../../assets/brand/angolist_logo.png')} />
      <S.EmptyView />
      <S.BaseContainer>
        {mainText && (
          <S.MainTitle>
            <S.MainText>{mainText}</S.MainText>
          </S.MainTitle>
        )}
        {children}
      </S.BaseContainer>
    </S.FullScreen>
  );
};
