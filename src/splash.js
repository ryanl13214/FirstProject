/** @format */
import React from 'react';
import {  Image,  PixelRatio, Animated, StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

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


export default class  Splash extends React.Component {

  constructor(props ) {
    super(props);
      this.springValueleft = new Animated.Value(-300);
      this.springValuerightbottom = new Animated.Value(-300);
      this.springValueright = new Animated.Value(-300);
  }

  onSpringCompletion = () => {
    if (1==1) {
      //this.spring();
    }
  }



  springleft = () => {
         this.springValueleft.setValue(-300);
        Animated.timing(
            this.springValueleft,
            {
              toValue: width*-0.16,
       duration: 3000,
  useNativeDriver:false

            }
        ).start(this.onSpringCompletion);
    }




      springright = () => {
             this.springValueright.setValue(-300)
            Animated.timing(
                this.springValueright,
                {
                  toValue:width*0.03,
           duration: 2400,
      useNativeDriver:false

                }
            ).start(this.onSpringCompletion);
        }



              springrightbottom = () => {
                     this.springValuerightbottom.setValue(-300)
                    Animated.timing(
                        this.springValuerightbottom,
                        {
                          toValue: width*0.12 ,
                   duration: 2800,
              useNativeDriver:false

                        }
                    ).start(this.onSpringCompletion);
                }










          componentDidMount() {
              this.springleft();
              this.springright();
              this.springrightbottom();
          }















  render() {
    return (

      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >


      <Image style={{position:"absolute" ,  width: '100%', height: '100%' ,resizeMode: 'stretch' }} source={require('../imgs/0.jpg')} />


{//from springright
}
         <Animated.Image
         source={require('../imgs/cloud.png')}
         style={{ position:"absolute",top:height*0.5,right: this.springValuerightbottom , height:height*0.45, width:width*0.35,   resizeMode:"contain",marginLeft:100}}
         />

         <Animated.Image
         source={require('../imgs/cloud.png')}
         style={{ position:"absolute",top:height*0.1,right:  this.springValueright  , height:height*0.45, width:width*0.35,   resizeMode:"contain",marginLeft:100}}
         />

         {//from springleft
         }
         <Animated.Image
         source={require('../imgs/cloud.png')}
         style={{ position:"absolute",top:height*-0.06 ,left:   this.springValueleft, height:height*0.45, width:width*0.35,   resizeMode:"contain",marginLeft:100}}
         />



      </View>




    );
  }
}

const styles = StyleSheet.create({






});
