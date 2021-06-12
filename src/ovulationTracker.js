/** @format */
import React from 'react';
import
{
    Modal,
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ScrollView,
    Button,
    SafeAreaView
}
from 'react-native';
import
{
    Dimensions
}
from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'



import
{
    Calendar,
    CalendarList,
    Agenda
}
from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
const
{
    height
} = Dimensions.get('window');
const
{
    width
} = Dimensions.get('window');
import Moment from 'moment';
import DatePicker from 'react-native-datepicker'
import SyncStorage from 'sync-storage';
export default class Ovu extends React.Component
{
    //red rgb(245,125,100)
    //yellow rgb(255, 231 , 106)
    //grey rgb(204,197,187 )
    //green rgb(165,199.139 )
    //blue rgb(112,204,203)
    formatDate(date)
    {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if(month.length < 2)
            month = '0' + month;
        if(day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    formatDatevaraible(date, i)
    {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate() + i),
            year = d.getFullYear();
        if(month.length < 2)
            month = '0' + month;
        if(day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    formatDatevaraibleday(date, i)
    {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate() + i),
            year = d.getFullYear();
        if(month.length < 2)
            month = '0' + month;
        if(day.length < 2)
            day = '0' + day;
        return day;
    }
    constructor(props)
    {
        super(props);
        var thismonth = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ');
        var todaysnumber = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
        var minus1 = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[2];
        var minus2 = new Date(new Date().setDate(new Date().getDate() - 2)).toString().split(' ')[2];
        var minus3 = new Date(new Date().setDate(new Date().getDate() - 3)).toString().split(' ')[2];
        var minus4 = new Date(new Date().setDate(new Date().getDate() - 4)).toString().split(' ')[2];
        var minus5 = new Date(new Date().setDate(new Date().getDate() - 5)).toString().split(' ')[2];
        var minus6 = new Date(new Date().setDate(new Date().getDate() - 6)).toString().split(' ')[2];
        var minus7 = new Date(new Date().setDate(new Date().getDate() - 7)).toString().split(' ')[2];
        var pluss1 = new Date(new Date().setDate(new Date().getDate() + 1)).toString().split(' ')[2];
        var todaysday = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[0];
        var minus1day = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[0];
        var minus2day = new Date(new Date().setDate(new Date().getDate() - 2)).toString().split(' ')[0];
        var minus3day = new Date(new Date().setDate(new Date().getDate() - 3)).toString().split(' ')[0];
        var minus4day = new Date(new Date().setDate(new Date().getDate() - 4)).toString().split(' ')[0];
        var minus5day = new Date(new Date().setDate(new Date().getDate() - 5)).toString().split(' ')[0];
        var minus6day = new Date(new Date().setDate(new Date().getDate() - 6)).toString().split(' ')[0];
        var minus7day = new Date(new Date().setDate(new Date().getDate() - 7)).toString().split(' ')[0];
        var pluss1day = new Date(new Date().setDate(new Date().getDate() + 1)).toString().split(' ')[0];
        var dateoflast = SyncStorage.get('dateOfLastPeriodBegining');
        var tempbool = false;
        if(dateoflast != undefined)
        {
            tempbool = true;
        }
        this.callFunc = this.callFunc.bind(this);
        var names = [];
        var numberofbubbles = 28;
        var fertileday = 18;
        var lengthOfBleeding = 8;
        var gapRedToGreen = 5;
        var fertileLength = 10;
        var gapGreenToRed = 5;
        for(var i = 1; i <= numberofbubbles; i++)
        {
            if(i == fertileday)
            {
                names.push([i, false, "rgb(112,114,283)", 34, this.formatDatevaraible(dateoflast, i)]);
            }
            else if(i < lengthOfBleeding)
            {
                if(i < lengthOfBleeding / 2)
                {
                    names.push([i, false, "rgb(255, 231 , 106)", 25 + i, this.formatDatevaraible(dateoflast, i)]);
                }
                else if(i >= lengthOfBleeding / 2)
                {
                    names.push([i, false, "rgb(245,125,100)", 25 + (lengthOfBleeding / 1.8) - i, this.formatDatevaraible(dateoflast, i)]);
                }
            }
            else if(i < lengthOfBleeding + gapRedToGreen)
            {
                names.push([i, false, "rgb(204,197,187 )", 20, this.formatDatevaraible(dateoflast, i)]);
            }
            else if(i < lengthOfBleeding + gapRedToGreen + fertileLength)
            {
                if(i <= fertileday)
                {
                    names.push([i, false, "rgb(165,199,139 )", 25 + ((i - gapRedToGreen - lengthOfBleeding)) * 2, this.formatDatevaraible(dateoflast, i)]);
                }
                else if(i >= fertileday)
                {
                    names.push([i, false, "rgb(165,199,139 )", 25 + ((fertileLength / 2) - (i - fertileday)) * 2, this.formatDatevaraible(dateoflast, i)]);
                }
                //    names.push([i,false,"green",30]);
            }
            else
            {
                names.push([i, false, "rgb(204,197,187 )", 20, this.formatDatevaraible(dateoflast, i)]);
            }
        }
        var startday = dateoflast;
        var calenderData = names;
        this.state = {
            numberofbubbles: numberofbubbles,
            lengthOfBleeding: lengthOfBleeding,
            showDidYouKnow: false,
            fertileLength: fertileLength,
            gapRedToGreen: gapRedToGreen,
            gapGreenToRed: gapGreenToRed,
            fertileday: fertileday,
            info: names,
            cycleposition: 7,
            calenderData: calenderData,
            desiredscreen: "circ",
            hasData: tempbool,
            isVisible: false,
            width: "0%",
            heart: "0%",
            label: "none",
            sex: "none",
            startingDay: dateoflast,
            heightOfGraph: 1,
            todaysnumber: todaysnumber,
            minus1: minus1,
            minus2: minus2,
            minus3: minus3,
            minus4: minus4,
            minus5: minus5,
            minus6: minus6,
            temp:37,
              isVisible: false,
            minus7: minus7,
            CurrrentDayOfCycle: 0
        };
        this.state.CurrrentDayOfCycle = this.getCurrrentDayOfCycle();
    }
    getLeftDidYouKnow()
    {
        if(this.state.showDidYouKnow)
        {
            return 5;
        }
        else
        {
            return 99999;
        }
    }
    getCurrrentDayOfCycle()
    {
        var day = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[2];
        var month = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[1];
        var year = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[3];
        var d = new Date(this.state.startingDay);
        for(var i = 0; i < 35; i++)
        {
            var day = new Date(new Date().setDate(new Date().getDate() - i)).toString().split(' ')[2];
            var month = new Date(new Date().setDate(new Date().getDate() - i)).toString().split(' ')[1];
            var year = new Date(new Date().setDate(new Date().getDate() - i)).toString().split(' ')[3];
            var dayalt = new Date(d).toString().split(' ')[2];
            var monthalt = new Date(d).toString().split(' ')[1];
            var yearalt = new Date(d).toString().split(' ')[3];
            if(day == dayalt && month == monthalt && year == yearalt)
            {
                //  this.setState({
                //      CurrrentDayOfCycle: i,
                //  });
                console.log(i);
                return i;
            }
        }
    }
    showDidYouKnow()
    {
        this.setState(
        {
            showDidYouKnow: !this.state.showDidYouKnow,
        });
    }
    callFunc()
    {
        this.setState(
        {
            isVisible: !this.state.isVisible
        });
    }
    getDate()
    {
        var thismonth = new Date(new Date().setDate(new Date().getDate())).toDateString();
        var todaysnumber = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
        var d = new Date("2015-03-25");
        return thismonth;
    }
    getxsmall(i, offset)
    {
        var r = (width / 2) + offset;
        var gap = 360 / 28;
        var x = (width - 30) / 2 + r * Math.cos((i * gap) * Math.PI / 180);
        //  console.log("debugging date format- "+ new Date().getDate());
        return x;
    }
    onButtonPressweightpluss = () => {


  		this.setState({
  			temp: this.state.temp+0.1
  		});


  	}
  	onButtonPressweightmin = () => {
  		this.setState({
  			temp: this.state.temp-0.1
  		});

  	}
    getysmall(i, offset)
    {
        var r = (width / 2) + offset;
        var gap = 360 / 28;
        var y = height / 2 + r * Math.sin((i * gap) * Math.PI / 180);
        return y;
    }
    getBorder(i)
    {
        if(i == this.state.cycleposition)
        {
            return 2;
        }
        else
        {
            return 0;
        }
    }
    getx(i)
    {
        var r = (width - 60) / 2;
        var gap = 360 / 28;
        var x = (width - 30) / 2 + r * Math.cos((i * gap) * Math.PI / 180);
        return x;
    }
    gety(i)
    {
        var r = (width - 60) / 2;
        var gap = 360 / 28;
        var y = height / 2 + r * Math.sin((i * gap) * Math.PI / 180);
        return y;
    }
    controlheights(inputName, desiredheight)
    {
        if(this.state.hasData == false && (inputName == "circ" || inputName == "cal"))
        {
            return 5000;
        }
        if(this.state.desiredscreen === inputName || (this.state.hasData == false && inputName == "data"))
        {
            return desiredheight;
        }
        else
        {
            return 5000;
        }
        //return  desiredheight;
    }
    swapScreens()
    {
        if(this.state.desiredscreen == "circ")
        {
            this.setState(
            {
                desiredscreen: "cal"
            });
        }
        if(this.state.desiredscreen == "cal")
        {
            this.setState(
            {
                desiredscreen: "circ"
            });
        }
    }
    add = () =>
    {
        if(this.state.width == "34%")
        {
            this.setState(
            {
                width: "63%",
                label: "med"
            });
        }
        if(this.state.width == "63%")
        {
            this.setState(
            {
                width: "100%",
                label: "high"
            });
        }
        if(this.state.width == "100%")
        {
            this.setState(
            {
                width: "0%",
                label: "none"
            });
        }
        if(this.state.width == "0%")
        {
            this.setState(
            {
                width: "34%",
                label: "low"
            });
        }
    }
    add2 = () =>
    {
        if(this.state.heart == "0%")
        {
            this.setState(
            {
                heart: "100%",
                sex: "logged"
            });
        }
        if(this.state.heart == "100%")
        {
            this.setState(
            {
                heart: "0%",
                sex: "none"
            });
        }
    }
    updatedate(date)
    {
        console.log(date);
        this.setState(
        {
            date: date,
            hasData: true
        });
        SyncStorage.set('dateOfLastPeriodBegining', date);
    }
    switchGraphDisplay(date)
    {
        if(this.state.heightOfGraph == 1)
        {
            this.setState(
            {
                heightOfGraph: 2
            });
        }
        else
        {
            this.setState(
            {
                heightOfGraph: 1
            });
        }
    }
    render()
    {
        const vacation = {
            key: 'vacation',
            color: 'red'
        };
        const massage = {
            key: 'massage',
            color: 'blue'
        };
        const workout = {
            key: 'workout',
            color: 'green'
        };
        const calenderDatac = {};
        for(var i = 1; i <= this.state.numberofbubbles; i++)
        {
            if(i == this.state.fertileday)
            {
                //  names.push([i,false,"rgb(112,204,203)",34,this.formatDatevaraible(dateoflast,i)]);
                calenderDatac[this.formatDatevaraible(this.state.startingDay, i)] = {
                    selected: true,
                    color: 'rgb(112,204,203)'
                };
            }
            else if(i < this.state.lengthOfBleeding)
            {
                if(i < this.state.lengthOfBleeding / 2)
                {
                    //      names.push([i,false,"rgb(255, 231 , 106)",25+i,this.formatDatevaraible(dateoflast,i)]);
                    calenderDatac[this.formatDatevaraible(this.state.startingDay, i)] = {
                        selected: true,
                        color: 'rgb(245,125,100)'
                    };
                }
                else if(i >= this.state.lengthOfBleeding / 2)
                {
                    //  names.push([i,false,"rgb(245,125,100)",25 +(this.state.lengthOfBleeding/1.8)-i,this.formatDatevaraible(dateoflast,i)]);
                    calenderDatac[this.formatDatevaraible(this.state.startingDay, i)] = {
                        selected: true,
                        color: 'rgb(245,125,100)'
                    };
                }
            }
            else if(i < this.state.lengthOfBleeding + this.state.gapRedToGreen)
            {
                //  names.push([i,false,"rgb(204,197,187 )",20,this.formatDatevaraible(dateoflast,i)]);
                calenderDatac[this.formatDatevaraible(this.state.startingDay, i)] = {
                    selected: true,
                    color: 'lightgrey'
                };
            }
            else if(i < this.state.lengthOfBleeding + this.state.gapRedToGreen + this.state.fertileLength)
            {
                if(i <= this.state.fertileday)
                {
                    //names.push([i,false,"rgb(165,199,139 )",25+((i-gapRedToGreen-lengthOfBleeding))*2,this.formatDatevaraible(dateoflast,i)]);
                    calenderDatac[this.formatDatevaraible(this.state.startingDay, i)] = {
                        selected: true,
                        color: 'rgb(165,199,139)'
                    };
                }
                else if(i >= this.state.fertileday)
                {
                    //    names.push([i,false,"rgb(165,199,139 )",25 +((fertileLength/2)-(i-fertileday))*2,this.formatDatevaraible(dateoflast,i)]);
                    calenderDatac[this.formatDatevaraible(this.state.startingDay, i)] = {
                        selected: true,
                        color: 'rgb(165,199,139)'
                    };
                }
                //    names.push([i,false,"green",30]);
            }
            else
            {
                //  names.push([i,false,"rgb(204,197,187 )",20,this.formatDatevaraible(dateoflast,i)]);
                calenderDatac[this.formatDatevaraible(this.state.startingDay, i)] = {
                    selected: true,
                    color: 'lightgrey'
                };
            }
        }
        return (
        <SafeAreaView style={{width:"100%",height:"100%"}}>

        <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: height-70,resizeMode: 'stretch',top:0 }} source={require('../imgs/revision3/newovuback.jpg')} />


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





               <View  style={{ position:"absolute",   width:"100%",height:"23%"  ,top: this.controlheights("circ",height * 0.33) ,left:"0%" }}>
                <Image style={{ position:"absolute",   width: width*0.84, height: width*0.84,resizeMode: 'stretch',marginLeft:"8%", marginTop:-width*0.28}} source={require('../imgs/revision3/ovuback.png')} />

                 <Text style={{width:"100%",textAlign:"center",color:"white",fontSize:30 }}>{this.getDate()}</Text>
                 <Text style={{width:"100%",textAlign:"center",color:"white",fontSize:30 }}>Day {this.state.CurrrentDayOfCycle}/28</Text>
                 <View  style={{  marginTop:20,   width:"100%",height:"23%" ,justifyItems:"center",justifyContent:"center"}}>
                  <Image style={{ justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'contain' }} source={require('../imgs/revision3/blooddd.png')} />
                  <Text style={{marginTop:20,   width:"100%",textAlign:"center",color:"white",fontSize:16 }}>You are on a light flow today.</Text>
                 </View>
              </View>






                <View  style={{ position:"absolute",   width:"120%",height:"23%" ,top:"73%" ,left:"-10%",overflow: 'hidden',borderRadius:40 }}>

                  <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"68%" ,top:"23%" ,left:"11%",overflow: 'hidden'}} onPress={    this.add  } >
                    <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"68%" ,top:"23%" ,left:"11%",overflow: 'hidden',borderRadius:22,borderWidth:3,borderColor:"white"}}>
                      <View style={{  flexDirection: 'row'   ,   width:  this.state.width,height:"100%" ,backgroundColor:"red"}}></View>
                      <View style={{  flexDirection: 'row'   , width:"94%",height:"100%"  ,backgroundColor:"white"}}></View>
                      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0,borderRadius:22,borderWidth:0,borderColor:"white"}} source={require('../imgs/tttt.png')} />
                    </View>
                  </TouchableWithoutFeedback>
               <TouchableWithoutFeedback style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"68%" ,top:"23%" ,left:"58%",overflow: 'hidden'}} onPress={    this.add2  } >
                    <View  style={{ position:"absolute", flexDirection: 'row'   ,  width:"32%",height:"68%" ,top:"23%" ,left:"58%",overflow: 'hidden',borderRadius:22,borderWidth:3,borderColor:"white"}}>
                      <View style={{ borderRadius:22, flexDirection: 'row'   ,   width:  this.state.heart,height:"100%" ,backgroundColor:"red"}}></View>
                      <View style={{  flexDirection: 'row'   , width:"100%",height:"100%"  ,borderRadius:40,backgroundColor:"white"}}></View>
                      <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",  width: '100%', height: "100%",resizeMode: 'stretch',top:0 ,left:0,borderRadius:22,borderWidth:0,borderColor:"white"}} source={require('../imgs/heart.png')} />
                    </View>
                  </TouchableWithoutFeedback>
               </View>






               <View  style={{   position:"absolute",   top: height*0.56 ,left:width*0.75 ,  width:width*0.2,height:height*0.1 ,justifyItems:"center",justifyContent:"center"}}>

               <TouchableOpacity   style={{  width: '100%', height: "100%" }} onPress = {() => {this.setState({ isVisible : true})}}   >
              <Image style={{   width: '100%', height: "100%",resizeMode: 'contain' }} source={require('../imgs/revision3/tempicon.png')} />
               </TouchableOpacity>

                <Text style={{marginTop:10,   width:"100%",textAlign:"center",color:"white",fontSize:14 }}>Basal body temperature</Text>
               </View>














                           <Modal
                                    animationType = {"fade"}
                                    transparent = {true}
                                    visible = {this.state.isVisible }
                                    onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
                                    {/*All views of Modal*/}
                                    <View style = {{

                                       backgroundColor : "white",
                                       height: height*0.5 ,
                                       width: '90%',
                                       borderRadius:10,
                                       borderWidth: 2,

                                       borderColor: "lightblue",
                                       marginTop: '35%',
                                       marginLeft: '5%',

                                        }}>

                 <Text style={{ textAlign: 'center',fontSize: 20,width:"100%", height:50 ,color:"black",marginTop: 5}}>Basal body temperature</Text>

   <View style={{   flexDirection:"row"  }}>
                 <LineChart

                 data={{
                   labels: [
                     '',
                     '',
                     '',
                     '',
                   ],
                   datasets: [
                     {
                       data: [37.1,37.2,37.4, 37.2],
                       strokeWidth: 1,
                     },
                   ],
                 }}
                 width={Dimensions.get('window').width *0.54}
                 height={Dimensions.get('window').height *0.2}

                 chartConfig={{

                   backgroundColor: 'rgba(256, 256, 256,256)',
                   backgroundGradientFrom:  'rgba(256, 256, 256,256)',
                   backgroundGradientTo:   'rgba(256, 256, 256,256)',
                   decimalPlaces: 1,
                   color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                   style: {
                     borderRadius: 16,
                   },
                 }}
                 style={{
                   marginVertical: 8,
                   borderRadius: 16,
                   marginLeft:"2%"
                 }}
                 />



                 <View style={{ marginLeft:"5%", flexDirection:"row" ,backgroundColor:"rgb(237,124,124)",width: width*0.25,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9  , height: height*0.09  ,minHeight:80}}  >



                 <View style={{ marginLeft:"4%",    height:"100%"  ,justifyContent: 'flex-end',alignItems: 'flex-end' ,marginBottom:3, textAlign:"center"}} >
                   <Text  style={{fontSize:this.state.textScale,color:"white",height:"50%"  , textAlign:"center"  ,marginBottom:6, width :"100%"}}>{this.state.temp.toFixed(1)} °C</Text>

                 </View>

                   <View style={{ marginLeft:18,    height:"100%" ,justifyContent: 'flex-end',alignItems: 'flex-end' }} >
                     <TouchableOpacity style={{width:width*0.08, height:  width*0.08   }}  onPress={this.onButtonPressweightpluss}  >
                       <Image style={{ height: '80%',  width:'80%'  ,  resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/page-2/up.png')} />
                     </TouchableOpacity>
                     <TouchableOpacity style={{width:width*0.08, height:  width*0.08  }}  onPress={this.onButtonPressweightmin}  >
                       <Image style={{ height: '80%',  width:'80%'  ,   resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/page-2/down.png')} />
                     </TouchableOpacity>
                   </View>

                 </View>



   </View>











    <Image style={{ marginLeft:"1%",  width: '98%', height: "50%",resizeMode: 'contain',position:"absolute",bottom:0 }} source={require('../imgs/revision3/chart.jpg')} />
















                            < View  style={{   position: 'absolute',left: width*0.1 ,top: height*0.4 ,height:90, width: width  , alignItems: "center", justifyContent: "center"}}  >
                                   < View  style={{   width: width/2  }}  >
                                        <Button    title="Submit" onPress = {() => {this.setState({ isVisible :!this.state.isVisible })}}/>
                            </View>
                      </View>
                                    </View>
                                  </Modal>




























































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
               <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}>
               <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.todaysnumber}</Text>
               </TouchableOpacity>

               </View>

               {/* bascl nutton*/}
               <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
                 <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
               </TouchableOpacity>

               <View style={{     position:"absolute",top:height*0.1 ,     right:this.getLeftDidYouKnow(),     borderColor: 'skyblue',     borderWidth:2 ,     minHeight: 35,     backgroundColor:"white",     height: 151  ,     borderRadius:19,     width:240 }}>

                 <View style={{flexDirection: 'row'  ,   height: 50      }}>

                   <Image style={{borderColor: '#ffffff',  borderWidth:111*0.04, width:50, height:50 , borderRadius:27  }}  source={require('../imgs/drdasyiconRevised.jpg')} />
                   <Text style={{  marginLeft:15,  fontSize: 20,color:"black"     }}>DID YOU KNOW</Text>

                 </View>
                 <Text style={{   fontSize: 20,color:"black", width:"95%" ,marginLeft:"5%"    }}>Did you know that meditation helps to reduce blood pressure?</Text>

               </View>

               <TouchableOpacity style={{position:"absolute"  ,top:height*-0.02 ,right:-20,     width:width*0.28, height:  height*0.14 ,justifyContent: 'center',alignItems: 'center'  }}  onPress={() =>  this.showDidYouKnow( )} >
            <Image style={{ height: '100%',    resizeMode:"contain" }} source={require('../imgs/NEWIMAGES/qbal.png')} />

               </TouchableOpacity>





                </SafeAreaView>





        );
    }
}
const styles = StyleSheet.create(
{});
