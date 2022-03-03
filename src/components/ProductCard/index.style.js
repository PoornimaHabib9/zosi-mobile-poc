import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const CourseCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const ExpDateBox = styled(Card)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: "#353535";
`;
export const ExpDateText = styled.Text`
  // font-family: NeoSansStd;
  font-size: 10px;
  font-weight: normal;
  // font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.48px;
  text-align: "center";
`;
export const CourseDetailContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ImageBox = styled.Image`
  width: 149px;
  height: 90px;
  margin: 0 20px 0 0;
`;
export const CourseDetails = styled.View`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: "#1d1d1d";
`;
export const ProductType = styled.Text`
  // font-family: NeoSansStd;
  font-size: 12px;
  font-weight: normal;
  // font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.58px;
  color: rgba(255, 255, 255, 0.6);
`;
export const ProductTitle = styled.Text`
  // font-family: NeoSansStd;
  font-size: 12px;
  font-weight: normal;
  // font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.58px;
  color: #fff;
  margin: 23px 0 20px 0px;

`;
export const StatusButton = styled.Button`
  //  font-family: NeoSansStd;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  // font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.25px;
  color: #ffc700;
  margin-top: 20px;
`;