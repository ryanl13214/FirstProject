/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';







export default class  History extends React.Component {

  constructor(props ) {
    super(props);



     console.log("histoyy",  this.props.route.params.newIMG);
       var base64Icon = this.props.route.params.newIMG;
   console.log("histoyy",  this.props.route.params.newIMG);
//var base64Icon = 'data:image/png;base64,{PLACE_YOUR_BASE64_DATA_HERE}';
  }





  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Image style={{width: 100, height: 50,   borderWidth: 1, borderColor: 'red'}} source={ this.props.route.params.newIMG}/>
        <Text> history page</Text>
        <Button
          title="Go to Details"

      onPress={() => this.props.navigation.navigate('Home' )}
        />
      </View>




    );
  }
}

const styles = StyleSheet.create({

});
