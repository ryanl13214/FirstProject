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


export default class  WaterTransition extends React.Component {

  constructor(props ) {
    super(props);
      this.springValueleft = new Animated.Value(-300);
      this.springValuerightbottom = new Animated.Value(-300);
      this.springValueright = new Animated.Value(-300);
        this.fadeinValue = new Animated.Value( 0);
  }

  onSpringCompletion = () => {
    if (1==1) {
      //this.spring();
    }
  }



  springleft = () => {
         this.springValueleft.setValue(-600);
        Animated.timing(
            this.springValueleft,
            {
              toValue: width* 0.36,
       duration: 5000,
  useNativeDriver:false

            }
        ).start(this.onSpringCompletion);
    }



      fadein = () => {
             this.fadeinValue.setValue(0);
            Animated.timing(
                this.fadeinValue,
                {
                  toValue: 1,
           duration: 2000,
      useNativeDriver:false

                }
            ).start(this.onSpringCompletion);
        }







          componentDidMount() {
              this.springleft();
              this.fadein();
          }















  render() {

    return (

      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >


      <Image style={{position:"absolute" ,  width: '100%', height: '100%' ,resizeMode: 'stretch' }} source={require('../imgs/transitions/transition1.jpg')} />


{//from springright
}
         <Animated.Image
         source={require('../imgs/cloud.png')}
         style={{ position:"absolute",top:height*0.5,right: this.springValueleft , height:height*0.45, width:width*0.35,   resizeMode:"contain",marginLeft:100}}
         />





         <Animated.View style={{opacity:  this.fadeinValue}}>

                <View  >

                         <Text  style={{position:"absolute",top:height*0.06 ,left:width*0.35,     justifyContent: "center",textAlign:"center", width:width*0.65,height:height*0.6 ,   fontSize: 23,    color:"white" }}>Studies show that drinking water is linked to improved skin health. Getting enough water can delay effects of aging and rid the body of the toxins that cause breakouts. Studies suggest the skin is your body’s number one barrier against the outside world and plays a major role in maintaining the immune system.</Text>


                </View>
            </Animated.View>










         <TouchableOpacity style={{justifyContent: "center",alignItems:"center",  position:"absolute", flexDirection: 'row'   ,  width:"40%",height:40 ,top:"88%" ,left:"11%",overflow: 'hidden',borderRadius:20,backgroundColor:"rgb(237,175,90)",borderWidth:1}}  onPress={() =>  this.props.navigation.navigate('water')} >


             <Text  style={{             justifyContent: "center",alignItems:"center",   fontSize: 20,   height:"80%",color:"white" }}>Next</Text>


         </TouchableOpacity>


      </View>




    );
  }
}

const styles = StyleSheet.create({






});
