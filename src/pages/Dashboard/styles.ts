import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-right: 5px;
  background: #312e38;
`;

export const ContainerItem = styled.View`
  width: 98%;
  height: 300px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  padding: 0px 0px 5px 0px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const PhotoItem = styled.Image`
  width: 100%;
  height: 70%;
  border-radius: 5px;
  
  background-color: #312e38;
`;

export const ContainerInfo = styled.View`
  width: 100%;
  height: 30%;

  font-size: 10px;
`;

export const DescriptionItem = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  height: 50%;

  font-size: 14px;
  color: #343a40;
`;

export const DetailsItem = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #6c757d;

  /* text-align: right; */
  line-height: 30px;
`;

export const NameItem = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  color: #343a40;

  text-align: center;
  text-align-vertical: center;
`;

export const Search = styled.View`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  background: #232129;
`;

export const TitleText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #c9c6d2;
  
  margin-bottom: 5px;
`;

export const CustomTouch = styled.TouchableHighlight`
  align-items: center;

  margin-left: 5px;
  margin-right: 5px;

  background-color: #a9a4b7;
  border-radius: 5px;
  
`;

export const TextButton = styled.Text`
  font-size: 15px;
  color: #fff;

  padding: 7px
`;

export const ButtonsArea = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-left: 5px;
  padding-bottom: 8px;

  background-color: #312e38;
`;


