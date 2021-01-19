import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { useNavigation, useRoute } from '@react-navigation/native';

import CustomButton from '../../components/Button';

import { TextView, Container, ButtonsArea} from './styles';

const Success: React.FC = () => {
  const { signOut } = useAuth();

  const route = useRoute();

  const navigation = useNavigation();

  const [listItensLocation, setListItensLocation] = useState([]);
  
  useEffect(() => {
    var list = route.params.listItensLocation;
    setListItensLocation(list);
  }, [route.params.listItensLocation]);

  return (
    <>
      <Container>
        <Image style={{marginTop: 30}} source={require('../../assets/logo_reduce.png')} />
        <Image style={{marginBottom: 60}} source={require('../../assets/logo_text.png')} />
        
        <TextView>
          Sua solicitação do Pedido nº {  } foi concluída com sucesso!!!
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
