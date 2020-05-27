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
import {Card} from 'react-native-shadow-cards';


import   Cam   from './src/camera';
import   History   from './src/historyPage';
//import   Cam   from './src/camera';
import   Tmp   from './src/tempPage';




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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
<Image source={require('./img.png')} style={{   height: '40%'}} />










   <View style={{flex: 1, flexDirection: 'row'}}>

      <TouchableOpacity style={{margin:10, width : '40%',  height: '80%' }} onPress={() => navigation.navigate('camera')}>

             <Image source={require('./imgs/face.png')}    style={{   width: '100%',  height: '80%'}}/>
               <Text style={{ padding:10, width : '100%',  fontSize: 18, textAlign: 'center',alignItems: 'center', backgroundColor: 'cornflowerblue'}}> Track your status</Text>
         </TouchableOpacity>




         <TouchableOpacity style={{margin:10,width : '40%',  height: '80%'}} onPress={() => navigation.navigate('camera')}>

                <Image source={require('./imgs/hist.png')}    style={{   width: '100%',  height: '80%'}}/>
                  <Text style={{padding:10, width : '100%', fontSize: 18, textAlign: 'center', alignItems: 'center', backgroundColor: 'beige'}}>View history </Text>
            </TouchableOpacity>



    </View>





       <View style={{flex: 1, flexDirection: 'row'}}>

          <TouchableOpacity style={{margin:10, width : '40%',  height: '80%' }} onPress={() => navigation.navigate('camera')}>

                 <Image source={require('./imgs/about.jpg')}    style={{   width: '100%',  height: '80%'}}/>
                   <Text style={{padding:10, width : '100%',  fontSize: 18,textAlign: 'center', alignItems: 'center', backgroundColor: 'lightblue'}}>about</Text>
             </TouchableOpacity>




             <TouchableOpacity style={{margin:10,width : '40%',  height: '80%'}} onPress={() => navigation.navigate('camera')}>

                    <Image source={require('./imgs/pill.png')}    style={{   width: '100%',  height: '80%'}}/>
                      <Text style={{padding:10, width : '100%',  fontSize: 18,textAlign: 'center', alignItems: 'center', backgroundColor: 'slateblue'}}>meidcations </Text>
                </TouchableOpacity>



        </View>





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
              <Stack.Screen name="temp" component={Tmp} />

            </Stack.Navigator>
          </NavigationContainer>



    );
  }
}

const styles = StyleSheet.create({

});
