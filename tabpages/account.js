
import React, { Component } from "react";
import { TextInput,TouchableOpacity, StyleSheet, Text, View,ScrollView,FlatList,Image } from "react-native";


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
		<View style={{width:"94%",marginLeft:"3%"}}>
			<View style={{width:"100%",height:"27%",borderBottomWidth:1,borderColor:"grey" }}>
				<Text style={{ position:"absolute",bottom:15,left:35,fontSize:40, color:"white" }}>Settings</Text>
		  </View>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:1,borderColor:"grey",flexDirection:"row" }}>
				<Text style={{  position:"absolute",bottom:15,left:35, color:"white",fontSize:20 }}>account</Text>
				<Image style={{position:"absolute" ,bottom:15,right:35, width: 40, height:40,resizeMode: 'stretch' }} source={require('../imgs/9.jpg')} />

		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%",borderBottomWidth:1,borderColor:"grey"  }}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20   }}>Goals</Text>
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:1,borderColor:"grey" }}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20   }}>Help</Text>
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:1,borderColor:"grey" }}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20   }}>about</Text>
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%",borderBottomWidth:1,borderColor:"grey"  }}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20   }}>Feedback</Text>
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:1,borderColor:"grey" }}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20  }}>Privacy Policy</Text>
		  </TouchableOpacity>
			<TouchableOpacity style={{width:"100%",height:"10%" ,borderBottomWidth:0,borderColor:"grey" }}>
				<Text style={{ position:"absolute",bottom:15,left:35, color:"white",fontSize:20  }}>Rate and review</Text>
		  </TouchableOpacity>

	  </View>
	  </View>
	);
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgb(0,77,95)"
	}
});
