/** @format */
import React from 'react';
import {  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
import { Dimensions } from 'react-native';

const
{
    width,
    height
} = Dimensions.get('window');




export default class   Recipie extends React.Component {




	constructor(props ) {









		super(props);
		this.state = {

		};
	}


	getLeftDidYouKnow(){
	  if(this.state.showDidYouKnow)
	  {
	    return 5;
	  }
	  else
	  {
	    return 99999;
	  }
	}
	showDidYouKnow() {
	  this.setState({
	      showDidYouKnow: !this.state.showDidYouKnow,
	  });

	}









	render() {

		return (

			<SafeAreaView style={styles.container}>
			<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: height,resizeMode: 'stretch',top:0 }} source={require('../imgs/3.jpg')} />



			</SafeAreaView>




		);
	}
}

const styles = StyleSheet.create({





});
