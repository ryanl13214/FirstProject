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
import   Storage   from './src/storageexample';


const Stack = createStackNavigator();



function DefaultApp() {
  return (


      <Stack.Navigator  screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="food" component={Food} />
        <Stack.Screen name="foodlist" component={Foodlist} />
        <Stack.Screen name="storage" component={Storage} />
      </Stack.Navigator>




  );
}

function Settings() {
  return (


      <Stack.Navigator  screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="food" component={Food} />
        <Stack.Screen name="foodlist" component={Foodlist} />
        <Stack.Screen name="storage" component={Storage} />
      </Stack.Navigator>




  );
}




function Account() {
  return (


      <Stack.Navigator  screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="food" component={Food} />
        <Stack.Screen name="foodlist" component={Foodlist} />
        <Stack.Screen name="storage" component={Storage} />
      </Stack.Navigator>




  );
}
function News() {
  return (


      <Stack.Navigator  screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="food" component={Food} />
        <Stack.Screen name="foodlist" component={Foodlist} />
        <Stack.Screen name="storage" component={Storage} />
      </Stack.Navigator>




  );
}






import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default class  App extends React.Component {

  render() {
    return (

    <NavigationContainer>

      <Tab.Navigator>
           <Tab.Screen name="Home" component={MyTabs} />
           <Tab.Screen name="Settings" component={Storage} />
         </Tab.Navigator>


  </NavigationContainer>





    );
  }
}

const styles = StyleSheet.create({

});
