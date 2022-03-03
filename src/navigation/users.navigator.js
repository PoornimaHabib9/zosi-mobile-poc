import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Users from "../containers/Users";
import HeaderContainer from '../components/Header/index'

const UsersStack = createStackNavigator();

const UsersNavigator = () => {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen
        name="Users"
        component={Users}
        options={{
          headerTitle: (props) => <HeaderContainer {...props} />,
          headerStyle: {
            backgroundColor: "#121212",
          },
        }}
      ></UsersStack.Screen>
    </UsersStack.Navigator>
  );
};
export default UsersNavigator;
