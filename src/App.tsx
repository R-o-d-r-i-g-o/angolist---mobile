import React from 'react';
import {NavigationOptions} from './routes';
import ContextProvider from './context';

export const App = () => (
  <ContextProvider>
    <NavigationOptions />
  </ContextProvider>
);
