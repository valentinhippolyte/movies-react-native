import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { useMovies } from "../hooks/useMovies";



const Stack = createStackNavigator();

export const Navigator = () => {
  const { data } = useMovies();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
