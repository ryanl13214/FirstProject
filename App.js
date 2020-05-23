/** @format */

import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
   Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import   Cam   from './src/camera';
import   History   from './src/historyPage';
//import   Cam   from './src/camera';





const Stack = createStackNavigator();

function HomeScreenstorage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('camera')}
      />
    </View>
  );
}



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      <Text>Home Screen</Text>





      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('camera')}
      />







    </View>
  );
}


function HomeScree({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Scree</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}







export default class  App extends React.Component {








  render() {
    return (


          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="camera" component={Cam} />
              <Stack.Screen name="history" component={History} />
              <Stack.Screen name="about" component={HomeScree} />
              <Stack.Screen name="Home2" component={HomeScree} />

            </Stack.Navigator>
          </NavigationContainer>



    );
  }
}

const styles = StyleSheet.create({

});
