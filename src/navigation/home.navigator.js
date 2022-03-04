import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../containers/Home";
import HeaderContainer from "../components/Header/index";
import { Button, Image, View } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={Home}
        options={{
          //   headerTitle: (props) => <HeaderContainer {...props} />,
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
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
