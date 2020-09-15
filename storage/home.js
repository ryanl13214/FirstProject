/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { BoxShadow } from "react-native-shadow";

export default class  Test extends React.Component {

  constructor(props ) {
    super(props);
    this.state = {
          isBlinking: false,


        };
    this.blinkingInterval = false;
  }



  componentWillUnmount() {
      clearInterval(this.blinkingInterval);
      this.blinkingInterval = false;
    }

   componentDidMount() {
     if (!this.blinkingInterval) {
        this.blinkingInterval = setInterval(() => {
         this.setState({
            isBlinking: !this.state.isBlinking,


           });
         }, 800);
      }



    }

  render() {
var shadowOpt;
if(this.state.isBlinking){
   shadowOpt =        {
                width: 160,
                height: 100,
                color: "#c00",
                border: 1,
                radius: 11,
                opacity: 0.2,
                x: 0,
                y: 0,
                style: {  }
              }

}else{
   shadowOpt =        {
                width: 160,
                height: 100,
                color: "#f00",
                border: 5,
                radius: 21,
                opacity: 0.2,
                x: 0,
                y: 0,
                style: {  }
              }


}

    return (

      <SafeAreaView style={styles.container}>


      <LinearGradient colors={['white', '#bfe6ff', '#59bfff' ]} style={styles.linearGradient}>
      <Image style={{position:"absolute" , width: 200, height:200,resizeMode: 'stretch',top:200,left:0 }} source={require('../imgs/drdaisytransparent.png')} />
      <View  style={{position:"absolute",textAlign:"center",justifyContent:"center",alignItems:"center" , width: 150, height:70,backgroundColor:"white",top:200,left:180,borderRadius:50 }} >
      <Text> this is a simple message </Text>
      </View>
      </LinearGradient>
      <Text style={{position:"absolute"   ,top:100,left:44 }} > thsis is a simple message </Text>


  <BoxShadow  style={{position:"absolute",top:100,left:150 }}   setting={shadowOpt}>

 </BoxShadow>

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
textGlowing: {

  shadowColor: "rgb(250,0,0)",
  shadowOffset: {
  	width: 0,
  	height: 0,
  },
  shadowOpacity: 100,
  shadowRadius: 15,
 borderRadius:100,
  elevation:4,
  },
  textGlowingalt: {

    shadowColor: "rgb(250,0,0)",
    shadowOffset: {
    	width: 0,
    	height: 0,
    },
    shadowOpacity:111,
    shadowRadius: 11,
    borderRadius:100,
    elevation:2,
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
