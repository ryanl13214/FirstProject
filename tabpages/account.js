
import React, { Component } from "react";
import {  Platform, TextInput,TouchableHighlight, Switch,TouchableOpacity, StyleSheet, Text, View,ScrollView,FlatList,Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import YoutubePlayer from "react-native-yt-player";
const Stack = createStackNavigator();


class  Defaultpage extends React.Component {
 	  constructor(props ) {
     super(props);
   }
   render() {
     return (
 	<View style={styles.container}>
		<View style={{width:"94%",marginLeft:"3%",		 }}>
			<View style={{width:"100%",height:"27%",borderBottomWidth:1,borderColor:"grey" }}>
				<Text style={{ position:"absolute",bottom:15,left:35,fontSize:40, color:"white" }}>Settings</Text>
		  </View>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:1,borderColor:"grey",flexDirection:"row" }}  onPress={() =>  this.props.navigation.navigate('settingsAccount')}>
				<Text style={{  position:"absolute",bottom:15,left:35, color:"white",fontSize:20 }}>account</Text>
				<Image style={{position:"absolute" ,bottom:15,right:35, width: 20, height:30,resizeMode: 'stretch' }} source={require('../imgs/rightarrow.png')} />
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%",borderBottomWidth:1,borderColor:"grey" ,flexDirection:"row"  }} onPress={() =>  this.props.navigation.navigate('settingsGoal')}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20   }}>Goals</Text>
				<Image style={{position:"absolute" ,bottom:15,right:35, width: 20, height:30,resizeMode: 'stretch' }} source={require('../imgs/rightarrow.png')} />
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:1,borderColor:"grey" ,flexDirection:"row" }} onPress={() =>  this.props.navigation.navigate('settingsHelp')}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20   }}>Help</Text>
				<Image style={{position:"absolute" ,bottom:15,right:35, width: 20, height:30,resizeMode: 'stretch' }} source={require('../imgs/rightarrow.png')} />
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:1,borderColor:"grey" ,flexDirection:"row" }} onPress={() =>  this.props.navigation.navigate('settingsAbout')}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20   }}>about</Text>
				<Image style={{position:"absolute" ,bottom:15,right:35, width: 20, height:30,resizeMode: 'stretch' }} source={require('../imgs/rightarrow.png')} />
		  </TouchableOpacity>

			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:1,borderColor:"grey",flexDirection:"row"  }} onPress={() =>  this.props.navigation.navigate('SettingsPrivacyPolicy')}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20  }}>Privacy Policy</Text>
				<Image style={{position:"absolute" ,bottom:15,right:35, width: 20, height:30,resizeMode: 'stretch' }} source={require('../imgs/rightarrow.png')} />
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:0,borderColor:"grey" ,flexDirection:"row" }}  >
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20  }}>Rate and review</Text>

		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:0,borderColor:"grey" ,flexDirection:"row" }}  >
				<Text style={{ position:"absolute",bottom:15,right:35, color:"white",fontSize:20  }}>Logout</Text>

		  </TouchableOpacity>
	  </View>
 </View>
);
}
}




 class  SettingsAccount extends React.Component {
	  constructor(props ) {
    super(props);
		this.state = {
      isEnabled: false,
    };
  }
	toggleSwitch = () => {

		this.setState({

			isEnabled:!this.props.isEnabled
		});
	}

  render() {



    return (
			<View style={styles.container}>
			<View style={{width:"100%",height:"27%",borderBottomWidth:1,borderColor:"grey",alignItems:"center" }}>
				<Image style={{  width: 60, height:60,resizeMode: 'stretch',marginTop:50,borderRadius:35 }} source={require('../imgs/avataricon.png')} />
				<Text style={{  color:"white",fontSize:20 ,marginTop:15 }}>Jane Doe</Text>

			</View>


			<View style={{width:"90%" ,height:"78%",marginLeft:"5%" }}>


			<TouchableOpacity style={{width:"100%",height:"15%" ,borderBottomWidth:1,borderColor:"grey" ,flexDirection:"row" }}>
				<Text style={{ position:"absolute",bottom:9,left:0, color:"white",fontSize:20   }}>Badges Earned</Text>
				<Image style={{position:"absolute" ,bottom:15,right:35, width: 15, height:20,resizeMode: 'stretch' }} source={require('../imgs/rightarrow.png')} />
		  </TouchableOpacity>

			<View style={{width:"100%",height:"15%",borderBottomWidth:1,borderColor:"grey",alignItems:"center",flexDirection:"row" }}>
				<View style={{width:"80%",height:"100%"  }}>
 					<Text style={{  color:"white",fontSize:20 ,marginTop:15 }}>Data Participation</Text>
 					<Text style={{  color:"white",fontSize:10 ,marginTop:5 }}>allow Data storage to help improve this app</Text>
				</View>
				<Switch
			 trackColor={{ false: "#767577", true: "#81b0ff" }}
			 thumbColor="#f5dd4b"
			 ios_backgroundColor="#3e3e3e"
			 onValueChange={this.toggleSwitch}
			 value={this.state.isEnabled}
		 />
			</View>




						</View>

		 </View>
		);
	}
}










 class  SettingsPrivacyPolicy extends React.Component {
	  constructor(props ) {
    super(props);
  }
  render() {



    return (
			<View style={styles.container}>
		 </View>
		);
	}
}

