import React, { Component } from 'react';
import { Modal, View, Text, Button, TextInput, DeviceEventEmitter,StyleSheet, ScrollView,Image,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
const
{
    width,
    height
} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const data = [
  {
    id: 'Ate nice meal',
    title: 'Ate nice meal'
  },
  {
    id: 'Went running',
    title: 'Went running'
  }
];



export default class  Jornal extends React.Component {
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
			 name1:"",
       todaysnumber: todaysnumber,
       minus1: minus1,
       minus2: minus2,
       minus3: minus3,
       minus4: minus4,
       minus5: minus5,
       minus6: minus6,
       minus7: minus7,
       thismonth:thismonth,
       isVisible: false,
     };

  }
  showHistory()
  {
      this.setState(
      {
          isVisible: !this.state.isVisible
      });
  }
 	render() {

 		return (
			<View style={{width: '100%', height:height }}>
						<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height:height-70,resizeMode: 'stretch' }} source={require('../imgs/jurn.jpg')} />



						{/* BACK button*/}
		  			<TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
		  			  <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
		  			</TouchableOpacity>

						{/* date bar */}
						<View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"11%"  }}>

						    <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.minus7}
										</Text>
						    </TouchableOpacity>

						    <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.minus6}
										</Text>
						    </TouchableOpacity>

						    <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.minus5}
										</Text>
						    </TouchableOpacity>

						    <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.minus4}
										</Text>
						    </TouchableOpacity>

						    <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.minus3}
										</Text>
						    </TouchableOpacity>

						    <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.minus2}
										</Text>
						    </TouchableOpacity>

						    <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.minus1}
										</Text>
						    </TouchableOpacity>

						    <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.todaysnumber}
										</Text>
						    </TouchableOpacity>

						    <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
						        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>
										{this.state.pluss1}
										</Text>
						    </TouchableOpacity>
						</View>


