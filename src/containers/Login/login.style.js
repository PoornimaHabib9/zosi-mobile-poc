import styled from "styled-components/native";
import { Caption, Card, Paragraph } from "react-native-paper";
import { SafeAreaView, View, StatusBar, Text } from "react-native";

export const LoginBackground = styled.View`
  background-color: #121212;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;
export const LoginCard = styled(Card)`
  background-color: white;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 50px;
`;
export const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: auto;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const LoginBox = styled(View)`
  text-align: center;
  width: 100%;
  padding: 20px;
`;

export const HyperLink = styled(Text)`
  color: rgba(13, 207, 218, 0.99);
`;

export const SignupSuggestBox= styled(View)`
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 50px;
border-top-color: lightgray;
border-top-width: 1px;
padding: 10px 0px;
`;