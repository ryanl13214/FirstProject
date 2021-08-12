/** @format */

import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const
{
    width,
    height
} = Dimensions.get('window');


class Camalo extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null,
  };

  constructor(props,navigation ) {
    super(props);

        var thismonth= new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[1];

        var todaysnumber= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
        var minus1 = new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[2];
        var minus2 = new Date(new Date().setDate(new Date().getDate()-2)).toString().split(' ')[2];
        var minus3 = new Date(new Date().setDate(new Date().getDate()-3)).toString().split(' ')[2];
        var minus4 = new Date(new Date().setDate(new Date().getDate()-4)).toString().split(' ')[2];
        var minus5 = new Date(new Date().setDate(new Date().getDate()-5)).toString().split(' ')[2];
        var minus6 = new Date(new Date().setDate(new Date().getDate()-6)).toString().split(' ')[2];
        var minus7 = new Date(new Date().setDate(new Date().getDate()-7)).toString().split(' ')[2];
        var pluss1 = new Date(new Date().setDate(new Date().getDate()+1)).toString().split(' ')[2];


        var todaysday= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[0];
        var minus1day = new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[0];
        var minus2day = new Date(new Date().setDate(new Date().getDate()-2)).toString().split(' ')[0];
        var minus3day = new Date(new Date().setDate(new Date().getDate()-3)).toString().split(' ')[0];
        var minus4day = new Date(new Date().setDate(new Date().getDate()-4)).toString().split(' ')[0];
        var minus5day = new Date(new Date().setDate(new Date().getDate()-5)).toString().split(' ')[0];
        var minus6day = new Date(new Date().setDate(new Date().getDate()-6)).toString().split(' ')[0];
        var minus7day = new Date(new Date().setDate(new Date().getDate()-7)).toString().split(' ')[0];
        var pluss1day = new Date(new Date().setDate(new Date().getDate()+1)).toString().split(' ')[0];

    this.selectPhotoacne = this.selectPhotoacne.bind(this);
    this.selectPhotohair = this.selectPhotohair.bind(this);
    this.selectPhotoalopicia = this.selectPhotoalopicia.bind(this);


    this.state = {
      pluss1:pluss1,
      todaysnumber: todaysnumber,
      minus1: minus1,
      minus2: minus2,
      minus3: minus3,
      minus4: minus4,
      minus5: minus5,
      minus6: minus6,
      minus7: minus7,
      thismonth:thismonth,
    };
  }

  selectPhotoacne() {
    const options = {
      quality: 0.8,
      maxWidth: 400,
      maxHeight:400,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      //  console.log('Response 38= ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //  let source = {uri: response.uri};

        // You can also display the image using data:
        let source = { uri: 'data:image/jpeg;base64,' + response.data };


        this.props.navigation.navigate('temp',{ newIMG: source });

        //navigation.navigate('Home');



        this.setState({
          avatarSource: source,
        });
      }
    });
  }



  selectPhotohair() {
    const options = {
      quality: 0.8,
      maxWidth: 400,
      maxHeight:400,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      //  console.log('Response 38= ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //  let source = {uri: response.uri};

        // You can also display the image using data:
        let source = { uri: 'data:image/jpeg;base64,' + response.data };


        this.props.navigation.navigate('temp1',{ newIMG: source });

        //navigation.navigate('Home');



        this.setState({
          avatarSource: source,
        });
      }
    });
  }


    selectPhotoalopicia() {
      const options = {
        quality: 0.8,
        maxWidth: 400,
        maxHeight:400,
        storageOptions: {
          skipBackup: true,
        },
      };

      ImagePicker.showImagePicker(options, response => {
        //  console.log('Response 38= ', response);

        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          //  let source = {uri: response.uri};

          // You can also display the image using data:
          let source = { uri: 'data:image/jpeg;base64,' + response.data };


          this.props.navigation.navigate('temp1',{ newIMG: source });

          //navigation.navigate('Home');



          this.setState({
            avatarSource: source,
          });
        }
      });
    }


  render() {
    return (
      <View style={styles.container}>


            <Image style={{position:"absolute"  ,  width: '100%', height: '100%'  ,resizeMode: 'stretch'  }} source={require('../imgs/NEWIMAGES/chatback.png')} />


    {/* title*/}
          <View style={{ alignItems: "center", justifyContent: "center", textAlign: 'center',  position:"absolute",top:"-3%",left:"0%",width:"100%",height:"15%"}}>

          <Text  style={{ color:"white", fontSize: 25,fontFamily:"AmaticSC-Bold"}}>Hair Tracker</Text>

          </View>








{/* alopicia tracker*/}
      <View style={{  marginTop:"1%"}} >
        <TouchableOpacity style={{   flexDirection:"row" ,backgroundColor:"white",width: width*0.9,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.12  ,minHeight:120}} onPress={this.selectPhotoalopicia.bind(this)}>
        <Image style={{ marginLeft:"4%",width: height*0.12 *0.8 ,   height:height*0.12 *0.8 ,marginTop:height*0.12 *0.2,    resizeMode:"contain"  ,borderRadius:999 }} source={require('../imgs/NEWIMAGES/camera/alo.jpg')} />
        <View style={{ marginLeft:"4%",width:"70%" ,   height:"100%" ,justifyContent: 'center',alignItems: 'center' }} >
          <Text  style={{fontSize:24,color:"black"  }}>Alopecia Tracker</Text>
          <Text  style={{fontSize:height*0.018,color:"black"  }}>Uses an algorithm to track what percentage of your skin is covered by acne. You can use this to check the effectiveness of any treatments you may be taking over time.</Text>
        </View>
      </TouchableOpacity>
    </View>



        {/* hiruritism tracker tracker*/}
    <View style={{  marginTop:"4%"}} >
    <View style={{   flexDirection:"row" ,backgroundColor:"white",width: width*0.9,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.52  ,minHeight:120}} >
    <View style={{ marginLeft:"4%",width:"70%" ,   height:"100%" ,justifyContent: 'center',alignItems: 'center' }} >

      <Text  style={{fontSize:height*0.027,color:"black"  }}>• Ensure skin is clean and uncovered by makeup.</Text>
    <Text  style={{fontSize:height*0.027,color:"black"  }}>• Ensure the area you are in is well lit and there are now shadows covering the area being scanned</Text>
          <Text  style={{fontSize:height*0.027,color:"black"  }}>• place the phone 15cm away from target area and take the phone. confirm it is fitting</Text>
              <Text  style={{fontSize:height*0.027,color:"black"  }}>• Allow up to 2 minutes for the scanning to take place.</Text>
    </View>
    </View>
    </View>

    {/* bascl nutton*/}
    <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
      <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
    </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {

    width: 2500,
    height: 150,
  },
});
export default Camalo;
