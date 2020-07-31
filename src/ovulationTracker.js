/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,TouchableWithoutFeedback ,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

export default class  Ovu extends React.Component {

  constructor(props ) {
    super(props);
    this.state = {
    width: "0%",
    heart:"0%",
    label:"none",
  sex:"none"
    };
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
add = () => {


  if( this.state.width=="31%"){
    this.setState({
      width:"61%",
      label:"med"
     });
  }
  if( this.state.width=="61%"){
    this.setState({
      width:"100%",
      label:"high"
     });
  }
  if( this.state.width=="100%"){
    this.setState({
      width:"0%",
      label:"none"
     });
  }
  if( this.state.width=="0%"){
    this.setState({
      width:"31%",
      label:"low"
     });
  }


  }
  add2 = () => {


    if( this.state.heart=="0%"){
      this.setState({
        heart:"100%",
        sex:"logged"
       });
    }
    if( this.state.heart=="100%"){
      this.setState({
        heart:"0%",
        sex:"none"
       });
    }

    }

  render() {
    return (

      <SafeAreaView style={styles.container}>


      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: height-70,resizeMode: 'stretch',top:0 }} source={require('../imgs/7.jpg')} />




      <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"11%",overflow: 'hidden'}} onPress={    this.add  } >
      <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"11%",overflow: 'hidden'}}>
      <View style={{  flexDirection: 'row'   ,   width:  this.state.width,height:"100%" ,backgroundColor:"red"}}></View>
      <View style={{  flexDirection: 'row'   , width:"90%",height:"100%"  ,backgroundColor:"white"}}></View>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0}} source={require('../imgs/tttt.png')} />
      </View>
           </TouchableWithoutFeedback>
  <Text  style={{  position:"absolute" ,  width:"32%",height:"13%" ,top:"93%" ,left:"19%",color:"white" }}> {this.state.label} </Text>


           <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"58%",overflow: 'hidden'}} onPress={    this.add2  } >
           <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"58%",overflow: 'hidden'}}>
           <View style={{  flexDirection: 'row'   ,   width:  this.state.heart,height:"100%" ,backgroundColor:"green"}}></View>
           <View style={{  flexDirection: 'row'   , width:"90%",height:"100%"  ,backgroundColor:"white"}}></View>
           <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0}} source={require('../imgs/heart.png')} />
           </View>
                </TouchableWithoutFeedback>
                <Text  style={{  position:"absolute" ,  width:"32%",height:"13%" ,top:"93%" ,left:"68%",color:"white" }}> {this.state.sex} </Text>




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
