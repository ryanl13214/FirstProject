/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,    View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';


import { TextInput } from 'react-native';
 









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
  <Text style={{ fontSize: 24 ,width:"100%",textAlign:"center", height:30 ,marginTop: "5%"  }}>Add a meal </Text>
      <View style={{    flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems:"center",
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          marginTop: "5%"}}>
   <Text style={{ fontSize: 20 , height:30 ,marginTop: 40 ,marginLeft:30 ,marginRight:10 }}>search: </Text>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder={'Search'}
          style={styles.input}
        />
      </View>








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
borderRadius:9,
    backgroundColor: 'lightgrey',
  },
});
