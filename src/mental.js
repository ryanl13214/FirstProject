/** @format */
import React from 'react';
import {AsyncStorage  ,  Animated,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  View, ScrollView,  Button,SafeAreaView , Easing} from 'react-native';
import { Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import   Datebar   from './adatebar';
import SyncStorage from 'sync-storage';

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
      amMarker:am
    };


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








  render() {










    const data_url = (a) => AsyncStorage.getItem(a);





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

















      <Text style={[styles.textDark, {position:"absolute",top:"4%",left:"88%", fontSize: 25, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.thismonth}</Text>
      <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"11%"  }}>
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


      <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"flex-end",top:"85%"  }}>

      <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"10%" }}>
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus5}</Text>
      </TouchableOpacity>
      <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"3%" }}>
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus4}</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"3%" }}>
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus3}</Text>
      </TouchableOpacity>
      <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"3%" }}>
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus2}</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"2%" }}>
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus1}</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
      <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.pluss1}</Text>
      </TouchableOpacity>
      </View>







      <TouchableOpacity   style={{top:settop(-5,"am")  ,position:"absolute",left:"16%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>
      <TouchableOpacity    style={{top:settop(-5,"pm") ,position:"absolute",left:"22%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>


      <TouchableOpacity    style={{top:settop(-4,"pm")  ,position:"absolute",left:"28%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>
      <TouchableOpacity   style={{top:settop(-4,"pm") ,position:"absolute",left:"34%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>



      <TouchableOpacity    style={{top:settop(-3,"am")  ,position:"absolute",left:"40%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>
      <TouchableOpacity    style={{top:settop(-3,"pm")  ,position:"absolute",left:"46%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>


      <TouchableOpacity  style={{top:settop(-2,"am") ,position:"absolute",left:"51%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>
      <TouchableOpacity    style={{top:settop(-2,"pm")  ,position:"absolute",left:"58%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>



      <TouchableOpacity style={{top:settop(-1,"am")  ,position:"absolute",left:"62%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>
      <TouchableOpacity    style={{top:settop(-1,"pm") ,position:"absolute",left:"68%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>

      <TouchableOpacity    style={{top:this.state.amMarker  ,position:"absolute",left:"73%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
      </TouchableOpacity>
      <TouchableOpacity    style={{top:this.state.pmMarker  ,position:"absolute",left:"78%",  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36 }}>
      <Image source={require('../imgs/water1.jpg')}    style={{ borderRadius:10 ,   width:20,  height: 20}}/>
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
