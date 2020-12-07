import React from 'react';
import { Image, View, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/Button';

import { TextView, Container, ButtonsArea} from './styles';

const Exit: React.FC = () => {
  const { signOut } = useAuth();

  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Image style={{marginTop: 30}} source={require('../../assets/logo_reduce.png')} />
        <Image style={{marginBottom: 60}} source={require('../../assets/logo_text.png')} />
        
        <TextView>
          Você tem certeza que deseja sair do aplicativo?
        </TextView>  

        <ButtonsArea>
            <CustomButton onPress={signOut}>
              Sim
            </CustomButton>

          
            <CustomButton
                onPress={
                  () => navigation.navigate('Dashboard')
                }
            >
              Não
            </CustomButton>
          
        </ButtonsArea>

      </Container>
    </>
  );
};

export default Exit;
