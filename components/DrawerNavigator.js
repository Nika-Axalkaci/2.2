// DrawerNavigator.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ChatList from "../components/ChatList";
import ChatScreen from "../components/ChatScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ChatList">
        <Drawer.Screen name="ChatList" component={ChatList} />
        <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
