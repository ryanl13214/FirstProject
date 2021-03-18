/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';



const { width,height } = Dimensions.get('window');










export default class  ChallengeDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
    <View   style={{ width:width, height:height*1.2 ,backgroundColor:"rgb(115,198,214)" }}>

    </View>
    );
  }
}
const styles = StyleSheet.create({


});
