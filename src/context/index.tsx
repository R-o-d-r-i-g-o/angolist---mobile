import React from 'react';

import {AuthProvider} from './Auth';
import DismissKeyboard from '../components/DismissKeyboard';

type ContextProviderProps = {
  children: JSX.Element;
};

const ContextProvider = ({children}: ContextProviderProps) => {
  return (
    <DismissKeyboard>
      <AuthProvider>{children}</AuthProvider>
    </DismissKeyboard>
  );
};

export default ContextProvider;
