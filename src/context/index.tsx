import React from 'react';
import DismissKeyboard from '../components/DismissKeyboard';

type ContextProviderProps = {
  children: JSX.Element;
};

const ContextProvider = ({children}: ContextProviderProps) => {
  return <DismissKeyboard>{children}</DismissKeyboard>;
};

export default ContextProvider;
