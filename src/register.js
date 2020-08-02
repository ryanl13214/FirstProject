/** @format */
import React from 'react';
import {  Image,  TextInput, Picker, PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';

 
const { height } = Dimensions.get('window');
//Import basic react native components
import MultiSelect from 'react-native-multiple-select';

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

export default class  Register extends React.Component {
  state = {
    //We will store selected item in this
    selectedItems: [],
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    //Set Selected Items
  };

  constructor(props ) {
    super(props);
  }
  render() {
      const { selectedItems } = this.state;
    return (

      <View style={{ flex: 1 }}>
    <Image style={{position:"absolute" ,  width: '100%', height: height}} source={require('../imgs/det.jpg')} />

    <TextInput
      value={this.state.username}
      onChangeText={username => this.setState({ username })}
      placeholder={'email'}
      style={{textAlign: 'center',position:"absolute"  ,top:"40%",left:"20%", backgroundColor:"white",   width: '60%', height: 50 , borderRadius:30 ,alignItems: 'center',justifyContent: 'center', }}
    />
    <TextInput
      value={this.state.email}
      onChangeText={password => this.setState({ password })}
      placeholder={'password'}
      style={{textAlign: 'center',position:"absolute" ,top:"55%",left:"20%", backgroundColor:"white",  width: '60%', height: 50, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
    />


    <TextInput
      value={this.state.gppractice}
      onChangeText={password => this.setState({ password })}
      placeholder={'password'}
      style={{textAlign: 'center',position:"absolute" ,top:"55%",left:"20%", backgroundColor:"white",  width: '60%', height: 50, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
    />

        <TextInput
          value={this.state.gpname}
          onChangeText={password => this.setState({ password })}
          placeholder={'password'}
          style={{textAlign: 'center',position:"absolute" ,top:"55%",left:"20%", backgroundColor:"white",  width: '60%', height: 50, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
        />

    <TextInput
      value={this.state.nursename}
      onChangeText={password => this.setState({ password })}
      placeholder={'password'}
      style={{textAlign: 'center',position:"absolute" ,top:"55%",left:"20%", backgroundColor:"white",  width: '60%', height: 50, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
    />









       <View style={{  position:"absolute", top:"90%" ,width:"70%",height:"10%"}}>
         <MultiSelect
           hideTags
           items={items}
           uniqueKey="id"
           ref={component => {
             this.multiSelect = component;
           }}
           onSelectedItemsChange={this.onSelectedItemsChange}
           selectedItems={selectedItems}
           selectText="current medication"
           searchInputPlaceholderText="Search Items..."
           onChangeInput={text => console.log(text)}
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
