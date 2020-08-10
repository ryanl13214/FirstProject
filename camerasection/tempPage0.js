/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View,   Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';


const SplashGif = require('../imgs/load.gif');




export default class  Tmp2 extends React.Component {

  constructor(props ) {
    super(props);




       var base64Icon = this.props.route.params.newIMG;
       var newimgmap = this.getDataUsingGet(this.props.route.params.newIMG.uri);
  //   console.log(   this.props.route.params.newIMG);
//var base64Icon = 'data:image/png;base64,{PLACE_YOUR_BASE64_DATA_HERE}';
  }




  getDataUsingGet(b64){



    let body = JSON.stringify({text: b64 })

    fetch('http://178.128.165.173/hir', {
      method: 'POST',

        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Content-Length': body.length

        },
        body: body,



    }     ).then((response) =>  response.text())
      .then((responseData) => {

   console.log(   responseData.length);
      console.log(   responseData);
        var newstr = "";
        for( var i = 0; i < responseData.length; i++ )
            if( !(responseData[i] == '\n' || responseData[i] == '\r') )
                newstr += responseData[i];

        let source = { "uri":  newstr };

 this.props.navigation.navigate('history',{ newIMG: source });

            })
      .catch((err) => { console.log(err); });

  }






  render() {

    return (



      <View style={{flex:1,alignItems: 'center', height:"100%", justifyContent: 'center' }}>
<Image style={{   justifyContent: 'center', width: 128,height:128,   borderWidth: 1, borderColor: 'red'}} source={require('../imgs/load.gif')} />
        <Text>please wait</Text>

      </View>




    );
  }
}

const styles = StyleSheet.create({

});
