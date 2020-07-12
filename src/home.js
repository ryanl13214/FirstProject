/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';



export default class  Food extends React.Component {






  constructor(props ) {
    super(props);
  }
  render() {
    return (

      <SafeAreaView style={styles.container}>


            <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: '100%' }} source={require('../imgs/5.jpg')} />


            <View style={{  marginTop:0, width:"100%",height:"17%",backgroundColor:"rgb(102,183,202)",alignItems: 'center',justifyContent: 'center',   }}>
                <View style={{     backgroundColor:"white" , borderRadius:25,overflow:"hidden"}}>
                  <Image style={{  width: 50, height: 50 }} source={require('../imgs/cal.png')} />

                </View>
                <Text  style={{   fontSize: 15,backgroundColor:"rgb(102,183,202)"}}>Username</Text>
            </View>

            <View style={{ justifyContent: "center",alignItems:"center",   marginTop:0, width:"100%",height:"5%",backgroundColor:"rgb(25,89,127)"}}>
              <Text  style={{color:"white",   fontSize: 25 }}>Dashboard</Text>

            </View>



            <View style={{  marginTop:0, width:"100%",height:"78%",backgroundColor:"rgb(102,183,202)"  }}>

                <View style={{  marginTop:"8%",marginLeft:"7%", width:"88%",height:"85%",backgroundColor:"rgb(25,89,127)" , borderRadius:30, overflow : "hidden",}}>

                    <View style={{ marginLeft:"5%", marginTop:"5%",  width:"90%",height:"60%",backgroundColor:"white", borderTopRightRadius:30, borderTopLeftRadius:30 }}>


                            <View style={{  flexDirection: 'row'   , marginLeft:"5%", marginTop:"5%",  width:"90%",height:"25%" }}>



                            <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('energy')} >
                      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/energy.png')}  />

                            </TouchableOpacity>










                                <Image style={{  width: '33%', height: '100%' }} source={require('../imgs/ex.png')} />
                                <Image style={{  width: '33%', height: '100%' }} source={require('../imgs/mentalhealth.png')} />
                            </View>


                            <View style={{  flexDirection: 'row'   , marginLeft:"5%", marginTop:"5%",  width:"90%",height:"25%" }}>
                                <Image style={{  width: '33%', height: '100%' }} source={require('../imgs/symptom.png')} />
                                <Image style={{  width: '33%', height: '100%' }} source={require('../imgs/ovu.png')} />
                                <Image style={{  width: '33%', height: '100%' }} source={require('../imgs/skin.png')} />
                            </View>


                            <View style={{  flexDirection: 'row'   , marginLeft:"5%", marginTop:"5%",  width:"90%",height:"25%"  }}>
                                <Image style={{  width: '33%', height: '100%' }} source={require('../imgs/sleep.png')} />
                                <Image style={{  width: '33%', height: '100%' }} source={require('../imgs/nut.png')} />


                                <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('water')} >
                                  <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/water.png')} />

                                </TouchableOpacity>




                            </View>

                    </View>
                    <View style={{  marginTop:"30%",  width:"100%",height:"15%",backgroundColor:"rgb(240,184,89)" , borderRadius:50}}>
                        <View style={{ justifyContent: "center",alignItems:"center",marginLeft:"7%",  marginTop:-90,  width:150,height:150 ,backgroundColor:"rgb(240,184,89)" , borderRadius:75}}>
                          <Image style={{   width:100,height:100 }} source={require('../imgs/drdaisy.png')} />
                        </View>
                    </View>

                </View>

            </View>










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
justifyContent: "flex-start"
},
item: {
  flex: 1,
 height:100,
  margin: 1
},
list: {
  flex: 1
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
