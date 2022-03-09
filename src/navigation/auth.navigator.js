import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Login from "../containers/Login/Login";
import MyLearningNavigator from "./mylearning.navigator";

const Stack = createStackNavigator();

const AuthNavigator=()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="LogIn" component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
}
export default AuthNavigator;