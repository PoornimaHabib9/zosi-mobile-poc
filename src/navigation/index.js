import React, {useContext} from 'react';
import TabNavigator from './tab.navigator';
import AuthNavigator from './auth.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Context as AuthContext } from '../services/AuthContext';
import { navigationRef } from '../navigationRef';

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: auto;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const { state } = useContext(AuthContext);
  const isAuth = state?.token;
  return (
    <SafeAreaViewContainer>
      <NavigationContainer ref={navigationRef}>
        {isAuth ? <TabNavigator />:<AuthNavigator/>}
      </NavigationContainer>
    </SafeAreaViewContainer>
  );
};

export default Navigation;

// import { useAuth0 } from "@auth0/auth0-react";
// import Auth0 from "react-native-auth0";
// import { AuthNavigator } from "./auth.navigator";
// import MyLearningNavigator from './mylearning.navigator';
  // const auth0 = new Auth0({
//     domain: "zosi-poornima.us.auth0.com",
//     clientId: "q2b7hpsfc8CFSp6AjpIU12QCokvU10a7",
//   });
//   const { isAuthenticated } = useAuth0();
//   //   const userInfo = auth0.auth.authorizeUrl();
//   console.log(isAuthenticated);
//{/* {isAuthenticated ? <TabNavigator /> : <AuthNavigator />} */}
