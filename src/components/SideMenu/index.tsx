import React from 'react';

import { Button, View, Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import Historic from '../../pages/Historic';
import Exchange from '../../pages/Exchange';
import Devolution from '../../pages/Devolution';
import UpdateProfile from '../../pages/UpdateProfile';
import Exit from '../../pages/Exit';

const SideMenu: React.FC = () => {

  const navigation = useNavigation();
  
  // function HomeScreen({ navigation }) {
  //   return (
  //     // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <>
  //       <Text>Página Home Screem - Temporária</Text>
  //       <Button
  //         onPress={() => navigation.navigate('Notifications')}
  //         title="Go to notifications"
  //       />
  //     </>  
  //     // </View>
  //   );
  // }
  
  // function NotificationsScreen({ navigation }) {
  //   return (
  //     // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Button onPress={() => navigation.goBack()} title="Go back home" />
  //     // </View>
  //   );
  // }


  function HistoricItem() {
    return (
      <Historic />
    );
  }

  function ExchangeItem() {
    return (
      <Exchange />
    );
  }

  function DevolutionItem() {
    return (
      <Devolution />
    );
  }

  function UpdateProfileItem() {
    return (
      <UpdateProfile />
    );
  }

  function ExitItem() {
    return (
      <Exit />
    );
  }
  
  const Drawer = createDrawerNavigator();

  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
  
  return (
    <>       
        <Drawer.Navigator 
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
            (props) => 
              <SafeAreaView style={{flex: 1}}>                
                <Image
                  source={require('../../assets/logo_text.png')}
                  style={{
                    resizeMode: 'stretch',
                    width: 200,
                    height: 80,
                    marginBottom: 20,
                    marginTop: 10,
                    alignSelf: 'center',
                  }} 
                />
                <DrawerItemList {...props} />
              </SafeAreaView>
          }
          initialRouteName="Home"
        >
          
          <Drawer.Screen name="Home" component={HomeItem} />
          <Drawer.Screen name="Histórico" component={HistoricItem} />
          <Drawer.Screen name="Devolução" component={DevolutionItem} />
          <Drawer.Screen name="Troca" component={ExchangeItem} />
          <Drawer.Screen name="Atualizar Cadastro" component={UpdateProfile} />
          <Drawer.Screen name="Sair" component={ExitItem} />
        </Drawer.Navigator>
    </>
  );
};

export default SideMenu;
