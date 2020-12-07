import React from 'react';
import { useAuth } from '../../hooks/auth';

import { 
  Button, 
  View, 
  TextInput, 
  Text, 
  FlatList, 
  TouchableHighlight, 
  Image,
  TouchableOpacity } from 'react-native';

import CustomButton from '../../components/Button';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  ContainerItem, 
  ContainerInfo, 
  PhotoItem,  
  NameItem, 
  SubTitle, 
  TitleText,
  ButtonsArea } from './styles';
  
import { createStackNavigator } from '@react-navigation/stack';
import TopMenu from '../../components/TopMenu';

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

// const Dashboard: React.FC = () => {
  function Solicitation() {

  const { user } = useAuth();

  const navigation = useNavigation();

  const [value, onChangeText] = React.useState('   Buscar item por nome');

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
                { item.title }
              </NameItem>
            {/* </View> */}

            <View style={{paddingLeft: 5, paddingRight: 5}}>
              <Button
                onPress={() => alert(`Remover item da solicitação`)}
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
              () => navigation.navigate('Dashboard')
            } 
          >       
            <Icon name="arrow-left" size={24} color="#c9c6d2" />
          </TouchableOpacity>
        </SubTitle>

        <Container>
          <FlatList
            data={PRODUCTSITENS}
            renderItem={renderItem}
            numColumns={1}
            keyExtractor={item => item.id}            
          />

          <ButtonsArea>
            <View style={{width: 170}}>
              <CustomButton style={{height: 40}}
                onPress={
                  () => alert(`Ir para página do contrato`)
                }>
                Finalizar
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
    </>
  );
};

export default Solicitation;
