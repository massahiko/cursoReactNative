import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import MovieCard from "./src/shared/movie-card/movie-card";
import PageTitle from "./src/shared/page-title/page-title";

export default class App extends React.Component {
  getMovieTemplate(music) {
    return <MovieCard key={movie.id} movie={movie} />;
  }

  render() {
    var title = "Lista Filmes";
    var movies = [
      {
        id: 1,
        year: "(2019}",
        overview:
          "Enquanto Scott Lang aguarda o término de seu período de detenção em casa, Hope van Dyne e Dr. Hank Pym o envolvem em um esquema para resgatar a Sra. Van Dyne do micro-universo em que ela caiu, enquanto dois grupos de planejadores convergem neles com intenções de roubar as invenções do Dr. Pym.",
        imageUrl:
          "https://image.tmdb.org/t/p/w250_and_h141_face/6P3c80EOm7BodndGBUAJHHsHKrp.jpg"
      },

      {
        id: 2,
        year: "(2019}",
        overview:
          "Enquanto Scott Lang aguarda o término de seu período de detenção em casa, Hope van Dyne e Dr. Hank Pym o envolvem em um esquema para resgatar a Sra. Van Dyne do micro-universo em que ela caiu, enquanto dois grupos de planejadores convergem neles com intenções de roubar as invenções do Dr. Pym.",
        imageUrl:
          "https://image.tmdb.org/t/p/w250_and_h141_face/6P3c80EOm7BodndGBUAJHHsHKrp.jpg"
      }
    ];
    return (
      <View style={styles.container}>
        <PageTitle title={title} />
        <FlatList
          data={movies}
          renderItem={({ item }) => this.getMovieTemplate(item)}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
