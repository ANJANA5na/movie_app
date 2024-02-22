/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MovieList from './src/screens/movielists';
import movieDetails from './src/screens/movieDetails';
import { Provider } from 'react-redux';
import Navigation from './src/utilities/navigation';
import store from './src/redux/store';


export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: string; };
};

function App(): React.JSX.Element {
  

  return (

    // <Provider store={store}>
    //   <MovieList />
    // </Provider>
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName="Home">
  //     <Stack.Screen name="Home" component={MovieList} />
  //     <Stack.Screen name="Details" component={movieDetails} />

  //   </Stack.Navigator>
  // </NavigationContainer>

  <Provider store={store} >
<Navigation/>

  </Provider>


  
  );
}

         


export default App;
