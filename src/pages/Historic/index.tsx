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

import CustomModalHistoric from '../../components/CustomModalHistoric';

import { 
  Container, 
  ContainerItem, 
  ViewTime,
  DetailsOrder,
  TitleOrder, 
  Search, 
  TitleText } from './styles';

const ORDERHISTORY = [
  {
    idOrder: '4561000432651',
    date: '12/12/2012',
    hours: '12:25:56',
    requestingUserName: 'Jonh Doe',
    requestingUserId: '125.455.698-98',
    listItens: [
      {
        idProduct: 19054,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 15890894,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 1589874,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 15789734,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 1589874,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 15789734,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      }
    ]
  },
  {
    idOrder: '4561753432651',
    date: '12/12/2012',
    hours: '12:25:56',
    requestingUserName: 'Jonh Doe',
    requestingUserCPF: '125.455.698-98',
    listItens: [
      {
        idProduct: 15344,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 15444,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 1544,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 1564,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      }
    ]
  },
  {
    idOrder: '4598656432651',
    date: '12/12/2012',
    hours: '12:25:56',
    requestingUserName: 'Jonh Doe',
    requestingUserCPF: '125.455.698-98',
    listItens: [
      {
        idProduct: 1544,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 1534,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 1524,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 1514,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      }
    ]
  },
  {
    idOrder: '4561001432651',
    date: '12/12/2012',
    hours: '12:25:56',
    requestingUserName: 'Jonh Doe',
    requestingUserCPF: '125.455.698-98',
    listItens: [
      {
        idProduct: 1524,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 423,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 2323,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 545,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      }
    ]
  },
  {
    idOrder: '23001432651',
    date: '12/12/2012',
    hours: '12:25:56',
    requestingUserName: 'Jonh Doe',
    requestingUserCPF: '125.455.698-98',
    listItens: [
      {
        idProduct: 232,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 1312,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 9032,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      },
      {
        idProduct: 3230,
        nameProduct: 'Betoneira Menegotti Prime 400 Litros',
      }
    ]
  }   
];

const Historic: React.FC = () => {

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
  }, [AsyncStorage.getItem(`${user.id}`)]);

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
            <CustomModalHistoric 
              idSolicitation={item.idOrder} 
              requestingUserName={item.requestingUserName}
              date={item.date}
              hours={item.hours}
              listItens={item.listItens}
              buttonTitle={'VER DETALHES'}
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
            Histórico de Pedidos da Obra <Text 
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

export default Historic;
