/** @format */
import React from 'react';
import {  Image,  TextInput, Picker, PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DatePicker from 'react-native-datepicker'
const { height } = Dimensions.get('window');
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














 submitandsave = event => {


SyncStorage.set('medications' ,this.state.selectedItems);
SyncStorage.set('name' ,this.state.name);
SyncStorage.set('username' ,this.state.username);
SyncStorage.set('dateofbiirth' ,this.state.dateofbiirth);
SyncStorage.set('docrotname' ,this.state.docrotname);
SyncStorage.set('gpPractice' ,this.state.gpPractice);

console.log(this.state.name);
this.props.updateState3();




 };


  render() {



    return (

      <View style={{ flex: 1 }}>
    <Image style={{position:"absolute" ,  width: '100%', height: height,resizeMode: 'stretch' }} source={require('../imgs/det.jpg')} />







    <View style={{position:"absolute" , flex: 1, height: height*0.80,width:"80%",top: height*0.2,left:"10%"}}>
        <ProgressSteps   style={{width:"70%" }}>
            <ProgressStep label="Basic Information">
                <View style={{ alignItems: 'center' }}>

                <TextInput
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
                  placeholder={'email Address'}
                  style={{textAlign: 'center',   backgroundColor:"white",   width: '60%', height: 50 , borderRadius:30 ,alignItems: 'center',justifyContent: 'center', }}
                />
                <TextInput
                  value={this.state.email}
                  onChangeText={password => this.setState({ password })}
                  placeholder={'password'}
                  style={{textAlign: 'center' , backgroundColor:"white",  width: '60%', height: 50, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
                />


                <TextInput
                  value={this.state.name}
                  onChangeText={name => this.setState({ name })}
                  placeholder={'Whats your name?'}
                  style={{textAlign: 'center',  backgroundColor:"white",  width: '60%', height: 50, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
                />






  <View style={{flexDirection: 'row', paddingTop:10 }}>

<Text style={{  color:"grey", paddingTop:10 }}>Enter DOB: </Text>
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
            </ProgressStep >
            <ProgressStep label="Medications">
            <View style={{ alignItems: 'center' }}>


                <View style={{  width:"70%",height:"60%"}}>
                  <MultiSelect
                    hideTags
                    items={items}
                    uniqueKey="id"
                    ref={component => {
                      this.multiSelect = component;
                    }}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={this.state.selectedItems}
                    selectText="current medication"
                    searchInputPlaceholderText="Search Items..."

                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#48d22b"
                    submitButtonText="Submit"
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                                <TextInput
                                  value={this.state.gpname}
                                  onChangeText={gpPractice => this.setState({ gpPractice })}
                                  placeholder={'GP practice'}
                                  style={{textAlign: 'center', backgroundColor:"white",  width: '60%', height: 50, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
                                />

                            <TextInput
                              value={this.state.nursename}
                              onChangeText={docrotname => this.setState({ docrotname })}
                              placeholder={'GP Name'}
                              style={{textAlign: 'center',  backgroundColor:"white",  width: '60%', height: 50, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
                            />
              </View>
  </View>
            </ProgressStep>


            <ProgressStep label="Personal Goals"   onSubmit={this.submitandsave}>
                <View style={{ width: '80%',alignItems: 'center' }}>
                    <Text>Personal goals section list goals here</Text>
                </View>
            </ProgressStep>

        </ProgressSteps>

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
