/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet  ,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const alarmNotifData = {
	alarm_id: "12345",
	title: "My Notification Title",
	message: "My Notification Message",
	channel: "my_channel_id",
	small_icon: "ic_launcher",

	// You can add any additional data that is important for the notification
	// It will be added to the PendingIntent along with the rest of the bundle.
	// e.g.
  	data: { foo: "bar" },
};
export default class  Sleep extends React.Component {

  constructor(props ) {
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

    super(props);
		this.state = {
      todaysnumber: todaysnumber,
      minus1: minus1,
      minus2: minus2,
      minus3: minus3,
      minus4: minus4,
      minus5: minus5,
      minus6: minus6,
      minus7: minus7,      pluss1:pluss1,
      thismonth:thismonth}
  }


  add2 = () => {


          //Stop Alarm
        //  ReactNativeAN.stopAlarmSound();

        //  //Send Local Notification Now
    //      ReactNativeAN.sendNotification(alarmNotifData);

          //Get All Scheduled Alarms
      //    const alarms = await ReactNativeAN.getScheduledAlarms();

          //Clear Notification(s) From Notification Center/Tray
    //      ReactNativeAN.removeFiredNotification(alarm_id);
    //      ReactNativeAN.removeAllFiredNotifications();
      }




  render() {
    return (

      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >


      <Image style={{position:"absolute" ,  width: '100%', height: height}} source={require('../imgs/14.jpg')} />
			<Text style={[styles.textDark, {position:"absolute",top:"10%",left:"90%", fontSize: 25, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.thismonth}</Text>
      <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"16%"  }}>
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

  <Text  style={{   fontSize: 15,backgroundColor:"rgb(102,183,202)"}}>set alarms</Text>



	<TouchableOpacity style={{position:"absolute",justifyContent: "center",alignItems:"center",top:5,left:5, width: 35, height: 35}} onPress={() =>  this.props.navigation.openDrawer()} >
			<Image style={{  width: '100%', height: '100%'  }} source={require('../imgs/hamburger.png')}  />
	</TouchableOpacity>



    <TouchableOpacity style={{justifyContent: "center",alignItems:"center",  position:"absolute", flexDirection: 'row'   ,  width:"80%",height:40 ,top:"91%" ,left:"11%",overflow: 'hidden',borderRadius:20,backgroundColor:"rgb(237,175,90)"}} onPress={    this.add2  } >


        <Text  style={{justifyContent: "center",alignItems:"center",   fontSize: 20,   height:"80%",color:"white" }}>Edit Alarms</Text>


    </TouchableOpacity>










      </View>




    );
  }
}

const styles = StyleSheet.create({






});
