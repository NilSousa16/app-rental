import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const ModalTester: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return (
      <View>
        <Button title="Ver Detalhes" onPress={toggleModal} color="#a9a4b7" />

        <Modal isVisible={isModalVisible}>
          <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 5}}>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>


            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    );
}

export default ModalTester;