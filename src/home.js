/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';

const { width,height } = Dimensions.get('window');



export default class  Home extends React.Component {

  constructor(props ) {
    super(props);
var textSize;
if(height< 801){
textSize=16;
}else{
textSize=20;
}



    //  console.log(height);
    this.state = {
      username:"Guest",
      timegreenting:"Afternoon",
      textScale:textSize
    }
    var currenthour = new Date(new Date().setDate(new Date().getDate()+1)).toString().split(' ')[4].split(':')[0];
    if(currenthour <12 ){
      this.setState({timegreenting: "morning"});
    }if(currenthour >12 &&  currenthour <18){
      this.setState({timegreenting: "afternoon"});
    }else{
        this.setState({timegreenting: "evening"});
    }


  }



  render() {
    return (

      <SafeAreaView style={styles.container}>



      <LinearGradient colors={['white', '#bfe6ff', '#59bfff' ]} style={styles.linearGradient}>

      </LinearGradient>

      <LinearGradient colors={['rgb(240,240,240)', 'rgb(240,240,240)', 'rgb(240,240,240)' ]} style={styles.linearGradient}>

      </LinearGradient>
      <LinearGradient colors={['rgb(240,240,240)', 'rgb(240,240,240)', 'rgb(240,240,240)' ]} style={styles.linearGradient}>

      </LinearGradient>


      <ScrollView  >



      <View style={{ marginLeft:"4%", marginTop:"10%",flexDirection:"row" }} >
      <TouchableOpacity style={{width:55,height:55}} >
      <Image style={{  width: '100%', height: '100%', borderRadius:27 }} source={require('../imgs/Icons/placeholdericonhomepage.png')} />
      </TouchableOpacity>
      <View style={{   }} >
      <Text  style={{ fontSize:20,color:"grey",marginLeft:5}}>Good {this.state.timegreenting}</Text>
      <Text  style={{  marginLeft:7}}>{this.state.username}</Text>
      </View>
      </View>

      <TouchableOpacity style={{position:"absolute",Alignitems:"center",justifyContent:"center",textAlign:"center",width:75,height:45,top:height * 0.07 , right:15,backgroundColor:"rgb(210,210,210)",borderRadius:8}}    >
    <Text  style={{color:"white",Alignitems:"center",justifyContent:"center",textAlign:"center" }}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginLeft:"5%", marginTop:"10%",flexDirection:"row" ,backgroundColor:"white",width: width*0.9,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.12  ,minHeight:100}}  onPress={() =>  this.props.navigation.navigate('goals')}>


          <View style={{  marginLeft:"5%",  width: '65%' }} >
              <Text  style={{fontSize:12,color:"grey"}}>Your Daily Challenges</Text>
              <Text  style={{fontSize:this.state.textScale,color:"black"}}>Discover a Healthier You</Text>
              <Text  style={{position:"absolute",bottom:10,fontSize:20,color:"blue"}}>Get Started></Text>
          </View>

          <Image style={{  width: '30%', height: '100%', borderRadius:27 }} source={require('../imgs/targetgif.gif')} />
      </TouchableOpacity>

      <Text  style={{fontSize:20,color:"black", marginTop:"10%", marginLeft:"10%"}}>How Can I Help You Today?</Text>

      <TouchableOpacity style={{ marginLeft:"5%", marginTop:"6%" ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   ,backgroundColor:"rgb(115,198,214)",width: width*0.9,  borderRadius:15,  borderBottomRightRadius:5 , height: height*0.10 ,minHeight:95}} onPress={() => this.props.navigation.navigate('Chat')}>

          <Text  style={{marginTop:10,marginLeft:10,fontSize:this.state.textScale,color:"black"}}>Start A Conversation With Dr Daisy</Text>
          <Text  style={{marginTop:10,marginLeft:10,fontSize:15,color:"white",position:"absolute",bottom:10}}>e.g. How Does PCOS Cause Weight Gain?</Text>


      </TouchableOpacity>

