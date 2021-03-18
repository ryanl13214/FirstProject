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

import
{
    Dimensions
}
from 'react-native';
const
{
    width,
    height
} = Dimensions.get('window');


export default class  History1 extends React.Component {

  constructor(props ) {
    super(props);



  //   console.log("histoyy",  this.props.route.params.newIMG);
    //   var base64Icon = this.props.route.params.newIMG;



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
  {
    //      <Image style={{width: "100%",  height: "60%", resizeMode:"contain" }} source={ this.props.route.params.newIMG}/>
  }
 <Image style={{width: "100%",  height: "60%", resizeMode:"contain" }} source={ this.props.route.params.newIMG}/>
   {/* bascl nutton*/}
   <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
     <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
   </TouchableOpacity>
        <Text> Acne history data</Text>


          <LineChart

          data={{
            labels: [
              '1/11/20',
              '1/12/20',
              '1/1/21',
              '1/2/21',
              '1/3/21',
            ],
            datasets: [
              {
                data: [44, 39, 42, 44],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width *1}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{


          }}
          />

    <Text>percentage of skin covered in acne.</Text>




      </View>
    );
  }
}

const styles = StyleSheet.create({

});
