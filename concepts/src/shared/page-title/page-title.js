import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default class PageTitle extends React.Component {
  render() {
    var title = this.props.title;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ccc"
          }}
        />
        <Text>{title}</Text>
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
