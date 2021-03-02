/** @format */
import React from 'react';
import {  Image,  TextInput, Picker, PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DatePicker from 'react-native-datepicker'

const
{
    width,
    height
} = Dimensions.get('window');
//Import basic react native components
import MultiSelect from 'react-native-multiple-select';
const wheelPickerData = ["1 day", '2 days', '3 days', '4 days', '5 days', '6 days','7 days','8 days','9 days','10 days','11 days','12 days','13 days','14 days','15 days','16 days','17 days',"18 days","19 days","20 days"];
const wheelPickerData2 = ["1 week", '2 weeks', '3 weeks', '4 weeks', '5 weeks', '6 weeks','7 weeks','8 weeks','9 weeks','10 weeks','11 weeks','12 weeks','13 weeks','14 weeks','15 weeks','16 weeks','17 weeks',"18 weeks","19 weeks","20 weeks"];
const now = new Date()
import SyncStorage from 'sync-storage';

import { WheelPicker } from '@delightfulstudio/react-native-wheel-picker-android';

type Props = {}

const items = [
  { id: '1', name: 'America' },
  { id: '2', name: 'Argentina' },
  { id: '3', name: 'Armenia' },
  { id: '4', name: 'Australia' },
  { id: '5', name: 'Austria' },
  { id: '6', name: 'Azerbaijan' },
  { id: '7', name: 'Argentina' },
  { id: '8', name: 'Belarus' },
  { id: '9', name: 'Belgium' },
  { id: '10', name: 'Brazil' },
];
const buttonTextStyle = {
  color: '#reds'
};



export default class  Register extends React.Component {
  state = {
    //We will store selected item in this
    selectedItems: [],
    name:"",
    password:"",
    username:"",
    dateofbiirth:"",
    gpPractice:"",
    docrotname:"",
    medications:[]

  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    //Set Selected Items
  };
  onItemSelected = event => {
    // do something
  };

  constructor(props ) {
    super(props);

  }








    addMedication = med => {
var tmparray = this.state.medications ;
tmparray.push(med)
  this.setState({ medications:tmparray });







}
getcolorMedication(med){
var found = false;
for(var i = 0 ; i < this.state.medications.length ;i++){
if(this.state.medications[i]== med){
  found = true;
}
}

if(found){return "red";}else{return "black";}



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
    var submitregister = () => {


      //check loging then
      this.props.submitregister()

    }



    return (

      <View style={{ flex: 1 }}>
      <Image style={{position:"absolute" ,  width: '100%', height: height,resizeMode: 'stretch' }} source={require('../imgs/det.jpg')} />






             <View style={ styles.container}>
               <TouchableOpacity style={{ height:50, width:"100%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "10%"}}  onPress={() => submitregister()} >
               <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Submit </Text>
               </TouchableOpacity>
             </View>







      <View style={{position:"absolute" , flex: 1, height: height*0.70,width:"80%",top: height*0.2,left:"10%"}}>

      <View style={{ alignItems: 'center' ,height:height*0.80,borderRadius:50 }}>



      <TextInput
      value={this.state.username}
      onChangeText={username => this.setState({ username })}
      placeholder={'email Address'}
      style={{textAlign: 'center',      width: '60%', height: 40 , borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"19%" }}
      />
      <TextInput
      value={this.state.email}
      onChangeText={password => this.setState({ password })}
      placeholder={'password'}
      style={{textAlign: 'center' ,   width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
      />
      <TextInput
      value={this.state.email}
      onChangeText={password => this.setState({ password })}
      placeholder={'Confirm password'}
      style={{textAlign: 'center' ,    width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center',marginTop:"4%" }}
      />
      <TextInput
      value={this.state.name}
      onChangeText={name => this.setState({ name })}
      placeholder={'Whats your name?'}
      style={{textAlign: 'center',    width: '60%', height: 40, borderBottomWidth:2,borderColor:"lightblue",alignItems: 'center',justifyContent: 'center', marginTop:"4%"}}
      />








      </View>

      </View>


      <Text style={{  color:"white",position:"absolute", top:height*0.01, width:"100%",textAlign:"center", fontSize:34 ,fontFamily:"AmaticSC-Bold"}}>Register </Text>





      </View>


    );
  }
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: 'grey'
  },
   container: {
   position:"absolute" ,
   bottom:8,
   left:"25%",
   backgroundColor: "rgb(25,89,127)",
   width: '50%',
   height: 50,
   borderRadius:30,
   alignItems: 'center',
   justifyContent: 'center',
   textAlignVertical: 'top'
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
