/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';


const { width,height } = Dimensions.get('window');









export default class  Trophy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
nextmedal:"silver",
medal:"bronze"
    };
  }

  render() {
    return (
    <View style={{  width: width, height: height   }}>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: width, height: height-70,resizeMode: 'stretch' }} source={require('../imgs/17.jpg')} />
      <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:3,top:3 }} onPress={() =>  this.props.navigation.navigate('chat', {help:'water'})}>
<Image style={{  width: '100%', height: '100%'  }} source={require('../imgs/helpIcon.png')} />

			</TouchableOpacity>

      <View style={{width:width*0.60 ,justifyContent: "center",alignItems:"center", height:  width*0.70,marginLeft:width*0.2 ,marginTop:width*0.4 ,backgroundColor:"rgb(245,245,245)",borderRadius:width*0.05}} >
      <Image style={{ position:"absolute",  width: "100%", height:"100%",resizeMode: 'stretch',borderRadius:width*0.05 }} source={require('../imgs/whitesparklebackground.jpg')} />

      <Image style={{ width: width*0.25*0.75,marginTop: width*0.1, height: width*0.37*0.79,resizeMode: 'stretch',borderRadius:width*0.05 }} source={require('../imgs/bronzemedal.png')} />

      <Text style={{ width:"94%",marginLeft:"3%",textAlign:"center",marginTop:2  , fontSize: 15 }}>congratulations you have a {this.state.medal} medal. Complete another goal for the {this.state.nextmedal} medal </Text>

      </View>

      <Image style={{position:"absolute",top:"60%",left:width*0.07,   width: width*0.25, height: width*0.37,resizeMode: 'stretch' }} source={require('../imgs/bronzemedal.png')} />

 <Text style={{ position:"absolute",top:"70%",left:(width*0.07)+(( width*0.18) ),  textAlign:"center",   width:30,height:30,borderRadius:15,backgroundColor:"red",color:"white"   , fontSize: 15 }}>1 </Text>

      <Image style={{position:"absolute",top:"60%",left:width*0.37,   width: width*0.25, height: width*0.37,resizeMode: 'stretch' }} source={require('../imgs/silvermedal.png')} />
      <Text style={{ position:"absolute",top:"70%",left:(width*0.37)+(( width*0.18) ),  textAlign:"center",   width:30,height:30,borderRadius:15,backgroundColor:"red",color:"white"   , fontSize: 15 }}>0 </Text>

      <Image style={{position:"absolute",top:"60%",left:width*0.67,   width: width*0.25, height: width*0.37,resizeMode: 'stretch' }} source={require('../imgs/goldmedal.png')} />
      <Text style={{ position:"absolute",top:"70%",justifyContent:"center",left:(width*0.67)+(( width*0.18) ),  textAlign:"center",   width:30,height:30,borderRadius:15,backgroundColor:"red",color:"white"   , fontSize: 15 }}>0 </Text>

    </View>

    );
  }
}
const styles = StyleSheet.create({

});
