/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { AsyncStorage } from 'react-native';
import Slider from '@react-native-community/slider';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'











export default class  History0 extends React.Component {

  constructor(props ) {
    super(props);





     console.log("histoyy",  this.props.route.params.newIMG);
       var base64Icon = this.props.route.params.newIMG;











//   console.log("histoyy",  this.props.route.params.newIMG);
//var base64Icon = 'data:image/png;base64,{PLACE_YOUR_BASE64_DATA_HERE}';
  }








  render() {
    const line = {
         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
         datasets: [
           {
             data: [20, 45, 28, 80, 99, 43],
             strokeWidth: 2, // optional
           },
         ],
       };

















    return (



      <View style={{  alignItems: 'center', justifyContent: 'flex-start' }}>
<Image style={{width: "100%",  height: "60%" }} source={ this.props.route.params.newIMG}/>
        <Text> history page</Text>






        <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />

          <LineChart
              data={line}
              width={300} // from react-native
              height={150}
              yAxisLabel={'%'}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, 0.5)`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
  />


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
