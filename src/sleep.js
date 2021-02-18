/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet  ,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

import SyncStorage from 'sync-storage';
import { NativeModules } from 'react-native'
const {ToastExample} = NativeModules;
const {AlarmExamples} = NativeModules;

import DateTimePickerModal from "react-native-modal-datetime-picker";

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
      minus7: minus7,
    waketime:SyncStorage.get('waketime'  ),
      datepickervisibility:false,
alarmtime: SyncStorage.get('alarmtime'  ),

         pluss1:pluss1,
      thismonth:thismonth
    }
    if(SyncStorage.get('waketime'  ) ==  undefined  ){this.state.waketime="not set";   }
if(SyncStorage.get('alarmtime'  ) ==  undefined  ){this.state.alarmtime="not set";   }
  }

  add2 = () => {



      }



          _onPressButton2() {
            // ToastModule.showText(`This is Android's Toast`,
            //                       ToastModule.LENGTH_SHORT)
            //Show constants
        AlarmExamples.setAlarm('Awesome', AlarmExamples.SHORT);

          }


  render() {

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
      console.log("A date has been picked: ", date );//date is returning 1 hour early
      this.setState({datepickervisibility:!this.state.datepickervisibility})

//2020-10-19T09:10:28.477Z
var hour=String(String(String(date).split(":")).split(" ")[4]).split(",")[0] ;// i know
var minutes= String(date).split(":")[1] ;

      //bool repeating or not
      // days
      //time
      //hours
      //minutes
    //    this.setState({alarmtime:( Number(hour),Number(minutes))});

          var time = Number(hour)-8;
          console.log(time);
          if (time<0){
            time = 24 + time;

          }
          time = time.toString()+":00";

          this.setState({waketime: time  });
          SyncStorage.set(   'waketime', time );
          this.setState({alarmtime: time  });
          SyncStorage.set(   'alarmtime',  Number(hour).toString()+":00" );
          AlarmExamples.setAlarm(Number(hour),Number(minutes));
      //hideDatePicker();
    };

    return (

      <View  style={{flex: 1,      alignItems: "flex-start",      justifyContent: "flex-start"}} >



      <Image style={{position:"absolute" ,  width: '100%', height: height-70 }} source={require('../imgs/NEWIMAGES/page-5/5.png')} />
{/* center label*/}
<View style={{   width: '100%', height:height-100 , justifyContent: "center",textAlign:"center",alignItems:"center"}} >
  <Text  style={{fontSize:height*0.03  ,color:"white"    }}>Alarm time-{this.state.waketime} </Text>
  <Text  style={{fontSize:height*0.03  ,color:"white"    }}>When to sleep-{this.state.waketime} </Text>
</View  >

{/* top left*/}
      <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:3,top:3 }} onPress={() =>  this.props.navigation.navigate('chat', {help:'water'})}>

			</TouchableOpacity>
{/* top right*/}
<TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:3,top:3 }} onPress={() =>  this.props.navigation.navigate('chat', {help:'water'})}>

</TouchableOpacity>

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








    <TouchableOpacity style={{justifyContent: "center",alignItems:"center",  position:"absolute", flexDirection: 'row'   ,  width:"80%",height:40 ,top:"88%" ,left:"11%",overflow: 'hidden',borderRadius:20,borderColor:"rgb(237,175,90)",borderWidth:1}}  onPress={()=>this.setState({datepickervisibility:true})} >


        <Text  style={{justifyContent: "center",alignItems:"center",   fontSize: 20,   height:"80%",color:"white" }}>Edit Alarms</Text>


    </TouchableOpacity>


    <DateTimePickerModal
      isVisible={this.state.datepickervisibility}
      mode="time"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />








      </View>




    );
  }
}

const styles = StyleSheet.create({






});
