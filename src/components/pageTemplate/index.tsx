import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from './../../App';
import {PageTemplateProps} from './types';
import {
  FullScreen,
  LogoImage,
  MenuImage,
  MenuOption,
  EmptyView,
  BaseContainer,
  MainTitle,
  MainText,
} from './styles';

export const PageTemplate = (props: PageTemplateProps) => {
  const {mainText, children} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <FullScreen>
      <MenuOption>
        <TouchableOpacity onPress={() => navigation.navigate('PopUp')}>
          <MenuImage source={require('./../../assets/menu_icon.png')} />
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
