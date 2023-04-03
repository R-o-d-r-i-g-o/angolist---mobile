import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from './../../routes';
import {PageTemplateProps, MenuItemProps} from './types';
import {menuOptions} from './data';
import color from './../../utils/colors';
import {
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
} from './styles';

export const PageTemplate = (props: PageTemplateProps) => {
  const {mainText, children} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <FullScreen>
      <MenuOption showContent={isVisible}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('PopUp');
            setIsVisible(() => !isVisible);
            console.log(isVisible);
          }}>
          <MenuImage
            tintColor={color.baseWhite}
            source={require('./../../assets/menu_icon.png')}
          />
        </TouchableOpacity>
        {isVisible && (
          <MenuListItems>
            {menuOptions.map(({name, image}: MenuItemProps) => (
              <MenuItem>
                <MenuListIcons tintColor={color.baseWhite} source={image} />
                <MenuText>{name}</MenuText>
              </MenuItem>
            ))}
          </MenuListItems>
        )}
      </MenuOption>
      <LogoImage source={require('./../../assets/angolist_logo.png')} />
      <EmptyView />
      <BaseContainer>
        {mainText && (
          <MainTitle>
            <MainText>{mainText}</MainText>
          </MainTitle>
        )}
        {children}
      </BaseContainer>
    </FullScreen>
  );
};
