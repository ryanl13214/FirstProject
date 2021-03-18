import React, { Component,useState } from 'react';
import { View, Text, Button, TextInput, DeviceEventEmitter } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default class  SetAlarm extends React.Component {
	constructor(props, context) {
     super(props, context);
this.state={
datepickervisibility:false


}

  }

 	render() {


		  const showDatePicker = () => {
		    setDatePickerVisibility(true);
		  };

		  const hideDatePicker = () => {
		    setDatePickerVisibility(false);
		  };

		  const handleConfirm = (date) => {
		    console.log("A date has been picked: ", date);//date is returning 1 hour early
				this.setState({datepickervisibility:!this.state.datepickervisibility})
				
		    //hideDatePicker();
		  };
 		return (
 			<View style={{flex:1, padding: 20}}>


			<View>
	      <Button title="Show Date Picker" onPress={()=>this.setState({datepickervisibility:true})} />
	      <DateTimePickerModal
	        isVisible={this.state.datepickervisibility}
	        mode="time"
	        onConfirm={handleConfirm}
	        onCancel={hideDatePicker}
	      />
	    </View>

 				<View style={{marginVertical: 18}}>
 					<Button
 						onPress={this.setAlarm}
 						title="Set Alarm"
 						color="#7fff00"
 					/>
 				</View>
 				<View style={{marginVertical: 18}}>
 					<Button
 						onPress={this.setFutureAlarm}
 						title="Set Future Alarm"
 						color="#7fff00"
 					/>
 				</View>
 				<View style={{marginVertical: 18}}>
 					<Button
 						onPress={this.sendNotification}
 						title="Send Notification Now"
 						color="#7fff00"
 					/>
 				</View>
 				<View style={{marginVertical: 18}}>
 					<Button
 						onPress={this.stopAlarm}
 						title="Stop Alarm Sound"
 						color="#841584"
 					/>
 				</View>
 				<View style={{marginVertical: 18}}>
 					<Button
 						onPress={this.viewAlarms}
 						title="See all active alarms"
 						color="#841584"
 					/>
 				</View>

 			</View>
 		);
 	}
 }
