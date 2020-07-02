/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';




export default class  Food extends React.Component {

  constructor(props ) {
    super(props);

    this.items = [
     'Goa',
     'Gujrat',
     'Madhya Pradesh',
     'Assam',
     'Gujrat',
     'Karnataka',
     'Jharkhand',
     'Himachal Pradesh',
     'Manipur',
     'Meghalaya',
     'Mizoram',
     'Uttarakhand',
     'West Bengal',
     'Tamil Nadu ',
     'Punjab',
     'Rajasthan',
     'Bihar',
     'Andhra Pradesh',
     'Arunachal Pradesh',
   ];
  }
  render() {




    return (

      <SafeAreaView style={styles.container}>








      <LinearGradient colors={['white', '#bfe6ff', '#59bfff' ]} style={styles.linearGradient}>
      </LinearGradient>




      {this.items.map((item, key) => (
        //key is the index of the array
        //item is the single item of the array
        <View key={key} style={styles.item}>
          <Text style={styles.text}>{key}. {item}</Text>
          <View style={styles.separator} />
        </View>
      ))}



      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
 flex: 1, position: 'absolute', width: '100%', height: '100%', justifyContent: 'center'
},
  text: {
    fontSize: 20,
    width:180,
    height:30,
    marginLeft:9,
    borderRadius:15,
    textAlign: 'center',
    backgroundColor:"skyblue",
},
container: {
flex: 1,
alignItems: "flex-start",
justifyContent: "center"
},


button: {
  flex: 1,
  margin:10,
  width:180,
  height:220,
  backgroundColor:"red",
   flexDirection: 'row',
  justifyContent: "center",
    borderRadius:30,
      overflow: 'hidden'
},


buttonWide: {
    flex: 1,
    margin:10,
    marginLeft:"5%",
      borderRadius:30,
    width:"90%",
    height:100,
    backgroundColor:"red",
     flexDirection: 'row',
    justifyContent: "center",
      overflow: 'hidden'
  },






});
