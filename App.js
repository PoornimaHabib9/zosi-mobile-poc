import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { darkTheme } from "./src/themes/theme";
import Navigation from "./src/navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';

import { Provider as AuthProvider } from './src/services/AuthContext';

const App = () => {
  
  



  // console.log('TOKEN', state.userToken);
  return (
    <AuthProvider>
      <PaperProvider theme={darkTheme}>
      {/* <NavigationContainer> */}
        <Navigation />
      {/* </NavigationContainer> */}
      </PaperProvider>
    </AuthProvider>
  );
};

export default App;
