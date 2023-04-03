import styled from 'styled-components/native';
import color from '../../utils/colors';

const SearchField = styled.TextInput`
  background: ${color.baseBrown};
  border-radius: 15px;
  opacity: 0.4;
  font-size: 15px;
  margin-top: 15px;
  margin-right: 20px;
  padding: 8px 20px;
  color: ${color.baseWhite};
`;

const ScrollView = styled.ScrollView`
  margin-top: 10px;
  min-height: 85%;
  height: 700px;
`;

export {SearchField, ScrollView};
