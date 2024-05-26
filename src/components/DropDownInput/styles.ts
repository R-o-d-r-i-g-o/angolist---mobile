import {StyleSheet} from 'react-native';
import color from '../../utils/colors';

const styles = StyleSheet.create({
  dropdown: {
    height: 35,
    width: 120,
    backgroundColor: color.baseOrange,
    borderColor: color.darkBrown,
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    color: color.darkBrown,
    fontSize: 12,
    marginLeft: 8,
  },
});

export {styles};
