import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import MyLearningList from "../containers/MyLearnings/MyLearningList";
import MyLearningView from "../containers/MyLearnings/MyLearningView";
import HeaderContainer from "../components/Header/index";

const MyLearningStack = createStackNavigator();

const MyLearningNavigator = () => {
  return (
    <MyLearningStack.Navigator>
      <MyLearningStack.Screen
        name="My Learnings"
        component={MyLearningList}
        options={{
          headerTitle: (props) => <HeaderContainer {...props} />,
          headerStyle: {
            backgroundColor: "#121212",
          },
        }}
      ></MyLearningStack.Screen>
      <MyLearningStack.Screen
        name="My Learning View"
        component={MyLearningView}
        options={{
          headerTitle: (props) => <HeaderContainer {...props} />,
          headerStyle: {
            backgroundColor: "#121212",
          },
          
        }}
      ></MyLearningStack.Screen>
    </MyLearningStack.Navigator>
  );
};
export default MyLearningNavigator;
