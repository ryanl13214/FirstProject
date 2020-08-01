/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';


import { TextInput } from 'react-native';









export default class  Datebar extends React.Component {
  constructor(props) {
    super(props);
    var date = new Date();

    const fireDate =new Date(Date.now() + 1000);
    var thismonth= new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[2];

    var todaysnumber= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
    var minus1 = new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[2];
    var minus2 = new Date(new Date().setDate(new Date().getDate()-2)).toString().split(' ')[2];
    var minus3 = new Date(new Date().setDate(new Date().getDate()-3)).toString().split(' ')[2];
    var minus4 = new Date(new Date().setDate(new Date().getDate()-4)).toString().split(' ')[2];
    var minus5 = new Date(new Date().setDate(new Date().getDate()-5)).toString().split(' ')[2];
    var minus6 = new Date(new Date().setDate(new Date().getDate()-6)).toString().split(' ')[2];
    var minus7 = new Date(new Date().setDate(new Date().getDate()-7)).toString().split(' ')[2];

    var pluss1 = new Date(new Date().setDate(new Date().getDate()+1)).toString().split(' ')[2];


    //var yesterday =  date.getDate() - 1 ;
    console.log("yesterday" + minus1 );
    this.state = {
      todaysnumber: todaysnumber,
      minus1: minus1,
      minus2: minus2,
      minus3: minus3,
      minus4:minus4
    };


  }

  render() {
    return (
<View style={{  width: "100%",backgroundColor:"blue" , flexDirection: 'row',justifyContent: "center",alignItems:"center"  }}>


<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
</View>
<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
</View>
<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
</View>
<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
</View>
<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
</View>
<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
</View>
<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
</View>
<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
</View>
<View style={{ backgroundColor:"red",borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
    <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
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

});
