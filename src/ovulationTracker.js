/** @format */
import React from 'react';
import {  Modal, Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,TouchableWithoutFeedback ,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
import Moment from 'moment';
import DatePicker from 'react-native-datepicker'
import SyncStorage from 'sync-storage';

export default class  Ovu extends React.Component {

  //red rgb(245,125,100)
  //yellow rgb(255, 231 , 106)
  //grey rgb(204,197,187 )
  //green rgb(165,199.139 )
  //blue rgb(112,204,203)

  formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2)
          month = '0' + month;
      if (day.length < 2)
          day = '0' + day;

      return [year, month, day].join('-');
  }

    formatDatevaraible(date,i) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate()+i),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

  constructor(props ) {
    super(props);

    var dateoflast=   SyncStorage.get('dateOfLastPeriodBegining');
    var tempbool=false;
    if(dateoflast != undefined){
      tempbool=true;
    }

    this.callFunc = this.callFunc.bind(this);
    var names=[];
    var numberofbubbles=28;
    var fertileday=18;
    var lengthOfBleeding=8;
    var gapRedToGreen=5;
    var fertileLength=10;
    var gapGreenToRed=5;

    for(var i=1 ; i <=  numberofbubbles ; i++)
    {
      if(i ==  fertileday)
      {
        names.push([i,false,"rgb(112,204,203)",34,this.formatDatevaraible(dateoflast,i)]);
      }
      else if(i< lengthOfBleeding)
      {
        if(i<lengthOfBleeding/2){
          names.push([i,false,"rgb(255, 231 , 106)",25+i,this.formatDatevaraible(dateoflast,i)]);
        }
        else if(i>=lengthOfBleeding/2){
          names.push([i,false,"rgb(245,125,100)",25 +(lengthOfBleeding/1.8)-i,this.formatDatevaraible(dateoflast,i)]);
        }

      }
      else if(i< lengthOfBleeding+ gapRedToGreen)
      {
        names.push([i,false,"rgb(204,197,187 )",20,this.formatDatevaraible(dateoflast,i)]);
      }
      else if(i< lengthOfBleeding+ gapRedToGreen+ fertileLength)
      {
        if( i<= fertileday){
          names.push([i,false,"rgb(165,199,139 )",25+((i-gapRedToGreen-lengthOfBleeding))*2,this.formatDatevaraible(dateoflast,i)]);
        }
        else  if(i >= fertileday){
          names.push([i,false,"rgb(165,199,139 )",25 +((fertileLength/2)-(i-fertileday))*2,this.formatDatevaraible(dateoflast,i)]);
        }
        //    names.push([i,false,"green",30]);
      }
      else
      {
        names.push([i,false,"rgb(204,197,187 )",20,this.formatDatevaraible(dateoflast,i)]);
      }
    }

    //var thismonth= new Date(new Date().setDate(new Date().getDate()-1)).toString().split(' ')[1];
    //   var todaysnumber= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
    var startday =dateoflast;
    var calenderData = {
      '2020-11-02': {selected: true , startingDay: true, color: 'rgb(255, 231 , 106)'},
      '2020-11-03': { selected: true , color: 'rgb(255, 231 , 106)'},
      '2020-11-04': {selected: true ,  color: 'rgb(255, 231 , 106)'},
      '2020-11-05': {selected: true ,   color: 'rgb(255, 231 , 106)'},
      '2020-11-06': {  selected: true , color: 'rgb(245,125,100)'},
      '2020-11-07': {  selected: true , color: 'rgb(245,125,100)'},
      '2020-11-08': {  selected: true , color: 'rgb(245,125,100)'},
      '2020-11-09': {  selected: true , color: 'rgb(245,125,100)'},
      '2020-11-10': {selected: true , endingDay: true, color: 'rgb(245,125,100)'},
      '2020-11-18': {selected: true , startingDay: true, color: 'rgb(165,199,139)'},
      '2020-11-19': {selected: true , color: 'rgb(165,199,139)' },
      '2020-11-20': {selected: true, color: 'rgb(165,199,139)'},
      '2020-11-21': {selected: true , color: 'rgb(165,199,139)' },
      '2020-11-22': {selected: true, color: 'lightblue'},
      '2020-11-23': {selected: true , color: 'rgb(165,199,139)' },
      '2020-11-24': {selected: true, endingDay: true, color: 'rgb(165,199,139)' },

    };
console.log(calenderData);
  //  var calenderData = {'2020-11-23',{ selected: true, selectedColor: "red"} , '2020-11-24',{ selected: true, selectedColor: "red"}};

    //var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate()  ;
    // building the calender data











    //  SyncStorage.set('dateOfLastPeriodBegining' ,date);






    this.state = {
      numberofbubbles:numberofbubbles,
      lengthOfBleeding:lengthOfBleeding,
      fertileLength:fertileLength,
      gapRedToGreen:gapRedToGreen,
      gapGreenToRed:gapGreenToRed,
      fertileday:fertileday,
      info:names,
      cycleposition:7,
      calenderData:calenderData,
      desiredscreen:"circ",
      hasData:tempbool,
      isVisible:false,
      width: "0%",
      heart:"0%",
      label:"none",
      sex:"none",
      startingDay:dateoflast
    };







  }



  callFunc(){

    this.setState({isVisible:!this.state.isVisible});

  }


  getxsmall(i,offset){
    var r =(width/2)+offset;
    var gap = 360/28;

    var  x = (width-30)/2  + r * Math.cos((i* gap) *  Math.PI / 180) ;
    //  console.log("debugging date format- "+ new Date().getDate());


    return x;

  }
  getysmall(i,offset)
  {
    var r =(width/2)+offset;
    var gap = 360/28;

    var  y = height/2 + r * Math.sin((i* gap) * Math.PI / 180);
    return y;
  }


  getBorder(i){
    if(i == this.state.cycleposition){ return 2;}else{return 0;}

  }

  getx(i){
    var r =(width-60)/2;
    var gap = 360/28;

    var  x = (width-30)/2  + r * Math.cos((i* gap) *  Math.PI / 180) ;

    return x;

  }
  gety(i){
    var r =(width-60)/2;
    var gap = 360/28;

    var  y = height/2 + r * Math.sin((i* gap) * Math.PI / 180);
    return y;
  }

  controlheights(inputName, desiredheight){
    if(this.state.hasData == false && (inputName =="circ"|| inputName =="cal") )
    {
      return 5000;
    }
    if(  this.state.desiredscreen === inputName || (this.state.hasData == false && inputName =="data"))
    {

      return desiredheight;

    }
    else
    {
      return 5000;
    }
    //return  desiredheight;
  }


  swapScreens(){


    if( this.state.desiredscreen == "circ"){
      this.setState({desiredscreen:"cal"});

    }

    if( this.state.desiredscreen == "cal"){
      this.setState({desiredscreen:"circ"});

    }


  }




  add = () => {


    if( this.state.width=="31%"){
      this.setState({
        width:"63%",
        label:"med"
      });
    }
    if( this.state.width=="63%"){
      this.setState({
        width:"100%",
        label:"high"
      });
    }
    if( this.state.width=="100%"){
      this.setState({
        width:"0%",
        label:"none"
      });
    }
    if( this.state.width=="0%"){
      this.setState({
        width:"31%",
        label:"low"
      });
    }


  }
  add2 = () => {


    if( this.state.heart=="0%"){
      this.setState({
        heart:"100%",
        sex:"logged"
      });
    }
    if( this.state.heart=="100%"){
      this.setState({
        heart:"0%",
        sex:"none"
      });
    }

  }
  updatedate(date){

    console.log(date);

    this.setState({date: date,hasData:true});

    SyncStorage.set('dateOfLastPeriodBegining' ,date);

  }


  render() {
    const vacation = {key:'vacation', color: 'red' };
    const massage = {key:'massage', color: 'blue' };
    const workout = {key:'workout', color: 'green'};
const calenderDatac = {};

for(var i=1 ; i <=  this.state.numberofbubbles ; i++)
{

  if(i< this.state.lengthOfBleeding)
  {
    if(i<=this.state.lengthOfBleeding/2){
      calenderDatac[this.formatDatevaraible(this.state.startingDay,i)] = {selected: true ,  color: 'yellow'};

    }
    else if(i>=this.state.lengthOfBleeding/2){
      calenderDatac[this.formatDatevaraible(this.state.startingDay,i)] = {selected: true ,  color: 'red'};
    }
  }






}




;
    return (

      <SafeAreaView style={{width:"100%",height:"100%"}}>


      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: height-70,resizeMode: 'stretch',top:0 }} source={require('../imgs/7.jpg')} />
      <Text style={{ }}>{this.state.desiredscreen}</Text>

      <View style={{  position:"absolute",top: this.controlheights("data",height * 0.4),left:width*0.25 ,width:width*0.8,height:height}}>
      <Text style={{width:"60%",textAlign:"center",color:"white",fontSize:30 }}>NO DATA</Text>
      <Text style={{width:"80%",textAlign:"center",marginLeft:"-10%",color:"white",fontSize:17 }}>Please enter the date of your last period.</Text>
      <DatePicker
      style={{width:    '60%' }}
      date={this.state.date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="1900-01-01"
      maxDate="2025-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36, backgroundColor:"white"
        }
        // ... You can check the source to find the other keys.
      }}
      //    onDateChange={(date) => {this.setState({date: date,hasData:true})}}
      onDateChange={(date) => this.updatedate(date)}
      />







      </View>


      <View style={{  position:"absolute",top: this.controlheights("circ",0) ,width:width,height:height}}>



      {this.state.info.map(details  => (
        <View style={{ width:details[3]+1,height:details[3]+1,backgroundColor:details[2],position:"absolute",top:this.gety(details[0]),left:this.getx(details[0]),borderRadius:111111,borderColor:"white",borderWidth:this.getBorder(details[0])}}>
        <Image style={{ width:details[3],height:details[3] }} source={require('../imgs/smallerButton.png')} />

        </View>
      ))}





      <TouchableOpacity style={{ width:80,height:80,backgroundColor:"lightgrey",position:"absolute",top:(height-40)/2,left:(width-70)/2,borderRadius:111111}}  onPress={() => this.callFunc()}>
      <Image style={{ width: '100%', height:'100%' }} source={require('../imgs/buttonoverlay.png')} />
      <Text style={{position:"absolute", width: '100%', height:'100%',textAlign:"center",marginTop:20, fontSize:25, color:"grey",justifyContent: "center",alignItems:"center"}}>LOG</Text>
      <Image style={{position:"absolute",top:this.getysmall(this.state.fertileday,-50),left:this.getxsmall(this.state.fertileday, 50) , width: 15, height:15 }} source={require('../imgs/buttonoverlay.png')} />
      </TouchableOpacity>


      <Modal animationType = {"slide"} transparent = {true}
      visible = {this.state.isVisible}
      onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

      <View style = {{width:"70%",height:  "40%",backgroundColor:"rgb(245,245,245)" ,marginLeft:"15%",marginTop:"55%",borderRadius:15}}>

      <Text style={{position:"absolute", width: '100%', height:'100%',textAlign:"center",marginTop:20, fontSize:25, color:"grey",justifyContent: "center",alignItems:"center"}}>LOG</Text>


      <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"23%" ,top:"53%" ,left:"11%",overflow: 'hidden'}} onPress={    this.add  } >
      <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"23%" ,top:"53%" ,left:"11%",overflow: 'hidden',borderRadius:40,borderWidth:3,borderColor:"white"}}>
      <View style={{  flexDirection: 'row'   ,   width:  this.state.width,height:"100%" ,backgroundColor:"red"}}></View>
      <View style={{  flexDirection: 'row'   , width:"94%",height:"100%"  ,backgroundColor:"white"}}></View>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0,borderRadius:40,borderWidth:0,borderColor:"white"}} source={require('../imgs/tttt.png')} />
      </View>
      </TouchableWithoutFeedback>
      <Text  style={{  position:"absolute" ,  width:"32%",height:"13%" ,top:"23%" ,left:"14%",color:"black" }}> Log how heavy your flow is today. Log a sexual interaction. </Text>


      <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"23%" ,top:"53%" ,left:"58%",overflow: 'hidden'}} onPress={    this.add2  } >
      <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"23%" ,top:"53%" ,left:"58%",overflow: 'hidden',borderRadius:40,borderWidth:3,borderColor:"white"}}>
      <View style={{ borderRadius:40, flexDirection: 'row'   ,   width:  this.state.heart,height:"100%" ,backgroundColor:"green"}}></View>
      <View style={{  flexDirection: 'row'   , width:"100%",height:"100%"  ,borderRadius:40,backgroundColor:"white"}}></View>
      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0,borderRadius:40,borderWidth:0,borderColor:"white"}} source={require('../imgs/heart.png')} />
      </View>
      </TouchableWithoutFeedback>
      <Text  style={{  position:"absolute" ,  width:"32%",height:"13%" ,top:"23%" ,left:"63%",color:"black" }}> Log a sexual interaction.</Text>




      <Text  style={{  position:"absolute" ,  width:"32%",height:"13%" ,top:"93%" ,left:"68%",color:"white" }}> {this.state.sex} </Text>


      <TouchableOpacity style={{position:"absolute" ,bottom:"2%",left:" 10%", width:50,height:  35}} onPress = {() => {this.setState({ isVisible:!this.state.isVisible})}} >
      <Text style={{width:"100%",textAlign:"center"}}>Close</Text>
      </TouchableOpacity>

      </View>


      </Modal>








      <Text style={{position:"absolute",top:this.getysmall(this.state.fertileday,-80),left:this.getxsmall(this.state.fertileday,-80) ,textAlign:"center",marginTop:20, fontSize:15, color:"green",justifyContent: "center",alignItems:"center"}}>Peak Fertility</Text>
      <Text style={{position:"absolute",top:this.getysmall(this.state.lengthOfBleeding-2,-80),left:this.getxsmall(this.state.lengthOfBleeding-2,-80) ,textAlign:"center",marginTop:20, fontSize:15, color:"red",justifyContent: "center",alignItems:"center"}}>period</Text>
      <Text style={{position:"absolute",top:this.getysmall(2,-80),left:this.getxsmall(2,-80) ,textAlign:"center",marginTop:20, fontSize:15, color:"yellow",justifyContent: "center",alignItems:"center"}}>PMS</Text>
      </View>


      <TouchableOpacity style={{ width:40,height:45,backgroundColor:"white",position:"absolute",top: height*0.25  ,left: width*0.05,borderRadius:5  }} onPress={() => this.swapScreens()}>
      <Image style={{ width: '100%', height:'100%' }} source={require('../imgs/cal.png')} />
      </TouchableOpacity>

      <View style={{  position:"absolute",top:50,width:"100%",height:"100%"}}>


      <Calendar
      style={{
        position:"absolute",top:this.controlheights("cal", height*0.25) ,left:width*0.1 ,width:width*0.8,height:height*0.55,borderRadius:5


      }}
      markedDates={{
  '2020-11-02': {selected: true , startingDay: true, color: 'rgb(255, 231 , 106)'},
  '2020-11-03': { selected: true , color: 'rgb(255, 231 , 106)'},
  '2020-11-04': {selected: true ,  color: 'rgb(255, 231 , 106)'},
  '2020-11-05': {selected: true ,   color: 'rgb(255, 231 , 106)'},
  '2020-11-06': {  selected: true , color: 'rgb(245,125,100)'},
  '2020-11-07': {  selected: true , color: 'rgb(245,125,100)'},
  '2020-11-08': {  selected: true , color: 'rgb(245,125,100)'},
  '2020-11-09': {  selected: true , color: 'rgb(245,125,100)'},
  '2020-11-10': {selected: true , endingDay: true, color: 'rgb(245,125,100)'},
  '2020-11-18': {selected: true , startingDay: true, color: 'rgb(165,199,139)'},
  '2020-11-19': {selected: true , color: 'rgb(165,199,139)' },
  '2020-11-20': {selected: true, color: 'rgb(165,199,139)'},
  '2020-11-21': {selected: true , color: 'rgb(165,199,139)' },
  '2020-11-22': {selected: true, color: 'lightblue'},
  '2020-11-23': {selected: true , color: 'rgb(165,199,139)' },
  '2020-11-24': {selected: true, endingDay: true, color: 'rgb(165,199,139)' },



}}
      markingType={'period'}
      />




      </View>







      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({








});