class  SettingsHelp extends React.Component {
	 constructor(props ) {
	 super(props);
 }
 render() {
	 return (
		 <View style={{ paddingTop: 60 }}>
		        <YoutubePlayer
		          loop
		          topBar={TopBar}
		          videoId="LXb3EKWsInQ"
		          autoPlay
		          onFullScreen={this.onFullScreen}
		          onStart={() => console.log("onStart")}
		          onEnd={() => console.log("onend")}
		        />

		        <View>
		          <Text>
		            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
		            aspernatur rerum, deserunt cumque ipsam unde nam voluptatum tenetur
		            cupiditate veritatis autem quidem ad repudiandae sapiente odit
		            voluptates fugit placeat ut!
		          </Text>
							<Text>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
								aspernatur rerum, deserunt cumque ipsam unde nam voluptatum tenetur
								cupiditate veritatis autem quidem ad repudiandae sapiente odit
								voluptates fugit placeat ut!
							</Text>
		        </View>
		      </View>
	 );
 }
}
const TopBar = ({ play, fullScreen }) => (
  <View
    style={{
      alignSelf: "center",
      position: "absolute",
      top: 0
    }}
  >
    <Text style={{ color: "#FFF" }}> Pcos Buddy Help</Text>
  </View>
);





  class SettingsAbout extends Component {

   constructor(props) {
     super(props);
   }

   onClickListener = (viewId) => {
     Alert.alert("Alert", "Button pressed ");
   }

   render() {
     return (
       <ScrollView style={styles.scrollContainer}>
         <View style={styles.containere}>
           <Image style={styles.logo} source={{uri: 'https://img.icons8.com/cute-clipart/64/000000/facebook-like.png'}}/>
           <Text style={styles.companyName}>Empowered Earth</Text>
           <Text style={styles.slogan}>We create awesome apps!</Text>
           <View style={styles.descriptionContent}>
             <Text style={styles.description}>
               Lorem ipsum dolor sit amet, altera conceptam ei cum. Hinc temporibus repudiandae eu mel, cum impetus legendos ei.
               Fugit everti dissentias duo cu, nihil fabellas id pri, nonumy verear ea pri. Sit et nisl eros. Ad sapientem forensibus est,
               ne vis sonet iuvaret, his sint fabulas dolores ad. Repudiare gubergren voluptatum ius ne, nec nostro possim nostrud ad,
             </Text>
           </View>

         </View>
       </ScrollView>
     );
   }
 }









class  SettingsFeedback extends React.Component {
	 constructor(props ) {
	 super(props);
 }
 render() {
	 return (
		 <View style={styles.container}>
		</View>
	 );
 }
}

class  SettingsGoal extends React.Component {
	 constructor(props ) {
	 super(props);
 }
 render() {
	 return (
		 <View style={styles.container}>
		</View>
	 );
 }
}










export default class Account extends Component {
	constructor(props) {
		super(props);

	}


	submitChatMessage() {

		// this.setState({ chatMessage: "aaa" });
	}




	render() {


		return (
		<View style={styles.container}>
		<Stack.Navigator  screenOptions={{
			headerShown: false
			}}
style={{backgroundColor: "rgb(0,77,95)"}}
			>
			<Stack.Screen name="settings" component={Defaultpage} />
			<Stack.Screen name="settingsAccount" component={SettingsAccount} />
			<Stack.Screen name="settingsGoal" component={SettingsGoal} />
			<Stack.Screen name="settingsHelp" component={SettingsHelp} />
			<Stack.Screen name="settingsAbout" component={SettingsAbout} />
			<Stack.Screen name="settingsFeedback" component={SettingsFeedback} />
			<Stack.Screen name="SettingsPrivacyPolicy" component={SettingsPrivacyPolicy} />

		</Stack.Navigator>

	  </View>
	);
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgb(145,145,145)"
	},
	scrollContainer:{
		flex: 1,
	  height:"100%",
	},
	containere: {
		height:"100%",
		flex: 1,
		alignItems: 'center',
		backgroundColor: "rgb(0,77,95)"
	},
	logo:{
		width:100,
		height:100,
		justifyContent: 'center',
		marginBottom:10,
		marginTop:30,
	},
	companyName: {
		fontSize:32,
		fontWeight: '600',
		color: '#FFFFFF',
	},
	slogan:{
		fontSize:18,
		fontWeight: '600',
		color: '#228B22',
		marginTop:10,
	},
	descriptionContent:{
		padding:30
	},
	description:{
		fontSize:18,
		textAlign:'center',
		marginTop:10,
		color: '#FFFFFF',
	},
	buttonContainer: {
		height:45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom:20,
		width:100,
		borderRadius:30,
	},
	sendButton: {
		backgroundColor: "#FFFFFF",
	},
	buttonText: {
		color: '#EE82EE',
	}
});
