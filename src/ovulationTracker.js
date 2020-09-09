/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,TouchableWithoutFeedback ,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

import ProgressCircle from 'react-native-progress-circle'
import {  Circle, Text as SvgText, TextPath, TSpan, G, Svg } from 'react-native-svg';






function Circletext({ title,props,textbody,rotation }) {


    return (
      <View  style={{    position:"absolute" ,   top:"21%" ,left:"-4%"  }} >

        <Svg position="absolute" height={width*0.9} width={width*0.9}
          viewBox="0 0 320 320">
          <G id="circle">
            <Circle
              r={(width*0.4)/2}
              x={width*0.5}
              y={width*0.5}
              fill="none"
              stroke="rgba(44,0,0,0)"
              strokeWidth={0}
              transform=  {rotation}
            />
          </G>
          <SvgText fill="#000" fontSize="15">
            <TextPath href="#circle">
              <TSpan dx="0" dy={-20}>
              {textbody}
              </TSpan>
            </TextPath>
          </SvgText>
        </Svg>
      </View>
    )

}














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


    var todaysday = new Date(new Date().setDate(new Date().getDate(  ))).toString().split(' ')[0];
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
      sex:"none",
      data:[0.4, 0.6, 0.8],
      totalRotation:"0deg",
      redrotation:"-100deg",
      greenrotation:"50deg",
      redlabel:"rotate(-170)",
      greenlabel:"rotate( -40)",
      resettingcontentrotation:"-50deg"// negative of the green rotrion pluss the negaitive of the total rotation
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
        width:"63%",
        label:"med"
      });
    }
    if( this.state.width=="63%"){
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
      <View style={{  flexDirection: 'row'   , width:"94%",height:"100%"  ,backgroundColor:"white"}}></View>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0,borderRadius:40,borderWidth:0,borderColor:"white"}} source={require('../imgs/tttt.png')} />
      </View>
      </TouchableWithoutFeedback>
      <Text  style={{  position:"absolute" ,  width:"32%",height:"13%" ,top:"193%" ,left:"19%",color:"white" }}> {this.state.label} </Text>


      <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"58%",overflow: 'hidden'}} onPress={    this.add2  } >
      <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"13%" ,top:"83%" ,left:"58%",overflow: 'hidden',borderRadius:40,borderWidth:3,borderColor:"white"}}>
      <View style={{ borderRadius:40, flexDirection: 'row'   ,   width:  this.state.heart,height:"100%" ,backgroundColor:"green"}}></View>
      <View style={{  flexDirection: 'row'   , width:"100%",height:"100%"  ,borderRadius:40,backgroundColor:"white"}}></View>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0,borderRadius:40,borderWidth:0,borderColor:"white"}} source={require('../imgs/heart.png')} />
      </View>
      </TouchableWithoutFeedback>
      <Text  style={{  position:"absolute" ,  width:"32%",height:"13%" ,top:"93%" ,left:"68%",color:"white" }}> {this.state.sex} </Text>


      <View style={{
      position:"absolute" ,
      top:"30%" ,
      left:"13%",
      transform: [{rotateZ: this.state.redrotation}],
      }}>
      <ProgressCircle
      percent={30}
      radius={(width*0.35)+16}
      borderWidth={8}
      color="rgba(244,0,0,255)"
      shadowColor="rgba(244,186,186,255)"
      bgColor="rgba(244,1,186,255)"
      >
      </ProgressCircle>
      </View>



      <View style={{
      position:"absolute" ,
      top:"30%" ,
      left:"13%",
       marginTop:8,
       marginLeft:8,
      transform: [{rotateZ: this.state.greenrotation}]
      }}>
        <ProgressCircle
        percent={20}
        radius={(width*0.35)+8}
        borderWidth={8}
        color="rgba(10,245,10,255)"
        shadowColor="rgba(244,186,186,255)"
        bgColor="rgba(244,186,186,255)"
        >

        <View style={{
         transform: [{rotateZ: this.state.resettingcontentrotation}],
         justifyContent:"flex-start"
        }}>
        <Text  style={{   width:"32%",height:"13%",color:"white" , height:50}}>  </Text>
        <Text  style={{   width:"32%",height:"13%",color:"white" , height:50}}> {this.state.sex} </Text>
        <Text  style={{   width:"32%",height:"13%",color:"white" , height:50}}> {this.state.sex} </Text>
        <Text  style={{   width:"32%",height:"13%",color:"white" , height:50}}> {this.state.sex} </Text>

      </View>

        </ProgressCircle    >
      </View>
      <Image style={{   position:"absolute" ,   top:"32%" ,left:(width/2)-10,    width:20, height:12 }} source={require('../imgs/uparrow.png')} />
      <Text  style={{  position:"absolute" ,   top:"39%"  , width:"100%", color:"white" ,textAlign: 'center',}}> 07 sep 2017</Text>

      <Circletext textbody="Fertile period" rotation={this.state.greenlabel}/>
      <Circletext textbody="Bleeding period" rotation={this.state.redlabel}/>


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
