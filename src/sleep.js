/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet  ,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';

import ReactNativeAN from 'react-native-alarm-notification';
const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 1000));
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
    super(props);

  }


  add2 = () => {


 
          //Schedule Future Alarm
          ReactNativeAN.scheduleAlarm(alarmNotifData);

          //Delete Scheduled Alarm
        //  ReactNativeAN.deleteAlarm(alarm_id);

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


      <Image style={{position:"absolute" ,  width: '100%', height: height }} source={require('../imgs/14.jpg')} />

  <Text  style={{   fontSize: 15,backgroundColor:"rgb(102,183,202)"}}>Username</Text>







    <TouchableOpacity style={{justifyContent: "center",alignItems:"center",  position:"absolute", flexDirection: 'row'   ,  width:"80%",height:"8%" ,top:"88%" ,left:"11%",overflow: 'hidden'}} onPress={    this.add2  } >


        <Text  style={{justifyContent: "center",alignItems:"center",   fontSize: 15,   height:"50%" }}>Username</Text>


    </TouchableOpacity>










      </View>




    );
  }
}

const styles = StyleSheet.create({






});
