import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  ButtonsArea
} from './styles';
  
import { createStackNavigator } from '@react-navigation/stack';

import TopMenu from '../../components/TopMenu';
import CustomButton from '../../components/Button';
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
    id: '11',
    title: 'Betoneira Menegotti Prime 400 Litros',
    englishTitle: 'R$ 150,00 / dia',
    section: 'Categoria do Produto',
  },
  {
    id: '12',
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

  const navigation = useNavigation();

  const { user } = useAuth();

  const route = useRoute();

  const [itensLocation, setItensLocation] = useState([]);
  
  const addItem = (idItem) => {
    PRODUCTSITENS.forEach(
      (item) => {
        if(item.id === idItem) {
          setItensLocation([...itensLocation, item]); 
          
          return null;
        }
      }     
    );        
  }

  const removeItem = (idItem) => {
    var newList = [];

    itensLocation.forEach(
      (item) => {
        if(item.id !== idItem) {
          newList.push(item);
        }
      }
    );

    setItensLocation(newList);


    // var listUpdated = itensLocation;
    // var index = listUpdated.indexOf(idItem);

    // if(index > -1) {
    //   listUpdated.splice(index, 1);
    // }
    
    // setItensLocation(listUpdated);
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
          () => alert(`This is a button right!`)
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
                {item.id} - { item.title }
              </NameItem>
            </DescriptionItem>

            <CustomTouch 
              idItem = {item.id} 
              addItens = {addItem} 
              removeItens = {removeItem} 
            />
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
            placeholder="   Buscar item por nome"
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
    

      {/* <Button
        onPress= {() => {
            navigation.navigate('Solicitation', { itensLocation });
          }         
        }
        title="Adicionar"
        color="#a9a4b7"                
      />  */}

      <ButtonsArea>
        {/* <View style={{width: 170}}> */}
          <CustomButton style={{height: 40}}
            onPress={
              () => navigation.navigate('Solicitation', { itensLocation })
            }
          >
            Ir para Detalhes
          </CustomButton>
        {/* </View> */}
      </ButtonsArea>

      {/* <Button
        onPress= {() => {
          console.log("<Dashboard>");
            itensLocation.forEach(
              (item) => {
                console.log('>>>', item.id);               
              }
            );
            console.log("<Dashboard>");
          }         
        }
        title="Verificação"
        color="red"                
      />  */}
    </>
  );
};

export default Dashboard;
