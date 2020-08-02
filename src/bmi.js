/** @format */
import React from 'react';
import {  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');






import InputSpinner from 'react-native-input-spinner';
export default class  Bmi extends React.Component {

	bmiCalculator = (cm , kg) => {


	var bmi;
	var newCm= parseFloat(cm/100);

	bmi = kg / (newCm * newCm);
	bmi = bmi.toFixed(1);

	this.setState({
		bmi: bmi
	});
	}



  constructor(props ) {
    super(props);
		this.state = {
      age: 18,
			weight:80,
			height:120,
			bmi:0,
			bmitext:"healthy"
    };
  }
	onButtonPressagepluss = () => {
		if(this.state.age<100){

			this.setState({
				age: this.state.age+1
			});
							this.bmiCalculator(this.state.height,this.state.weight);
		}
  }
	onButtonPressagemin = () => {
		if(this.state.age>0){

			this.setState({
	      age: this.state.age-1
	    });
				this.bmiCalculator(this.state.height,this.state.weight);
		}
  }

	onButtonPressheightpluss = () => {
		if(this.state.height<300){
			this.setState({
				height: this.state.height+1

			});
				this.bmiCalculator(this.state.height,this.state.weight);
		}
  }
	onButtonPressheightmin = () => {
		if(this.state.height>0){

			this.setState({
	      height: this.state.height-1
	    });
							this.bmiCalculator(this.state.height,this.state.weight);
		}
  }


	onButtonPressweightpluss = () => {
		if(this.state.weight<200){

			this.setState({
				weight: this.state.weight+1
			});
							this.bmiCalculator(this.state.height,this.state.weight);
		}
  }
	onButtonPressweightmin = () => {
		if(this.state.weight>0){

			this.setState({
	      weight: this.state.weight-1

	    });
							this.bmiCalculator(this.state.height,this.state.weight);
		}
  }











  render() {

    return (

      <SafeAreaView style={styles.container}>
        <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: height,resizeMode: 'stretch',top:0 }} source={require('../imgs/3.jpg')} />



<Text  style={{   fontSize: 18   ,position:"absolute",top:"39%",left:"15%"}}>{this.state.age}</Text>

<TouchableOpacity style={{width: 30, height: 30 ,position:"absolute",top:"37%",left:"22%"}} onPress={this.onButtonPressagepluss} >
		<Image style={{  width: 30, height: 30 }} source={require('../imgs/up.jpg')}  />
</TouchableOpacity>
<TouchableOpacity style={{width: 30, height: 30 ,position:"absolute",top:"42%",left:"23%"}} onPress={this.onButtonPressagemin} >
		<Image style={{  width: 30, height: 30 }} source={require('../imgs/down.jpg')}  />
</TouchableOpacity>




<Text  style={{   fontSize: 18  ,position:"absolute",top:"39%",left:"40%"}}>{this.state.height} cm</Text>
<TouchableOpacity style={{width: 30, height: 30,position:"absolute",top:"37%",left:"55%"}} onPress={this.onButtonPressheightpluss} >
		<Image style={{  width: 30, height: 30 }} source={require('../imgs/up.jpg')}  />
</TouchableOpacity>
<TouchableOpacity style={{width: 30, height: 30,position:"absolute",top:"42%",left:"56%"}} onPress={this.onButtonPressheightmin} >
		<Image style={{  width: 30, height: 30 }} source={require('../imgs/down.jpg')}  />
</TouchableOpacity>




<Text  style={{   fontSize: 18   ,position:"absolute",top:"39%",left:"70%"}}>{this.state.weight} kg</Text>
<TouchableOpacity style={{width: 30, height: 30,position:"absolute",top:"37%",left:"83%"}} onPress={this.onButtonPressweightpluss} >
		<Image style={{  width: 30, height: 30 }} source={require('../imgs/up.jpg')}  />
</TouchableOpacity>
<TouchableOpacity style={{width: 30, height: 30,position:"absolute",top:"42%",left:"83.5%"}} onPress={this.onButtonPressweightmin} >
		<Image style={{  width: 30, height: 30 }} source={require('../imgs/down.jpg')}  />
</TouchableOpacity>



<Text  style={{  color:"white", fontSize: 20, position:"absolute",top:"74%",left:"2%",width:"100%",   display: "flex",
    justifyContent: "center",textAlign:"center",
    alignItems: "center"}}>{this.state.bmi}</Text>
<Text  style={{   height: 30,color:"white", fontSize: 20, position:"absolute",top:"80%",left:"43%" ,width:"18%",   display: "flex",
    justifyContent: "center",
    alignItems: "center",}}>{this.state.bmitext}</Text>



      </SafeAreaView>




    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width:180,
    height:30,
    marginLeft:9,
    borderRadius:15,
    textAlign: 'center',
    backgroundColor:"skyblue",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  textGlowing: {
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    shadowOffset: {width: -10, height: 10},
    shadowRadius: 65,

    marginTop:-5
  },


button: {
  flex: 1,
  margin:10,
  width:"80%",
  marginLeft:"10%",
  height:220,

  flexDirection: 'row',
  justifyContent: "center",
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  borderBottomWidth:  10,
  overflow: 'hidden'
},


buttonwide: {
    flex: 1,
    margin:10,
      borderRadius:30,
    width:300,
    height:200,
    backgroundColor:"red",
     flexDirection: 'row',
    justifyContent: "center",
      overflow: 'hidden'
  },






});
