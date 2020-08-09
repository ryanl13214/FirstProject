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

class Cam extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null,
  };

  constructor(props,navigation ) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);

  }

  selectPhotoTapped() {
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
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
      <View
      style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
      {this.state.avatarSource === null ? (
        <Text>Select a Photo</Text>
      ) : (
        <Image style={styles.avatar} source={this.state.avatarSource} />
      )}
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.selectPhotohair.bind(this)}>
      <View
      style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
      {this.state.avatarSource === null ? (
        <Text>Select a Photo</Text>
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
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});
export default Cam;
