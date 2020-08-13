/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';


import { TextInput } from 'react-native';

import { BackHandler } from 'react-native';

import Slider from "react-native-slider";
import Moment from "moment";


const { height } = Dimensions.get('window');







import Sound from 'react-native-sound';


var sound1 = new Sound(require('./h.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }

  });





















  function stopSound() {

      sound1.pause(() => {
        console.log('Stop');
      });

  }



    function resumeSound() {

        sound1.play();

    }





  function componentWillUnmount() {
    sound1.release();

}






  import play from '../imgs/play.png';
  import pause from '../imgs/pause.png';



  function Counter() {
    let [count, setCount] = useState(0);

    useInterval(() => {
      // Your custom logic here
      setCount(count + 1);
    }, 1000);

    return <h1>{count}</h1>;
  }










export default class  Meditation extends React.Component {
  constructor(props) {
    sound1.play();
    super(props);
    this.state = {
      playpause: false,
      trackLength: 300,
      timeElapsed: "0:00",
      timeRemaining: "5:00",
      val:0
    };

  }
  state = {
        trackLength: 300,
        timeElapsed: "0:00",
        timeRemaining: "5:00"
    };


    componentWillUnmount() {
      stopSound();

    }

        changeTime = seconds => {
            this.setState({ timeElapsed: Moment.utc(seconds * 1000).format("m:ss") });
            this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format("m:ss") });
        };



      callFun = () =>
      {
        this.setState({playpause: !this.state.playpause});
        console.log(this.state.playpause);
    if(this.state.playpause== false){

          return stopSound();
    }else{

      return resumeSound();
    }




    }




  render() {
    return (
<View >

<Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: height-70,resizeMode: 'stretch',top:0 }} source={require('../imgs/12.jpg')} />

<View style={{ alignItems: "center" }}>
    <View style={{ alignItems: "center", marginTop: 24 }}>

    </View>

    <View style={styles.coverContainer}>

    </View>

    <View style={{ alignItems: "center", marginTop: 32 }}>
        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}>audio by </Text>
        <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>Jon doe</Text>
    </View>
</View>

<View style={{ margin: 32 }}>
    <Slider
        minimumValue={0}

        maximumValue={this.state.trackLength}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        minimumTrackTintColor="#93A8B3"
        onValueChange={seconds => this.changeTime(seconds)}
    ></Slider>




    <View style={{ marginTop: -12, flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
    </View>
</View>

<View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 16 }}>

<TouchableOpacity style={{position:"absolute",justifyContent: "center",alignItems:"center",top:5,left:5, width: 35, height: 35}} onPress={() =>  this.props.navigation.openDrawer()} >
    <Image style={{  width: '100%', height: '100%'  }} source={require('../imgs/hamburger.png')}  />
</TouchableOpacity>




    <TouchableOpacity style={styles.playButtonContainer} onPress={() => {return this.callFun()  }} >

        <Image style={styles.imgoverContainer} source={ this.state.playpause === true ?
            require('../imgs/play.png') :
            require('../imgs/pause.png')}
        />

    </TouchableOpacity>





</View>


</View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
         flex: 1,
         backgroundColor: "#EAEAEC"
     },
     textLight: {
         color: "#B6B7BF"
     },
     text: {
         color: "#8E97A6"
     },
     textDark: {
         color: "#3D425C"
     },
     coverContainer: {
         marginTop: 32,
         width: 250,
         height: 250,
         shadowColor: "#5D3F6A",
         shadowOffset: { height: 15 },
         shadowRadius: 8,
         shadowOpacity: 0.3
     },
     cover: {
         width: 250,
         height: 250,
         borderRadius: 125
     },
     track: {
         height: 2,
         borderRadius: 1,
         backgroundColor: "#FFF"
     },
     thumb: {
         width: 8,
         height: 8,
         backgroundColor: "#3D425C"
     },
     timeStamp: {
         fontSize: 11,
         fontWeight: "500"
     },
     playButtonContainer: {
       position:"absolute",
         backgroundColor: "#FFF",
         borderColor: "rgba(93, 63, 106, 0.2)",
         borderWidth: 16,
         width: 128,
         height: 128,
         borderRadius: 64,
         alignItems: "center",
         justifyContent: "center",
         marginHorizontal: 32,
         shadowColor: "#5D3F6A",
         shadowRadius: 30,
         shadowOpacity: 0.5,

     }
});
