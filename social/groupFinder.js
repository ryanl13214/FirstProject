/** @format */
import React from 'react';
import {  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TextInput, TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
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
    var add2 = (a) => {
  }
		return (

			<SafeAreaView style={styles.container}>
			<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: width, height: height,resizeMode: 'stretch',top:0 }} source={require('../imgs/revision3/socialfind.jpg')} />






{/* first row*/}
 <TouchableOpacity style={{position:"absolute"  ,top:height*0.3    ,left:width*0.030 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
 <Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />
  <Text style={{position:"absolute",bottom:0,    fontSize: 28,color:"white"   ,width: width*0.30, textAlign: 'center',justifyContent: "center",alignItems:"center" }}>TEST</Text>
 </TouchableOpacity>

{/*
 <TouchableOpacity style={{position:"absolute"  ,top:height*0.3    ,left:width*0.3450  ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
 <Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

 </TouchableOpacity>


 <TouchableOpacity style={{position:"absolute"  ,top:height*0.3    ,left:width*0.660 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
 <Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

 </TouchableOpacity>

<TouchableOpacity style={{position:"absolute"  ,top:height*0.535    ,left:width*0.030 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>


<TouchableOpacity style={{position:"absolute"  ,top:height*0.535    ,left:width*0.3450  ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>


<TouchableOpacity style={{position:"absolute"  ,top:height*0.535    ,left:width*0.660 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>



<TouchableOpacity style={{position:"absolute"  ,top:height*0.77    ,left:width*0.030 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>


<TouchableOpacity style={{position:"absolute"  ,top:height*0.77    ,left:width*0.3450  ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>


<TouchableOpacity style={{position:"absolute"  ,top:height*0.77    ,left:width*0.660 ,     width:width*0.20, height:  height*0.2   }}  onPress={() =>  this.props.navigation.navigate('GroupFinder')} >
<Image style={{ width:width*0.30, height:  height*0.22,    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/back.png')} />

</TouchableOpacity>

*/}



<TextInput
  value={this.state.searchinput}
  onChangeText={searchinput => add2(searchinput) }
  placeholder={'Search'}
  style={styles.input}
/>


<TouchableOpacity style={{position:"absolute"  ,top:(height*0.84)-70   ,left:0 ,     width:width*0.27, height:  height*0.16   }}  onPress={() =>  this.props.navigation.navigate('SocialMain')} >
  <Image style={{ width: "100%", height:  "100%",    resizeMode:"stretch",borderTopRightRadius:60}} source={require('../imgs/revision3/chatselector.jpg')} />
</TouchableOpacity>

{/* bascl nutton*/}
<TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
  <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
</TouchableOpacity>
			</SafeAreaView>




		);
	}
}

const styles = StyleSheet.create({



  input: {
    width: "60%",
    height: 45,
marginTop: "38.5%",
marginLeft: "20%",
borderRadius:92,
    backgroundColor: 'white',
    borderWidth:2,
    borderColor:"darkblue"
  },



});
