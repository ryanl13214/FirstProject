import React, { Component } from 'react';
import { View, Text, Button, TextInput, DeviceEventEmitter,StyleSheet ,Image,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';

export default class  Excer extends React.Component {
	constructor(props, context) {
     super(props, context);

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
     };

  }

 	render() {

 		return (
			<View style={{width: '100%', height: '100%' }}>
						<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:height-70,resizeMode: 'stretch' }} source={require('../imgs/ex.jpg')} />




						<Text style={[styles.textDark, {position:"absolute",top:"4%",left:"88%", fontSize: 25, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.thismonth}</Text>
						<View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"11%"  }}>
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









 			</View>
 		);
 	}
 }

 const styles = StyleSheet.create({







 });
