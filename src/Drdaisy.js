/** @format */
import React from 'react';
import { TextInput, Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

export default class  Drdaisy  extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >
      <Image style={{position:"absolute" ,  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/1.jpg')} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
  position:"absolute" ,
  top:"68%",
  left:"25%",
  backgroundColor: "rgb(25,89,127)",
  width: '50%',
  height: 50,
  borderRadius:30,
  alignItems: 'center',
  justifyContent: 'center',
  textAlignVertical: 'top'
  }




});
