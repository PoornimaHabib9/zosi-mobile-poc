import React from 'react';
import TabNavigator from './tab.navigator';
import AuthNavigator from './auth.navigator';
import { NavigationContainer } from '@react-navigation/native';
import Auth0 from 'react-native-auth0';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

const auth0 = new Auth0({
  domain: 'zosi-poornima.us.auth0.com',
  clientId: 'q2b7hpsfc8CFSp6AjpIU12QCokvU10a7',
});

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: auto;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const Navigation = () => {
  return (
    <SafeAreaViewContainer>
      <NavigationContainer>
        <AuthNavigator />
        // <TabNavigator />
      </NavigationContainer>
    </SafeAreaViewContainer>
  );
};

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <TabNavigator />
//     </NavigationContainer>
//   );
// };

export default Navigation;

// import { useAuth0 } from "@auth0/auth0-react";
// import Auth0 from "react-native-auth0";
// import { AuthNavigator } from "./auth.navigator";
//   const auth0 = new Auth0({
//     domain: "zosi-poornima.us.auth0.com",
//     clientId: "q2b7hpsfc8CFSp6AjpIU12QCokvU10a7",
//   });
//   const { isAuthenticated } = useAuth0();
//   //   const userInfo = auth0.auth.authorizeUrl();
//   console.log(isAuthenticated);
//{/* {isAuthenticated ? <TabNavigator /> : <AuthNavigator />} */}
