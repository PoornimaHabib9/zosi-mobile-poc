import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Users from "../containers/Users";
import HeaderContainer from "../components/Header/index";
import { Image, View, TouchableOpacity } from "react-native";

const UsersStack = createStackNavigator();

const UsersNavigator = () => {
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
    <UsersStack.Navigator>
      <UsersStack.Screen
        name="Users"
        component={Users}
        options={headerOptions}
      ></UsersStack.Screen>
    </UsersStack.Navigator>
  );
};
export default UsersNavigator;
