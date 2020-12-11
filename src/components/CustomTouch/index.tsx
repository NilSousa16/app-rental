import React, { useState } from 'react';

// import { useNavigation } from '@react-navigation/native';

import { StyleSheet } from 'react-native';

import { CustomButton, TextButton } from './styles';

const CustomTouch: React.FC = () => {
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
                
                // setItensLocation([...itensLocation, item.id]);
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
              
              // setItensLocation([...itensLocation, item.id]);
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
