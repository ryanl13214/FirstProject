import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import {AsyncStorage  ,   Text, View, TextInput, StyleSheet } from 'react-native';
import exampleJson from '../data/food data.json';
class Storage extends Component {
   state = {
      'name': ''
   }
   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

   setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
      exampleJson.foodList[2].key=value;
   }
   render() {
      return (
         <View style = {styles.container}>

 <Text>
   {exampleJson.foodList[2].key}
 </Text>

            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setName}/>
            <Text>
               {this.state.name}
            </Text>
         </View>
      )
   }
}
export default Storage

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   textInput: {
      margin: 5,
      height: 100,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   }
})
