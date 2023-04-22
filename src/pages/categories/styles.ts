import styled from 'styled-components/native';
import color from '../../utils/colors';

const InputSettings = styled.View`
  background: ${color.baseBrown};
  border-radius: 15px;
  opacity: 0.4;
  margin-top: 15px;
  margin-right: 20px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

const SearchImage = styled.Image`
  height: 20px;
  width: 20px;
`;
const SearchField = styled.TextInput`
  font-size: 15px;
  color: ${color.baseWhite};
  width: 92%;
`;

const ScrollView = styled.ScrollView`
  margin-top: 10px;
  min-height: 85%;
  height: 700px;
`;

export {InputSettings, SearchImage, SearchField, ScrollView};
