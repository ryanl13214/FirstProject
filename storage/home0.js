/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';



export default class  Test extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    return (

      <SafeAreaView style={styles.container}>



      <LinearGradient colors={['white', '#bfe6ff', '#59bfff' ]} style={styles.linearGradient}>

      </LinearGradient>





          <ScrollView  >






              <View style={{  marginTop:"100%" }}>
                  <Text  style={styles.text}>track your intake</Text>
                  <ScrollView horizontal={true}>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/sunset.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('storage')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/brightDay.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/darkClouds.jpg')} />
                      </TouchableOpacity>
                  </ScrollView>
              </View>


              <View  >
                  <Text  style={styles.text}>pcos symptoms</Text>
                  <ScrollView horizontal={true}>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/sunset.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/brightDay.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/darkClouds.jpg')} />
                      </TouchableOpacity>


                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                      </TouchableOpacity>


                  </ScrollView>
              </View>

              <View  >
                  <Text  style={styles.text}>feminine health</Text>
                      <TouchableOpacity style={styles.buttonWide} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/sunset.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.buttonWide} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/brightDay.jpg')} />
                      </TouchableOpacity>
              </View>



              <View  >
                  <Text  style={styles.text}>take care of your mental health</Text>
                  <ScrollView horizontal={true}>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/sunset.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/brightDay.jpg')} />
                      </TouchableOpacity>



                  </ScrollView>

                  <ScrollView horizontal={true}>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/sunset.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('food')} >
                          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/brightDay.jpg')} />
                      </TouchableOpacity>



                  </ScrollView>


              </View>







          </ScrollView>
      </SafeAreaView>




    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
 flex: 1, position: 'absolute', width: '100%', height: '100%', justifyContent: 'center'
},
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
  width:180,
  height:220,
  backgroundColor:"red",
   flexDirection: 'row',
  justifyContent: "center",
    borderRadius:30,
      overflow: 'hidden'
},


buttonWide: {
    flex: 1,
    margin:10,
    marginLeft:"5%",
      borderRadius:30,
    width:"90%",
    height:100,
    backgroundColor:"red",
     flexDirection: 'row',
    justifyContent: "center",
      overflow: 'hidden'
  },






});
