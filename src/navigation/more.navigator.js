import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import More from "../containers/More";
import HeaderContainer from '../components/Header/index'

const MoreStack = createStackNavigator();

const MoreNavigator = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="more"
        component={More}
        options={{
          headerTitle: (props) => <HeaderContainer {...props} />,
          headerStyle: {
            backgroundColor: "#121212",
          },
        }}
      ></MoreStack.Screen>
    </MoreStack.Navigator>
  );
};
export default MoreNavigator;
