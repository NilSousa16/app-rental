import styled from 'styled-components/native';

export const ContainerItem = styled.View`
  flex-direction: row;

  width: 100%;
  height: 180px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  padding: 5px 0px 5px 0px;
  margin-bottom: 5px;
`;

export const DetailsSolicitation = styled.View`
  flex-direction: column;
  margin-bottom: 5px;
  justify-content: space-between;
  width: 100%;
`;

export const PhotoItem = styled.Image`
  width: 50%;
  height: 100%;
  
  background-color: #312e38;

  margin-left: 5px;
`;

export const NameItem = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-weight: 900;
  font-size: 15px;
  color: #343a40; 

  padding: 2px;

  text-align: center;
  text-align-vertical: center;   
  width: 50%;
`;

export const TitleModal = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-weight: 900;
  font-size: 18px;
  color: #312e38;
`;

export const ViewTime = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  justify-content: space-between;
`;

export const DetailsOrder = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  color: #343a40;
`;

export const ButtonsArea = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 5px;
`;





