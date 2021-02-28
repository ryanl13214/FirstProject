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



    return (

      <View style={{ flex: 1 }}>
      <Image style={{position:"absolute" ,  width: '100%', height: height,resizeMode: 'stretch' }} source={require('../imgs/revision3/regback.jpg')} />



      <TouchableOpacity style={{position:"absolute",Alignitems:"center",justifyContent:"center",textAlign:"center",width:90,height:50,top:height * 0.03 , right:15,backgroundColor:"rgb(220,220,220)",borderRadius:8}}    onPress={() =>  this.props.navigation.navigate('Home')} >
         <Text  style={{color:"black",Alignitems:"center",justifyContent:"center",textAlign:"center" }}>Sign up</Text>
      </TouchableOpacity>

      <View style={{position:"absolute" , flex: 1, height: height*0.70,width:"80%",top: height*0.2,left:"10%"}}>

      <View style={{ alignItems: 'center' ,height:height*0.80,borderRadius:50 }}>

      <Text style={{  color:"grey",position:"absolute", top:"5%", width:"100%",textAlign:"center", fontSize:20}}>details </Text>

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






      <View style={{flexDirection: 'row', paddingTop:10, marginTop:"4%" }}>

      <Text style={{  color:"grey", paddingTop:10 }}>DOB:</Text>
      <DatePicker
      style={{width:    '60%'}}
      date={this.state.date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="1900-01-01"
      maxDate="2016-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {this.setState({date: date})}}
      />

      </View>

      </View>

      </View>


      <Text style={{  color:"black",position:"absolute", top:height*0.17, width:"100%",textAlign:"center", fontSize:30}}>Register </Text>


{/* medication    <Text style={{   width:width,textAlign:"center", fontSize:30}}>medication </Text>  */}
      <View style={{   width:width,position:"absolute", top:height*0.66}}>


        <View style={{flexDirection:"row", width:"80%",marginLeft:"10%"}}>


              {/* col 1 */}
          <View style={{ width:"33%" }}>
          <TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Metaformin')} >

          <Text style={{  color:this.getcolorMedication("Metaformin") , width:"100%",textAlign:"center", fontSize:14}}>Metaformin</Text>
            </TouchableOpacity>


          <TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Fortamet')} >

<Text style={{  color:this.getcolorMedication("Fortamet") , width:"100%",textAlign:"center", fontSize:14}}>Fortamet</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Glucophage')} >

<Text style={{  color:this.getcolorMedication("Glucophage") , width:"100%",textAlign:"center", fontSize:14}}>Glucophage</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Ethinyl Estradio')} >
          <Text style={{  color:this.getcolorMedication("Ethinyl Estradio") , width:"100%",textAlign:"center", fontSize:14}}>Ethinyl Estradio</Text>
</TouchableOpacity>

<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Levonorgestrel')} >
          <Text style={{  color:this.getcolorMedication("Levonorgestrel") , width:"100%",textAlign:"center", fontSize:14}}>Levonorgestrel</Text>
</TouchableOpacity>

<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Desogestrel')} >
          <Text style={{  color:this.getcolorMedication("Desogestrel") , width:"100%",textAlign:"center", fontSize:14}}>Desogestrel</Text>
</TouchableOpacity>

<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Norethindrone')} >
          <Text style={{  color:this.getcolorMedication("Norethindrone") , width:"100%",textAlign:"center", fontSize:14}}>Norethindrone</Text>
</TouchableOpacity>
          </View>
          {/* col 2 */}
          <View style={{width:"38%" }}>

<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Seasonque')} >
          <Text style={{  color:this.getcolorMedication("Seasonque") , width:"100%",textAlign:"center", fontSize:14}}>Seasonque</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Aviane')} >
          <Text style={{  color:this.getcolorMedication("Aviane") , width:"100%",textAlign:"center", fontSize:14}}>Aviane</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Levora')} >
          <Text style={{  color:this.getcolorMedication("Levora") , width:"100%",textAlign:"center", fontSize:14}}>Levora</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Levomefolate Calcium')} >
          <Text style={{  color:this.getcolorMedication("Levomefolate Calcium") , width:"100%",textAlign:"center", fontSize:14}}>Levomefolate Calcium</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Falmina')} >
          <Text style={{  color:this.getcolorMedication("Falmina") , width:"100%",textAlign:"center", fontSize:14}}>Falmina</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Lutera')} >
          <Text style={{  color:this.getcolorMedication("Lutera") , width:"100%",textAlign:"center", fontSize:14}}>Lutera</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Myzilra')} >
          <Text style={{  color:this.getcolorMedication("Myzilra") , width:"100%",textAlign:"center", fontSize:14}}>Myzilra</Text>
</TouchableOpacity>

          </View>
          {/* col 3 */}
          <View style={{ width:"38%"}}>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Vaniga')} >
          <Text style={{  color:this.getcolorMedication("Vaniga") , width:"100%",textAlign:"center", fontSize:14}}>Vaniga</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Dianette')} >
          <Text style={{  color:this.getcolorMedication("Dianette") , width:"100%",textAlign:"center", fontSize:14}}>Dianette</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Cyproterone')} >
          <Text style={{  color:this.getcolorMedication("Cyproterone") , width:"100%",textAlign:"center", fontSize:14}}>Cyproterone</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Finasteride')} >
          <Text style={{  color:this.getcolorMedication("Finasteride") , width:"100%",textAlign:"center", fontSize:14}}>Finasteride</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Cyproterone Acetate')} >
          <Text style={{  color:this.getcolorMedication("Cyproterone Acetate") , width:"100%",textAlign:"center", fontSize:14}}>Cyproterone Acetate</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Spironolactone')} >
          <Text style={{  color:this.getcolorMedication("Spironolactone") , width:"100%",textAlign:"center", fontSize:14}}>Spironolactone</Text>
</TouchableOpacity>
<TouchableOpacity style={{   width:"100%"  }}  onPress={() =>  this.addMedication('Flutamide')} >
          <Text style={{  color:this.getcolorMedication("Flutamide") , width:"100%",textAlign:"center", fontSize:14}}>Flutamide</Text>
</TouchableOpacity>

          </View>

        </View>

      </View>


      </View>


    );
  }
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: 'grey'
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
