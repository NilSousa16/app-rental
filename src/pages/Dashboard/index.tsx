import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { 
  Button, 
  View, 
  TextInput, 
  Text, 
  FlatList, 
  TouchableHighlight } from 'react-native';

import { 
  Container, 
  ContainerItem, 
  ContainerInfo, 
  PhotoItem, 
  DescriptionItem, 
  NameItem, 
  Search, 
  TitleText,
} from './styles';
  
import { createStackNavigator } from '@react-navigation/stack';

import TopMenu from '../../components/TopMenu';
import CustomTouch from '../../components/CustomTouch';

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

/**
* Usado para armazenar os valores de incidentes a serem apresentados em tela
*/
//const [incidents, setIncidents] = useState([]); 
/**
 * Forma que sobrescreve os dados a serem escritos
 * setIncidents(response.data);
 * 
 * ...incidents, ...response.data - forma de anexar dois vetores em um
 * único
 */
//setIncidents([...incidents, ...response.data]);

const Dashboard: React.FC = () => {
  // function Dashboard() {

  const { user } = useAuth();

  const [value, onChangeText] = useState('   Buscar item por nome');

  const [itensLocation, setItensLocation] = useState([]); 

  const [text, setText] = useState([]);

  // const onPress = () => {
  //   setText('Novo');
  // }

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
          () => alert(`This is a button right! Seja bem-vindo ${user.name} ${item.id} 
        ${itensLocation[0]} - ${itensLocation[1]} - ${itensLocation[2]} - ${itensLocation[3]} - ${itensLocation[4]} - ${itensLocation[5]} - ${itensLocation[6]} - ${itensLocation[7]} - ${itensLocation[8]} - ${itensLocation[9]} - ${itensLocation[10]}`)
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

            <CustomTouch />

            {/* <CustomTouch 
              style={{paddingLeft: 5, paddingRight: 5}}
              
              onPress={                  
                () => {                    
                  setText([text, 'ADICIONAR']);
                  
                  // alert(`Botão pressionado`);

                  setItensLocation([...itensLocation, item.id]);
                }
              }  
            >  
              <TextButton>{text}</TextButton>  
                        
              
            </CustomTouch> */}
            {/* <Button
                
                title="Adicionar"
                color="#a9a4b7"                
              /> */}
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
            //onChangeText={text => onChangeText(text)}
            placeholder="   Buscar item por nome jkkh"
            // value={value}
          />
        </Search>

        <Container>
          <FlatList
            data={PRODUCTSITENS}
            renderItem={true ? renderItem : renderItem}
            numColumns={2}
            keyExtractor={item => item.id}            
          />
        </Container>
      </View>
    </>
  );
};

export default Dashboard;
