import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomeScreen from './src/screens/HomeScreen';
import { RootNavigator } from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper';
import MoviesScreens from './src/screens/MoviesScreens';

const queryClient = new QueryClient();

export default function App() {
  return (
    // <Provider>
    //   <QueryClientProvider client={queryClient}>
    //     <View style={styles.container}>
    //       <MoviesScreens />
    //     </View>
    //   </QueryClientProvider>
    // </Provider>
    // <HomeScreen/>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
});