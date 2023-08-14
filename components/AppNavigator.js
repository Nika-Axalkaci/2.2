// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../components/ChatList";
import ChatScreen from "../components/ChatScreen";
import ContactsList from "../components/ContactsList";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ContactsList" component={ContactsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
