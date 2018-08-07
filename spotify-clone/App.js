import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import SpotifyCard from "./src/shared/spotify-card";

export default class App extends React.Component {
  getMusicTemplate(music) {
    return <SpotifyCard music={music} />;
  }

  render() {
    var param = [
      {
        id: 1,
        imageUrl: "https://img.vagalume.fm/1470161190169185/default",
        title: "Dance Music",
        overview:
          "Os maiores clássicos da Dance Music, com artistas do Eurodance e Europop dos anos 90 até os anos 2000, reunidos em uma só estação!"
      },

      {
        id: 2,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NvGKFqE-rGZGAU2-R9sza9UWTSyxAa8A9O4v864fKRxcEmoL",
        title: "Racionais",
        overview:
          "20 ANOS DE SOBREVIVENDO NO INFERNO 20 de dezembro marca os 20 anos de SOBREVIVENDO NO INFERNO"
      },

      {
        id: 3,
        imageUrl:
          "http://rockfreeday.com/website/wp-content/uploads/2018/07/Capa-CD-600x600.jpg",
        title: "HateFall",
        overview:
          "O disco tem em seu conceito influencia de clássicos do heavy metal mundial, como as bandas: Iron Maiden, Iced Earth e Angra. As músicas “For Grace and Glory” e “Light & Fire” já estão sendo veiculadas nas principais web rádios de Rock/Metal do Brasil."
      }
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={param}
          renderItem={({ item }) => this.getMusicTemplate(item)}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
    console.log(param);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 19
  }
});
