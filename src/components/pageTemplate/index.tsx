import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from './../../routes';
import {PageTemplateProps, MenuProps} from './types';
import {
  FullScreen,
  LogoImage,
  MenuImage,
  MenuListIcons,
  MenuOption,
  MenuListItems,
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
          <MenuImage source={require('./../../assets/menu_icon.png')} />
          {isVisible && (
            <MenuListItems>
              <MenuListIcons source={require('./../../assets/menu_icon.png')} />
              <MenuListIcons source={require('./../../assets/menu_icon.png')} />
              <MenuListIcons source={require('./../../assets/menu_icon.png')} />
              <MenuListIcons source={require('./../../assets/menu_icon.png')} />
              <MenuListIcons source={require('./../../assets/menu_icon.png')} />
            </MenuListItems>
          )}
        </TouchableOpacity>
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
