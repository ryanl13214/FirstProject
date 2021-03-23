/** @format */
import React from 'react';
import {AsyncStorage  ,  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
import { Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import   Datebar   from './adatebar';
import SyncStorage from 'sync-storage';
import * as didYouKnow from '../didYouKnow.json';
const word = didYouKnow.dyn;
const
{
    width,
    height
} = Dimensions.get('window');
export default class  Mental extends React.Component {






  constructor(props ) {
    super(props);
    var date = new Date();
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
    var month= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[1];
    var year= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[3];
    var day= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];



    var tempvar=SyncStorage.get('mentalhealth'+month+year+day+"am");
    var am = "200%";
    if(tempvar=="amazing"){
      am=  "41%"  ;
    }else if(tempvar=="happy"){
      am=  "51%"   ;
    }else if(tempvar=="ok"){
      am=  "59%"   ;
    }else if(tempvar=="bad"){
      am=  "69%" ;
    }else if(tempvar=="awful"){
      am= "78%"  ;
    }else{
      am= "200%";
    }


    var tempvar=SyncStorage.get('mentalhealth'+month+year+day+"pm");

    var pm = "200%";
    if(tempvar=="amazing"){
      pm=  "41%"  ;
    }else if(tempvar=="happy"){
      pm=  "51%"   ;
    }else if(tempvar=="ok"){
      pm=  "59%"   ;
    }else if(tempvar=="bad"){
      pm=  "69%" ;
    }else if(tempvar=="awful"){
      pm= "78%"  ;
    }else{
      pm= "200%";
    }






    //var yesterday =  date.getDate() - 1 ;
  console.log("testing" + am );
    this.state = {
      pluss1:pluss1,
      todaysnumber: todaysnumber,
      minus1: minus1,
      minus2: minus2,
      minus3: minus3,
      minus4: minus4,
      minus5: minus5,
      minus6: minus6,
      minus7: minus7,
      thismonth:thismonth,
      name:"",
      pmMarker:pm,
      amMarker:am,
      sliderValue:0
    };


  }

  getRandomInt(max) {
       return Math.floor(Math.random() * Math.floor(max));
     }
handleupdate(tempvar){



  if(this.isampm()){
    if(tempvar=="amazing"){
      this.setState({pmMarker: "41%"});
    }else if(tempvar=="happy"){
      this.setState({pmMarker: "51%"});
    }else if(tempvar=="ok"){
      this.setState({pmMarker: "59%"});
    }else if(tempvar=="bad"){
      this.setState({pmMarker: "69%"});
    }else if(tempvar=="awful"){
      this.setState({pmMarker: "78%"});
    }else{
      this.setState({pmMarker:"200%"});
    }

  }
  if(!this.isampm()){
    if(tempvar=="amazing"){
      this.setState({amMarker: "41%"})  ;
    }else if(tempvar=="happy"){
      this.setState({amMarker: "51%"})  ;
    }else if(tempvar=="ok"){
      this.setState({amMarker: "59%"})  ;
    }else if(tempvar=="bad"){
      this.setState({amMarker: "69%"})  ;
    }else if(tempvar=="awful"){
      this.setState({amMarker: "78%"})  ;
    }else{
      this.setState({amMarker: "200%"})  ;
    }
  }


}



 isampm(a) {

  var time= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[4];
  time=time.split(':')[0];
  if(time<12){
    return "am";
  }
  return "pm";
}





  setcurrentmood(a) {

  var month= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[1];
  var year= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[3];
  var day= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];


  SyncStorage.set('mentalhealth'+month+year+day+ this.isampm(),a);

this.handleupdate(a);




}



getwidth() {


  return this.state.sliderValue * (width*0.7);
}

sliderChange(a){
if(this.state.sliderValue  > 0.5){
  this.setState({
     blink: true
  });
}else{
  this.setState({
     blink: false
  });
}



}


	getLeftDidYouKnow(){
	  if(this.state.showDidYouKnow)
	  {
	    return 5;
	  }
	  else
	  {
	    return 99999;
	  }
	}
	showDidYouKnow() {
	  this.setState({
	      showDidYouKnow: !this.state.showDidYouKnow,
	  });

	}






  render() {













    var settop = function(day,ampm) {
      var month= new Date(new Date().setDate(new Date().getDate()+day)).toString().split(' ')[1];
      var year= new Date(new Date().setDate(new Date().getDate()+day)).toString().split(' ')[3];
      var day= new Date(new Date().setDate(new Date().getDate()+day)).toString().split(' ')[2];

      const result = SyncStorage.get('mentalhealth'+month+year+day+ampm);



      if(result=="amazing"){
        return "41%";
      }else if(result=="happy"){
        return "51%";
      }else if(result=="ok"){
        return "59%";
      }else if(result=="bad"){
        return "69%";
      }else if(result=="awful"){
        return "78%";
      }else{
        return "200%";
      }



    }
    return (

      <SafeAreaView style={styles.container}>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: '100%',resizeMode: 'stretch' }} source={require('../imgs/9.jpg')} />


      <View  style={{position:"absolute", height: "10%",  width: "80%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"24%",left:"10%"  }}>
      <TouchableOpacity   style={{   flexDirection: 'column',  width: "18%", height: "100%",marginLeft:"0%" }} onPress={() => this.setcurrentmood("amazing")} >

      </TouchableOpacity>
      <TouchableOpacity   style={{ flexDirection: 'column',  width: "18%", height: "100%",marginLeft:"2%" }} onPress={() => this.setcurrentmood("happy")} >

      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',   width: "18%", height: "100%",marginLeft:"2%" }} onPress={() => this.setcurrentmood("ok")} >

      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',   width: "18%", height: "100%",marginLeft:"2%" }} onPress={() => this.setcurrentmood("bad")} >

      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',  width: "18%", height: "100%",marginLeft:"2%" }} onPress={() => this.setcurrentmood("awful")} >

      </TouchableOpacity>

      </View>




      <TouchableOpacity style={{justifyContent: "center",alignItems:"center",  position:"absolute", flexDirection: 'row'   ,  width:"80%",height:40 ,top:"42%" ,left:"11%",overflow: 'hidden',borderRadius:20,borderColor:"rgb(51,115,153)",borderWidth:1}}  onPress={()=>this.setState({datepickervisibility:true})} >
          <Text  style={{justifyContent: "center",alignItems:"center",   fontSize: 20,   height:"80%",color:"white" }}>View Mood history</Text>
      </TouchableOpacity>








  <View style={{  position:"absolute", top:"58%",left:"15%"  ,  width:this.getwidth(), height:height*0.15,overflow:"hidden"}}>
     <Image style={{  height:height*0.15, width:width*0.7  , resizeMode:"stretch"}}   source={require( '../imgs/revision3/Untitled.png')} />
  </View>

      <View style={{position:"absolute", top:"58%",left:"15%"  ,  width:"70%", height:"25%" }}>
          <Image style={{ height:height*0.15, width:width*0.7    }}   source={require( '../imgs/revision3/VBAT.png')} />
      </View>

      <View style={{position:"absolute", top:"80%",left:"15%"  ,  width:"70%",justifyItems:"center" ,justifyContent:"center" , alignItems:"center"  }}>

      <Slider
        style={{width:  "100%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={value => this.setState({sliderValue: value})}
      />
  </View>



  <TouchableOpacity style={{justifyContent: "center",alignItems:"center",  position:"absolute", flexDirection: 'row'   ,  width:"80%",height:40 ,top:"88%" ,left:"11%",overflow: 'hidden',borderRadius:20,borderColor:"rgb(237,1,1)",borderWidth:1}}  onPress={()=>this.setState({datepickervisibility:true})} >
      <Text  style={{justifyContent: "center",alignItems:"center",   fontSize: 20,   height:"80%",color:"white" }}>View Energy history</Text>
  </TouchableOpacity>







           <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"12%"  }}>
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
              <TouchableOpacity style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
                  <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
              </TouchableOpacity>
              <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
                  <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.pluss1}</Text>
              </TouchableOpacity>
          </View>

          <View style={{     position:"absolute",top:height*0.1 ,     right:this.getLeftDidYouKnow(),     borderColor: 'skyblue',     borderWidth:2 ,     minHeight: 35,     backgroundColor:"white",     height: 151  ,     borderRadius:19,     width:240 }}>

            <View style={{flexDirection: 'row'  ,   height: 50      }}>

              <Image style={{borderColor: '#ffffff',  borderWidth:111*0.04, width:50, height:50 , borderRadius:27  }}  source={require('../imgs/drdasyiconRevised.jpg')} />
              <Text style={{  marginLeft:15,  fontSize: 20,color:"black"     }}>DID YOU KNOW</Text>

            </View>
            <Text style={{   fontSize: 20,color:"black", width:"95%" ,marginLeft:"5%"    }}>{word[this.getRandomInt(word.length)]}</Text>

          </View>

          <TouchableOpacity style={{position:"absolute"  ,top:height*-0.02 ,right:-20,     width:width*0.28, height:  height*0.14 ,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.showDidYouKnow( )} >
       <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/qbal.png')} />

          </TouchableOpacity>



                             {/* bascl nutton*/}
                             <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
                               <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
                             </TouchableOpacity>


      </SafeAreaView>




    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    height: '100%'
  },







});
