import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Title, Paragraph, Card, Button, Portal, Modal } from "react-native-paper";

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
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <Card>
      <Card.Content>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>{item.title}</Text>
            <Paragraph>{item.description}</Paragraph>

          </Modal>
        </Portal>
        <Paragraph>{item.title} </Paragraph>
        <Image
          style={{ width: "100%", height: 150 }}
          source={{ uri: item.image }}
        />
        <Button mode="outlined" onPress={showModal}>
          Detailsssss
        </Button>
      </Card.Content>
    </Card>
  );
};

export default CardMovie;

const styles = StyleSheet.create({});
