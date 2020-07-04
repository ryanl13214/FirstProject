/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';


import { TextInput } from 'react-native';







function Item({ title,props}) {
    const gap = (Dimensions.get('window').width *0.45)-70;
  return (

    <View style={styles.item}>

      <TouchableOpacity style={{height:70, marginTop:20 ,   flexDirection: 'row'   ,marginTop: "10%",width:"80%"}} onPress={() =>  props.navigation.navigate('food')} >

        <Image style={{ height:40, width:40 , flexDirection: 'column' ,marginTop:5 }}  onPress={() =>  props.navigation.navigate('foodlist')}  source={require( '../imgs/add.png')} />
        <Text style={{fontSize: 20,width:"40%" , height:30 ,    marginLeft: "5%",  marginTop:10}}>{title}</Text>

        <Image style={{ height:70, width:70 ,   marginLeft:gap, alignSelf: 'flex-end'}}  onPress={() =>  props.navigation.navigate('foodlist')}  source={require( '../imgs/add.png')} />
      </TouchableOpacity>

    </View>

  );
}









export default class  Foodlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
<View >

      <View style={styles.container}>
  <Text style={{ fontSize: 20 , height:30 ,marginTop: "12%" ,marginLeft:30 ,marginRight:10 }}>Add to Breakfast: </Text>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder={'Search'}
          style={styles.input}
        />
      </View>


      <View style={styles.bar}>
        <Text style={{ fontSize: 15 , height:30 ,marginTop: "25%" ,marginLeft:3 ,marginRight:1 }}>Search results </Text>
        <Text style={{ fontSize: 15 , height:30 ,marginTop: "25%" ,marginLeft:3 ,marginRight:1 }}>recent </Text>
        <Text style={{ fontSize: 15 , height:30 ,marginTop: "25%" ,marginLeft:3 ,marginRight:1 }}>favorites </Text>
        <Text style={{ fontSize: 15 , height:30 ,marginTop: "25%" ,marginLeft:3 ,marginRight:1 }}>Add custom item </Text>
      </View>





      <FlatList
            data={[
                  {  key:'React Native',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8}
                  ]}
                  keyExtractor={item => item.key.toString()}
            renderItem={({ item }) => <Item title={item.key} props={this.props} />}
            style={{ fontSize: 15   ,marginTop: "20%"   ,width:"95%" ,marginLeft:3 ,marginRight:1 }}
          />





</View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginTop: "12%",

  },
  bar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginTop: "5%",

  },
  item:{
    flexDirection: 'row',
    marginLeft: "5%",
    width:"100%",
    borderColor:"black",
    borderBottomWidth:1,
  },
label:{

  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  marginTop: "5%",


},

  input: {
    width: 150,
    height: 45,
marginTop: "12%",
borderRadius:3,
    backgroundColor: 'grey',
  },
});
