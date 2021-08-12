/** @format */
import React from 'react';
import {Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { AsyncStorage } from 'react-native';
import Slider from '@react-native-community/slider';

import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';
import SyncStorage from 'sync-storage';
import
{
    Dimensions
}
from 'react-native';
const
{
    width,
    height
} = Dimensions.get('window');


export default class  History extends React.Component {


  onSpringCompletion = () => {
    if (1==1) {

    }
  }
      spring = () => {
             this.springValue.setValue(height*0.16)

            Animated.timing(
                this.springValue,
                {
                  toValue: height*0.605,
                  duration: 3000,
                  useNativeDriver:false
                }
            ).start(this.onSpringCompletion);

            Animated.timing(
                this.springValueImage,
                {
                  toValue: height*0.445,
                  duration: 3000,
                  useNativeDriver:false
                }
            ).start(this.onSpringCompletion);







        }




              componentDidMount() {
                  this.spring();
              }






  constructor(props ) {
      super(props);
      this.springValue = new Animated.Value(0)
      this.springValueImage = new Animated.Value(0)


var history =[];

  for(var i = 0 ; i < 7 ; i++){
    var dateobj = new Date(new Date().setDate(new Date().getDate()-i)).toString().split(' ');

    var month = dateobj[1];
    var year = dateobj[3];
    var day = dateobj[2];


    var value=  SyncStorage.get('acne' + month + year + day );
    if(value != undefined)
    {
      history.push({ x: i, y: value });
    }
    else if(1==1)
    {
          history.push({ x: i+1, y:i });
    }
}
this.state = {
  history7:[],
  verticalAxis: 10,
  horizontalAxis: 7,

}
this.state.history7=history;





  //   console.log("histoyy",  this.props.route.params.newIMG);
    //   var base64Icon = this.props.route.params.newIMG;
//        <Image style={{ position:"absolute",top:height*0.16,width: width*0.7, height: height*0.445, resizeMode:"contain" }} source={ this.props.route.params.newIMG}/> /////////////////////////////////////////////////////


//   console.log("histoyy",  this.props.route.params.newIMG);
//var base64Icon = 'data:image/png;base64,{PLACE_YOUR_BASE64_DATA_HERE}';
  }



  render() {
    return (
      <View style={{  alignItems: 'center', justifyContent: 'flex-start' }}>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: height-70,resizeMode: 'stretch',top:0 }} source={require('../imgs/visualHistoryPage.jpg')} />





    <Image style={{ position:"absolute",top:height*0.16,width: width*0.78, height: height*0.445, resizeMode:"contain" }} source={require('../imgs/Newfolder/a.jpg')} />


      <Animated.View style={{ position:"absolute",top:height*0.16,width: width*0.78, height: this.springValueImage , overflow: 'hidden' }} >
          <Image style={{ position:"absolute",top:0,width: width*0.78, height: height*0.445, resizeMode:"contain" }} source={require('../imgs/Newfolder/image400.png')} />
      </Animated.View>




    <Animated.Image
    source={require('../imgs/Newfolder/R.gif')}
    style={{ position:"absolute",top:this.springValue,width: width*0.78, height: 10, resizeMode:"stretch" }}

    />




   <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
     <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
   </TouchableOpacity>


 <Text  style={{   fontSize:height*0.061, textAlign:"center",color:"white",fontFamily:"AmaticSC-Bold"}}>Visual history</Text>







       <View style={{ width: width*0.35, height: height*0.25,position:"absolute",top:height*0.62 ,left:"2%",flexDirection:"row" }}>

         <View style={{left: width*0.01,top:height*0.02, width: width*0.5, height: height*0.23, flexDirection:"column",borderWidth:0 }}>

           <View style={{left: width*0.01,top:height*0.01, width: width*0.4, height: height*0.07, flexDirection:"row",borderWidth:0 }}>
            <Text  style={{  left: width*0.01,top:height*0.020,     height: height*0.07,  fontSize:height*0.02,color:"black",borderWidth:0,justifyContent: "center",alignItems:"center"  }}>current Area: </Text>
            <Text  style={{  left: width*0.01,top:height*0.020,     height: height*0.07,  fontSize:height*0.02,color:"black",borderWidth:0,justifyContent: "center",alignItems:"center"  ,fontWeight: "bold",color:"red"}}>130</Text>
            <Text  style={{  left: width*0.01,top:height*0.020,      height: height*0.07,  fontSize:height*0.02,color:"black",borderWidth:0,justifyContent: "center",alignItems:"center"   ,fontWeight: "bold" ,color:"red"}}>cm²</Text>
           </View>

           <View style={{left: width*0.01,top:height*0.01, width: width*0.4, height: height*0.07, flexDirection:"row",borderWidth:0 }}>
            <Text  style={{  left: width*0.01,top:height*0.020,     height: height*0.07,  fontSize:height*0.02,color:"black",borderWidth:0,justifyContent: "center",alignItems:"center" }}>Recent Change: </Text>
            <Text  style={{  left: width*0.01,top:height*0.020,     height: height*0.07,  fontSize:height*0.02,color:"black",borderWidth:0,justifyContent: "center",alignItems:"center"   ,fontWeight: "bold",color:"red" }}>+130</Text>
            <Text  style={{  left: width*0.01,top:height*0.020,      height: height*0.07,  fontSize:height*0.02,color:"black",borderWidth:0,justifyContent: "center",alignItems:"center"    ,fontWeight: "bold",color:"red"}}>cm²</Text>
           </View>

           <View style={{left: width*0.01,top:height*0.01, width: width*0.4, height: height*0.07, flexDirection:"row",borderWidth:0 }}>
            <Text  style={{  left: width*0.01,top:height*0.020,     height: height*0.07,  fontSize:height*0.02,color:"black",borderWidth:0,justifyContent: "center",alignItems:"center" }}>Recent Trend: </Text>
            <Text  style={{  left: width*0.01,top:height*0.020,     height: height*0.07,  fontSize:height*0.02,color:"black",borderWidth:0,justifyContent: "center",alignItems:"center"    ,fontWeight: "bold" ,color:"red"}}>Worsening</Text>
           </View>

         </View>

         <Chart
           style={{ height: height*0.25, width: width*0.46 }}
           data={this.state.history7}
           padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
           xDomain={{ min: 1, max:  7}}
           yDomain={{ min: 0, max:  10 }}   >
           <VerticalAxis tickCount={10} theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
           <HorizontalAxis tickCount={7}  theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
           <Area theme={{ gradient: { from: { color: "rgb(50,170,255)" }, to: { color: "rgb(50,170,255)"  , opacity: 0.4 } }}} />
           <Line theme={{ stroke: { color:"rgb(50,170,255)" , width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
         </Chart>

         </View>




      </View>
    );
  }
}

const styles = StyleSheet.create({

});