      <View style={{  marginTop:"10%" }}>
        <Text  style={styles.text}>Track Your General Health</Text>
        <ScrollView  style={{ flexDirection:"row"}}  horizontal={true}>
          <View>
            <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15}}  onPress={() =>  this.props.navigation.navigate('water')} >
              <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/Icons/watericon.png')} />
            </TouchableOpacity>
            <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Hydrate</Text>
          </View>

        <View>
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15}}  onPress={() =>  this.props.navigation.navigate('Excer')} >
            <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/Icons/exicon.png')}  />
          </TouchableOpacity>
          <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Work out</Text>
        </View>

        <View>
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15}}  onPress={() =>  this.props.navigation.navigate('food')} >
            <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/Icons/nutrituionicon.png')} />
          </TouchableOpacity>

          <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Eat right</Text>
        </View>

        <View>
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15}}  onPress={() =>  this.props.navigation.navigate('sleep')} >
            <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/Icons/sleepicon.png')} />
          </TouchableOpacity>

          <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Sleep Right</Text>
        </View>


        <View  style={{width:width*0.08}} >

            </View>

        </ScrollView>
      </View>


      <Text  style={styles.text}>PCOS symptoms</Text>

      <View style={{flexDirection:"row"}}>

        <View  >
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:5,marginTop:15}} onPress={() =>  this.props.navigation.navigate('ovu')} >
          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/Icons/ovulationicon.png')} />
          </TouchableOpacity>
          <LinearGradient colors={['rgb(115,198,214)',   'rgb(115,198,214)' ]}   style={{width:width*0.3,marginLeft:5,borderRadius:15,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>
            <Text  style={{  fontSize:18, textAlign:"center",color:"black"}}>Ovulation</Text>
          </LinearGradient>
        </View>
        <View>
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:17,marginTop:15}} onPress={() =>  this.props.navigation.navigate('bmi')} >
          <Image style={{  width: '92%', height: '100%' }} source={require('../imgs/Icons/bmiicon.png')}  />
          </TouchableOpacity>
          <Text  style={{width:width*0.3,marginLeft:15,borderRadius:10,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Track BMI</Text>
        </View>
        <View>
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:12,marginTop:15}} onPress={() =>  this.props.navigation.navigate('energy')} >
          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/Icons/batteryicon.png')}  />
          </TouchableOpacity>
          <Text  style={{width:width*0.3,marginLeft:15,borderRadius:5,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Energize</Text>
        </View>
      </View>



      <View>
      <Text  style={styles.text}>Take care of your mental health</Text>
        <View style={{flexDirection:"row"}}>
        <View>
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:5,marginTop:15}} onPress={() =>  this.props.navigation.navigate('mental')} >
          <Image style={{  width: '100%', height: '100%' }} source={require('../imgs/Icons/moodicon.png')}  />
          </TouchableOpacity>
          <Text  style={{width:width*0.3,marginLeft:5,borderRadius:15,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Mood tracker</Text>
        </View>
        <View>
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15}} onPress={() =>  this.props.navigation.navigate('medselect')} >
          <Image style={{  width: '92%', height: '100%' ,marginLeft:"3%"}} source={require('../imgs/Icons/medicon.png')}  />
          </TouchableOpacity>
          <View     style={{width:width*0.3,marginLeft:15,borderRadius:15,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>
            <Text  style={{  fontSize:18, textAlign:"center",color:"black"}}>Meditate</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={{width:width*0.3, height:  width*0.2,marginLeft:15,marginTop:15}} onPress={() =>  this.props.navigation.navigate('jornal')} >
          <Image style={{  width: '92%', height: '100%' ,marginLeft:"3%"}} source={require('../imgs/Icons/jornalicon.png')} />
          </TouchableOpacity>
          <Text  style={{width:width*0.3,marginLeft:15,borderRadius:15,backgroundColor:"rgb(115,198,214)",height:26,fontSize:18,marginTop:3,marginBottom:5,textAlign:"center",color:"black"}}>Journal</Text>
        </View>
      </View>
      </View>


      <View  >
      <Text  style={styles.text}>Skin care</Text>
      <TouchableOpacity style={styles.buttonWide}      onPress={() =>  this.props.navigation.navigate('skin')} >

      <Image style={{  width: '65%', height: '100%',marginLeft:"2%"  }} source={require('../imgs/Icons/skinicon.png')} />

      </TouchableOpacity>



      </View>





            <TouchableOpacity style={{ marginLeft:"5%",flexDirection:"row", marginTop:"6%",minHeight:80 ,shadowColor: "#000",  shadowOffset: {  	width: 0, 	height: 4,  },   shadowOpacity: 0.32, shadowRadius: 5.46,  elevation: 9,  marginBottom:"16%"  ,backgroundColor:"rgb(200,200,200)",width: width*0.9,  borderRadius:15 , height: height*0.10}} onPress={() => this.props.navigation.navigate('trophy')}>
              <Text  style={{marginTop:10,marginLeft:10,fontSize:18,color:"black",width:"60%"}}>Trophy cabinet</Text>
                <Image style={{    width: width*0.20, height: width*0.30,resizeMode: 'stretch' }} source={require('../imgs/silvermedal.png')} />
                <Image style={{    width: width*0.20, height: width*0.30,resizeMode: 'stretch' }} source={require('../imgs/goldmedal.png')} />
            </TouchableOpacity>


      <TouchableOpacity style={{ marginLeft:"5%", marginTop:"6%",shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
minHeight:80,
shadowOpacity: 0.32,
shadowRadius: 5.46,
elevation: 9  ,
 marginBottom:"16%"  ,backgroundColor:"rgb(200,200,200)",width: width*0.9,  borderRadius:15 , height: height*0.10}} onPress={() => this.props.navigation.navigate('graphs')}>

      <Text  style={{marginTop:10,marginLeft:10,fontSize:18,color:"black"}}>View the History of your symptoms with the graph page</Text>

      </TouchableOpacity>



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
    marginTop:19,
    height:30,
    marginLeft:9,
    borderRadius:15,
    textAlign: 'center',

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
    marginLeft:"0%",
    borderRadius:30,
    width:"100%",
    height:width*0.4,

    flexDirection: 'row',
    justifyContent: "center",
    overflow: 'hidden'
  },






});
