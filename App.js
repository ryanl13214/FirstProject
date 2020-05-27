/** @format */

import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Card} from 'react-native-shadow-cards';


import   About   from './src/about';
import   Home   from './src/home';
import   Player   from './src/player2';



const Stack = createStackNavigator();


export default class  App extends React.Component {

  render() {
    return (
          <NavigationContainer>
            <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
              <Stack.Screen name="Home" component={Player} />
              <Stack.Screen name="player" component={Player} />
              <Stack.Screen name="history" component={Home} />
              <Stack.Screen name="about" component={Home} />
              <Stack.Screen name="temp" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

});
