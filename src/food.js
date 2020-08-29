/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';


import { Dimensions } from 'react-native'






export default class  Food extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    const widthcirc = (Dimensions.get('window').width *0.7);
    return (

     <View  style={{  width: '100%', height: '100%' }} >
        <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",top:0,left:0,  width: '100%', resizeMode: 'stretch', height: '100%' }} source={require('../imgs/nutbackground.jpg')} />

        <View  style={{ position:"absolute",top:"25%",left:"25%", width: widthcirc, height: widthcirc,backgroundColor:"white",borderRadius:widthcirc/2 }} >
          <View  style={{  width: '96%',backgroundColor:"grey", height: '96%',marginLeft:"2%",marginTop:"2%" ,borderRadius:widthcirc/2 }} >
            <View  style={{ justifyContent: "center",alignItems:"center", width: '98%',backgroundColor:"white", height: '98%',marginLeft:"1%",marginTop:"1%" ,borderRadius:widthcirc/2 }} >


              <Text style={{  width: "100%",textAlign:"center",fontSize:widthcirc*0.1 , color:"blue"}}>date</Text>
              <Text style={{  width: "100%",textAlign:"center",fontSize:widthcirc*0.07, color:"grey"}}>Calories consumed</Text>
              <Text style={{  width: "100%",textAlign:"center",fontSize:widthcirc*0.12, color:"darkorange"}}>100 kcal</Text>
              <Text style={{  width: "100%",textAlign:"center",fontSize:widthcirc*0.08, color:"grey"}}>Calories left</Text>
              <Text style={{  width: "100%",textAlign:"center",fontSize:widthcirc*0.11, color:"green"}}>100 kcal</Text>
            </View>
          </View>
      </View>


       <Image style={{position:"absolute",top:"33%",left:"3%", justifyContent: "center", width: widthcirc*0.28, height: "25%",alignItems:"center",  resizeMode: 'stretch',borderRadius: 7}} source={require('../imgs/labels.png')} />


      <View  style={{ position:"absolute",top:"66%",left:"23%", width: widthcirc*0.95, height: "30%",backgroundColor:"white" ,borderRadius: 7 ,overflow:"hidden" }} >
        <View  style={{ justifyContent: "center",alignItems:"center", width: "100%", height: "15%",backgroundColor:"lightblue" ,textAlign:"center" }} >
        <Text style={{  width: "100%",textAlign:"center"}}>Text</Text>
      </View>





      <View  style={{flexDirection:"row",  width: "90%", height:30,backgroundColor:"lightgrey" ,textAlign:"center",marginLeft:"5%" ,marginTop:"3%" ,borderRadius: 7000 }} >
        <Image style={{ justifyContent: "center",alignItems:"center",  height: 25,width:25,marginTop:2,marginLeft:5 }} source={require('../imgs/altpluss.png')} />
        <Text style={{  width: "50%",textAlign:"center",fontSize:20}}>Breakfast</Text>
        <Text style={{  width: "40%",textAlign:"center",marginTop:1,fontSize:15}}>1400cla</Text>
      </View>



      <View  style={{flexDirection:"row",  width: "90%", height:30,backgroundColor:"lightgrey" ,textAlign:"center",marginLeft:"5%" ,marginTop:"5%",borderRadius: 7000 }} >
        <Image style={{ justifyContent: "center",alignItems:"center",  height: 25,width:25,marginTop:2,marginLeft:5 }} source={require('../imgs/altpluss.png')} />
        <Text style={{  width: "50%",textAlign:"center",fontSize:20}}>Lunch</Text>
        <Text style={{  width: "40%",textAlign:"center",marginTop:2,fontSize:15}}>1400cal</Text>
      </View>

      <View  style={{flexDirection:"row",  width: "90%", height:30,backgroundColor:"lightgrey" ,textAlign:"center",marginLeft:"5%" ,marginTop:"5%",borderRadius: 7000 }} >
        <Image style={{ justifyContent: "center",alignItems:"center",  height: 25,width:25,marginTop:2,marginLeft:5 }} source={require('../imgs/altpluss.png')} />
        <Text style={{  width: "50%",textAlign:"center",fontSize:20}}>Dinner</Text>
        <Text style={{  width: "40%",textAlign:"center",marginTop:2,fontSize:15}}>1400cal</Text>
      </View>

      <View  style={{flexDirection:"row",  width: "90%", height:30,backgroundColor:"lightgrey" ,textAlign:"center",marginLeft:"5%" ,marginTop:"5%",borderRadius: 7000 }} >
        <Image style={{ justifyContent: "center",alignItems:"center",  height: 25,width:25,marginTop:2,marginLeft:5 }} source={require('../imgs/altpluss.png')} />
        <Text style={{  width: "50%",textAlign:"center",fontSize:20}}>Snacks</Text>
        <Text style={{  width: "40%",textAlign:"center",marginTop:2,fontSize:15}}>1400cal</Text>
      </View>



      </View>




     </View>


    );
  }
}

const styles = StyleSheet.create({








});
