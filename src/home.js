/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';





export default class  Home extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    return (

      <SafeAreaView style={styles.container}>

          <Image style={{ backgroundColor: '#ccc', flex: 1, position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', }} source={require( '../imgs/waterfall.gif')} />
          <ScrollView  >






              <View style={{  marginTop:"170%" }}>

                  <Text  style={styles.text}>Daily journies </Text>

                  <ScrollView horizontal={true}>
                      <TouchableOpacity style={styles.button}


                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/sunset.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button}
                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/brightDay.jpg')} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}
                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/darkClouds.jpg')} />
                      </TouchableOpacity>


                  </ScrollView>
              </View>




              <View>
                  <Text style={styles.text}>Relax in nature </Text>
                  <ScrollView horizontal={true}>
                      <TouchableOpacity style={styles.buttonwide}
                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/fields.jpg')} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonwide}
                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/fields.jpg')} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonwide}
                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/fields.jpg')} />
                      </TouchableOpacity>
                  </ScrollView>

              </View>


              <View  >
                  <Text style={styles.text}>Stress relief </Text>
                  <ScrollView horizontal={true}>
                      <TouchableOpacity style={styles.button}


                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/fields.jpg')} />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button}
                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/forest.jpg')} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}
                      // onPress={onPress}
                      >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/fields.jpg')} />
                      </TouchableOpacity>


                  </ScrollView>
              </View>



          </ScrollView>
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
  width:180,
  height:220,
  backgroundColor:"red",
   flexDirection: 'row',
  justifyContent: "center",
    borderRadius:30,
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
