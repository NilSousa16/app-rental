import React from 'react';
import { Image } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/Button';

import { TextView, Container, ButtonsArea} from './styles';

const Success: React.FC = () => {
  const { signOut } = useAuth();

  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Image style={{marginTop: 30}} source={require('../../assets/logo_reduce.png')} />
        <Image style={{marginBottom: 60}} source={require('../../assets/logo_text.png')} />
        
        <TextView>
          Sua solicitação do Pedido nº 2384263876 foi concluída com sucesso!!!
        </TextView>  

        <ButtonsArea>
          <CustomButton
              onPress={
                () => navigation.navigate('Dashboard')
              }
          >
            OK
          </CustomButton>
        </ButtonsArea>

      </Container>
    </>

    // <>
    //   <View style={{flex: 1, justifyContent: 'center'}}>
    //     <Text> </Text>
    //     <Text>Aguarde nosso contato.</Text>
    //     <Button
    //         onPress={() => navigation.navigate('Dashboard')}
    //         title="Voltar para dashboard"
    //     />
    //     {/* <Button title="Sair" onPress={signOut} /> */}
    //   </View>
    // </>
  );
};

export default Success;
