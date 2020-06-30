/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';





export default class  Food extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    return (


      <SafeAreaView style={styles.container}>
          <View style={{ marginTop: "-20%" ,height: "70%"}}>

              <ScrollView vertical={true}>
/* ===============================================================================================================================================*/
                  <View style={{ marginLeft: "10%" }}>
                      <Text style={styles.text}>Daily journies </Text>
                  </View>
/* ===============================================================================================================================================*/
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
/* ===============================================================================================================================================*/
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
/* ===============================================================================================================================================*/
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
/* ===============================================================================================================================================*/

          </ScrollView>
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
borderBottomColor:  'lightgrey',
  borderBottomWidth:  2,
  overflow: 'hidden'
},








});
