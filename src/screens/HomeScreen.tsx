import { StyleSheet,View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";


type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <NavigationContainer>
      {
        <View style={styles.container}>
          <Text>Home Screen ! </Text>
          <Button title={"See movies"} onPress={() => {}} />
        </View>
      }
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
});


export default HomeScreen;