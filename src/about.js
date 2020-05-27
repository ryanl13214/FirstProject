/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   SafeAreaView,ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-picker';


import Slider from '@react-native-community/slider';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
















export default class  About extends React.Component {

  constructor(props ) {
    super(props);




  }









  render() {

    return (


      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </SafeAreaView>




    );
  }
}

const styles = StyleSheet.create({

});
