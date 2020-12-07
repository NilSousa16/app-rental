import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

/** View - no lugar da div como é no reactjs */
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 180 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

/** TouchableWithoutFeedback - não muda nada o estilo quando o button é pressionado */
export const BackToSignIn = styled.TouchableOpacity`
  position:absolute;
  left: 0;
  right: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  /* getBottomSpace - para retornar espaçamento no IoS (pois há um componente do IoS no bottom) */
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-size:18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

