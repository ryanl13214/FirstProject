import React, { Component } from 'react';
import { View, Text, Button, TextInput, DeviceEventEmitter } from 'react-native';
import ReactNativeAN from 'react-native-alarm-notification';


export default class  sleep extends React.Component {
	constructor(props, context) {
     super(props, context);


  }

 	render() {
 		const { update, fireDate, futureFireDate } = this.state;
 		return (
 			<View style={{flex:1, padding: 20}}>
 				<Text>Alarm Date (01-01-1976 00:00:00)</Text>
 				<View>
 					<TextInput
 						style={{height: 40, borderColor: 'gray', borderWidth: 1}}
 						onChangeText={(text) => this.setState({ fireDate: text })}
 						value={fireDate}
 					/>
 				</View>
 				<View>
 					<Text>Alarm Time From Now (eg 5):</Text>
 					<TextInput
 						style={{height: 40, borderColor: 'gray', borderWidth: 1}}
 						onChangeText={(text) => this.setState({ futureFireDate: text })}
 						value={futureFireDate}
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
 				<Text>{update}</Text>
 			</View>
 		);
 	}
 }
