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

    var thismonth= new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[1];

    var todaysnumber= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
    var minus1 = new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[2];
    var minus2 = new Date(new Date().setDate(new Date().getDate()-2)).toString().split(' ')[2];
    var minus3 = new Date(new Date().setDate(new Date().getDate()-3)).toString().split(' ')[2];
    var minus4 = new Date(new Date().setDate(new Date().getDate()-4)).toString().split(' ')[2];
    var minus5 = new Date(new Date().setDate(new Date().getDate()-5)).toString().split(' ')[2];
    var minus6 = new Date(new Date().setDate(new Date().getDate()-6)).toString().split(' ')[2];
    var minus7 = new Date(new Date().setDate(new Date().getDate()-7)).toString().split(' ')[2];
    var pluss1 = new Date(new Date().setDate(new Date().getDate()+1)).toString().split(' ')[2];


    var todaysday= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[0];
    var minus1day = new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[0];
    var minus2day = new Date(new Date().setDate(new Date().getDate()-2)).toString().split(' ')[0];
    var minus3day = new Date(new Date().setDate(new Date().getDate()-3)).toString().split(' ')[0];
    var minus4day = new Date(new Date().setDate(new Date().getDate()-4)).toString().split(' ')[0];
    var minus5day = new Date(new Date().setDate(new Date().getDate()-5)).toString().split(' ')[0];
    var minus6day = new Date(new Date().setDate(new Date().getDate()-6)).toString().split(' ')[0];
    var minus7day = new Date(new Date().setDate(new Date().getDate()-7)).toString().split(' ')[0];
    var pluss1day = new Date(new Date().setDate(new Date().getDate()+1)).toString().split(' ')[0];

    this.state = {
      todaysnumber: todaysnumber,
      minus1: minus1,
      minus2: minus2,
      minus3: minus3,
      minus4: minus4,
      minus5: minus5,
      minus6: minus6,
      minus7: minus7,      pluss1:pluss1,
      thismonth:thismonth,
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

      <Text style={[styles.textDark, {position:"absolute",top:"11%",left:"88%", fontSize: 25, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.thismonth}</Text>
      <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"18%"  }}>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus7}</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus6}</Text>
          </TouchableOpacity>
          <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus5}</Text>
          </TouchableOpacity>
          <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus4}</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus3}</Text>
          </TouchableOpacity>
          <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus2}</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus1}</Text>
          </TouchableOpacity>
          <LinearGradient colors={['rgb(111,111,211)', 'rgb(55,119,140)']}  style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
          </LinearGradient>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.pluss1}</Text>
          </TouchableOpacity>
      </View>


      <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"11%",overflow: 'hidden'}} onPress={    this.add  } >
      <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"11%",overflow: 'hidden',borderRadius:40,borderWidth:3,borderColor:"white"}}>
      <View style={{  flexDirection: 'row'   ,   width:  this.state.width,height:"100%" ,backgroundColor:"red"}}></View>
      <View style={{  flexDirection: 'row'   , width:"90%",height:"100%"  ,backgroundColor:"white"}}></View>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0,borderRadius:40,borderWidth:0,borderColor:"white"}} source={require('../imgs/tttt.png')} />
      </View>
           </TouchableWithoutFeedback>
  <Text  style={{  position:"absolute" ,  width:"32%",height:"13%" ,top:"93%" ,left:"19%",color:"white" }}> {this.state.label} </Text>


           <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"58%",overflow: 'hidden'}} onPress={    this.add2  } >
           <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"58%",overflow: 'hidden',borderRadius:40,borderWidth:3,borderColor:"white"}}>
           <View style={{ borderRadius:40, flexDirection: 'row'   ,   width:  this.state.heart,height:"100%" ,backgroundColor:"green"}}></View>
           <View style={{  flexDirection: 'row'   , width:"100%",height:"100%"  ,borderRadius:40,backgroundColor:"white"}}></View>
           <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0,borderRadius:40,borderWidth:0,borderColor:"white"}} source={require('../imgs/heart.png')} />
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
