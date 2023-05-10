import React from 'react';
import {styles} from './styles';

import {SelectCountry} from 'react-native-element-dropdown';

type DropDownInputProps = {
  content: Array<{value: string; label: string}>;
};

export const DropDownInput = (props: DropDownInputProps) => {
  const [country, setCountry] = React.useState('1');
  const {content} = props;

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      maxHeight={200}
      value={country}
      data={content}
      valueField="value"
      labelField="label"
      imageField=""
      placeholder=""
      onChange={e => setCountry(e.value)}
    />
  );
};
