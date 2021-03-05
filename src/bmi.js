/** @format */
import React from 'react';
import {  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');





import LinearGradient from 'react-native-linear-gradient';
import InputSpinner from 'react-native-input-spinner';
export default class  Bmi extends React.Component {

	bmiCalculator = (cm , kg) => {


		var bmi;
		var newCm= parseFloat(cm/100);

		bmi = kg / (newCm * newCm);
		bmi = bmi.toFixed(1);

		this.setState({
			bmi: bmi
		});
	}



	constructor(props ) {


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












		super(props);
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
			age: 18,
			weight:80,
			height:140,
			bmi:0,
			bmitext:"Healthy"
		};
	}
	onButtonPressagepluss = () => {
		if(this.state.age<100){

			this.setState({
				age: this.state.age+1
			});
			this.bmiCalculator(this.state.height,this.state.weight);
		}
	}
	onButtonPressagemin = () => {
		if(this.state.age>0){

			this.setState({
				age: this.state.age-1
			});
			this.bmiCalculator(this.state.height,this.state.weight);
		}
	}

	onButtonPressheightpluss = () => {
		if(this.state.height<300){
			this.setState({
				height: this.state.height+1

			});
			this.bmiCalculator(this.state.height,this.state.weight);
		}
	}
	onButtonPressheightmin = () => {
		if(this.state.height>0){

			this.setState({
				height: this.state.height-1
			});
			this.bmiCalculator(this.state.height,this.state.weight);
		}
	}


	onButtonPressweightpluss = () => {
		if(this.state.weight<200){

			this.setState({
				weight: this.state.weight+1
			});
			this.bmiCalculator(this.state.height,this.state.weight);
		}
	}
	onButtonPressweightmin = () => {
		if(this.state.weight>0){

			this.setState({
				weight: this.state.weight-1

			});
			this.bmiCalculator(this.state.height,this.state.weight);
		}
	}











	render() {

		return (

			<SafeAreaView style={styles.container}>
			<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: height,resizeMode: 'stretch',top:0 }} source={require('../imgs/3.jpg')} />


{/* title*/}
			<View style={{ alignItems: "center", justifyContent: "center", textAlign: 'center',  position:"absolute",top:"-2%",left:"0%",width:"100%",height:"15%"}}>


			</View>
			{/* bascl nutton*/}
			<TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
			  <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
			</TouchableOpacity>


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
			<LinearGradient colors={['rgb(111,111,211)', 'rgb(55,119,140)']}  style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
			<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
			</LinearGradient>

			</View>












			<View style={{ borderRadius:15,flexDirection:"row",alignItems: "center", justifyContent: "center", textAlign: 'center',  position:"absolute",top:"35%",left:"5%",width:"90%",height:"12%",backgroundColor:"rgb(236,106,106)"}}>
			<View style={{borderRadius:15, flexDirection:"row",height:"85%" ,width:"28%", margin:"2%",backgroundColor:"white"}}>
			<View style={{ flexDirection:"column", height:"21%" ,width:"60%", margin:"2%", marginLeft:"5%", textAlign: 'center' }}>
			<Text  style={{  color:"rgb(229,148,92)", fontSize: 18   , textAlign: 'center' }}>Age</Text>
			<Text  style={{   fontSize: 18  , textAlign: 'center'  }}>{this.state.age}</Text>
			</View>
			<View style={{ flexDirection:"column", height:"21%" ,width:"30%", margin:"2%" }}>
			<TouchableOpacity style={{width: 30, height: 30  }} onPress={this.onButtonPressagepluss} >
			<Image style={{  width: 30, height: 30 }} source={require('../imgs/up2.png')}  />
			</TouchableOpacity>
			<TouchableOpacity style={{width: 30, height: 30 }} onPress={this.onButtonPressagemin} >
			<Image style={{  width: 30, height: 30 }} source={require('../imgs/down2.png')}  />
			</TouchableOpacity>
			</View>
			</View>
			<View style={{ borderRadius:15,flexDirection:"row",height:"85%" ,width:"28%", margin:"2%",backgroundColor:"white"}}>
			<View style={{ flexDirection:"column", height:"21%" ,width:"60%", margin:"2%", marginLeft:"5%", textAlign: 'center' }}>
			<Text  style={{   color:"rgb(229,148,92)", fontSize: 18   , textAlign: 'center' }}>Height</Text>
			<Text  style={{   fontSize: 18  , textAlign: 'center'  }}>{this.state.age}</Text>
			</View>
			<View style={{ flexDirection:"column", height:"21%" ,width:"30%", margin:"2%" }}>
			<TouchableOpacity style={{width: 30, height: 30  }} onPress={this.onButtonPressheightpluss} >
			<Image style={{  width: 30, height: 30 }} source={require('../imgs/up2.png')}  />
			</TouchableOpacity>
			<TouchableOpacity style={{width: 30, height: 30 }} onPress={this.onButtonPressheightmin} >
			<Image style={{  width: 30, height: 30 }} source={require('../imgs/down2.png')}  />
			</TouchableOpacity>
			</View>
			</View>
			<View style={{ borderRadius:15,flexDirection:"row",height:"85%" ,width:"30%", margin:"2%",backgroundColor:"white"}}>
			<View style={{ flexDirection:"column", height:"21%" ,width:"70%", textAlign: 'center' }}>
				<Text  style={{   color:"rgb(229,148,92)", fontSize: 18   , textAlign: 'center' , marginTop:1}}> Weight</Text>
				<Text  style={{   fontSize: 18  , textAlign: 'center'  }}>{this.state.age}</Text>




			</View>
				<View style={{ flexDirection:"column", height:"21%" ,width:"30%" }}>
					<TouchableOpacity style={{width: 30, height: 30  }} onPress={this.onButtonPressweightpluss} >
					<Image style={{  width: 30, height: 30 }} source={require('../imgs/up2.png')}  />
					</TouchableOpacity>
					<TouchableOpacity style={{width: 30, height: 30 }} onPress={this.onButtonPressweightmin} >
					<Image style={{  width: 30, height: 30 }} source={require('../imgs/down2.png')}  />
					</TouchableOpacity>
				</View>
			</View>




			</View>
















			<Image style={{  position:"absolute",top:"54%",left:"0%",width:"100%",height:"25%"}} source={require('../imgs/NEWIMAGES/BMI/heart.png')} />

			<View style={{ alignItems: "center", justifyContent: "center", textAlign: 'center',  position:"absolute",top:"54%",left:"0%",width:"100%",height:"25%"}}>

			<Text  style={{ color:"red", fontSize: 20}}>{this.state.bmi}</Text>
			<Text  style={{   height: 30,color:"red", fontSize: 20}}>{this.state.bmitext}</Text>



			</View>

{/* bmi desc */}
			<View style={{ alignItems: "center", justifyContent: "center", textAlign: 'center',  position:"absolute",top:"78%",left:"0%",width:"100%" }}>

			<Text  style={{ color:"rgb(138,0,28)", textAlign: 'center', fontSize: 18}}>The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. While generally useful it is possible to live a healthy active life with a abnormal BMI.</Text>




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
