import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import styled from "styled-components/native";

export const SafeAreaViewContainer = styled(View)`
  flex: 1;
  background-color: #121212;
  padding: 10px;
`;

export const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 0,
  },
})`
  margin-bottom: 1%;
`;

export const HeadingTitle = styled(Text)`
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: rgba(255, 255, 255, 0.87);
`;

export const SubHeading = styled(Text)`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(255, 255, 255, 0.6);
`;
