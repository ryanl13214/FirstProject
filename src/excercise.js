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
import
{
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
}
from 'react-native-chart-kit';
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
multiplyer:50,
distanceLeft: "0%",
dayMinus:0
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
      steps: (this.state.cal +(this.state.mins*this.state.multiplyer)) *0.04,
			cal: this.state.cal +(this.state.mins*this.state.multiplyer)
		});
    SyncStorage.set('caltracker',this.state.cal);
	}

  getLeft(i)
  {
      if (i == 0)
      {
          return this.state.distanceLeft;
      }
      if (i == 1)
      {
          return this.state.distanceLeft;
      }
      if (i == 3 && this.state.distanceLeft == "110%")
      {
          return "0%";
      }
      else if (i == 3 && this.state.distanceLeft == "0%")
      {
          return "110%";
      }
  }

  getGraphData = () =>
  {
    var month = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus  )).toString().split(' ')[1];
    var year = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus    )).toString().split(' ')[3];
    var day = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus    )).toString().split(' ')[2];
    var tmparray= [];
    for(var i =0; i<= 23 ; i+=2)
    {
      var tmp=  SyncStorage.get('waterTracker' + month + year + day + i);
      if(tmp == undefined)
      {
        tmp=0;
      }
      tmparray.push(tmp);
    }
      return tmparray;
  }

  changetograph = (i) =>
  {



      this.setState({
          distanceLeft: "110%",
          dayMinus:i
      });
  }
  changetotracker = () =>
  {
    console.log("a");
      this.setState({
          distanceLeft: "0%",  dayMinus:0
      });
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
      <View  style={{position:"absolute" ,  width: '100%', height: '100%' ,left:this.getLeft(1),top:"0%",overflow:"hidden" }} >
			<View style={{ flexDirection:"row" , marginTop:"45%"}} >

			  <View style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.42,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.09  ,minHeight:80}}  >
			      <Image style={{ marginLeft:"4%",width: height*0.09 *0.8 ,   height:height*0.09 *0.8 ,marginTop:height*0.09 *0.2,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/steps.png')} />


				  <View style={{ marginLeft:"4%",    height:"100%" ,justifyContent: 'center',alignItems: 'flex-end',width: (width*0.35 )- ( height*0.09 *0.8) }} >
					  <Text  style={{fontSize:this.state.textScale,color:"black"  }}>{this.state.steps}</Text>
			      <Text  style={{fontSize:height*0.009 *1.6,color:"black"  }}>Step equivalent</Text>
			    </View>


			  </View>

				<View style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"white",width: width*0.42,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.09  ,minHeight:80}}  >
			      <Image style={{ marginLeft:"4%",width: height*0.09 *0.8 ,   height:height*0.09 *0.8 ,marginTop:height*0.09 *0.2,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/steps-burn.png')} />


				  <View style={{ marginLeft:"4%",    height:"100%" ,justifyContent: 'center',alignItems: 'flex-end',width: (width*0.35 )- ( height*0.09 *0.8) }} >
					  <Text  style={{fontSize:this.state.textScale,color:"black"  }}>{this.state.cal}</Text>
			      <Text  style={{fontSize:height*0.009 *1.6,color:"black"  }}>  caloires</Text>
			    </View>


			  </View>

			</View>






			<View style={{ marginLeft:"5%",  marginTop:height*0.05,backgroundColor:"white",width: width*0.90,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.28 ,minHeight:80}}  >


        <View style={{flexDirection:"row"  }}  >




          <TouchableOpacity style={{marginTop:"5%",justifyContent: 'center',alignItems: 'center',  marginLeft:"5%"  ,backgroundColor:"white"  , height: height*0.09  ,width: width*0.25,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  onPress={() => this.updateMultiplyer(11.5)  }>
           <View >
              <Image style={{marginTop:"28%" , height: height*0.086  ,width: width*0.23,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/run.png')} />
            </View>
            <Text  style={{fontSize:this.state.textScale  ,color:"black" , marginTop:16 }}> run</Text>
          </TouchableOpacity>



          <TouchableOpacity style={{marginTop:"5%",justifyContent: 'center',alignItems: 'center',  marginLeft:"5%"  ,backgroundColor:"white"  , height: height*0.09  ,width: width*0.25,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  onPress={() => this.updateMultiplyer(4.5)  }>
           <View >
              <Image style={{marginTop:"28%" , height: height*0.086  ,width: width*0.23,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/walk.png')} />
            </View>
            <Text  style={{fontSize:this.state.textScale  ,color:"black" , marginTop:16 }}> walk</Text>
          </TouchableOpacity>


          <TouchableOpacity style={{marginTop:"5%",justifyContent: 'center',alignItems: 'center',  marginLeft:"5%"  ,backgroundColor:"white"  , height: height*0.09  ,width: width*0.25,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  onPress={() => this.updateMultiplyer(9)  }>
           <View >
              <Image style={{marginTop:"28%" , height: height*0.086  ,width: width*0.23,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/cycle.png')} />
            </View>
            <Text  style={{fontSize:this.state.textScale  ,color:"black" , marginTop:16 }}> cycle</Text>
          </TouchableOpacity>

          </View>


        <View style={{marginTop:"5%", flexDirection:"row"  }}  >
          <TouchableOpacity style={{marginTop:"5%",  marginLeft:"3%",justifyContent: 'center',alignItems: 'center', flexDirection:"row" ,backgroundColor:"white"  , height: height*0.09  ,width: width*0.40,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  onPress={() => this.updateMultiplyer(9)  }>
            <Image style={{   height: "86%"  ,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/swim.png')} />
              <Text  style={{fontSize:this.state.textScale,color:"black"  }}> Swim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:"5%",  marginLeft:"5%" ,justifyContent: 'center',alignItems: 'center', flexDirection:"row" ,backgroundColor:"white"   , height: height*0.09  ,width: width*0.40,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  }}  onPress={() => this.updateMultiplyer(7)  }>
            <Image style={{   height: "86%"  ,    resizeMode:"contain"   }} source={require('../imgs/NEWIMAGES/page-2/gym.png')} />
              <Text  style={{fontSize:this.state.textScale,color:"black"  }}> Gym</Text>
          </TouchableOpacity>
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

















         <LineChart

         data={{
           labels: [
             '0',
             '2',
             '4',
             '6',
             '8',
             '10',
             '12',
             '14',
             '16',
             '18',
             '20',
             '22',
           ],
           datasets: [
             {
               data: this.getGraphData(),
               strokeWidth: 2,
             },
           ],
         }}
         width={Dimensions.get('window').width *0.9}
         height={Dimensions.get('window').height *0.4}
         chartConfig={{
           backgroundColor: '#1cc910',
           backgroundGradientFrom: '#eff3ff',
           backgroundGradientTo: '#efefef',
           decimalPlaces: 0,
           color: (opacity = 1) => `rgba(103, 0, 46, ${opacity})`,
           style: {
             borderRadius: 6,
           },
         }}
         style={{
           position:"absolute",
           top:"35%",
           left:this.getLeft(3),
           marginVertical: 8,
           borderRadius: 16,
            marginLeft:"5%",
            borderWidth:1,
            borderColor:"rgb(103, 0, 46)"
         }}
         />


         <Text style={{color:"rgb(103, 0, 46)",position:"absolute",top:"25%",      left:this.getLeft(3), fontSize: 30, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,   marginLeft:"25%",  height: 46}}>Daily Graph</Text>


         <Text style={{color:"rgb(103, 0, 46)",position:"absolute",top:"80%",      left:this.getLeft(3), fontSize: 16, fontWeight: "50"  ,  textAlign: 'center', marginTop: 3,      height: 96}}>We recomend 30 minutes of high activity each day. this can be as simple as a jog or it could be a decicated workout.</Text>
























<View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"13%"  }}>

   <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-7)  }} >
   <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus7}</Text>
   </TouchableOpacity>
   <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-6)  }} >
   <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus6}</Text>
   </TouchableOpacity>
   <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-5)  }} >
   <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus5}</Text>
   </TouchableOpacity>
   <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-4)  }} >
   <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus4}</Text>
   </TouchableOpacity>
   <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-3)  }} >
   <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus3}</Text>
   </TouchableOpacity>
   <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-2)  }} >
   <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus2}</Text>
   </TouchableOpacity>
   <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-1)  }} >
   <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus1}</Text>
   </TouchableOpacity>


   <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetotracker()  }} >

       <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center' , marginTop: 3,width: 36, height: 36}]}>{this.state.todaysnumber}</Text>

   </TouchableOpacity>
 </View>

 {/* bascl nutton*/}
 <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
   <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
 </TouchableOpacity>


			</View>
		);
	}
}

const styles = StyleSheet.create({







});
