
import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View,ScrollView,FlatList,Image } from "react-native";


export default class Social extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatMessage: "",
			chatMessages: [{key:"rb",col:"r",ico:true},{key:"chatMessagesrb",col:"r",ico:true},{key:"cchatMessageschatMessageschatMessageschatMessage atMessageschatMessageshatMessagesb",col:"b",ico:true}]
		};
	}

	componentDidMount() {

		//      this.setState({ chatMessages: [...this.state.chatMessages, {key:"rb"}] });
		//this.props.navigation.setParams({tabBar:{visible:false}})
	}

	submitChatMessage() {

		// this.setState({ chatMessage: "aaa" });
	}
	getcolour(a) {
		if(a=="b"){ return "rgb(243,243,243)";}
		if(a=="r"){ return "rgb(14,168,205)";}

		return "green";
	}
	gettextcolour(a) {
		if(a=="b"){ return "rgb(11,11,11)";}
		if(a=="r"){ return "rgb(248,248,248)";}

		return "green";
	}
	getwidth(a) {
		console.log(a );
		console.log(a.length);
		return  (a.length*9) +30;



	}

	getflex(a) {

		if(a=="r"){ return 'flex-end';}
		if(a=="b"){ return 'flex-start';}


	}
	hideimg(a,i) {
		if(i==1){
			if(a=="r"){ return 40;}
			if(a=="b"){ return 0;}
		}
		if(i==0){
			if(a=="r"){ return 0;}
			if(a=="b"){ return 40;}
		}
	}



	render() {


		return (
			<View style={styles.container}>
			<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",top:0,left:0,  width: '100%', resizeMode: 'stretch', height: '100%' }} source={require('../imgs/revision3/socialback.jpg')} />




		</View>
	);
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgb(230,230,230)"
	}
});
