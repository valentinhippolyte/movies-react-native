import { StyleSheet,View, Text,Image, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../navigation/RootNavigator";
import { Button } from "react-native-paper";


type Props = {};


const HomeScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  return (
    <View style={styles.container}>
      <Image
        style={{ padding: "10%", marginBottom: "10%" }}
        source={require("../images/heroku.png")}
      />
      <Button
        icon="movie"
        mode="contained"
        onPress={() => {
          navigation.navigate("Movies");
        }}
      >
        See Movies
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6b6a67",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    flexGrow: 1,
  },
});


export default HomeScreen;