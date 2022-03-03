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
`;

export const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})`
  margin-bottom: 15%;
`;

export const HeadingTitle = styled(Text)`
  font-family: NeoSansStd;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: rgba(255, 255, 255, 0.87);
`;

export const SubHeading = styled(Text)`
  font-family: NeoSansStd;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(255, 255, 255, 0.6);
`;