<View  style={{position:"absolute",height:"82%",   width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"16.5%",left:"0%" ,borderWidth:1 ,borderColor:"red" }}>



			<View  style={{position:"absolute",  width: "30%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"12%",left:"55%"  }}>
				<Text style={{ fontSize: 30,  fontWeight: "500"}}>{this.state.todaysnumber}</Text>
				<View  style={{   width: "70%" ,justifyContent: "center",alignItems:"center"  }}>
					<Text>{this.state.thismonth}</Text>
					<Text>2021</Text>
				</View>
			</View>

			<View  style={{position:"absolute",borderBottomWidth:1,borderBottomColor:"grey",  width: "63%", top:"22%",left:"30%"  }}></View>

			<ScrollView vertical={true}  style={{position:"absolute",borderBottomWidth:1,borderBottomColor:"grey",height:"32%",  width: "58%", top:"40%",left:"30%" ,textAlign:'flex-start' }}>
					<TextInput
					multiline
						value={this.state.name}
						onChangeText={name => this.setState({ name })}
						placeholder={'How was your day?'}
						style={{   alignContent: "flex-start",   width: '100%'  }}
					/>
			</ScrollView>





					<Text style={{position:"absolute",height:width*0.278,  width: width*0.2 ,justifyContent: "center",alignItems:"center",top:"12.5%",left:"3%", color:"white" , fontSize:22  ,fontFamily:"AmaticSC-Bold"}}>What are you grateful for today?</Text>




			<ScrollView vertical={true}  style={{position:"absolute",height:"49%",  width: "19%", top:"30%",left:"3%" ,textAlign:'flex-start'  }}>

				<View  style={{ height:height*0.02,  width:"1%"  }}></View>

					<View  style={{ height:height*0.15,  width: height*0.1 ,justifyContent: "center",alignItems:"center", flexDirection: 'column'  }}>
						<TouchableOpacity  style={{  borderBottomColor:"grey",height:width*0.15,  width: width*0.15,  borderRadius:5555,backgroundColor:"grey"}}>
					 	</TouchableOpacity>
							<Text style={{   fontSize: height*0.019  ,justifyContent: "center",textAlign:"center"   }}>Good meal </Text>
					</View>


					<View  style={{ height:height*0.01,  width:"1%"  }}></View>



					<View  style={{ height:height*0.15,  width: height*0.1 ,justifyContent: "center",alignItems:"center"   , flexDirection: 'column'  }}>
						<TouchableOpacity  style={{  borderBottomColor:"grey",height:width*0.15,  width: width*0.15,  borderRadius:5555,backgroundColor:"grey"}}>
            <Image style={{  width: "100%", height:"100%",resizeMode: 'stretch' }} source={require('../imgs/Icons/goodweather.png')} />

					 	</TouchableOpacity>
							<Text style={{  fontSize: height*0.019  ,justifyContent: "center",textAlign:"center"    }}>Great weather</Text>
					</View>


					<View  style={{ height:height*0.15,  width: height*0.1 ,justifyContent: "center",alignItems:"center"   , flexDirection: 'column'  }}>
						<TouchableOpacity  style={{  borderBottomColor:"grey",height:width*0.15,  width: width*0.15,  borderRadius:5555,backgroundColor:"grey"}}>
					 	</TouchableOpacity>
							<Text style={{ fontSize: height*0.019  ,justifyContent: "center",textAlign:"center"   }}>Family</Text>
					</View>


					<View  style={{ height:height*0.15,  width: height*0.1 ,justifyContent: "center",alignItems:"center"   , flexDirection: 'column'  }}>
						<TouchableOpacity  style={{  borderBottomColor:"grey",height:width*0.15,  width: width*0.15,  borderRadius:5555,backgroundColor:"grey"}}>
            <Image style={{  width: "100%", height:"100%",resizeMode: 'stretch' }} source={require('../imgs/Icons/work.png')} />
        	 	</TouchableOpacity>
							<Text style={{  fontSize: height*0.019  ,justifyContent: "center",textAlign:"center"  }}>Good job</Text>
					</View>


					<View  style={{ height:height*0.15,  width: height*0.1 ,justifyContent: "center",alignItems:"center"   , flexDirection: 'column'  }}>
						<TouchableOpacity  style={{  borderBottomColor:"grey",height:width*0.15,  width: width*0.15,  borderRadius:5555,backgroundColor:"grey"}}>
					 	</TouchableOpacity>
							<Text style={{   fontSize: height*0.019  ,justifyContent: "center",textAlign:"center"     }}>Good sleep</Text>
					</View>



					<View  style={{ height:height*0.15,  width: height*0.1 ,justifyContent: "center",alignItems:"center"   , flexDirection: 'column'  }}>
						<TouchableOpacity  style={{  borderBottomColor:"grey",height:width*0.15,  width: width*0.15,  borderRadius:5555,backgroundColor:"grey"}}>
              <Image style={{  width: "100%", height:"100%",resizeMode: 'stretch' }} source={require('../imgs/Icons/trophy.png')} />
					 	</TouchableOpacity>
							<Text style={{   fontSize: height*0.018  ,justifyContent: "center",textAlign:"center"      }}>Personal achievment</Text>
					</View>

          <View  style={{ height:height*0.15,  width: height*0.1 ,justifyContent: "center",alignItems:"center"   , flexDirection: 'column'  }}>
						<TouchableOpacity  style={{  borderBottomColor:"grey",height:width*0.15,  width: width*0.15,  borderRadius:5555,backgroundColor:"grey"}}>
              <Image style={{  width: "100%", height:"100%",resizeMode: 'stretch' }} source={require('../imgs/Icons/party.png')} />
					 	</TouchableOpacity>
							<Text style={{   fontSize: height*0.018  ,justifyContent: "center",textAlign:"center"      }}>Celebration</Text>
					</View>



  		</ScrollView>


		</View>








    <Modal
             animationType = {"fade"}
             transparent = {true}
             visible = {this.state.isVisible }
             onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
             {/*All views of Modal*/}
             <View   style={{position:"absolute",height:height-(height*0.165)-80 ,   width: "100%" ,justifyContent: "center",alignItems:"center",top:"16.5%",left:"0%" ,borderWidth:0 ,borderColor:"red" ,backgroundColor:"white"}}>


       < View  style={{   position: 'absolute',left: width*0.025,top: 10,height:height*0.15, width: width*0.95,borderRadius:10,overflow:"hidden" ,flexDirection:"row" ,borderWidth:1,borderBottomWidth:2 ,borderColor:"grey"}}  >

 <Image style={{      position: 'absolute',left: width*0.031,top: 22,height:height*0.091, width: height*0.091 ,resizeMode: 'contain'  }} source={require('../imgs/Icons/netr.png')} />


        < View  style={{   position: 'absolute',left: (width*0.025*2) + height*0.1, top:  0,height:height*0.15, width:   width*0.95  -((width*0.025*2) + height*0.1) -10  ,borderRadius:10,overflow:"hidden" ,flexDirection:"column" ,borderWidth:0 ,borderColor:"grey"}}  >

		<Text style={{   fontSize: height*0.021 ,textAlign:"center"      }}>TODAY August 8</Text>
		<Text style={{   fontSize: height*0.018 ,textAlign:"center" ,marginBottom:5    }}>Text of Journal input history Text of Journal input history Text of Journal input history Text of Journal input history </Text>
   	<Text style={{ bottom: 2,  fontSize: height*0.018 ,textAlign:"center"      }}>• Family •  Friends • Good weather • </Text>
   </View>


       </View>

       < View  style={{   position: 'absolute',left: width*0.025,top: height*0.17,height:height*0.15, width: width*0.95,borderRadius:10,overflow:"hidden" ,flexDirection:"row" ,borderWidth:1,borderBottomWidth:2 ,borderColor:"grey"}}  >

  <Image style={{      position: 'absolute',left: width*0.031,top: 22,height:height*0.091, width: height*0.091 ,resizeMode: 'contain'  }} source={require('../imgs/Icons/sad.png')} />


        < View  style={{   position: 'absolute',left: (width*0.025*2) + height*0.1, top:  0,height:height*0.15, width:   width*0.95  -((width*0.025*2) + height*0.1) -10  ,borderRadius:10,overflow:"hidden" ,flexDirection:"column" ,borderWidth:0 ,borderColor:"grey"}}  >

    <Text style={{   fontSize: height*0.021 ,textAlign:"center"      }}>FRIDAY August 6</Text>
    <Text style={{   fontSize: height*0.018 ,textAlign:"center" ,marginBottom:5    }}>Text of Journal input history 2 Text of Journal input history 2 Text of Journal input history 2 Text of Journal input history 2 </Text>
    <Text style={{ bottom: 2,  fontSize: height*0.018 ,textAlign:"center"      }}>  • Friends • </Text>
   </View>


       </View>




              < View  style={{   position: 'absolute',left: width*0.025,top: height*0.33,height:height*0.15, width: width*0.95,borderRadius:10,overflow:"hidden" ,flexDirection:"row" ,borderWidth:1,borderBottomWidth:2 ,borderColor:"grey"}}  >

         <Image style={{      position: 'absolute',left: width*0.031,top: 22,height:height*0.091, width: height*0.091 ,resizeMode: 'contain'  }} source={require('../imgs/Icons/happy.png')} />


               < View  style={{   position: 'absolute',left: (width*0.025*2) + height*0.1, top:  0,height:height*0.15, width:   width*0.95  -((width*0.025*2) + height*0.1) -10  ,borderRadius:10,overflow:"hidden" ,flexDirection:"column" ,borderWidth:0 ,borderColor:"grey"}}  >

           <Text style={{   fontSize: height*0.021 ,textAlign:"center"      }}>THURSDAY August 5</Text>
           <Text style={{   fontSize: height*0.018 ,textAlign:"center" ,marginBottom:5    }}>Text of Journal input history 3 Text of Journal input history 3 Text of Journal input history 3 Text of Journal input history 3 Text of Journal input history 3  </Text>
           <Text style={{ bottom: 2,  fontSize: height*0.018 ,textAlign:"center"      }}>• Party •  Friends • Good meal • </Text>
          </View>


              </View>




             < View  style={{   position: 'absolute',left: width*0.25,bottom: 10,height:35, width: width*0.54,borderRadius:20,overflow:"hidden" }}  >
                   <Button
                       title="return"
                       onPress = {() => {this.setState({ isVisible: false})}}

                    />
             </View>


                 </View>
               </Modal>













 			</View>
 		);
 	}
 }

 const styles = StyleSheet.create({







 });
