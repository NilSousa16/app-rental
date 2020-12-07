import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-right: 5px;
  background: #312e38;
`;

export const ContainerItem = styled.View`
  flex-direction: row;

  width: 98%;
  height: 180px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  padding: 5px 0px 5px 0px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const PhotoItem = styled.Image`
  width: 50%;
  height: 100%;
  border-radius: 100px;
  
  background-color: #312e38;

  margin-left: 5px;
`;

export const ContainerInfo = styled.View`
  flex-direction: column;
  justify-content: space-between;

  width: 49%;
  height: 90%;
`;

export const DescriptionItem = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #343a40;
  
  padding-left: 5px;
  padding-right: 5px;
`;

export const NameItem = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
  font-size: 15px;
  color: #343a40; 
  
  margin-top: 30px;

  text-align: center;
  text-align-vertical: center;  
`;

export const SubTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  padding-bottom: 15px;

  background: #232129;
`;

export const TitleText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #c9c6d2;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position:absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;  
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #f4ede8;
  font-size:18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const ButtonsArea = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-left: 5px;
  padding-bottom: 8px;

`;



