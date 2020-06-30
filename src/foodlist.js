/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';





export default class  Food extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    return (


      <SafeAreaView style={styles.container}>
          <View style={{ marginTop: "-20%" ,height: "70%"}}>

 

          </View>
          </ScrollView>
      </SafeAreaView>



    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width:180,
    height:30,
    marginLeft:9,
    borderRadius:15,
    textAlign: 'center',
    backgroundColor:"skyblue",
},
container: {
flex: 1,
alignItems: "flex-start",
justifyContent: "center"
},


button: {
  flex: 1,
  margin:10,
  width:"80%",
  marginLeft:"10%",
  height:220,

  flexDirection: 'row',
  justifyContent: "center",
borderBottomColor:  'lightgrey',
  borderBottomWidth:  2,
  overflow: 'hidden'
},








});
