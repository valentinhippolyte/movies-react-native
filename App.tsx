import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as React from "react";
import HomeScreen from './src/screens/HomeScreen';

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
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
