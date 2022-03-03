import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Login from "../containers/Login/Login";

const AuthStack = createStackNavigator();

const AuthNavigator=()=>{
    return(
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}
export default AuthNavigator;