import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { WebView } from 'react-native-webview';



const TopBar = ({ play, fullScreen }) => (
  <View
    style={{
      alignSelf: "center",
      position: "absolute",
      top: 0
    }}
  >
    <Text style={{ color: "#FFF" }}> Pcos Buddy Help</Text>
  </View>
);
var data = [
 ];
const getNewDrDaisyMessage = (newMessages) =>
{
    console.log("a");
    var message = {
        id: 'systeminitmessagge',
        conents: 'Hi I am Dr Daisy',
        user: "system",
        floats: "flex-start",
        systemImage: 50,
        userImage: 0,
        videowidth:0,
        videoUrl:""
    }
};
const Item = ({ item, conents, user, systemImage, userImage, floats, heightTextbox, widthTextbox , videowidth,videoUrl }) => (
    <View style={{
flexDirection: 'row'  ,
borderColor: '#1fffff',

marginTop: 15,
marginLeft: 15,
    minHeight: 70,
    height:heightTextbox +50,
  justifyContent: floats,
    width:width-30
  }}>

    <View style={{flexDirection: 'row'  ,  justifyContent: floats }}>

      <Image style={{borderColor: '#ffffff',  borderWidth:systemImage*0.04, width:systemImage, height:50 , borderRadius:27  }}  source={require('../imgs/drdasyiconRevised.jpg')} />
      <View style={{ width:150*videowidth , height:150*videowidth}}>
      <WebView
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction
        source={{ uri: videoUrl }}

      />
    </View>
          <View style={{
            borderColor: '#ffffff',
            borderWidth:2-videowidth,
            marginLeft: 5,marginRight: 5,
              minHeight: 35,
            height: heightTextbox  ,
            borderRadius:19,
            width:widthTextbox
          }}>
          <Text style={{  marginLeft:15,  fontSize: 20,color:"white"     }}>{conents}</Text>
          </View>
        <Image style={{width:userImage, height:50 , borderRadius:27   }} source={require('../imgs/Icons/placeholdericonhomepage.png')} />



    </View>

  </View>
);
export default class ChatV2 extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            inputText: ""
        };
    }
    updateMessages = (text) =>
    {
        this.setState({ inputText: text });
    }
    checkHelp = (help) =>
    {

if(help.help == "water" && data.length ==0 ){

data.push(
  {
      id: 'systeminitmessagge',
      conents: 'Let me help you Understand the Water Tracker',
      user: "system",
      floats: "flex-start",
      systemImage: 50,
      userImage: 0,
      videowidth:0,
      videoUrl:""
  });
  data.push(
  {
      id: 'systeminitmessagge',
      conents: '',
      user: "system",
      floats: "flex-start",
      systemImage: 50,
      userImage: 0,
      videowidth:2,
      videoUrl:"https://youtu.be/bYCB_OYvqko"
  }
);


}else if(help.help == "" && data.length ==0 ){



data =[{
      id: 'systeminitmessagge',
      conents: 'Hi I am Dr Daisy',
      user: "system",
      floats: "flex-start",
      systemImage: 50,
      userImage: 0,
      videowidth:0,
      videoUrl:""
  }];


}



    }
    submit = () =>
    {
        if(this.state.inputText.length > 0)
        {
            data.push(
            {
                id: 'usermessage' + this.state.inputText,
                conents: this.state.inputText,
                user: "user",
                floats: "flex-end",
                systemImage: 0,
                userImage: 50,
                videowidth:0,
                videoUrl:""
            });
        }
        this.setState({ inputText: "" });
    }

    submitSET = (a) =>
    {

            data.push(
            {
                id: 'usermessage' + a,
                conents:a,
                user: "user",
                floats: "flex-end",
                systemImage: 0,
                userImage: 50,
                videowidth:0,
                videoUrl:""
            });
  this.setState({ inputText: "" });

    }



    render()
    {
      try{
             console.log("water",this.props.route.params);
              this.checkHelp(this.props.route.params);
      }catch(e){
           console.log("std");
           var  helpa  = {help:""};
             this.checkHelp(helpa);
      }

        const renderItem = ({ item, conents, user, systemImage, userImage, floats, heightTextbox, widthTextbox,videowidth,videoUrl }) => (
            <Item   conents={item.conents} user={item.user} systemImage={item.systemImage} userImage={item.userImage} floats ={item.floats}  heightTextbox ={getheight(item)} widthTextbox={getwidth(item)}      videowidth={item.videowidth}   videoUrl={item.videoUrl}                 />
        );
        var getheight = (a) =>
        {

            var textSpacing = (((width - 30) * 0.7) / 20) * 2;
            if(a.videowidth ==0){
            return ((a.conents.length / textSpacing) * 24.5)+40;
          }
          if(a.videowidth ==2){
          return height *0.3;
        }


           if(a.conents.length == 0)
            {
                return 0;
            }
            return 200;

        }
        var getwidth = (a) =>
        {
            var textSpacing = ((width - 30) * 0.7) / 20
                if(a.videowidth == 0){
            if(a.conents.length == 0)
            {
                return 0;
            }else
            if(a.conents.length > textSpacing * 2)
            {
                return "72%";
            }
            else
            {
                return Math.floor(textSpacing * ((width - 30) * 0.7) / 18);
            }
}else{
  return 200;
}


        }
        return (
            < View style={{width:width,height:"100%",backgroundColor:"rgb(115,198,216)" }} >


                          <Image style={{position:"absolute"  ,  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/NEWIMAGES/chatback.png')} />

      < View style={{width:width,height:"75%",marginTop:"20%"  }} >


      <FlatList
      numColumns={1}
      horizontal={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />

	  </ View>


    <TouchableOpacity style={{width:250   ,  borderColor: '#ffffff',borderRadius:6,
      borderWidth:2 ,  position:"absolute" ,right:10,bottom:"20%" }}   onPress={() =>  this.submitSET("What can i do with this app?")}>
    <Text style={{  marginLeft:15,  fontSize: 18,color:"white"     }}>What can i do with this app?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{width:155   ,  borderColor: '#ffffff',borderRadius:6,
      borderWidth:2 ,  position:"absolute" ,right:10,bottom:"14%" }}   onPress={() =>  this.submitSET("What is PCOS?")}>
    <Text style={{  marginLeft:15,  fontSize: 18,color:"white"     }}>What is PCOS?</Text>
    </TouchableOpacity>


          < View style={{width:width,height:"12%",minHeight:60,   position:"absolute",bottom:0,flexDirection:"row"}} >
          <TextInput style = {{width:width-95,height:"50%",minHeight:50 , fontSize: 18,backgroundColor:"rgb(230,230,230)",borderRadius:22 ,marginTop:4 ,marginLeft:5}}
              underlineColorAndroid = "transparent"
              placeholder = "Message"
              placeholderTextColor = "#00000"
              autoCapitalize = "none"
              onChangeText = {this.updateMessages}/>







              <TouchableOpacity style={{width:85,height:"50%"   ,  position:"absolute" ,right:10,bottom:"30%" }}   onPress={() =>  this.submit()}>
              <Text style={{  marginLeft:15,  fontSize: 20,color:"white"     }}>SEND</Text>
              </TouchableOpacity>





 </ View>






			  </ View>
        );
    }
}
const styles = StyleSheet.create({});
