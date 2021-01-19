import React, {useState} from 'react';
import {Button, FlatList, Text, View, TouchableHighlight, TouchableOpacity, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';

import { useNavigation, useRoute } from '@react-navigation/native';

import { ButtonsArea, ContainerItem, PhotoItem, NameItem, TitleModal, DetailsOrder, DetailsSolicitation, ViewTime } from './styles';

import CustomButton from '../../components/Button';

import Icon from 'react-native-vector-icons/Feather';
import { accessibilityProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';

const CustomModalExchange: React.FC = (props) => {
  const navigation = useNavigation();

  const route = useRoute();

  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderList = ({item}) => {   
    return (
        <ContainerItem>
          <PhotoItem              
            source={require('../../assets/product.png')}             
          />

          <NameItem>
            {item.id} - { item.title } 
          </NameItem>
        </ContainerItem>
    );
  }

  return (
    <View>
      <Button 
        title={props.buttonTitle}
        onPress={toggleModal} 
        color="#a9a4b7" 
      />

      <Modal 
        isVisible={isModalVisible} 
        style={
          {
            maxHeight:800, 
            marginTop: 60, 
            marginBottom: 60, 
            backgroundColor: '#fff', 
            padding: 10, 
            borderRadius: 5 
          }
      }>
          
        <View style={
          {
            marginBottom: 10, 
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'space-between',
          }
        }>
          <View style={
            {
              flexDirection: 'row', 
              justifyContent: 'space-between'
            }
          }>
            <TitleModal>
              Pedido {props.idSolicitation}
            </TitleModal>

            <TouchableOpacity onPress={toggleModal}>
              <Icon name="x" size={24} color="#a9a4b7" />
            </TouchableOpacity>
          </View>

          <DetailsSolicitation>         
            <DetailsOrder>
              Solicitante: {props.requestingUserName}
            </DetailsOrder>

            <ViewTime>
              <DetailsOrder>
                Data: {props.date}
              </DetailsOrder>

              <DetailsOrder style={{marginRight: 2}}>
                Hora: {props.hours}
              </DetailsOrder>
            </ViewTime>
          </DetailsSolicitation>
        </View>          

        <FlatList            
          data={props.listItens}
          renderItem={renderList}
          numColumns={1}
          keyExtractor={item => item.id}            
        />

        <View>
          {/* <View style={{width: 170}}> */}
            <TouchableOpacity
              style={
                {
                  padding: 10, 
                  marginTop: 10, 
                  backgroundColor: '#a9a4b7',
                  borderRadius: 5,
                  alignItems: 'center',                  
                }
              }
              onPress={() => navigation.navigate('ExchangeConfirmation', {id: props.idSolicitation, date: props.date, hours: props.hours})}
            > 
              <Text style={{color: '#fff'}}>TROCAR</Text>
            </TouchableOpacity>           
          {/* </View> */}
        </View>
      </Modal>
    </View>
  );
}

export default CustomModalExchange;