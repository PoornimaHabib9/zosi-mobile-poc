import React from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import Login from "../containers/Login/Login";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
