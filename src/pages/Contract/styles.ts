import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;

  padding-right: 5px;
  padding-left: 5px;
  background: #312e38;
`;

export const TextView = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 22px;
  color: #c9c6d2;

  text-align: center;

  padding-bottom: 20px;

  background: #312e38;
`;

export const ButtonsArea = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  justify-content: space-between;
`;

// Style Contract

export const Topic = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  color: #c9c6d2;

  margin-bottom: 15px;
`;

export const TextContract = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 11px;
  color: #c9c6d2;

  margin-bottom: 10px;
`;
