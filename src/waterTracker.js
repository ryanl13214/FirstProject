/** @format */
import React from 'react';
import {  Animated, Image, Easing,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';


import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

export default class  Water extends React.Component {

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
    this.RotateValueHolder = new Animated.Value(0);
    this.state = {
      pluss1:pluss1,
      todaysnumber: todaysnumber,
      minus1: minus1,
      minus2: minus2,
      minus3: minus3,
      minus4: minus4,
      minus5: minus5,
      minus6: minus6,
      minus7: minus7,
      thismonth:thismonth,
      name:"",
      distfromtop: 470,
      label:0,
backgroundImage:'../imgs/13.jpg',
distanceLeft:"0%"
          };

  }

  componentDidMount() {
    this.StartImageRotateFunction();
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);

    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 30000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this.StartImageRotateFunction());
  }




getHour=()=>{


var todaysnumber= new Date( new Date().getDate() ).toString() ;




console.log(todaysnumber);

}










  pluss = () =>
  {
    this.setState({

      label:this.state.label+100
    });
    if(this.state.distfromtop>0){
    this.setState({
      distfromtop: this.state.distfromtop -25,

    });


    if(this.state.distfromtop<0){
      this.setState({
        distfromtop: 0,

      });
    }
}


//this.getHour();


}



  changetograph = () =>
  {

    this.setState({
      distanceLeft: "110%"
    });
}

changetotracker = () =>
{
  this.setState({
    distanceLeft: "0%"
  });

}

minus = () =>
{
    if(this.state.label>0){
  this.setState({
    distfromtop: this.state.distfromtop+25,
    label:this.state.label-100
  });

  if(this.state.distfromtop>700){
    this.setState({
      distfromtop: 700,

    });
  }
}
}

getLeft(i)
{
if(i == 0 ){return this.state.distanceLeft;}
if(i == 1 ){return this.state.distanceLeft;}





}


  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });








    return (

      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start",overflow:"hidden"}} >

      <Image style={{position:"absolute"  ,  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/waterTrackerBackgroundForGraph.jpg')} />

      <Image style={{position:"absolute" ,left:this.getLeft(1),  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/13.jpg')} />

      <Text style={[styles.textDark, {position:"absolute",top:"4%",left:"88%", fontSize: 18, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.thismonth}</Text>
      <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"12%"  }}>

      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph()  }} >
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus7}</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph()  }} >
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus6}</Text>
      </TouchableOpacity>
      <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph()  }} >
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus5}</Text>
      </TouchableOpacity>
      <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph()  }} >
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus4}</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph()  }} >
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus3}</Text>
      </TouchableOpacity>
      <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph()  }} >
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus2}</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph()  }} >
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus1}</Text>
      </TouchableOpacity>


      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetotracker()  }} >
          <LinearGradient colors={['rgb(111,111,211)', 'rgb(55,119,140)']}  style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36  }}  >
          <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
          </LinearGradient>
      </TouchableOpacity>
      </View>



      <View  style={{position:"absolute" ,  width: '100%', height: '100%' ,left:this.getLeft(1),top:"0%" }} >




      <TouchableOpacity   style={{  position:"absolute",top:"25%",left:"55%",  width: 50, height: 50, flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.minus()  }} >
      <Image style={{ justifyContent: "center",alignItems:"center",  width:  50, height:  50,resizeMode: 'stretch' }} source={require('../imgs/minu.png')} />
      </TouchableOpacity>

      <TouchableOpacity   style={{  position:"absolute",top:"25%",left:"85%",  width: 50, height: 50, flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress={() => {return this.pluss()  }} >
      <Image style={{ justifyContent: "center",alignItems:"center",  width:  50, height:  50,resizeMode: 'stretch' }} source={require('../imgs/pluss.png')} />
      </TouchableOpacity>



      <View  style={{position:"absolute" ,  width: '45%', height: '75%',left:"4%",top:"23%",borderRadius:30 ,backgroundColor:"rgb(25,89,127)",overflow:"hidden"}} >


      <Animated.Image
      style={{
        position:"absolute",
        left:"-120%",
        top:this.state.distfromtop,
        width: 600,
        height: 600,
        borderRadius:300,
        transform: [{ rotate: '15deg' }],
        transform: [{ rotate: RotateData }],
      }}
      source={require('../imgs/circbumb.png')}
      />


      <Image style={{ width: '100%', height: '100%',resizeMode: 'stretch' }} source={require('../imgs/waterbody.png')} />

      </View>
      <Text style={{color:"white",position:"absolute",top:"56%",left:"70%", fontSize: 25, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,  height: 36}}>{this.state.label} ml</Text>
      <Text style={{color:"white",position:"absolute",top:"80%",left:"70%", fontSize: 25, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,  height: 36}}>2000 ml</Text>



</View>





<LineChart

data={{
  labels: [
    '1',
    '2',
    '3',
    '4',
    '1',
    '2',
    '3',
    '4',
    '1',
    '2',
    '3',
    '4',
    '1',
    '2',
    '3',
    '4',

  ],
  datasets: [
    {
      data: [1, 2, 3, 4,4,4,4,4,4,4,5,6,7,8,9,0 ],
      strokeWidth: 2,
    },
  ],
}}
width={Dimensions.get('window').width *0.8}
height={220}
chartConfig={{
  backgroundColor: '#1cc910',
  backgroundGradientFrom: '#eff3ff',
  backgroundGradientTo: '#efefef',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 199, ${opacity})`,
  style: {
    borderRadius: 16,
  },
}}
style={{
  marginVertical: 8,
  borderRadius: 16,
   marginLeft:"-20%"
}}
/>







      </View>
    );
  }
}

const styles = StyleSheet.create({



});
