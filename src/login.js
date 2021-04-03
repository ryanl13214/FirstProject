/** @format */
import React from 'react';
import { TextInput, Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';

import SyncStorage from 'sync-storage';

const
{
   width,
   height
} = Dimensions.get('window');

export default class  Login extends React.Component {
 constructor(props) {



   super(props);

   this.state = {
     password: '',
     username:''
   };



   var userId=   SyncStorage.get('currentUID');
if(userId != undefined ){
  this.props.loginSucesssfull(this.state.username, this.state.password);
}



 }






 render() {



   var submitLogin = () => {
     //check loging then
     this.props.loginSucesssfull(this.state.username, this.state.password);
   }

      var movetoregister = () => {
        //check loging then
        this.props.movetoregister();
      }


   return (
     <View  style={{ height:height, width:width }} >


       <Image style={{position:"absolute" ,  width: '100%', height: height,resizeMode: 'stretch'  }} source={require('../imgs/1.jpg')} />

       <Image style={{  position:"absolute" , width: 150, height: 180 ,top:30 ,right:20}} source={require('../imgs/hotair.png')} />

       <TextInput
         value={this.state.username}
         onChangeText={username => this.setState({username:username})}
         placeholder={'email'}
         style={{textAlign: 'center',position:"absolute"  ,top:height*0.43,left:"20%", backgroundColor:"white",   width: '60%', height: 35 , borderRadius:30 ,alignItems: 'center',justifyContent: 'center', }}
       />
       <TextInput
         value={this.state.password}
         onChangeText={password => this.setState({password:password})}
         placeholder={'password'}
         secureTextEntry={true}
         style={{textAlign: 'center',position:"absolute" ,top:height*0.5,left:"20%", backgroundColor:"white",  width: '60%', height: 35, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
       />



       <View style={ styles.container}>
         <TouchableOpacity style={{ height:50, width:"100%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "10%"}}  onPress={() => submitLogin()} >
         <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Login </Text>
         </TouchableOpacity>
       </View>


       <TouchableOpacity style={{    position:"absolute" ,top:height*0.7,left:"28%",height:height*0.2, width:"45%" , flexDirection: 'column' ,marginTop: "10%"}}   onPress={() =>movetoregister()} >

       </TouchableOpacity>

     </View>
   );
 }
}






const styles = StyleSheet.create({

 container: {
 position:"absolute" ,
 top:"68%",
 left:"25%",
 backgroundColor: "rgb(25,89,127)",
 width: '50%',
 height: 50,
 borderRadius:30,
 alignItems: 'center',
 justifyContent: 'center',
 textAlignVertical: 'top'
 }




});
