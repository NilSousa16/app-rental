import React, { useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { AsyncStorage } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { 
  Alert,
  Button, 
  View, 
  TextInput, 
  Text, 
  FlatList, 
  TouchableHighlight, 
} from 'react-native';

import TopMenu from '../../components/TopMenu';

import CustomModalDevolution from '../../components/CustomModalDevolution';

import { 
  Container, 
  ContainerItem, 
  ViewTime,
  DetailsOrder,
  TitleOrder, 
  Search, 
  TitleText } from './styles';

const Devolution: React.FC = () => {

  const { user } = useAuth();  

  // const [historicSolicitation, setHistoricSolicitation] = useState({});

  // const navigation = useNavigation();

  const [value, onChangeText] = useState('   Buscar pelo número do pedido');

  const [dataHistoric, setDataHistoric] = useState({});

  async function getData() {
    var data = await AsyncStorage.getItem(`${user.id}`);
    setDataHistoric(JSON.parse(data));
  }

  useEffect(() => {
    getData();
  }, []);

  // const recoverSolicitation = async () => {
  //   var data = await AsyncStorage.getItem(`${user.id}`);
    
  //   setHistoricSolicitation(JSON.parse(data));
  // }

  // useEffect(() => {
  //   recoverSolicitation();

  //   async function anyNameFunction() {
  //     const data = await AsyncStorage.getItem(`${user.id}`);

  //     console.log("Dados recuperados: " + data);
  //   }
  //   // Execute the created function directly
  //   anyNameFunction();    
  // }, []);

  const renderOrder = ({item}) => {
    return (
      <TouchableHighlight 
        style={
          { 
            flex: 1,             
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: '#312e38',
          }
        }         
      >
        <ContainerItem>
          <TitleOrder>
            Nº do Pedido { item.idOrder }
          </TitleOrder>

          <DetailsOrder>
            Solicitante: {item.requestingUserName}
          </DetailsOrder>

          <ViewTime>
            <DetailsOrder>
              Data: {item.date}
            </DetailsOrder>

            <DetailsOrder>
              Hora: {item.hours}
            </DetailsOrder>

            <Text/>
          </ViewTime>

          <View style={{marginTop: 5}}>
            <CustomModalDevolution 
              idSolicitation={item.idOrder} 
              requestingUserName={item.requestingUserName}
              date={item.date}
              hours={item.hours}
              listItens={item.listItens}
              buttonTitle={'SOLICITAR DEVOLUÇÃO'}
            />
          </View>
        </ContainerItem>
      </TouchableHighlight>
    );
  }

  return (
    <>
      <TopMenu />

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Search>
          <TitleText>
            Escolha o Pedido da Obra <Text 
              style={{fontStyle: 'italic'}}
            >
                {user.name}
              </Text>
          </TitleText>
          
          <TextInput
            style={
              { 
                height: 40, 
                borderColor: '#fff', 
                color: '#c9c6d2', 
                borderWidth: 1 
              }
            }
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </Search>

        <Container>
          <SafeAreaView>
            <FlatList
              data={dataHistoric.solicitations}
              renderItem={renderOrder}
              showsVerticalScrollIndicator={true}
              onEndReached={getData}
              onEndReachedThreshold={0.2}
              numColumns={0}
              keyExtractor={item => item.idOrder}            
            />
          </SafeAreaView>
        </Container>
      </View>

      

      {/* <Button
        onPress= {
          () => {
            getData();
          }         
        }
        title="Atualizar"
        color="red"                
      />  */}
    </>
  );
};

export default Devolution;
