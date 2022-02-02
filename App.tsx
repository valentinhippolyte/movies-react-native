import { StyleSheet, Text, View } from "react-native";
import MoviesScreens from "./src/screens/MoviesScreens";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <MoviesScreens></MoviesScreens>
      </View>
    </QueryClientProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
