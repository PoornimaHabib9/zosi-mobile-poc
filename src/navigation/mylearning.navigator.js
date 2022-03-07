import React, { useContext } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import MyLearningList from "../containers/MyLearnings/MyLearningList";
import MyLearningView from "../containers/MyLearnings/MyLearningView";
import HeaderContainer from "../components/Header/index";
import { Context as AuthContext } from "../services/AuthContext";
const MyLearningStack = createStackNavigator();

const MyLearningNavigator = () => {
  const { state, signout } = useContext(AuthContext);

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
        <TouchableOpacity onPress={signout} style={{ marginRight: 5 }}>
          <Image source={require("../../public/assets/icons/logout.png")} />
        </TouchableOpacity>
      </View>
    ),
  };

  return (
    <MyLearningStack.Navigator>
      <MyLearningStack.Screen
        name="My Learnings"
        component={MyLearningList}
        options={headerOptions}
      ></MyLearningStack.Screen>
      <MyLearningStack.Screen
        name="My Learning View"
        component={MyLearningView}
        options={headerOptions}
      ></MyLearningStack.Screen>
    </MyLearningStack.Navigator>
  );
};
export default MyLearningNavigator;
