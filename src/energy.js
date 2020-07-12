/** @format */
import React from 'react';
import {  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
import { Dimensions } from 'react-native';



var month = new Date().getMonth() ; //To get the Current Month

var monthnames=[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"
];





export default class  Energy extends React.Component {

   state = {
        isBlinking: false,
        isBlinking1: false,
        isBlinking2: false,
        blink:false,
        blink2:false,
        blink2:false


      };
   blinkingInterval = false;

  componentWillUnmount() {
      clearInterval(this.blinkingInterval);
      this.blinkingInterval = false;
    }





   componentDidMount() {
     if (!this.blinkingInterval) {
        this.blinkingInterval = setInterval(() => {


         if(this.state.blink){
         this.setState({
            isBlinking: !this.state.isBlinking
           });
         }
         if(this.state.blink==false){
            this.setState({
              isBlinking:false
            });
         }



         if(this.state.blink1){
         this.setState({
            isBlinking1: !this.state.isBlinking1
           });
         }
         if(this.state.blink1==false){
            this.setState({
              isBlinking1:false
            });
         }



         if(this.state.blink2){
         this.setState({
            isBlinking2: !this.state.isBlinking2
           });
         }
         if(this.state.blink2==false){
            this.setState({
              isBlinking2:false
            });
         }




         }, 1000);
      }
    }



  constructor(props ) {
    super(props);
    this.state={
        animationValue : new Animated.Value(0)
      }
  }

  makeblink = () => {
    Animated.timing(this.state.animationValue,{
      toValue : 270,
      duration : 500,
   // easing: Easing.bounce,
   // easing : Easing.back(10),
   // easing : Easing.elastic(5),
    //easing : Easing.bezier(.17, 1, .33, .89),
   // easing : Easing.ease(20)

    }).start();
    this.setState({
       blink: true,
       blink1:false,
       blink2:false,
    });
  }

  makeblink1 = () => {
    this.setState({
      blink: false,
      blink1:true,
      blink2:false,
    });
  }

  makeblink2 = () => {
    this.setState({
      blink: false,
      blink1:false,
      blink2:true,
    });
  }


  render() {

    const animatedStyle = {
     transform: [{ translateY : this.state.animationValue }],
    }

    return (

      <SafeAreaView style={styles.container}>
        <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: '100%',resizeMode: 'stretch' }} source={require('../imgs/8.jpg')} />

        <Text style={{position:"absolute",  width: 150, height: 150, top:"10%",left:"90%" }} >{monthnames[month]}</Text>


        <View style={{position:"absolute", top:"41%",left:"12%"  ,  width:"43%", height:"10%",}}>
              <TouchableOpacity  style={this.state.isBlinking   && styles.textGlowing}  onPress={this.makeblink}  >
                  <Image style={{ height:"100%", width:"100%"   ,marginTop:5 }}   source={require( '../imgs/lowbat.jpg')} />
              </TouchableOpacity>
        </View>

        <View style={{position:"absolute", top:"56%",left:"12%"  ,  width:"43%", height:"10%",}}>
        <TouchableOpacity  style={this.state.isBlinking1   && styles.textGlowing}  onPress={this.makeblink1}  >
            <Image style={{ height:"100%", width:"100%"   ,marginTop:5 }}   source={require( '../imgs/medbat.jpg')} />
        </TouchableOpacity>
        </View>

        <View style={{position:"absolute", top:"71%",left:"12%"  ,  width:"43%", height:"10%",}}>
        <TouchableOpacity  style={this.state.isBlinking2   && styles.textGlowing}  onPress={this.makeblink2}  >
            <Image style={{ height:"100%", width:"100%"   ,marginTop:5 }}   source={require( '../imgs/highbat.jpg')} />
        </TouchableOpacity>
        </View>


        <Animated.View style={[styles.animatedBox, animatedStyle]} >
          <Image style={{ height:5, width:5   }}   source={require( '../imgs/highbat.jpg')} />
        </Animated.View>





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
  textGlowing: {
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    shadowOffset: {width: -10, height: 10},
    shadowRadius: 65,

    marginTop:-5
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
