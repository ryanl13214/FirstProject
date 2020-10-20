/** @format */
import React from 'react';
import { TextInput, Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

const { height } = Dimensions.get('window');
import fire from '../config/fire';
export default class  Login extends React.Component {
  constructor(props) {



    super(props);

    this.state = {
      email: '',
      password: '',
      uname:'',
      passworddupe:'',
      passwordplaceholder:""
    };
  }






  render() {



    var add2 = () => {


      //check loging then
      this.props.updateState()

    }

    var updatepassword = (pass) => {

      this.setState({ password:pass });

      this.setState({ passwordplaceholder:this.state.passwordplaceholder+"*" });
    }
    return (



      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >


      <Image style={{position:"absolute" ,  width: '100%', height: height,resizeMode: 'stretch'  }} source={require('../imgs/1.jpg')} />

          <Image style={{  position:"absolute" , width: 150, height: 180 ,top:30 ,right:20}} source={require('../imgs/hotair.png')} />

      <TextInput
        value={this.state.username}
        onChangeText={username => this.setState( username)}
        placeholder={'email'}
        style={{textAlign: 'center',position:"absolute"  ,top:"40%",left:"20%", backgroundColor:"white",   width: '60%', height: 35 , borderRadius:30 ,alignItems: 'center',justifyContent: 'center', }}
      />
      <TextInput
        value={this.state.passwordplaceholder}
        onChangeText={password => updatepassword({ password })}
        placeholder={'password'}
        style={{textAlign: 'center',position:"absolute" ,top:"55%",left:"20%", backgroundColor:"white",  width: '60%', height: 35, borderRadius:30,alignItems: 'center',justifyContent: 'center', }}
      />



        <View style={ styles.container}>

        <TouchableOpacity style={{ height:50, width:"100%" , flexDirection: 'column'  ,alignItems: 'center'  ,marginTop: "10%"}} onPress={ add2} >
          <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>Login </Text>
        </TouchableOpacity>


            </View>
            <TouchableOpacity style={{   position:"absolute" ,top:"0%",left:"8%",height:"5%", width:"45%" , flexDirection: 'column' ,marginTop: "10%"}}  onPress={this.props.updateState } >
              <Text style={{ textAlign: 'center',fontSize: 25,width:"100%", height:50 ,color:"white"}}>bypass login </Text>
</TouchableOpacity>

            <TouchableOpacity style={{   position:"absolute" ,top:"75%",left:"28%",height:"5%", width:"45%" , flexDirection: 'column' ,marginTop: "10%"}}  onPress={this.props.updateState2 } >
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
