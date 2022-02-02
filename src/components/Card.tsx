import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Paragraph } from 'react-native-paper';

type Props = {};

interface Card {
  title: string;
  image: string;
}




const Card = (props: Props) => {
  return (
    <View style={styles.header}>
      <ImageBackground
        source={require("../images/header.png")}
        style={styles.image}
      ></ImageBackground>
      <Text>Titre du film</Text>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  header:{

  },
  image:{

  },
});

