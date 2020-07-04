/** @format */

import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Card} from 'react-native-shadow-cards';


import   Foodlist   from './src/foodlist';
import   Food   from './src/food';
import   Home   from './src/home';



const Stack = createStackNavigator();


export default class  App extends React.Component {

  render() {
    return (
          <NavigationContainer>
            <Stack.Navigator  screenOptions={{
              headerShown: false
              }}>
              <Stack.Screen name="Home" component={Home} />

              <Stack.Screen name="food" component={Food} />
              <Stack.Screen name="foodlist" component={Foodlist} />
            </Stack.Navigator>
          </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

});
