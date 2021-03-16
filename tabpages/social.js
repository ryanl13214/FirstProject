
import React, { Component } from "react";
import { TextInput,  TouchableOpacity, StyleSheet, Text, View,ScrollView,FlatList,Image } from "react-native";

import { Dimensions } from 'react-native';

const
{
    width,
    height
} = Dimensions.get('window');



export default class Social extends Component {
	constructor(props) {
		super(props);
		this.state = {
 	};
	}




	render() {


		return (
			<View style={styles.container}>
			<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",top:0,left:0,  width: '100%', resizeMode: 'stretch', height: '100%' }} source={require('../imgs/revision3/socialback.jpg')} />




			   <TouchableOpacity style={{position:"absolute"  ,top:height*0.5  ,left:width *0.4 ,     width:width*0.20, height:  height*0.14 ,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('SocialMain')} >
			<Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/chat.jpg')} />

			   </TouchableOpacity>






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
