/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import SyncStorage from 'sync-storage';
import LinearGradient from 'react-native-linear-gradient';



export default class  Food extends React.Component {






  constructor(props ) {
    const result = SyncStorage.get('name' );
    super(props);
    this.state={
      username:result
    }
  }
  render() {
    return (

      <SafeAreaView style={styles.container}>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: '10%' }} source={require('../imgs/header.jpg')} />



      <View style={{  marginTop:0, width:"100%",height:"13%",backgroundColor:"rgb(102,183,202)",alignItems: 'center',justifyContent: 'center',   }}>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: '100%' }} source={require('../imgs/header.jpg')} />


      <View style={{     backgroundColor:"white" , borderRadius:25,overflow:"hidden"}}>
      <Image style={{  width: 50, height: 50 }} source={require('../imgs/drdasyicon.jpg')} />

      </View>
      <Text  style={{   fontSize: 15,backgroundColor:"rgb(102,183,202)"}}>{this.state.username}</Text>
      </View>

      <View style={{ justifyContent: "center",alignItems:"center",   marginTop:0, width:"100%",height:"5%",backgroundColor:"rgb(25,89,127)"}}>
      <Text  style={{color:"white",   fontSize: 25 }}>Dashboard</Text>

      </View>



      <View style={{  marginTop:0, width:"100%",height:"88%",backgroundColor:"rgb(102,183,202)"  }}>

      <View style={{  marginTop:"8%",marginLeft:"7%", width:"88%",height:"83%",backgroundColor:"rgb(25,89,127)" , borderRadius:30, overflow : "hidden",}}>

      <View style={{ marginLeft:"5%", marginTop:"5%",  width:"90%",height:"90%",backgroundColor:"white", borderTopRightRadius:30, borderTopLeftRadius:30 }}>


      <View style={{  flexDirection: 'row'   , marginLeft:"5%", marginTop:"5%",  width:"90%",height:"18%" }}>
      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('energy')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/energy.png')}  />
      </TouchableOpacity>


      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('Excer')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/exl.png')}  />
      </TouchableOpacity>

      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('mental')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/mentalhealth.png')}  />
      </TouchableOpacity>
      </View>


      <View style={{  flexDirection: 'row'   , marginLeft:"5%", marginTop:"5%",  width:"90%",height:"18%" }}>
      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('symptom')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/symptom.png')} />
      </TouchableOpacity>


      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('ovu')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/ovu.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('skin')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/skin.png')} />
      </TouchableOpacity>
      </View>


      <View style={{  flexDirection: 'row'   , marginLeft:"5%", marginTop:"5%",  width:"90%",height:"18%" }}>
      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('sleep')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/sleep.png')} />
      </TouchableOpacity>


      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('food')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/nut.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('water')} >
      <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/water.png')} />
      </TouchableOpacity>
      </View>

      <View style={{  flexDirection: 'row'   , marginLeft:"5%", marginTop:"5%",  width:"90%",height:"18%" }}>
      <TouchableOpacity style={{width: '33%', height: '100%'}} onPress={() =>  this.props.navigation.navigate('bmi')} >
      <Image style={{  width: '92%', height: '100%',marginLeft:"3%" }} source={require('../imgs/bmi.jpg')}  />
      </TouchableOpacity>
      <TouchableOpacity style={{  width: '33%', height: '100%'  }} onPress={() =>  this.props.navigation.navigate('medselect')} >
      <Image style={{  width: '92%', height: '100%' ,marginLeft:"3%"}} source={require('../imgs/med.jpg')}  />
      </TouchableOpacity>
      <TouchableOpacity style={{  width: '33%', height: '100%'  }} onPress={() =>  this.props.navigation.navigate('jornal')} >
      <Image style={{  width: '92%', height: '100%' ,marginLeft:"3%"}} source={require('../imgs/jornal.jpg')} />
      </TouchableOpacity>
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
