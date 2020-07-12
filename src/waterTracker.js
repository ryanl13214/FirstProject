/** @format */
import React from 'react';
import {  Animated, Image, Easing,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';





export default class  Water extends React.Component {

  constructor(props ) {
    super(props);
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {
    this.StartImageRotateFunction();
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);

    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
        useNativeDriver: true
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });


    return (

      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >


      <Image style={{position:"absolute" ,  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/13.jpg')} />
    <View  style={{position:"absolute" ,  width: '40%', height: '75%',left:"4%",top:"23%",borderRadius:30 ,backgroundColor:"rgb(25,89,127)",overflow:"hidden"}} >
    <Animated.Image
            style={{
              position:"absolute",
              left:"11%",
              top:"83%",
              width: 200,
              height: 200,
              borderRadius:33,
                 transform: [{ rotate: '-15deg' }],
              transform: [{ rotate: RotateData }],
            }}
             source={require('../imgs/water1.jpg')}
          />


          <Animated.Image
                  style={{
                    position:"absolute",
                    left:"10%",
                    top:"83%",
                    width: 200,
                    height: 300,
                    borderRadius:33,
                   transform: [{ rotate: '45deg' }],
                    transform: [{ rotate: RotateData }],
                  }}
                   source={require('../imgs/water2.jpg')}
                />

                <Animated.Image
                        style={{
                          position:"absolute",
                          left:"8%",
                          top:"83%",
                          width: 300,
                          height: 400,
                          borderRadius:33,
                          transform: [{ rotate: '15deg' }],
                          transform: [{ rotate: RotateData }],
                        }}
                         source={require('../imgs/water3.jpg')}
                      />


      <Image style={{ width: '100%', height: '100%',resizeMode: 'stretch' }} source={require('../imgs/waterbody.png')} />

  </View>

      </View>




    );
  }
}

const styles = StyleSheet.create({



});
