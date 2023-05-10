import styled from 'styled-components/native';
import color from '../../utils/colors';

const FullScreen = styled.View`
  background: ${color.baseWhite};
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const LogoImage = styled.Image`
  height: 100px;
  width: 160px;
`;

const BaseContainer = styled.View`
  background: ${color.baseOrange};
  width: 84%;
  padding: 20px;
  margin: 0 30px;
  border-radius: 20px;
`;

const HeadLine = styled.View`
  margin-bottom: 30px;
`;

const BackStep = styled.TouchableOpacity`
  position: absolute;
`;

const BackStepIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

const Title = styled.Text`
  color: ${color.baseBrown};
  margin: 0 auto;
  line-height: 25px;
  font-size: 20px;
`;

export {
  FullScreen,
  Content,
  HeadLine,
  BackStep,
  BackStepIcon,
  LogoImage,
  BaseContainer,
  Title,
};
