import axios from "axios";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRoute } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler";

const movieDetails = ({ navigation }: { navigation: any }) => {
  const [mdetails, setDetails] = useState<any>({});

  const route = useRoute()
  const id: any = route.params;
  let mid = id.movieId;
  console.log("lllog", id.movieId);

  // Fetching data from redux
  const movies = useSelector((state: RootState) => state.movies.movies);

  // Function to retrieve details of a movie by ID
  const getMovieDetailsById = (movies: any[], id: number) => {
    return movies.find(movie => movie.id === mid);
  };


  useEffect(() => {
    getMovieDetailsById(movies, id);
    setDetails(getMovieDetailsById(movies, id))

  }, [id]);



  return (
    <ScrollView>
    <View style={styles.container}>
    
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500${mdetails.backdrop_path}` }}

        style={styles.backgroundImage}
        resizeMode="cover">
        {/* Black Transparent Overlay */}
        <View style={styles.overlay}></View>
        {/* Overlaid Image */}
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${mdetails.poster_path}` }}
          style={styles.overlayImage}

        />
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{mdetails.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.releaseDate}> {mdetails.release_date}</Text>
          <Text style={styles.language}> {mdetails.original_language}</Text>
        </View>
        <Text style={styles.popularity}>Popularity: {mdetails.popularity}</Text>
        <Text style={styles.voteAverage}>Vote Average: {mdetails.vote_average}</Text>
        <Text style={styles.overview}>{mdetails.overview}</Text>
      </View>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  poster: {
    width: '50%',
    height: 200,
    resizeMode: 'cover',
    padding: 50
  },
  posterbg: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginTop: 20,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#000000"
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  language: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
    color: "#FF0000",
    textTransform: "uppercase"


  },
  popularity: {
    fontSize: 16,
    marginBottom: 5,
    marginTop:10,
    color: "#000000",

  },
  voteAverage: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000000",

  },
  overview: {
    fontSize: 14,
    marginTop: 10,
  },
  overlayView: {
    width: "100%",
    position: 'absolute',
    backgroundColor: 'rgba(0, 204, 0, 0.9)',

  }
  ,
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  overlayImage: {
    width: 220, // Adjust the size of the overlaid image as needed
    height: 300,
    margin: 20,
    borderRadius: 10


  },

});



export default movieDetails;