import { StyleSheet, Text, View } from 'react-native';
import MoviesScreens from './src/screens/MoviesScreens';

export default function App() {
  return (
    <View style={styles.container}>
      <MoviesScreens></MoviesScreens>
    </View>
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
