import { View, StyleSheet, ImageBackground, Text} from "react-native";
import { Headline } from "react-native-paper";


import React from "react";

type Props = {};

fetch("https://ghibliapi.herokuapp.com/films", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
});
 
const MoviesScreens = (props: Props) => {
  return (
    <View>
      <View style={styles.header}>
        <ImageBackground
          source={require("../images/header.png")}
          style={styles.image}
        >
          <Headline style={styles.title}>Movies</Headline>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    height: "100%",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: 100,
  },
  title: {
    color: "white",
    fontSize: 42,
    lineHeight: 126,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.2)'",
  },
});

export default MoviesScreens;
