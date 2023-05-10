import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const DismissKeyboard = ({children}: {children: JSX.Element}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
