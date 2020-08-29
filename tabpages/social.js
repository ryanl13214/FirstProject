
import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View,ScrollView,FlatList,Image } from "react-native";


export default class Social extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatMessage: "",
			chatMessages: [{key:"rb",col:"r",ico:true},{key:"chatMessagesrb",col:"r",ico:true},{key:"cchatMessageschatMessageschatMessageschatMessage atMessageschatMessageshatMessagesb",col:"b",ico:true}]
		};
	}

	componentDidMount() {

		//      this.setState({ chatMessages: [...this.state.chatMessages, {key:"rb"}] });
		//this.props.navigation.setParams({tabBar:{visible:false}})
	}

	submitChatMessage() {

		// this.setState({ chatMessage: "aaa" });
	}
	getcolour(a) {
		if(a=="b"){ return "rgb(243,243,243)";}
		if(a=="r"){ return "rgb(14,168,205)";}

		return "green";
	}
	gettextcolour(a) {
		if(a=="b"){ return "rgb(11,11,11)";}
		if(a=="r"){ return "rgb(248,248,248)";}

		return "green";
	}
	getwidth(a) {
		console.log(a );
		console.log(a.length);
		return  (a.length*9) +30;



	}

	getflex(a) {

		if(a=="r"){ return 'flex-end';}
		if(a=="b"){ return 'flex-start';}


	}
	hideimg(a,i) {
		if(i==1){
			if(a=="r"){ return 40;}
			if(a=="b"){ return 0;}
		}
		if(i==0){
			if(a=="r"){ return 0;}
			if(a=="b"){ return 40;}
		}
	}



	render() {


		return (
			<View style={styles.container}>



			<FlatList
			data={this.state.chatMessages}
			keyExtractor={item => item.key }
			renderItem={({ item }) =>

			<View  style={{ flexDirection:"row",alignSelf: this.getflex(item.col ) }} >
			<Image style={{ margin:4, width:this.hideimg(item.col,0 ), height:  40,borderRadius:20  }} source={require('../imgs/drdaisychaticon.jpg')}  />

			<Text style={{maxWidth:"60%",alignSelf: this.getflex(item.col ),color:this.gettextcolour(item.col ),fontSize:18  ,textAlign:"center",width:this.getwidth(item.key ),margin:4,  backgroundColor:this.getcolour(item.col),borderRadius:25 , padding:8 }}    >{item.key}</Text>
			<Image style={{ margin:4, width:this.hideimg(item.col,1 ), height:  40,borderRadius:20  }} source={require('../imgs/avataricon.png')}  />
			</View>
		}
		style={{    }}
		/>




				<View style={{flexDirection:"row"}}>

						<TextInput
						style={{ height: 40,width:"60%", borderWidth: 1,  position:"absolute" ,bottom:80,left:"10%" }}
						autoCorrect={false}
						value={this.state.chatMessage}
						onSubmitEditing={() => this.submitChatMessage()}
						onChangeText={chatMessage => {
							this.setState({ chatMessage });
						}}
						/>
						<Text style={{ position:"absolute" ,bottom:89,right:"10%" ,   fontSize:18  }}    >SEND</Text>
				</View>
		</View>
	);
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgb(230,230,230)"
	}
});
