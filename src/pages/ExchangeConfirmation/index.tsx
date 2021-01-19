import React, { useEffect, useState } from 'react';
import { Image, TextInput, View } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { useNavigation, useRoute } from '@react-navigation/native';

import CustomButton from '../../components/Button';

import TopMenu from '../../components/TopMenu';

import { TextView, TextContainer, ViewTime, Container, ButtonsArea} from './styles';

const ExchangeConfirmation: React.FC = () => {
  const { signOut } = useAuth();

  const route = useRoute();

  const navigation = useNavigation();

  // const [listItensLocation, setListItensLocation] = useState([]);
  
  // useEffect(() => {
  //   var list = route.params.listItensLocation;
  //   setListItensLocation(list);
  // }, [route.params.listItensLocation]);

  return (
    <>
      <TopMenu />

      <TextView>
          Troca de Produto
      </TextView>

      {/* <View style={
          {            
            flex: 1,
            borderColor: '#a9a4b7',
            borderWidth: 1,
            marginLeft: 10,
            marginRight: 10,
          }
        }
      >
        
      </View> */}

      

      <Container>

        <TextContainer>
          Nº do Pedido {route.params.id}
        </TextContainer>

        <ViewTime>
          <TextContainer>
            Data: {route.params.date}
          </TextContainer>

          <TextContainer>
            Hora: {route.params.hours}
          </TextContainer>
        </ViewTime>

        <View style={
          {
            borderColor: '#a9a4b7', 
            borderWidth: 1,
          }
        }>
          <TextInput
            style={{color: '#a9a4b7'}}       
            underlineColorAndroid="transparent"
            placeholder="Digite aqui qual produto deseja trocar e o motivo"
            placeholderTextColor="grey"
            textAlignVertical="top"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        {/* <Topic>
          { contractTerm.topicOne.nameTopic }
        </Topic>

          <TextContract>
            { contractTerm.topicOne.caput }
          </TextContract>

          <TextContract>
            { contractTerm.topicOne.paragraph11 }
          </TextContract>

        <Topic>
          { contractTerm.topicTwo.nameTopic }
        </Topic>

          <TextContract>
              { contractTerm.topicTwo.paragraph21 }
          </TextContract>

        <Topic>
          { contractTerm.topicThree.nameTopic }
        </Topic>

          <TextContract>
            { contractTerm.topicThree.paragraph31 }
          </TextContract>

          <TextContract>
            { contractTerm.topicThree.paragraph32 }
          </TextContract>

          <TextContract>
            { contractTerm.topicThree.paragraph33 }
          </TextContract>

        <Topic>
          { contractTerm.topicFour.nameTopic }
        </Topic>

          <TextContract>
            { contractTerm.topicFour.paragraph41 }
          </TextContract>

        <Topic>
          { contractTerm.topicFive.nameTopic }
        </Topic>

          <TextContract>
            { contractTerm.topicFive.paragraph51 }
          </TextContract> */}

          <ButtonsArea>
            <View style={{width: 170}}>
              <CustomButton style={{height: 40}}
                onPress={
                  () => { 
                    // lógica para envio do e-mail                   
                    navigation.navigate('SuccessExchange', {id: route.params.id});
                  }
                }
              >
                Confirmar
              </CustomButton>
            </View>

            <View style={{width: 170}}>
              <CustomButton style={{height: 40}}
                onPress={
                  () => {                    
                    navigation.navigate('Dashboard');
                  }
                }
              >
                Cancelar
              </CustomButton>
            </View>
            
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

export default ExchangeConfirmation;
