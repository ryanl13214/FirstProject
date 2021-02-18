import React, { Component } from 'react';
import { View, Text, Button, TextInput, DeviceEventEmitter,StyleSheet ,Image,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import SyncStorage from 'sync-storage';
const
{
    width,
    height
} = Dimensions.get('window');
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
  var cal =  SyncStorage.get('caltracker');

if(cal == undefined){cal = 0 ;}


		var thismonth= new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ');

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
			cal:cal,
steps:0,
multiplyer:50

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
	submit = () => {
		this.setState({
			cal: this.state.cal +this.state.mins*this.state.multiplyer
		});
    SyncStorage.set('caltracker',this.state.cal);
	}



	updateMultiplyer = (i) => {
		this.setState({
			multiplyer: i
		});

	}





	render() {


















		return (
			<View style={{width: '100%', height:height}}>
			<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:height-70,resizeMode: 'stretch' }} source={require('../imgs/NEWIMAGES/exbackground.png')} />

			<View style={{ flexDirection:"row" , marginTop:"45%"}} >

			  <View style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.42,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.09  ,minHeight:80}}  >
			      <Image style={{ marginLeft:"4%",width: height*0.09 *0.8 ,   height:height*0.09 *0.8 ,marginTop:height*0.09 *0.2,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/steps.png')} />


				  <View style={{ marginLeft:"4%",    height:"100%" ,justifyContent: 'center',alignItems: 'flex-end',width: (width*0.35 )- ( height*0.09 *0.8) }} >
					  <Text  style={{fontSize:this.state.textScale,color:"black"  }}>{this.state.steps}</Text>
			      <Text  style={{fontSize:this.state.textScale,color:"black"  }}>Steps</Text>
			    </View>


			  </View>

				<View style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.42,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.09  ,minHeight:80}}  >
			      <Image style={{ marginLeft:"4%",width: height*0.09 *0.8 ,   height:height*0.09 *0.8 ,marginTop:height*0.09 *0.2,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/steps-burn.png')} />


				  <View style={{ marginLeft:"4%",    height:"100%" ,justifyContent: 'center',alignItems: 'flex-end',width: (width*0.35 )- ( height*0.09 *0.8) }} >
					  <Text  style={{fontSize:this.state.textScale,color:"black"  }}>{this.state.cal}</Text>
			      <Text  style={{fontSize:this.state.textScale,color:"black"  }}>  caloires</Text>
			    </View>


			  </View>

			</View>




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
				<View style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
					<Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 30, height: 36}]}>{this.state.todaysnumber}</Text>
				</View>
			</View>






			<View style={{ marginLeft:"5%",  marginTop:height*0.05,backgroundColor:"white",width: width*0.90,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.28 ,minHeight:80}}  >


        <View style={{flexDirection:"row"  }}  >




          <View style={{marginTop:"5%",justifyContent: 'center',alignItems: 'center',  marginLeft:"5%"  ,backgroundColor:"white"  , height: height*0.09  ,width: width*0.25,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  >
           <View >
              <Image style={{marginTop:"28%" , height: height*0.086  ,width: width*0.23,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/run.png')} />
            </View>
            <Text  style={{fontSize:this.state.textScale  ,color:"black" , marginTop:16 }}> run</Text>
          </View>



          <View style={{marginTop:"5%",justifyContent: 'center',alignItems: 'center',  marginLeft:"5%"  ,backgroundColor:"white"  , height: height*0.09  ,width: width*0.25,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  >
           <View >
              <Image style={{marginTop:"28%" , height: height*0.086  ,width: width*0.23,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/walk.png')} />
            </View>
            <Text  style={{fontSize:this.state.textScale  ,color:"black" , marginTop:16 }}> walk</Text>
          </View>


          <View style={{marginTop:"5%",justifyContent: 'center',alignItems: 'center',  marginLeft:"5%"  ,backgroundColor:"white"  , height: height*0.09  ,width: width*0.25,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  >
           <View >
              <Image style={{marginTop:"28%" , height: height*0.086  ,width: width*0.23,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/cycle.png')} />
            </View>
            <Text  style={{fontSize:this.state.textScale  ,color:"black" , marginTop:16 }}> cycle</Text>
          </View>

          </View>


        <View style={{marginTop:"5%", flexDirection:"row"  }}  >
          <View style={{marginTop:"5%",  marginLeft:"3%",justifyContent: 'center',alignItems: 'center', flexDirection:"row" ,backgroundColor:"white"  , height: height*0.09  ,width: width*0.40,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  >
            <Image style={{   height: "86%"  ,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/swim.png')} />
              <Text  style={{fontSize:this.state.textScale,color:"black"  }}> Swim</Text>
          </View>
          <View style={{marginTop:"5%",  marginLeft:"5%" ,justifyContent: 'center',alignItems: 'center', flexDirection:"row" ,backgroundColor:"white"   , height: height*0.09  ,width: width*0.40,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  >
            <Image style={{   height: "86%"  ,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/gym.png')} />
              <Text  style={{fontSize:this.state.textScale,color:"black"  }}> Gym</Text>
          </View>
        </View>


			</View>








<View style={{ flexDirection:"row" , marginTop:"5%"}} >

<View style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.42,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.09  ,minHeight:80}}  >

<View style={{ marginLeft:"4%",    height:"100%"   }} >
  <Text  style={{fontSize:this.state.textScale,color:"black"  }}>Time</Text>
  <Image style={{ marginLeft:"4%",width: height*0.09 *0.5 ,   height:height*0.09 *0.5 ,marginTop:height*0.09 *0.2,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/time.png')} />
</View>

<View style={{ marginLeft:"4%",    height:"100%"  ,justifyContent: 'flex-end',alignItems: 'flex-end' ,marginBottom:3}} >
  <Text  style={{fontSize:this.state.textScale,color:"black"  ,marginBottom:3 }}>{this.state.mins}</Text>
  <Text  style={{fontSize:this.state.textScale,color:"black"   ,marginBottom:3}}>Minutes</Text>
</View>

  <View style={{ marginLeft:18,    height:"100%" ,justifyContent: 'flex-end',alignItems: 'flex-end' }} >
    <TouchableOpacity style={{width:width*0.08, height:  width*0.08   }}  onPress={this.onButtonPressweightpluss}  >
      <Image style={{ height: '80%',  width:'80%'  ,  resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/page-2/up.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={{width:width*0.08, height:  width*0.08  }}  onPress={this.onButtonPressweightmin}  >
      <Image style={{ height: '80%',  width:'80%'  ,   resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/page-2/down.png')} />
    </TouchableOpacity>
  </View>

</View>




  <TouchableOpacity style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.42,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.09  ,minHeight:80}}  onPress={this.submit}  >
    <Image style={{ marginLeft:"4%",width: height*0.09 *0.7 ,   height:height*0.09 *0.7 ,marginTop:height*0.09 *0.3,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/add-exercise.png')} />
    <View style={{ marginLeft:"4%",    height:"100%" ,justifyContent: 'center',alignItems: 'flex-end',width: (width*0.35 )- ( height*0.09 *0.8) }} >

      <Text  style={{fontSize:this.state.textScale,color:"black"  }}>  add excersize</Text>
    </View>
  </TouchableOpacity>



</View>






			</View>
		);
	}
}

const styles = StyleSheet.create({







});
