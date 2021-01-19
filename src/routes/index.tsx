import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if(loading) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  // Retorna um grupo de rotas caso o usuário esteja autenticado
  return user ? <AppRoutes /> : <AuthRoutes />;
  // return true ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
