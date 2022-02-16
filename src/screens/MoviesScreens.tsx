import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { ActivityIndicator, Colors, Headline, Provider } from 'react-native-paper';
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import CardMovie from '../components/Card';
import { QueryClient, QueryClientProvider } from "react-query";
// import { Colors } from "react-native/Libraries/NewAppScreen";

type Props = {};

const MoviesScreens = (props: Props) => {
  const { isLoading, isError, data } = useMovies();

  if (isLoading) {
    return <ActivityIndicator>Is loading</ActivityIndicator>;
  }
  if (isError) {
    return <Text>something is wrong...</Text>;
  }

  const renderItem = (props: any) => {
    return <CardMovie {...props} />
  };
const queryClient = new QueryClient();
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView>
          <View>
            <ImageBackground
              source={require("../images/header.png")}
              style={styles.image}
            >
              <Headline style={styles.headline}>Liste des Films</Headline>
            </ImageBackground>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(props) => props}
            />
          </View>
        </SafeAreaView>
      </QueryClientProvider>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // minHeight: 450,
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: 200,
  },
  title: {
    color: 'white',
    fontSize: 84,
    lineHeight: 126,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: "rgba(0,0,0,0)",
  },
  headline: {
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 150,
  },
});

export default MoviesScreens;
