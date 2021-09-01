/** @format */
import React from 'react';
import
{
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Button,
    Animated,
    SafeAreaView
}
from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import
{
    Dimensions
}
from 'react-native';
import * as didYouKnow from '../didYouKnow.json';
const word = didYouKnow.dyn;
const
{
    width,
    height
} = Dimensions.get('window');

import ImagePicker from 'react-native-image-picker';
import SyncStorage from 'sync-storage';
export default class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        var textSize;
        if(height < 801)
        {
            textSize = 20;
        }
        else
        {
            textSize = 20;
        }
    var userimage=   SyncStorage.get('userimage');

  this.springValue = new Animated.Value(0)


        //  console.log(height);
        this.state = {
            username: "Guest",
            showDidYouKnow:false,
            timegreenting: "Afternoon",
            textScale: textSize,
            avatarSource: null,
            videoSource: null,
            base64userImage: "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"
        }
        if(userimage != undefined && userimage != null){
          this.base64userImage= userimage;
          console.log("rrere -- "+this.base64userImage);
        }
        var currenthour = new Date(new Date().setDate(new Date().getDate() + 1)).toString().split(' ')[4].split(':')[0];
        if(currenthour < 12)
        {
            this.setState(
            {
                timegreenting: "morning"
            });
        }
        if(currenthour > 12 && currenthour < 18)
        {
            this.setState(
            {
                timegreenting: "afternoon"
            });
        }
        else
        {
            this.setState(
            {
                timegreenting: "evening"
            });
        }
        this.selectPhotoid = this.selectPhotoid.bind(this);
    }///. end of contructor

    onSpringCompletion = () => {
      if (1==1) {
        this.spring();
      }
    }



    spring = () => {
           this.springValue.setValue(0)
          Animated.timing(
              this.springValue,
              {
                toValue:800,
         duration: 21999,
useNativeDriver:false

              }
          ).start(this.onSpringCompletion);
      }




            componentDidMount() {
                this.spring();
            }







    selectPhotoid() {
      const options = {
        quality: 0.8,
        maxWidth: 300,
        maxHeight:300,
        storageOptions: {
          skipBackup: true,
        },
      };

      ImagePicker.showImagePicker(options, response => {
        //  console.log('Response 38= ', response);

        if (response.didCancel)
        {
          console.log('User cancelled photo picker');
        }
        else if (response.error)
        {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton)
        {
          console.log('User tapped custom button: ', response.customButton);
        }
        else
        {
          let source = { uri:response.data};
          console.log( source.uri);
          SyncStorage.set('userimage' , source.uri);



          this.setState({
            base64userImage: source.uri,
          });
          console.log(this.state.base64userImage);
        }
      });
    }
