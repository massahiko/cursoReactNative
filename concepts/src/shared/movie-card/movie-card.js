import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default class MovieCard extends React.Component {
  render() {
    var movie = this.props.movie;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.titleConfig}>{movie.title}</Text>
          <Text>{movie.year}</Text>
        </View>
        <View>
          <Image
            resizeMode={"cover"}
            style={{ width: 300, height: 100 }}
            source={{ uri: movie.imageUrl }}
          />
        </View>

        <View>
          <Text
            style={{
              padding: 30,
              paddingTop: 10,
              fontWeight: "bold"
            }}
          >
            {movie.overview}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 19
  },
  titleConfig: {
    fontSize: 20,
    color: "red",
    paddingBottom: 8,
    backgroundColor: "black",
    fontWeight: "bold"
  }
});
