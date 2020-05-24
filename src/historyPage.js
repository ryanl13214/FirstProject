/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';







export default class  History extends React.Component {

  constructor(props ) {
    super(props);



     console.log("histoyy",  this.props.route.params.newIMG);
       var base64Icon = this.props.route.params.newIMG;
       var newimgmap = this.getDataUsingGet(this.props.route.params.newIMG);
//   console.log("histoyy",  this.props.route.params.newIMG);
//var base64Icon = 'data:image/png;base64,{PLACE_YOUR_BASE64_DATA_HERE}';
  }




  getDataUsingGet(b64){



    let body = JSON.stringify({text: b64 })

    fetch('http://2.220.109.253', {
      method: 'POST',

        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Content-Length': body.length

        },
        body: body,



    }     ).then((response) => response.text())
      .then((responseData) => { console.log("response: " + responseData); this.props.route.params.newIMG=responseData;  this.props.navigation.navigate('history',{ newIMG: responseData });})
      .catch((err) => { console.log(err); });

  }






  render() {

    return (



      <View style={{  alignItems: 'center', justifyContent: 'flex-start' }}>
<Image style={{width: 100,  height: "30%",   borderWidth: 1, borderColor: 'red'}} source={ this.props.route.params.newIMG}/>
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
