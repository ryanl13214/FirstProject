/** @format */
import React, { Component } from 'react';
import {  Image,  TextInput, Picker, PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DatePicker from 'react-native-datepicker'

const items = [{
  id: 'Metaformin',
  name: 'Metaformin'
}, {
  id: 'Fortamet',
  name: 'Fortamet'
}, {
  id: 'Glucophage',
  name: 'Glucophage'
}, {
  id: 'EthinylEstradi',
  name: 'Ethinyl Estradio'
}, {
  id: 'Levonorgestrel',
  name: 'Levonorgestrel'
}, {
  id: 'Desogestrel',
  name: 'Desogestrel'
}, {
  id: 'Norethindrone',
  name: 'Norethindrone'
}, {
  id: 'Seasonque',
  name: 'Seasonque'
},
{ id: 'Aviane',
   name: 'Aviane'
 }, {
   id: 'Levora',
   name: 'Levora'
 }, {
   id: 'LevomefolateCalcium',
   name: 'Levomefolate Calcium'
 }, {
   id: 'Falmina',
   name: 'Falmina'
 }, {
   id: 'Lutera',
   name: 'Lutera'
 }, {
   id: 'Myzilra',
   name: 'Myzilra'
 }, {
   id: 'Vaniga',
   name: 'Vaniga'
 }, {
   id: 'Dianette',
   name: 'Dianette'
 },
  { id: 'Cyproterone',
    name: 'Cyproterone'
  }, {
    id: 'Finasteride',
    name: 'Finasteride'
  }, {
    id: 'CyproteroneAcetate',
    name: 'Cyproterone Acetate'
  }, {
    id: 'Spironolactone',
    name: 'Spironolactone'
  }, {
    id: 'Flutamide',
    name: 'Flutamide'
  }
];

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


const buttonTextStyle = {
  color: '#reds'
};



export default class  Details extends  Component {
  state = {
    //We will store selected item in this
    selectedItems: [],
    name:"",
    password:"",
    username:"",
    dateofbiirth:"",
    gpPractice:"",
    docrotname:"",
    medications:[],
    selectedItems : []
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
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;

    var submitdetails = () => {
      this.props.submitdetails();
    }



    return (

      <View style={{ flex: 1 }}>
      <Image style={{position:"absolute" ,  width: '100%', height: height,resizeMode: 'stretch' }} source={require('../imgs/revision3/2.jpg')} />

      <View style={ styles.container}>
        <TouchableOpacity style={{ height:50, width:"100%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "10%"}}  onPress={() => submitdetails()} >
        <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Submit </Text>
        </TouchableOpacity>
      </View>



      <View style={{position:"absolute" , flex: 1, height: height*0.70,width:"80%",top: height*0.35,left:"10%"}}>

      <View style={{ alignItems: 'center' ,height:height*0.80,borderRadius:50 }}>


      <View style={{height:"10%"}}></View>

      <TextInput
      value={this.state.email}
      onChangeText={password => this.setState({ password })}
      placeholder={'GP name'}
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


















      <Text  style={{position:"absolute" ,left:"20%", width:"60%", top:height*0.29,color:"black",Alignitems:"center",justifyContent:"center",textAlign:"center" }}>Please input the medications you are currently taking.</Text>




{/* medication    <Text style={{   width:width,textAlign:"center", fontSize:30}}>medication </Text>  */}
      <View style={{   position:"absolute", top:height*0.34 , width :"60%",left:"22%"}}>

      <MultiSelect
        hideTags

        items={items}
        uniqueKey="id"
        ref={(component) => { this.multiSelect = component }}
        onSelectedItemsChange={this.onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={ (text)=> console.log(text)}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
      />

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
