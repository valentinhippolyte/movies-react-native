import { StyleSheet,View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../navigation/RootNavigator";


type Props = {};


const HomeScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  return (
  
        <View style={styles.container}>
          <Text>Home Screen ! </Text>
          <Button title={"See movies"} onPress={ () => {navigation.navigate("Movies")}} />
        </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
});


export default HomeScreen;