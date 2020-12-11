import React from 'react';

import { View, Button, Image, TouchableOpacity, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { DrawerActions } from 'react-navigation-drawer';

import { Container, TouchButton } from './styles';

function TopMenu() {

  
  // const NavigationDrawerStructure = (props) => {
  //   //Structure for the navigatin Drawer
  //   const toggleDrawer = () => {
  //     //Props to open/close the drawer
  //     // props.navigationProps.toggleDrawer();
  //     props.navigation.dispatch(DrawerActions.openDrawer())
  //   };
  
  //   return (
  //     <View style={{flexDirection: 'row'}}>
  //       <TouchableOpacity onPress={toggleDrawer}>
  //         {/*Donute Button Image */}
  //         <Icon 
  //           name="menu" 
  //           size={30} 
  //           color="#fff" 
  //           style={{marginTop: 8, marginRight: 15}}
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   );

 

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    //props.navigationProps.toggleDrawer();
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Icon 
            name="menu" 
            size={30} 
            color="#fff" 
            style={{marginTop: 8, marginRight: 15}}
          />
      </TouchableOpacity>
    </View>
  );
};
  

  return (
    <>
      <Container>        
        <Image 
          style={{    
            marginLeft: 0,
            resizeMode: 'contain' 
          }} 
          source={
            require('../../assets/logo.png')
          } 
        />
        
        {/* <NavigationDrawerStructure navigationProps={this.navigation} />    */}

        <TouchButton 
          onPress={
            () => alert(`Botão pressionado`)
          } 
        >       
          <Icon name="menu" size={30} color="#fff" />
        </TouchButton>
        
      </Container>
    </>
  );
};

export default TopMenu;
