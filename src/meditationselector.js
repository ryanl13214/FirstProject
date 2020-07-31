/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';


import { TextInput } from 'react-native';








export default class  Medselector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <View >
 


                                  <View style={{  flexDirection: 'column'   , marginLeft:"5%", marginTop:"5%",  width:"90%",height:"78%" }}>
                                      <TouchableOpacity style={{width: '66%', height: '40%',marginTop:"10%",marginLeft:"15%"}} onPress={() =>  this.props.navigation.navigate('meditation')} >
                                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/energy.png')}  />
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{width: '66%', height: '40%',marginTop:"10%",marginLeft:"15%"}} onPress={() =>  this.props.navigation.navigate('meditation')} >
                                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/energy.png')}  />
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{width: '66%', height: '40%',marginTop:"10%",marginLeft:"15%"}} onPress={() =>  this.props.navigation.navigate('meditation')} >
                                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/energy.png')}  />
                                      </TouchableOpacity>
                                  </View>




      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginTop: "12%",

  },
  bar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginTop: "5%",

  },
  item:{
    flexDirection: 'row',
    marginLeft: "5%",
    width:"100%",
    borderColor:"black",
    borderBottomWidth:1,
  },
label:{

  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  marginTop: "5%",


},

  input: {
    width: 150,
    height: 45,
marginTop: "12%",
borderRadius:3,
    backgroundColor: 'grey',
  },
});
