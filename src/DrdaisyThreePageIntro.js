/** @format */
import React from 'react';
import {Animated,  TextInput, Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window').width;


export default class  DrdaisyThreePageIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state={
              animationValue : new Animated.Value(0),
      left:0,
      TargetLeft:0
    }
  }


  continue = () => {

      this.props.confirmThreePage()

  }





  MoveScreen = (a) => {


    Animated.timing(this.state.animationValue,{
      toValue : (Dimensions.get('window').width)*-1,
      duration : 500,
   // easing: Easing.bounce,
   // easing : Easing.back(10),
   // easing : Easing.elastic(5),
    //easing : Easing.bezier(.17, 1, .33, .89),
   // easing : Easing.ease(20)

    }).start();
  }
  MoveScreenLast = (a) => {


    Animated.timing(this.state.animationValue,{
      toValue : (Dimensions.get('window').width)*-2,
      duration : 500,
   // easing: Easing.bounce,
   // easing : Easing.back(10),
   // easing : Easing.elastic(5),
    //easing : Easing.bezier(.17, 1, .33, .89),
   // easing : Easing.ease(20)

    }).start();
  }

  render() {
    const animatedStyle = {
     transform: [{ translateX : this.state.animationValue }],
    }




    return (
      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >

      <Animated.View style={[styles.animatedBox, animatedStyle]} >
      <Image style={{position:"absolute" ,left:this.state.left,  width: Dimensions.get('window').width*3, height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/DrDaisyThreePageIntroBack.jpg')} />



      <Image style={{position:"absolute" ,left:-20,  width: '40%', height: '80%',resizeMode: 'stretch'  }} source={require('../imgs/standalonedaisy.png')} />
        <TouchableOpacity style={{position:"absolute"  ,top:"70%",  height:50, width:"30%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "10%"}}   onPress={this.MoveScreen} >
          <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Next </Text>
        </TouchableOpacity>

        <Image style={{position:"absolute" ,left:(Dimensions.get('window').width-20)*1,  width: '40%', height: '80%',resizeMode: 'stretch'  }} source={require('../imgs/standalonedaisy.png')} />
          <TouchableOpacity style={{position:"absolute" ,left:"33%" ,top:"70%",  height:50, width:"30%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "10%"}}   onPress={this.MoveScreenLast} >
            <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Next </Text>
          </TouchableOpacity>


         <Image style={{position:"absolute" ,left:(Dimensions.get('window').width*2)-20,  width: '40%', height: '80%',resizeMode: 'stretch'  }} source={require('../imgs/standalonedaisy.png')} />
             <TouchableOpacity style={{position:"absolute" ,left:"66%",top:"70%", height:50, width:"30%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "10%"}}   onPress={this.continue} >
                 <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Get Started </Text>
             </TouchableOpacity>

      </Animated.View>




      </View>
    );
  }
}

const styles = StyleSheet.create({

  animatedBox: {

  width: '300%',
  height: "100%",

  }




});
