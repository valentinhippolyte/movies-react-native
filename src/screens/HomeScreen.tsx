import { StyleSheet,View, Text, Button,Image } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../navigation/RootNavigator";


type Props = {};


const HomeScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  return (
    <View style={styles.container}>
      <Image source={require("../images/movie.png")} />
      <Button
        title={"See movies"}
        onPress={() => {
          navigation.navigate("Movies");
        }}
      />
      
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