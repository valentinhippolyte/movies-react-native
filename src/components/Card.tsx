import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import { Title, Paragraph, Card } from 'react-native-paper';

type CardMovieProps = {
  item: {
    description: string;
    director: string;
    id: string;
    image: string;
    movie_banner: string;
    original_title: string;
    original_title_romanised: string;
    producer: string;
    release_date: string;
    rt_score: string;
    running_time: string;
    title: string;
    url: string;
  };
};

const CardMovie = ({ item }: CardMovieProps) => {
  return (
    <Card>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        <Paragraph>{item.title} </Paragraph>
        <Image
          style={{ width: '100%', height: 150 }}
          source={{ uri: item.image }}
        />
      </Card.Content>
    </Card>
  );
};

export default CardMovie;

const styles = StyleSheet.create({});
