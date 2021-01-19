// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableNativeFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  //custom drawer content
  const MyList = props => {
    const { state, ...rest } = props;
    const newState = { ...state}  //copy from state before applying any filter. do not change original state
    newState.routes = newState.routes.filter(
      item => (item.name !== 'Success')
    ) //replace "Login' with your route name

    newState.routes = newState.routes.filter(
      item => (item.name !== 'Solicitation')
    )

    newState.routes = newState.routes.filter(
      item => (item.name !== 'Contract')
    )

    newState.routes = newState.routes.filter(
      item => (item.name !== 'ExchangeConfirmation')
    )

    newState.routes = newState.routes.filter(
      item => (item.name !== 'DevolutionConfirmation')
    )

    newState.routes = newState.routes.filter(
      item => (item.name !== 'SuccessDevolution')
    )

    newState.routes = newState.routes.filter(
      item => (item.name !== 'SuccessExchange')
    )

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList state={newState} {...rest} />
        </DrawerContentScrollView>
    )
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={require('../../assets/logo_text.png')}
        style={styles.sideMenuProfileIcon}
      />

      {/* <DrawerContentScrollView {...props}> */}
        {/* <DrawerItemList {...props} /> */}

        <MyList {...props}/>
        
        {/* <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        /> */}
        {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>  */}
      {/* </DrawerContentScrollView> */}
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        Connect Máquinas
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'stretch',
    width: 200,
    height: 80,
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;