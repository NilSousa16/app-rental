import React from 'react';
import { Button, View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { useNavigation } from '@react-navigation/native';

import SideMenu from '../../components/SideMenu';

const UpdateProfile: React.FC = () => {
  const { signOut } = useAuth();

  const navigation = useNavigation();

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Página Exibida - UpdateProfile</Text>
        <Button
            onPress={() => navigation.navigate('Home')}
            title="Go to Home"
        />
        {/* <Button title="Sair" onPress={signOut} /> */}
      </View>
    </>
  );
};

export default UpdateProfile;
