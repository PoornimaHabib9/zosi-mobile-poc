import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Login from "../containers/Login/Login";
import MyLearningNavigator from "./mylearning.navigator";

const Stack = createStackNavigator();

const AuthNavigator=()=>{
    console.log('Executing AuthNavigator')
    return(
        <Stack.Navigator>
        <Stack.Screen name="LogIn" component={Login} options={{headerShown:false}}/>
        {/* <Stack.Screen
            name="Root"
            component={MyLearningNavigator}
            options={{ headerShown: true }}
            /> */}
      </Stack.Navigator>
    )
}
export default AuthNavigator;