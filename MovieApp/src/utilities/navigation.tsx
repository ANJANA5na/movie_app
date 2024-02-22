import React from "react";
import { RootStackParamList } from "../../App";
import movieDetails from "../screens/movieDetails";
import MovieList from "../screens/movielists";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




function Navigation(): React.JSX.Element {
  
    const Stack = createStackNavigator<RootStackParamList>();
  
    return (
  
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MovieList} />
        <Stack.Screen name="Details" component={movieDetails} />
  
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
  
export default Navigation;