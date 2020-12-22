import React, { useState } from 'react';

// import { useNavigation } from '@react-navigation/native';

import { StyleSheet } from 'react-native';

import { CustomButton, TextButton } from './styles';

interface MyData{
  idItem: string,
  addItens: Function,
  removeItens: Function,
}

const CustomTouch: React.FC <MyData>= (props) => {
  const [textButton, setTextButton] = useState('ADICIONAR');

  return (
    <>
      {
        textButton === 'ADICIONAR' ? (
          <CustomButton 
            style={{paddingLeft: 5, paddingRight: 5, backgroundColor: '#a9a4b7'}}
            
            onPress={                  
              () => {
                if(textButton === 'ADICIONAR') {
                  setTextButton('EXCLUIR');
                } else {
                  setTextButton('ADICIONAR');
                } 
                props.addItens(props.idItem);
                //console.log(props.idItem);
              }
            }  
          >       
            <TextButton>{textButton}</TextButton>           
        </CustomButton>
      ) : 
        <CustomButton 
          style={{paddingLeft: 5, paddingRight: 5, backgroundColor: '#e63946'}}
          
          onPress={                  
            () => {
              if(textButton === 'ADICIONAR') {
                setTextButton('EXCLUIR');
              } else {
                setTextButton('ADICIONAR');
              } 
              props.removeItens(props.idItem);              
            }
          }  
        >       
          <TextButton>{textButton}</TextButton>           
        </CustomButton>
      }      
    </>
  );
};

export default CustomTouch;
