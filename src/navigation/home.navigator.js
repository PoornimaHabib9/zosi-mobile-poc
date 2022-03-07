import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../containers/Home";
import HeaderContainer from "../components/Header/index";
import { Button, Image, View,TouchableOpacity } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
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
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={Home}
        options={headerOptions}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
