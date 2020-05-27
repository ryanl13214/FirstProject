/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   Button} from 'react-native';
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



      <View style={{  alignItems: 'center', justifyContent: 'flex-start' }}>
<Image style={{width: "100%",  height: "60%" }} source={ this.props.route.params.newIMG}/>
















   

        <Button
          title="home"

      onPress={() => this.props.navigation.navigate('Home' )}
        />
      </View>




    );
  }
}

const styles = StyleSheet.create({

});
