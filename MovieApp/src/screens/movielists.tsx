import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import { getMovies } from "../actions/movieActions";
import { RootState } from "../redux/store";

const MovieList = ({ navigation }: { navigation: any }) => {
  const [isLoading, setIsLoading] = useState<any>(false);
  const [searchQuery, setSearchQuery] = useState('');


  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const isLoadingdetails = useSelector((state: RootState) => state.loader.isLoading);
  
  useEffect(() => {
    console.log("isLoadingdetails==>>",isLoadingdetails);

    if(isLoadingdetails){
      setIsLoading(true);
    }else{
      setIsLoading(false);

    }
    
    dispatch(getMovies());
  }, [dispatch]);

  console.log("movielist", movies);



  const filteredData = movies.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={async () => {
      navigation.navigate('Details', {
        movieId: item.id, navigation
      });

    }}>
      <View style={styles.cardview}>

        <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>

          <View style={{ flex: 4 }}>

            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
              style={{ alignSelf: "center", height: 200, width: 150, resizeMode: "cover", borderRadius: 8 }}
            />



          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10, flex: 1 }}>
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={2}
              style={{ fontSize: 12, textAlign: "center", flex: 1, width: 100, color: "#000000" }}>
              {item.title}
              
            </Text>

          </View>
        </View>

      </View>
    </TouchableOpacity>
  );


  return (

    <SafeAreaView>
      <ScrollView>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        ''
      )}

      <View style={{ backgroundColor: "#ffffff" }}>

      <View style={styles.container}>
       <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>

    
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ justifyContent: "center", alignContent: "center", alignSelf: "center" }}
        />

      </View>
      </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cardview: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 1,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 20,

  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20, // Adjust the border radius as needed
    paddingHorizontal: 16,
    marginHorizontal: 10,
  },
});
export default MovieList;