import React from "react";
import { Image, View } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Card } from "react-native-paper";

const HeaderContainer = () => {
  return (
    <Card elevation={5}>
      <View>
        <Image
          source={require("../../../public/assets/logos/IntertekLogo.svg")}
        ></Image>
      </View>
      {/* <View style={{ flexDirection: "row" }}>
        <Feather name="shopping-cart" size="20" color="white" />
        <Feather name="user" size="20" color="white" />;
      </View> */}
    </Card>
  );
};

export default HeaderContainer;
