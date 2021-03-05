/** @format */
import React from 'react';
import {  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
import { Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
const
{
    width,
    height
} = Dimensions.get('window');
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




       }, 19);
      }
    }



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


    this.state={
        animationValue : new Animated.Value(0),
        todaysnumber: todaysnumber,
        minus1: minus1,
        minus2: minus2,
        minus3: minus3,
        minus4: minus4,
        minus5: minus5,
        minus6: minus6,
        minus7: minus7,      pluss1:pluss1,
        thismonth:thismonth,
        sliderValue:0
      }
  }

  makeblink = () => {

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



getwidth() {


  return this.state.sliderValue * (width*0.7);
}

sliderChange(a){
if(this.state.sliderValue  > 0.5){
  this.setState({
     blink: true
  });
}else{
  this.setState({
     blink: false
  });
}



}








  render() {

    const animatedStyle = {
     transform: [{ translateY : this.state.animationValue }],
    }

    return (

      <SafeAreaView style={styles.container}>
        <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: '100%',resizeMode: 'stretch' }} source={require('../imgs/8.jpg')} />








         <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"17%"  }}>
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
            <TouchableOpacity style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
                <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
            </TouchableOpacity>
            <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
                <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.pluss1}</Text>
            </TouchableOpacity>
        </View>


        {/* bascl nutton*/}
  			<TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
  			  <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
  			</TouchableOpacity>




{/*
        <View style={{position:"absolute", top:"43%",left:"15%"  ,  width:this.getwidth(), height:height*0.15,backgroundColor:"red"}}>

        </View>
*/}
        <LinearGradient colors={['rgb(211,111,111)', 'rgb(155,119,140)']}  style={{  position:"absolute", top:"43%",left:"15%"  ,  width:this.getwidth(), height:height*0.15}}>
         </LinearGradient>


        <View style={{position:"absolute", top:"43%",left:"15%"  ,  width:"70%", height:"25%" }}>
              <TouchableOpacity  style={this.state.isBlinking   && styles.textGlowing}  onPress={this.makeblink}  >
                  <Image style={{ height:height*0.15, width:width*0.7    }}   source={require( '../imgs/revision3/VBAT.png')} />
              </TouchableOpacity>
        </View>

        <View style={{position:"absolute", top:"65%",left:"15%"  ,  width:"70%",justifyItems:"center" ,justifyContent:"center" , alignItems:"center"  }}>

        <Slider
          style={{width:  "100%", height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => this.setState({sliderValue: value})}
        />
    </View>


 










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
