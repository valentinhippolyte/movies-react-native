import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  FlatList,
} from 'react-native';
import { ActivityIndicator, Colors, Headline } from 'react-native-paper';
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import CardMovie from '../components/Card';
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
    return <CardMovie {...props} />;
  };

  return (
    <View>
      <ImageBackground
        source={require('../images/header.png')}
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
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    minHeight: 450,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: 100,
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 126,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: "rgba(0,0,0,0.2)'",
  },
  headline: {
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 150,
  },
});

export default MoviesScreens;
