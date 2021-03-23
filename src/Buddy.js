/** @format */
import React, { Component } from 'react';
import {  Image,  TextInput, Picker, PixelRatio, Modal,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


const
{
    width,
    height
} = Dimensions.get('window');
//Import basic react native components
 const now = new Date()
import SyncStorage from 'sync-storage';




export default class  Buddy extends  Component {
  state = {
    //We will store selected item in this
    selectedItems: [],
    name:"",
    isVisible: false,
    isVisible2: false,
    password:"",
    username:"",
    dateofbirth:new Date(),
    gpPractice:"",
    docrotname:"",
    medications:[],
    selectedItems : []
  };


  constructor(props ) {
    super(props);

  }






  submitandsave = event => {


    SyncStorage.set('medications' ,this.state.selectedItems);
    SyncStorage.set('name' ,this.state.name);
    SyncStorage.set('username' ,this.state.username);
    SyncStorage.set('dateofbiirth' ,this.state.dateofbiirth);
    SyncStorage.set('docrotname' ,this.state.docrotname);
    SyncStorage.set('gpPractice' ,this.state.gpPractice);

    console.log(this.state.name);











  };



  render() {


        var submitbuddy = () => {
          this.props.submitbuddy();
        }



    return (

      <View style={{ flex: 1 }}>
      <Image style={{position:"absolute" ,  width: '100%', height: height,resizeMode: 'stretch' }} source={require('../imgs/revision3/2.jpg')} />

      <View style={ styles.container}>
        <TouchableOpacity style={{ height:50, width:"100%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "2%"}}  onPress={() => submitbuddy()} >
        <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Submit </Text>
        </TouchableOpacity>
      </View>







      <View style = {styles.modal2}>

<Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"black",marginTop:height*0.1}}>Add Buddies</Text>




      <TextInput
value={this.state.email}
onChangeText={password => this.setState({ password })}
placeholder={"Buddy 1"}
style={{textAlign: 'center' ,  marginLeft:"20%",   width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
/>
<TextInput
value={this.state.email}
onChangeText={password => this.setState({ password })}
placeholder={"Buddy 2"}
style={{textAlign: 'center' ,  marginLeft:"20%",   width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
/>
<TextInput
value={this.state.email}
onChangeText={password => this.setState({ password })}
placeholder={"Buddy 3"}
style={{textAlign: 'center' ,marginLeft:"20%",     width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
/>
<TextInput
value={this.state.email}
onChangeText={password => this.setState({ password })}
placeholder={"Buddy 4"}
style={{textAlign: 'center' ,  marginLeft:"20%",   width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
/>

<TextInput
value={this.state.email}
onChangeText={password => this.setState({ password })}
placeholder={"Buddy 5"}
style={{textAlign: 'center' ,  marginLeft:"20%",   width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
/>


<Text style={{ textAlign: 'center',fontSize: 20,width:"100%", height:50 ,color:"black",marginTop:"10%" }}>Add Via Invite code</Text>




<TextInput
value={this.state.email}
onChangeText={password => this.setState({ password })}
placeholder={"Invite code"}
style={{textAlign: 'center' ,marginLeft:"20%",    width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"0%" }}
/>

<Text style={{ textAlign: 'center',fontSize: 14 ,width:"95%",    width: '80%',marginLeft:"12%",marginTop:"1%",  color:"black"}}>Buddies with the PCOS Buddy app can give you an invite code to add them as your Buddy</Text>




      </View>








      </View>


    );
  }
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: 'grey'
  },   container: {
     position:"absolute" ,
     top:height*0.88,
     left:"25%",
     backgroundColor: "rgb(25,89,127)",
     width: '50%',
     height: 50,
     borderRadius:40,

     },
  inactiveDot: {
    backgroundColor: '#ededed'
  },
  activeStep: {
    backgroundColor: 'grey'
  },
  inactiveStep: {
    backgroundColor: '#ededed'
  },
  modal2: {


   height: height*0.8 ,
   width: '80%',

   marginTop: '10%',
   marginLeft: '10%',

    },
  activeStepTitle: {
    fontWeight: 'bold'
  },
  inactiveStepTitle: {
    fontWeight: 'normal'
  },
  activeStepNumber: {
    color: 'white'
  },
  inactiveStepNumber: {
    color: 'black'
  }
})
