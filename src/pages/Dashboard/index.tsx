import React from 'react';
import { useAuth } from '../../hooks/auth';

import { 
  Button, 
  View, 
  TextInput, 
  Text, 
  FlatList, 
  TouchableHighlight, 
  Image } from 'react-native';

import { 
  Container, 
  ContainerItem, 
  ContainerInfo, 
  PhotoItem, 
  DescriptionItem, 
  NameItem, 
  Search, 
  TitleText } from './styles';
  
import { createStackNavigator } from '@react-navigation/stack';
import TopMenu from '../../components/TopMenu';

const PRODUCTSITENS = [
  {
    id: '1',
    title: 'Betoneira Menegotti',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '2',
    title: 'Betoneira Menegotti Prime 400 Litros',
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

const Dashboard: React.FC = () => {
  // function Dashboard() {

  const { user } = useAuth();

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
            <DescriptionItem>
              <NameItem>
                { item.title }
              </NameItem>
            </DescriptionItem>

            <View style={{paddingLeft: 5, paddingRight: 5}}>
              <Button
                onPress={() => alert(`Botão pressionado`)}
                title="Adicionar"
                color="#a9a4b7"                
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

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Search>
          <TitleText>
            Você está logado no projeto <Text 
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
          <FlatList
            data={PRODUCTSITENS}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={item => item.id}            
          />
        </Container>
      </View>
    </>
  );
};

export default Dashboard;
