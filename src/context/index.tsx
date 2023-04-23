import React from 'react';

import {AuthProvider} from './Auth';
import DismissKeyboard from '../components/DismissKeyboard';

const ContextProvider = ({children}: {children: JSX.Element}) => {
  return (
    <DismissKeyboard>
      <AuthProvider>{children}</AuthProvider>
    </DismissKeyboard>
  );
};

export default ContextProvider;
