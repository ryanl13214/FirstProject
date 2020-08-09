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

      <View style={{  flexDirection: 'row'    , width:"90%"  , height: '40%'}}>
      <TouchableOpacity style={{width: '46%' , height: '100%',marginTop:"10%",marginLeft:"15%"}} onPress={() =>  this.props.navigation.navigate('meditation')} >
    <Image style={{  width: '80%', height: '100%',borderRadius:15 }} source={require('../imgs/11.jpg')}  />
      </TouchableOpacity>
      <View style={{  width:"40%"  , height: '40%',marginTop:"20%"}}>
      <Text style={[styles.textDark, { fontSize: 15, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,  height: 36}]}>morning meditation</Text>
      <Text style={[styles.textDark, {  fontSize:13, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, height: 36}]}>helps you to start your day right</Text>
      </View>
      </View>

      <View style={{  flexDirection: 'row'    , width:"90%"  , height: '40%'}}>

      <View style={{  width:"40%"  , height: '45%',marginTop:"20%",marginLeft:"15%"}}>
      <Text style={[styles.textDark, { fontSize: 15, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,  height: 36}]}>Stress relief meditation</Text>
      <Text style={[styles.textDark, {  fontSize:13, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, height: 36}]}>This meditation helps to reduce stress</Text>
      </View>
      <TouchableOpacity style={{width: '46%' , height: '100%',marginTop:"10%" ,marginLeft:"10%"}} onPress={() =>  this.props.navigation.navigate('meditation')} >
      <Image style={{  width: '80%', height: '100%',borderRadius:15 }} source={require('../imgs/12.jpg')}  />
      </TouchableOpacity>
      </View>

      <View style={{  flexDirection: 'row'    , width:"90%"  , height: '40%'}}>
      <TouchableOpacity style={{width: '46%' , height: '100%',marginTop:"10%",marginLeft:"15%"}} onPress={() =>  this.props.navigation.navigate('meditation')} >
    <Image style={{  width: '80%', height: '100%',borderRadius:15 }} source={require('../imgs/brightDay.jpg')}  />
      </TouchableOpacity>
      <View style={{  width:"40%"  , height: '40%',marginTop:"20%"}}>
      <Text style={[styles.textDark, { fontSize: 15, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,  height: 36}]}>3rd meditation</Text>
      <Text style={[styles.textDark, {  fontSize:13, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, height: 36}]}>helps you to start your day right</Text>
      </View>
      </View>

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