showDidYouKnow() {
  this.setState({
      showDidYouKnow: !this.state.showDidYouKnow,
  });

}
getLeftDidYouKnow(){
  if(this.state.showDidYouKnow)
  {
    return 5;
  }
  else
  {
    return 99999;
  }
}
getRandomInt(max) {
     return Math.floor(Math.random() * Math.floor(max));
   }

    render()
    {




      var getheight = (a) =>
      {
          var textSpacing = (((width - 30) * 0.7) / 20) * 2;

              return ((a.conents.length / textSpacing) * 29) + 40;

      }
      var getwidth = (a) =>
      {
          var textSpacing = ((width - 30) * 0.7) / 20

              if(a.conents.length == 0)
              {
                  return 0;
              }
              else   if(a.conents.length > textSpacing * 2)
              {
                  return "71%";
              }
              else
              {
                  return Math.floor(textSpacing * ((width - 30) * 0.7) / 18) ;
              }

      }







        return (
            <SafeAreaView style={{  width: "100%", height: height-70}}>


   <Image style={{  width: "100%", height: height  ,position:"absolute" ,resizeMode:"stretch"}} source={require('../imgs/homeback.jpg')} />


   <Animated.Image
   source={require('../imgs/cloud.png')}
   style={{ position:"absolute",top:-20,left: this.springValue, height:height*0.15, width:width*0.15,   resizeMode:"contain",marginLeft:-100}}
   />

   <Animated.Image
   source={require('../imgs/cloud.png')}
   style={{ position:"absolute",top:height*0.00,left: this.springValue, height:height*0.15, width:width*0.15,   resizeMode:"contain",marginLeft:-400}}
   />
   <Animated.Image
   source={require('../imgs/cloud.png')}
   style={{ position:"absolute",top:height*0.01,left: this.springValue, height:height*0.15, width:width*0.15,   resizeMode:"contain",marginLeft:-120}}
   />

   <Animated.Image
   source={require('../imgs/cloud.png')}
   style={{ position:"absolute",top:height*0.001,left: this.springValue, height:height*0.15, width:width*0.15,   resizeMode:"contain",marginLeft:-300}}
   />







   <Text  style={{position:"absolute",top:height*0.096, width: "100%", fontSize:25, textAlign:"center",color:"white",fontFamily:"AmaticSC-Bold"}}>Homepage</Text>


























{/*


   <TouchableOpacity style={{width:width*0.27, height:  width*0.17,marginLeft:15,marginTop: 5,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('history')} >
<Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/food.jpg')} />
<Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Nutrition</Text>

   </TouchableOpacity>

*/}














   <View style={{  width: "100%",  marginTop: "30%",  justifyContent: 'center', justifyItems: 'center',alignItems: 'center'   }}>



        <View style={{  marginTop:"10%",flexDirection:"row" }}>

              <TouchableOpacity style={{width:width*0.27, height:  width*0.17, marginTop: 5,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('transitionwater')} >
                <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/water.jpg')} />
                   <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Hydrate</Text>
              </TouchableOpacity>


            <TouchableOpacity style={{width:width*0.27, height:  width*0.17,marginLeft:15,marginTop: 5,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('Excer')} >
                <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/workout.jpg')} />
                 <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Workout</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{width:width*0.27, height:  width*0.17,marginLeft:15,marginTop: 5,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('food')} >
    <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/food.jpg')} />
    <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Nutrition</Text>

            </TouchableOpacity>




        </View>







{/*row 2*/}



        <View style={{flexDirection:"row"}}>


            <TouchableOpacity style={{width:width*0.27, height:  width*0.17,marginTop:32, justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('ovu')} >
         <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/ovulation.jpg')} />
         <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Ovulation</Text>

            </TouchableOpacity>

            <TouchableOpacity style={{width:width*0.27, height:  width*0.17,marginLeft:15,marginTop:32,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('bmi')} >
               <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/bmi.jpg')} />
               <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>BMI</Text>

            </TouchableOpacity>

            <TouchableOpacity style={{width:width*0.27, height:  width*0.17,marginLeft:15,marginTop:32,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('mental')} >
           <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/mood.jpg')} />
           <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Mood</Text>

            </TouchableOpacity>

        </View>


{/*row 3*/}
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{width:width*0.27, height:  width*0.17, marginTop:32,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('sleep')} >
<Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/sleep.jpg')} />
<Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Sleep</Text>

        </TouchableOpacity>
            <TouchableOpacity style={{width:width*0.27, height:  width*0.17,marginLeft:15,marginTop:32,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('medselect')} >
              <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/d.jpg')} />
              <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Relaxation</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{width:width*0.27, height:  width*0.17,marginLeft:15,marginTop:32,justifyContent: 'center',alignItems: 'center'  }} onPress={() =>  this.props.navigation.navigate('jornal')} >
                 <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/revision3/jornalicon.png')} />
                 <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Journal</Text>
            </TouchableOpacity>

        </View>



{/*row 4*/}
  <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{width:width*0.28, height:  width*0.17,marginLeft:0, marginTop:32,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('cameraacne')} >
<Image style={{ height: '100%', width:width*0.26,   resizeMode:"stretch" }} source={require('../imgs/Newfolder/acne.png')} />
<Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Acne</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{width:width*0.28, height:  width*0.17,marginLeft:10, marginTop:32,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('camerahir')} >
<Image style={{ height: '100%', width:width*0.26,   resizeMode:"stretch" }} source={require('../imgs/Newfolder/HIR.png')} />
<Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Hirsutism</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{width:width*0.28, height:  width*0.17,marginLeft:10, marginTop:32,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('cameraalo')} >
<Image style={{ height: '100%', width:width*0.26,   resizeMode:"stretch" }} source={require('../imgs/Newfolder/dfghdj.png')} />
<Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Alopecia</Text>

        </TouchableOpacity>



    </View>






    {/*row 5*/}
      <View style={{flexDirection:"row"}}>


            <View style={{   width:width*0.54, height:  height*0.16 ,marginLeft:10, marginTop:12 ,  borderColor: 'skyblue',     borderWidth:2 ,      backgroundColor:"white",       borderRadius:19  }}>

              <View style={{flexDirection: 'row'  ,   height: 40      }}>

                <Image style={{borderColor: '#ffffff',  borderWidth:111*0.04, width:40, height:40 , borderRadius:27  }}  source={require('../imgs/drdasyiconRevised.jpg')} />
                <Text style={{  marginLeft:15,  fontSize: 18,color:"black" , marginTop: 2     }}>DID YOU KNOW</Text>

              </View>
              <Text style={{   fontSize: 13,color:"black", width:"95%" ,marginLeft:"3%"    }}>{word[this.getRandomInt(word.length)]}</Text>

            </View>

{/*
            <TouchableOpacity style={{width:width*0.27, height:  width*0.19,marginLeft:width*0.024, marginTop:36,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.props.navigation.navigate('symptom')} >
    <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/Icons/symptoms.jpg')} />
    <Text  style={{width: "100%",borderRadius:15,  height:26,fontSize:18,marginTop:1,marginBottom:5,textAlign:"center",color:"black"}}>Symptoms</Text>

            </TouchableOpacity>
*/}


        </View>







    </View>

    <View style={{     position:"absolute",top:height*0.1 ,     left:this.getLeftDidYouKnow(),     borderColor: 'skyblue',     borderWidth:2 ,     minHeight: 35,     backgroundColor:"white",     height: 151  ,     borderRadius:19,     width:240 }}>

      <View style={{flexDirection: 'row'  ,   height: 50      }}>

        <Image style={{borderColor: '#ffffff',  borderWidth:111*0.04, width:50, height:50 , borderRadius:27  }}  source={require('../imgs/drdasyiconRevised.jpg')} />
        <Text style={{  marginLeft:15,  fontSize: 20,color:"black"     }}>DID YOU KNOW</Text>

      </View>
      <Text style={{   fontSize: 20,color:"black", width:"95%" ,marginLeft:"5%"    }}>Did you know that meditation helps to reduce blood pressure?</Text>

    </View>



     </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create(
{


});
