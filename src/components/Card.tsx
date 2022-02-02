import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Title, Paragraph, Card } from "react-native-paper";

type Props = {};

// interface Card {
//   name: string;
//   army_type: string;
//   team_bonus: string;
// }

const CardMovie = ({ props }: any) => {
  console.log(props)
  return (
    <Card>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        <Paragraph>{props.title} </Paragraph>
        <Paragraph>{props.image} </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default CardMovie;

const styles = StyleSheet.create({});
