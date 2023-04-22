import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {PageTemplateProps, MenuItemProps} from './types';
import {menuOptions} from './data';
import color from './../../utils/colors';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../routes';

export const PageTemplate = (props: PageTemplateProps) => {
  const {mainText, children} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <S.FullScreen>
      <S.MenuOption showContent={isVisible}>
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <S.MenuImage
            tintColor={color.baseWhite}
            source={require('./../../assets/menu_icon.png')}
          />
        </TouchableOpacity>
        {isVisible && (
          <S.MenuListItems>
            {menuOptions.map((item: MenuItemProps) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => {
                  navigation.navigate(item.path);
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
      <S.LogoImage source={require('./../../assets/angolist_logo.png')} />
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
