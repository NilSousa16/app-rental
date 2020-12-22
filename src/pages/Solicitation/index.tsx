// import { createStackNavigator } from '@react-navigation/stack';

import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import { 
  Button, 
  View, 
  FlatList, 
  TouchableHighlight, 
  TouchableOpacity } from 'react-native';

import CustomButton from '../../components/Button';
import TopMenu from '../../components/TopMenu';

import Icon from 'react-native-vector-icons/Feather';

import { 
  Container, 
  ContainerItem, 
  ContainerInfo, 
  PhotoItem,  
  NameItem, 
  SubTitle, 
  TitleText,
  ButtonsArea } from './styles';

const PRODUCTSITENS = [
  {
    id: '1',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '2',
    title: 'Betoneira Menegotti Prime 400 Litros Super Lux',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '3',
    title: 'Betoneira Menegotti Prime',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '4',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '5',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '6',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '7',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '8',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '9',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '15',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '16',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '17',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '18',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '19',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
];

const Solicitation: React.FC = () => {
  // function Solicitation() {

  const { user } = useAuth();

 

  const navigation = useNavigation();  

  const route = useRoute();

  const [listItensLocation, setListItensLocation] = useState([]); 

  useEffect(() => {
      loadItensLocation();
  }, [route.params.itensLocation]);

  const loadItensLocation = () => {
    var list = route.params.itensLocation;
    setListItensLocation(list);
  }

  const removeItem = (idItem) => {
    var listUpdated = [];

    listItensLocation.forEach(
      (item) => {
        if(item.id !== idItem) {
          listUpdated.push(item);
        }
      }
    );
    setListItensLocation(listUpdated);
  }

  const renderItem = ({item}) => {   
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
        onPress={
          () => alert(`This is a button right! Seja bem-vindo ${user.name} ${item.id}`)
        }
      >

        <ContainerItem>
          <PhotoItem              
            source={require('../../assets/product.png')}             
          >
          </PhotoItem>

          <ContainerInfo>
            {/* <View style={{paddingLeft: 5, paddingRight: 5}}> */}
              <NameItem>
                {item.id} - { item.title } 
              </NameItem>
            {/* </View> */}

            <View style={{paddingLeft: 5, paddingRight: 5}}>
              <Button
                onPress={() => removeItem(item.id)}
                title="Remover"
                color="#e63946"                
              />
            </View>

          </ContainerInfo>
        </ContainerItem>
      </TouchableHighlight>
    );
  }

  return (
    <>
      <TopMenu />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#312e38'}}>
        <SubTitle>
          <TitleText>
            Detalhes da sua solicitação
          </TitleText>

          <TouchableOpacity 
            onPress={
              () => {                
                navigation.navigate('Dashboard', { listItensLocation });                
              }
            } 
          >       
            <Icon name="arrow-left" size={24} color="#c9c6d2" />
          </TouchableOpacity>
        </SubTitle>

        <Container>
          <FlatList
            data={listItensLocation}
            renderItem={renderItem}
            numColumns={1}
            keyExtractor={item => item.id}            
          />

          <ButtonsArea>
            <View style={{width: 170}}>
              <CustomButton style={{height: 40}}
                onPress={
                  () => navigation.navigate('Contract', { listItensLocation })
                }
              >
                Avançar
              </CustomButton>
            </View>

            <View style={{width: 170}}>
              <CustomButton style={{height: 40}}
                  onPress={
                    () => alert(`Esvaziar itens do carrinho`)
                  }
              >
                Cancelar
              </CustomButton>
            </View>
            
          </ButtonsArea>
        </Container>
      </View>

      {/* <Button
        onPress={
          () => {
            console.log("<Solicitation>");
            listItensLocation.forEach(
              (item) => {     
                console.log('>>>', item.id);
              }
            );
            console.log("<Solicitation>");
          }
        }
        title="Verificação"
        color="#e63946"                
      /> */}

    </>
  );
};

export default Solicitation;
