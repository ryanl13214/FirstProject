/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';


import { Dimensions } from 'react-native'


export default class  Food extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    const screenHeight = Dimensions.get('window').height;
    const seven = Dimensions.get('window').height *0.30;
    return (

 <View style={{height: screenHeight}}>

  <ScrollView vertical={true}  >

          <View style={{ flex: 1,marginTop: "20%" ,height: "70%"}}>

              <View  >
                  <View style={{ marginLeft: "10%" }}>
                      <Text style={styles.text}>Daily journies </Text>
                  </View>
                  <View style={styles.button} onPress={()=> this.props.navigation.navigate('food')}>
                      <View style={{ width: "100%",height: "100%", flexDirection: 'column'}}>
                          <View style={{ width: "100%",height: "40%" , justifyContent: 'center',alignItems: 'center', flexDirection: 'column', backgroundColor: "rgb(57, 192, 175)" , borderRadius:30,}}>
                              <Text style={{ fontSize: 30 , textAlign: 'center' ,color: "white" }}>breakfast</Text>
                          </View>

                          <ScrollView horizontal={true}>
                              <Image style={{ height:50, width:50 , flexDirection: 'column' ,marginTop: "10%"}} source={require( '../imgs/add.png')} />
                              <Text style={{ fontSize: 30, width:180, height:30, marginLeft:9, borderRadius:15 ,marginTop: "12%" ,marginLeft:30 }}>add food item </Text>
                          </ScrollView>

                      </View>
                  </View>

                  <View style={styles.button} onPress={()=> this.props.navigation.navigate('food')}>
                      <View style={{ width: "100%",height: "100%", flexDirection: 'column'}}>

                          <View style={{ width: "100%",height: "40%" , justifyContent: 'center',alignItems: 'center', flexDirection: 'column', backgroundColor: "rgb(57, 192, 175)" , borderRadius:30,}}>
                              <Text style={{ fontSize: 30 , textAlign: 'center' ,color: "white" }}>lunch</Text>
                          </View>

                          <ScrollView horizontal={true}>
                              <Image style={{ height:50, width:50 , flexDirection: 'column' ,marginTop: "10%"}} source={require( '../imgs/add.png')} />
                              <Text style={{ fontSize: 30, width:180, height:30, marginLeft:9, borderRadius:15 ,marginTop: "12%" ,marginLeft:30 }}>add food item </Text>
                          </ScrollView>

                      </View>
                  </View>

                  <View style={styles.button} onPress={()=> this.props.navigation.navigate('food')}>
                      <View style={{ width: "100%",height: "100%", flexDirection: 'column'}}>

                          <View style={{ width: "100%",height: "40%" , justifyContent: 'center',alignItems: 'center', flexDirection: 'column', backgroundColor: "rgb(57, 192, 175)" , borderRadius:30,}}>
                              <Text style={{ fontSize: 30 , textAlign: 'center' ,color: "white" }}>Dinner</Text>
                          </View>

                          <ScrollView horizontal={true}>
                              <Image style={{ height:50, width:50 , flexDirection: 'column' ,marginTop: "10%"}} source={require( '../imgs/add.png')} />
                              <Text style={{ fontSize: 30, width:180, height:30, marginLeft:9, borderRadius:15 ,marginTop: "12%" ,marginLeft:30 }}>add food item </Text>
                          </ScrollView>

                      </View>
                  </View>



              </View>
          </View>


          <View style={{flex: 1, width: "80%",height: seven, flexDirection: 'column',backgroundColor:"green"  ,marginLeft:"10%",marginTop:"20%", borderRadius: 15}}>

              <View style={{ width: "100%",height: "33%"  , flexDirection: 'column' ,  borderColor:  'black', borderWidth:  1, borderTopRightRadius: 15,  borderTopLeftRadius: 15,}}>

<Text>Calories: 1888/300</Text>

              </View>

              <View style={{ width: "100%",height: "23%"  , flexDirection: 'row'  ,  borderColor:  'black', borderWidth:  1, borderRadiusTopLeft:15,  flexDirection: 'row'}}>
                  <View style={{ width: "50%",height: "100%"   }}>

                  </View>

                  <View style={{ width: "50%",height: "100%"  ,    borderColor:  'black', borderLeftWidth:  1 }}>

                  </View>
              </View>

              <View style={{ width: "100%",height: "23%"  , flexDirection: 'row' ,  borderColor:  'black', borderWidth:  1, borderRadiusTopLeft:15,}}>
                  <View style={{ width: "50%",height: "100%"   }}>

                  </View>

                  <View style={{ width: "50%",height: "100%"  ,    borderColor:  'black', borderLeftWidth:  1 }}>

                  </View>
              </View>

              <View style={{ width: "100%",height: "21%"  , flexDirection: 'row'  ,  borderColor:  'black', borderWidth:  1,  borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                  <View style={{ width: "50%",height: "100%"   }}>

                  </View>

                  <View style={{ width: "50%",height: "100%"  ,    borderColor:  'black', borderLeftWidth:  1 }}>

                  </View>
              </View>

          </View>






          <View style={{flex: 1, width: "80%",height: seven, flexDirection: 'column',backgroundColor:"green"  ,marginLeft:"10%",marginTop:"20%" }}>



          </View>







        <View style={{flex: 1, width: "80%",height: seven, flexDirection: 'column'}}>
        </View>

















  </ScrollView>

  </View>


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



button: {
  flex: 1,
  margin:10,
  width:"80%",
  marginLeft:"10%",
  height:160,

  flexDirection: 'row',
  justifyContent: "center",
borderBottomColor:  'lightgrey',
  borderBottomWidth:  2,
  overflow: 'hidden'
},








});
