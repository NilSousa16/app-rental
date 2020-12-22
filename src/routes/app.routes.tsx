import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import CustomSidebarMenu from '../components/CustomSideMenu';

import Dashboard from '../pages/Dashboard';
import Historic from '../pages/Historic';
import Devolution from '../pages/Devolution';
import Exchange from '../pages/Exchange';
import UpdateProfile from '../pages/UpdateProfile';
import Exit from '../pages/Exit';

import Success from '../pages/Success';
import Solicitation from '../pages/Solicitation';
import Contract from '../pages/Contract';

const App = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  /** screenOptions - Opções para o header do navigator
   * headerShown - oculta o header
   * cardStyle estilos aplicados a cada rota
   */
  <App.Navigator 
    drawerContentOptions={{
        activeTintColor: '#387CA6',
        itemStyle: { marginVertical: 5},
        labelStyle: { 
          fontFamily: 'RobotoSlab-Regular', 
          fontSize: 16, 
          color: '#c9c6d2'}
    }}
    drawerStyle={{
      backgroundColor: "#312e38",
    }} 
    drawerContent={
      (props) => <CustomSidebarMenu {...props } />
        // <SafeAreaView style={{flex: 1}}>                
        //   <Image
        //     source={require('../../assets/logo_text.png')}
        //     style={{
        //       resizeMode: 'stretch',
        //       width: 200,
        //       height: 80,
        //       marginBottom: 20,
        //       marginTop: 10,
        //       alignSelf: 'center',
        //     }} 
        //   />
          // <DrawerItemList {...props} />
        // </SafeAreaView>
    }
    initialRouteName="Dashboard"
  >
    <App.Screen 
      name="Dashboard" 
      options={{drawerLabel: 'Dashboard',}} 
      component={Dashboard} 
    />
    <App.Screen 
      name="Historic" 
      options={{drawerLabel: 'Histórico',}} 
      component={Historic} 
    />
    <App.Screen 
      name="Devolution" 
      options={{drawerLabel: 'Devolução',}} 
      component={Devolution} 
    />
    <App.Screen 
      name="Change" 
      options={{drawerLabel: 'Troca',}} 
      component={Exchange} 
    />
    <App.Screen 
      name="Update profile" 
      options={{drawerLabel: 'Atualizar Cadastro',}} 
      component={UpdateProfile} 
    />
    <App.Screen 
      name="Exit" 
      options={{drawerLabel: 'Sair',}} 
      component={Exit} 
    />
    
    <App.Screen 
      name="Success" 
      options={{drawerLabel: 'Sucesso',}} 
      component={Success} 
    />
    <App.Screen 
      name="Solicitation" 
      options={{drawerLabel: 'Solicitação',}} 
      component={Solicitation} 
    />
    <App.Screen 
      name="Contract" 
      options={{drawerLabel: 'Contrato',}} 
      component={Contract} 
    />
  </App.Navigator>
);

export default AppRoutes;
