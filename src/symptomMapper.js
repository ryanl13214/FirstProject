/** @format */
import React, { useState } from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView,Scrollview} from 'react-native';


//Import ImageMapper Component
import ImageMapper from 'react-native-image-mapper';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const imgheight = height*0.8;
const imgwidth = imgheight*0.44;

const getRandomColor = () => {
  //Function to return random color
  //To highlight the mapping area
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};
//Maps to Create Clickable Areas
const RECTANGLE_MAP = [
  {
    id: '0',
    name: 'Left Foot',
    shape: 'rectangle',
    x2: 110,
    y2: 540,
    x1: 80,
    y1: 500,
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '1',
    name: 'Right Foot',
    shape: 'rectangle',
    x2: 155,
    y2: 540,
    x1: 125,
    y1: 500,
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '2',
    name: 'Left Knee',
    shape: 'rectangle',
    x2: 110,
    y2: 400,
    x1: 80,
    y1: 370,
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '3',
    name: 'Right Knee',
    shape: 'rectangle',
    x2: 155,
    y2: 400,
    x1: 125,
    y1: 370,
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '4',
    name: 'Stomach',
    shape: 'rectangle',
    x2: 155,
    y2: 240,
    x1: 80,
    y1: 165,
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '5',
    name: 'Left Hand',
    shape: 'rectangle',
    x2: 40,
    y2: 315,
    x1: 5,
    y1: 250,
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '6',
    name: 'Right Hand',
    shape: 'rectangle',
    x2: 235,
    y2: 315,
    x1: 200,
    y1: 250,
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '7',
    name: 'Face',
    shape: 'rectangle',
    x2: 145,
    y2: 70,
    x1: 90,
    y1: 30,

    fill: 'blue',
  },
  {
    id: '8',
    name: 'Head',
    shape: 'rectangle',
    x2: 145,
    y2: 30,
    x1: 90,
    y1: 0,
 prefill: "red",
    fill: 'blue',
  },
];















function map() {
  return (


    <SafeAreaView style={styles.container}>

    <ScrollView vertical={true} style={{ flex: 1,   padding: 30,position:"absolute" ,top:"25%",left:"19%" ,width:"75%" , height:"65%"  }}>

    <View style={{  flexDirection: 'row'    , width:"90%"  , height: '40%'}}>
    <TouchableOpacity style={{width: '46%' , height: '100%',marginTop:"10%",marginLeft:"15%"}}   >
      <Image style={{  width: '80%', height: '100%',borderRadius:15 }} source={require('../imgs/brightDay.jpg')}  />
    </TouchableOpacity>
    <View style={{  width:"40%"  , height: '40%',marginTop:"20%"}}>
    <Text style={[styles.textDark, { fontSize: 15, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,  height: 36}]}>3rd meditation</Text>
    <Text style={[styles.textDark, {  fontSize:13, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, height: 36}]}>helps you to start your day right</Text>
    </View>
    </View>

      </ScrollView>

    </SafeAreaView>






  );
}

function list() {
  return (


    <SafeAreaView style={styles.container}>


    </SafeAreaView>






  );
}





export default class  Symptommapper extends React.Component {


  constructor(props ) {
    super(props);
  }
  render() {

    //State for the selected area

    let mapperAreaClickHandler =   (item, idx ) => {
       console.log(item, idx);
    };


    return (
      <SafeAreaView style={styles.container}>
            <Image style={{position:"absolute" ,  width: '100%', height: height-70 }} source={require('../imgs/6.jpg')} />


  </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
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
  width:"80%",
  marginLeft:"10%",
  height:220,

  flexDirection: 'row',
  justifyContent: "center",
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  borderBottomWidth:  10,
  overflow: 'hidden'
},


buttonwide: {
    flex: 1,
    margin:10,
      borderRadius:30,
    width:300,
    height:200,
    backgroundColor:"red",
     flexDirection: 'row',
    justifyContent: "center",
      overflow: 'hidden'
  },






});
