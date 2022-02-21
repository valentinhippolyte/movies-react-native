import { Image, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Paragraph, Card, Portal, Modal } from "react-native-paper";

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
  const containerStyle = { backgroundColor: "white"};
  return (
    <View style={{ margin: "5%", marginBottom: "5%" }}>
      <TouchableHighlight onPress={showModal}>
        <Card style={{ borderRadius: 10 }}>
          <Card.Content>
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}
                style={{ margin: 50, borderRadius: 10 }}
              >
                <View style={{ padding: 20 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Paragraph>{item.description}</Paragraph>
                  <Text>
                    Rating : {item.rt_score}{""}
                    <MaterialCommunityIcons
                      name="star"
                      size={24}
                      color="black"
                    />{" "}
                    /100
                  </Text>
                </View>
              </Modal>
            </Portal>
            <Paragraph style={{ fontWeight: "bold" }}>{item.title} </Paragraph>
            <Image
              style={{ width: "100%", height: 150 }}
              source={{ uri: item.image }}
            />
          </Card.Content>
        </Card>
      </TouchableHighlight>
    </View>
  );
};

export default CardMovie;

