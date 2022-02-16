import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MoviesScreens from "../screens/MoviesScreens";
import { NavigationContainer } from "@react-navigation/native";

export type RouteParams = {
  Home : undefined,
  Movies :undefined,
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator =  () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Movies" component={MoviesScreens} />
      </Stack.Group>
    </Stack.Navigator>
  );
}