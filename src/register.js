/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';





export default class  Splash extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    return (

      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >


      <Image style={{position:"absolute" ,  width: '100%', height: '100%' }} source={require('../imgs/0.jpg')} />



      </View>




    );
  }
}

const styles = StyleSheet.create({






});
