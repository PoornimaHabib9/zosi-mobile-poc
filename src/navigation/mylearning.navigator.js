import React from "react";
import { Image, View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import MyLearningList from "../containers/MyLearnings/MyLearningList";
import MyLearningView from "../containers/MyLearnings/MyLearningView";
import HeaderContainer from "../components/Header/index";

const MyLearningStack = createStackNavigator();

const MyLearningNavigator = () => {
  return (
    <MyLearningStack.Navigator>
      <MyLearningStack.Screen
        name="My Learnings"
        component={MyLearningList}
        options={{
          headerStyle: {
            backgroundColor: "#252525",
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOpacity: 3,
            shadowOffset: 3,
          },
          headerTitle: "",
          headerLeft: () => (
            <Image
              source={require("../../public/assets/logos/zosi_logo.png")}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../../public/assets/icons/search.png")} />
              <Image source={require("../../public/assets/icons/cart.png")} />
            </View>
          ),
        }}
      ></MyLearningStack.Screen>
      <MyLearningStack.Screen
        name="My Learning View"
        component={MyLearningView}
        options={{
          headerStyle: {
            backgroundColor: "#252525",
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOpacity: 3,
            shadowOffset: 3,
          },
          headerTitle: "",
          headerLeft: () => (
            <Image
              source={require("../../public/assets/logos/zosi_logo.png")}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../../public/assets/icons/search.png")} />
              <Image source={require("../../public/assets/icons/cart.png")} />
            </View>
          ),
        }}
      ></MyLearningStack.Screen>
    </MyLearningStack.Navigator>
  );
};
export default MyLearningNavigator;
