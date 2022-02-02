import { StyleSheet, Text, View } from 'react-native';
import MoviesScreens from './src/screens/MoviesScreens';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-native-paper";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <MoviesScreens />
        </View>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
