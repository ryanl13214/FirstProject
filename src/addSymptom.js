/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';


import exampleJson from '../data/food data.json'


export default class  Food extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    return (

      <SafeAreaView style={styles.container}>

      <View style={{  marginTop:"-20%" ,height:"70%"}}>

            <View style={{  marginLeft:"10%" }} >
                  <Text  style={styles.text}>Daily journies </Text>
            </View>

 


              <View style={styles.button}  onPress={() => this.props.navigation.navigate('food')}>
                  <View style={{ width:"100%",height:"100%",  flexDirection: 'column',  backgroundColor:"red" }}  >
                  <View style={{ width:"100%",height:"50%",  flexDirection: 'column',  backgroundColor:"green" }}  >
                  </View>
                  <Image style={{  width: '10%', height: '10%' ,  flexDirection: 'column'}} source={require('../imgs/sunset.jpg')} />
                  </View>
              </View>


              <View style={styles.button}  onPress={() => this.props.navigation.navigate('food')}>
                  <View style={{ width:"100%",height:"100%",  flexDirection: 'column',  backgroundColor:"red" }}  >
                  <View style={{ width:"100%",height:"50%",  flexDirection: 'column',  backgroundColor:"green" }}  >
                  </View>
                  <Image style={{  width: '10%', height: '10%' ,  flexDirection: 'column'}} source={require('../imgs/sunset.jpg')} />
                  </View>
              </View>


              <View style={styles.button}  onPress={() => this.props.navigation.navigate('food')}>
                  <View style={{ width:"100%",height:"100%",  flexDirection: 'column',  backgroundColor:"red" }}  >
                  <View style={{ width:"100%",height:"50%",  flexDirection: 'column',  backgroundColor:"green" }}  >
                  </View>
                  <Image style={{  width: '10%', height: '10%' ,  flexDirection: 'column'}} source={require('../imgs/sunset.jpg')} />
                  </View>
              </View>



      </View>



      </SafeAreaView>




    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width:180,
    height:30,
    marginLeft:9,
    borderRadius:15,
    textAlign: 'center',
    backgroundColor:"skyblue",
},
container: {
flex: 1,
alignItems: "flex-start",
justifyContent: "center"
},


button: {
  flex: 1,
  margin:10,
  width:"80%",
  marginLeft:"10%",
  height:220,

  flexDirection: 'row',
  justifyContent: "center",
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  borderBottomWidth:  10,
  overflow: 'hidden'
},


buttonwide: {
    flex: 1,
    margin:10,
      borderRadius:30,
    width:300,
    height:200,
    backgroundColor:"red",
     flexDirection: 'row',
    justifyContent: "center",
      overflow: 'hidden'
  },






});
