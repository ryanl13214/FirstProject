import React, { Component } from 'react';
import { View, Text, Button, TextInput, DeviceEventEmitter,StyleSheet ,Image,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';

export default class  Excer extends React.Component {

	state={

		boxWidth:150,
		boxHeight:100,
		alarm:40,
		text:55,
		buttonsleft:"-10",
		buttonstop:"-55"

	}



	constructor(props, context) {
		super(props, context);
		const	 highres={
			boxWidth:150,
			boxHeight:100,
			alarm:40,
			text:55,
			buttonsleft:"-10",
			buttonstop:"-55"
		}
		const	 lowres={
			boxWidth:150,
			boxHeight:100,
			alarm:40,
			text:55,
			buttonsleft:"-10",
			buttonstop:"-55"
		}

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
			mins:0,
			cal:0,







		};

	}
	onButtonPressweightpluss = () => {


		this.setState({
			mins: this.state.mins+5
		});


	}
	onButtonPressweightmin = () => {
		this.setState({
			mins: this.state.mins-5
		});

	}
	onButtonPressweightmin2 = () => {
		this.setState({
			cal: this.state.mins*50
		});

	}









	render() {


		var getboxWidth = function( ) {


			if(height>600){
				return 150;

			}
			else{

				return 140;

			}




		}



		var getboxHeight = function( ) {

			if(height>600){
				return 100;

			}
			else{

				return 60;

			}

		}

		var  getalarm = function( ) {

			if(height>600){
				return 40;

			}
			else{

				return 30;

			}

		}

		var gettext = function( ) {

			if(height>600){
				return 50;

			}
			else{

				return 20;

			}

		}

		var getbuttonsleft = function( ) {

			if(height>600){
				return "-10%";

			}
			else{

				return "-10%";

			}

		}

		var getbuttonstop = function( ) {

			if(height>600){
				return "-55%";

			}
			else{

				return "-55%";

			}

		}


		var getboxLeft = function( ) {

			if(height>600){
				return "12%";

			}
			else{

				return "7%";

			}

		}








		return (
			<View style={{width: '100%', height: '100%' }}>
			<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:height-70,resizeMode: 'stretch' }} source={require('../imgs/ex.jpg')} />




			<Text style={[styles.textDark, {position:"absolute",top:"4%",left:"88%", fontSize: 25, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.thismonth}</Text>
			<View  style={{position:"absolute",  width: "75%",marginLeft:"10%" , flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"11%"  }}>
			<TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.minus7}</Text>
			</TouchableOpacity>
			<TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.minus6}</Text>
			</TouchableOpacity>
			<TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.minus5}</Text>
			</TouchableOpacity>
			<TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.minus4}</Text>
			</TouchableOpacity>
			<TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.minus3}</Text>
			</TouchableOpacity>
			<TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.minus2}</Text>
			</TouchableOpacity>
			<TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.minus1}</Text>
			</TouchableOpacity>
			<LinearGradient colors={['rgb(111,111,211)', 'rgb(55,119,140)']}  style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.todaysnumber}</Text>
			</LinearGradient>

			</View>

			<Text style={  {position:"absolute",top:"89%",left:"20%", fontSize: 15, fontWeight: "500"  ,color:"white",  textAlign: 'center', marginTop: 3,   height: 36} }>{this.state.mins} min</Text>






			<View style={{position:"absolute",borderRadius:18 ,     width:"96%",height:"37%"  ,backgroundColor:"rgb(240,126,126)" ,top:"43%",left:"2%"}}>

			<View style={{   flexDirection:"row",    width:"96%",height:"40%"  ,backgroundColor:"rgb(240,126,126)", marginLeft:"2%",marginTop:"5%"}}>
					<TouchableOpacity style={{  width: "33%", backgroundColor:"rgb(240,126,126)", height: "100%"}}>
							<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:"100%",resizeMode: 'stretch' }} source={require('../imgs/exrun.jpg')} />
					</TouchableOpacity>
					<TouchableOpacity style={{  width: "33%", backgroundColor:"rgb(240,126,126)", height: "100%"}}>
							<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:"100%",resizeMode: 'stretch' }} source={require('../imgs/exwalk.jpg')} />
					</TouchableOpacity>
					<TouchableOpacity style={{  width: "33%", backgroundColor:"rgb(240,126,126)", height: "100%"}}>
							<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:"100%",resizeMode: 'stretch' }} source={require('../imgs/exbike.jpg')} />
					</TouchableOpacity>
			</View>

			<View style={{   flexDirection:"row",    width:"96%",height:"40%"  ,backgroundColor:"rgb(240,126,126)", marginLeft:"2%",marginTop:"5%"}}>
					<View style={{width:"16%",height:1}}></View>
					<TouchableOpacity style={{  width: "33%", backgroundColor:"rgb(240,126,126)", height: "100%"}}>
							<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:"100%",resizeMode: 'stretch' }} source={require('../imgs/exswim.jpg')} />
					</TouchableOpacity>

					<TouchableOpacity style={{  width: "33%", backgroundColor:"rgb(240,126,126)", height: "100%"}}>
							<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:"100%",resizeMode: 'stretch' }} source={require('../imgs/exweights.jpg')} />
					</TouchableOpacity>
			</View>



			</View>


			<TouchableOpacity style={{ position:"absolute",top:"83%",left:"55%",width: "40%", height: "10%"}} onPress={this.onButtonPressweightmin2} >

			</TouchableOpacity>






			<View style={ { borderRadius:18 ,position:"absolute", flexDirection: 'column'   ,  width: getboxWidth() , height: getboxHeight() ,top:"81%" ,left:getboxLeft() ,overflow: 'hidden',backgroundColor:"rgb(21,107,156)"}}>
			<View style={{borderRadius:18 ,    flexDirection: 'row'   ,  width:"88%",height:"30%"  ,backgroundColor:"rgb(21,107,156)",marginLeft:"6%",marginTop:"2%"}}>
			<Text style={{ fontSize: 15,color:"white", fontWeight: "100"   ,  width:"100%",  textAlign: 'center',borderRadius:40,borderWidth:0,borderColor:"white"}}>Time</Text>
			</View>






			<View style={{ flexDirection: 'row'  ,  alignItems: 'center'   }}>
			<View style={{ flexDirection: 'column'    ,height:"100%"  }}>
			<Image style={{  width:getalarm(), height: getalarm() ,resizeMode: 'stretch',marginLeft:5,marginTop:"-10%" }} source={require('../imgs/clock.png')}  />
			</View>
			<Text style={{  width: 55,  fontSize: 15, fontWeight: "500"  ,color:"white",  textAlign: 'center' ,marginLeft:"3%",marginTop:"-10%" }}>{this.state.mins} min</Text>
			<View style={{ flexDirection: 'column' ,marginLeft:"10%"  }}>
			<TouchableOpacity style={{width: 30, height: 30 ,marginLeft:getbuttonsleft(),marginTop:"-55%"}} onPress={this.onButtonPressweightpluss} >
			<Image style={{  width: 30, height: 30   }} source={require('../imgs/up2.png')}  />
			</TouchableOpacity>
			<TouchableOpacity style={{width: 30, height: 30 ,marginLeft:getbuttonsleft(),marginTop:"-55%" }} onPress={this.onButtonPressweightmin} >
			<Image style={{  width: 30, height: 30  }} source={require('../imgs/down2.png')}  />
			</TouchableOpacity>
			</View>
			</View>
			</View>



			<Text style={  {position:"absolute",top:"25%",left:"72%", fontSize: 15, fontWeight: "500"  ,color:"white",  textAlign: 'center', marginTop: 3,   height: 36} }>{this.state.cal}  </Text>
			<Text style={  {position:"absolute",top:"25%",left:"25%", fontSize: 15, fontWeight: "500"  ,color:"white",  textAlign: 'center', marginTop: 3,   height: 36} }>0  </Text>



			</View>
		);
	}
}

const styles = StyleSheet.create({







});
