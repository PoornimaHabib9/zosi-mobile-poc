import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import HomeNavigator from "./home.navigator";
import MyLearningNavigator from "./mylearning.navigator";
import UsersNavigator from "./users.navigator";
import MoreNavigator from "./more.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = [
  {
    name: "Home",
    icon: "home-outline",
    type: "ionicon",
  },
  {
    name: "MyLearning",
    icon: "library-books",
    type: "material",
  },
  {
    name: "User",
    icon: "user",
    type: "feather",
  },
  {
    name: "More",
    icon: "more-vert",
    type: "material",
  },
];

const createScreenOptions = ({ route }) => {
  const iconDetails = TAB_ICON.find((element) => element.name === route.name);
  return {
    tabBarIcon: ({ color, size }) => {
      switch (iconDetails.type) {
        case "material":
          return (
            <MaterialIcons name={iconDetails.icon} size={size} color={color} />
          );
        case "feather":
          return <Feather name={iconDetails.icon} size={size} color={color} />;
        default:
          return <Ionicons name={iconDetails.icon} size={size} color={color} />;
      }
    },
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#ffc700",
    tabBarInactiveTintColor: "rgba(255, 255, 255, 0.87);",
    headerShown: false,
    tabBarStyle: { backgroundColor: '#4a4a4a'}
  };
};

const TabNavigator = () => {
  console.log('Executing tab Navigator')
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      initialRouteName='MyLearning'
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="MyLearning" component={MyLearningNavigator} />
      <Tab.Screen name="User" component={UsersNavigator} />
      <Tab.Screen name="More" component={MoreNavigator} />
    </Tab.Navigator>
  );
};
export default TabNavigator;

// );options={{ headerTitle: () => <HeaderContainer /> }}
