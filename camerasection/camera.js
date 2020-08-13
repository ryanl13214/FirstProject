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

const { height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';



class Cam extends React.Component {
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

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
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

  selectPhotoTapped() {
    const options = {
      quality: 1,
      maxWidth: 600,
      maxHeight:1200,
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
      quality: 1,
      maxWidth: 600,
      maxHeight:1200,
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


        this.props.navigation.navigate('temp2',{ newIMG: source });

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



      <Image style={{position:"absolute" ,  width: '100%', height: '100%',resizeMode: 'stretch'  }} source={require('../imgs/skintrack.jpg')} />

      <Text style={[styles.textDark, {position:"absolute",top:"4%",left:"88%", fontSize: 25, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.thismonth}</Text>
      <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"11%"  }}>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus7}</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus6}</Text>
          </TouchableOpacity>
          <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus5}</Text>
          </TouchableOpacity>
          <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus4}</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus3}</Text>
          </TouchableOpacity>
          <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus2}</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus1}</Text>
          </TouchableOpacity>
          <LinearGradient colors={['rgb(111,111,211)', 'rgb(55,119,140)']}  style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
          </LinearGradient>
          <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
              <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.pluss1}</Text>
          </TouchableOpacity>
      </View>














      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
      <View
      style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
      {this.state.avatarSource === null ? (
        <Text> </Text>
      ) : (
        <Image style={styles.avatar} source={this.state.avatarSource} />
      )}
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.selectPhotohair.bind(this)}>
      <View
      style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
      {this.state.avatarSource === null ? (
        <Text> </Text>
      ) : (
        <Image style={styles.avatar} source={this.state.avatarSource} />
      )}
      </View>
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
export default Cam;
