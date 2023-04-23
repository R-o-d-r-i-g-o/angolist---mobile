import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {authService} from '../service/Auth';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authData, setAuth] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem('@AuthData');
    if (auth) {
      setAuth(JSON.parse(auth) as AuthData);
    }

    setLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    try {
      const auth = await authService.signIn(email, password);
      AsyncStorage.setItem('@AuthData', JSON.stringify(auth));
      setAuth(auth);
    } catch (error: any) {
      Alert.alert(error.message, 'tente novamente');
    }
  };

  const signOut = async (): Promise<void> => {
    AsyncStorage.removeItem('@AuthData');
    setAuth(undefined);
    return;
  };

  return (
    <AuthContext.Provider value={{authData, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
