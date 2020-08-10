/** @format */
import React from 'react';
import { TextInput, Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';


import fire from '../config/fire';
export default class  Login extends React.Component {
  constructor(props) {




    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{this.props.updateState2()})
    .catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log("error :"+error);
      })
  }
  render() {



    var add2 = () => {


        fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((u)=>{
        //    console.log("uname2 "+ u.user.uid);
this.props.updateState()
              console.log("uname2 "+ u.user.uid);
        })
        .catch((error) => {
            console.log(this.state.username);
            console.log(this.state.password);
            console.log(error);
          });

    }

    return (



      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >


      <Image style={{position:"absolute" ,  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/1.jpg')} />

          <Image style={{  position:"absolute" , width: 150, height: 180 ,top:30 ,right:20}} source={require('../imgs/hotair.png')} />

      <TextInput
        value={this.state.username}
        onChangeText={username => this.setState({ username })}
        placeholder={'email'}
        style={{textAlign: 'center',position:"absolute"  ,top:"40%",left:"20%", backgroundColor:"white",   width: '60%', height: 35 , borderRadius:30 ,alignItems: 'center',justifyContent: 'center', }}
      />
      <TextInput
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
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
