import React from 'react-native';
import * as S from './styles';
import color from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../routes';

export type PageAuthPageProps = {
  showBackButton: boolean;
  mainText?: string;
  children: JSX.Element;
};

export const FirstContactTemplate = (props: PageAuthPageProps) => {
  const {children, showBackButton, mainText} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <S.FullScreen>
      <S.Content>
        <S.LogoImage source={require('./../../assets/angolist_logo.png')} />
        <S.BaseContainer>
          {(showBackButton || mainText) && (
            <S.HeadLine>
              <>
                <S.BackStep onPress={() => navigation.goBack()}>
                  {showBackButton && (
                    <S.BackStepIcon
                      tintColor={color.baseBrown}
                      source={require('./../../assets/back_step.png')}
                    />
                  )}
                </S.BackStep>
                {mainText && <S.Title>{mainText}</S.Title>}
              </>
            </S.HeadLine>
          )}
          {children}
        </S.BaseContainer>
      </S.Content>
    </S.FullScreen>
  );
};
