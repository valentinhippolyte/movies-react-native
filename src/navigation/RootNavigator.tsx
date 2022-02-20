import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MoviesScreens from "../screens/MoviesScreens";
import { bgBlack } from "colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export type RouteParams = {
  Home : undefined,
  Movies :undefined,
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator =  () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#6b6a67",
            },
          }}
        />
        <Stack.Screen
          name="Movies"
          component={MoviesScreens}
          options={{
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#6b6a67",
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}