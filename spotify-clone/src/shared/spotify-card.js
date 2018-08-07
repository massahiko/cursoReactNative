import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class SpotifyCard extends React.Component {
  render() {
    var music = this.props.music;
    return (
      <View style={styles.container}>
        <View>
          <Image
            resizeMode={"cover"}
            style={styles.imageTitle}
            source={{ uri: music.imageUrl }}
          />
        </View>

        <View>
          <Text style={styles.titleConfig}>{music.title}</Text>
        </View>

        <View>
          <Text style={styles.overviewConfig}>{music.overview}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 19
  },

  titleConfig: {
    color: "#FFF0F5",
    fontWeight: "bold",
    paddingTop: 19
  },

  imageTitle: {
    width: 150,
    height: 150
  },

  overviewConfig: {
    color: "#708090",
    paddingTop: 12,
    width: 150
  }
});
