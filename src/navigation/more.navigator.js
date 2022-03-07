import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import More from "../containers/More";
import HeaderContainer from "../components/Header/index";
import { Image, View, TouchableOpacity } from "react-native";

const MoreStack = createStackNavigator();

const MoreNavigator = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: "#252525",
      shadowColor: "rgba(0, 0, 0, 0.2)",
      shadowOpacity: 3,
      shadowOffset: 3,
    },
    headerTitle: "",
    headerLeft: () => (
      <Image source={require("../../public/assets/logos/zosi_logo.png")} />
    ),
    headerRight: () => (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ marginRight: 5 }}
          source={require("../../public/assets/icons/search.png")}
        />
        <Image
          style={{ marginRight: 5 }}
          source={require("../../public/assets/icons/cart.png")}
        />
        <TouchableOpacity style={{ marginRight: 5 }}>
          <Image source={require("../../public/assets/icons/logout.png")} />
        </TouchableOpacity>
      </View>
    ),
  };
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="more"
        component={More}
        options={headerOptions}
      ></MoreStack.Screen>
    </MoreStack.Navigator>
  );
};
export default MoreNavigator;
