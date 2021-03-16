/** @format */
import React from 'react';
import {  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
import { Dimensions } from 'react-native';

const
{
    width,
    height
} = Dimensions.get('window');




export default class  GroupFinder extends React.Component {


	constructor(props ) {

		super(props);
		this.state = {

		};
	}



	render() {

		return (

			<SafeAreaView style={styles.container}>
			<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: width, height: height,resizeMode: 'stretch',top:0 }} source={require('../imgs/revision3/socialfind.jpg')} />






{/* first row*/}
 <TouchableOpacity style={{position:"absolute"  ,top:height*0.3    ,left:width*0.030 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
 <Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

 </TouchableOpacity>


 <TouchableOpacity style={{position:"absolute"  ,top:height*0.3    ,left:width*0.3450  ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
 <Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

 </TouchableOpacity>


 <TouchableOpacity style={{position:"absolute"  ,top:height*0.3    ,left:width*0.660 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
 <Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

 </TouchableOpacity>


{/* second row*/}
<TouchableOpacity style={{position:"absolute"  ,top:height*0.535    ,left:width*0.030 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>


<TouchableOpacity style={{position:"absolute"  ,top:height*0.535    ,left:width*0.3450  ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>


<TouchableOpacity style={{position:"absolute"  ,top:height*0.535    ,left:width*0.660 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>



{/* 3rd row*/}
<TouchableOpacity style={{position:"absolute"  ,top:height*0.77    ,left:width*0.030 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>


<TouchableOpacity style={{position:"absolute"  ,top:height*0.77    ,left:width*0.3450  ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>


<TouchableOpacity style={{position:"absolute"  ,top:height*0.77    ,left:width*0.660 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>








<TouchableOpacity style={{position:"absolute"  ,top:height*0.685   ,left:0 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('SocialMain')} >
  <Image style={{ width:width*0.40, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/chatselector.jpg')} />
</TouchableOpacity>


			</SafeAreaView>




		);
	}
}

const styles = StyleSheet.create({







});
