/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import{ Dimensions}from 'react-native';
const { width,height } = Dimensions.get('window');
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import SyncStorage from 'sync-storage';
import
{
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
}
from 'react-native-chart-kit';
export default class  Food extends React.Component {

  constructor(props ) {

    super(props);

    var month = new Date(new Date().setDate(new Date().getDate()    )).toString().split(' ')[1];
    var year = new Date(new Date().setDate(new Date().getDate()     )).toString().split(' ')[3];
    var day = new Date(new Date().setDate(new Date().getDate()    )).toString().split(' ')[2];

    var thismonth = new Date(new Date().setDate(new Date().getDate() - 1)).toString().split(' ')[1];
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
    this.state={
        pluss1: pluss1,
        todaysnumber: todaysnumber,
        minus1: minus1,
        minus2: minus2,
        minus3: minus3,
        minus4: minus4,
        minus5: minus5,
        minus6: minus6,
        minus7: minus7,
      currentFocus:"Calories",
      todaysKcal:SyncStorage.get('todaysKcal' + month + year + day ),
      todaysFat:SyncStorage.get('todaysFat' + month + year + day ),
      todaysCarbs:SyncStorage.get('todaysCarbs' + month + year + day ),
      todaysProtein:SyncStorage.get('todaysProtein' + month + year + day ),
      breakfastKcal:SyncStorage.get('breakfastKcal' + month + year + day ),
      breakfastFat:SyncStorage.get('breakfastFat' + month + year + day ),
      breakfastCarbs:SyncStorage.get('breakfastCarbs' + month + year + day ),
      breakfastProtein:SyncStorage.get('breakfastProtein' + month + year + day ),
      lunchKcal:SyncStorage.get('lunchKcal' + month + year + day ),
      lunchFat:SyncStorage.get('lunchFat' + month + year + day ),
      lunchCarbs:SyncStorage.get('lunchCarbs' + month + year + day ),
      lunchProtein:SyncStorage.get('lunchProtein' + month + year + day ),
      dinnerKcal:SyncStorage.get('dinnerKcal' + month + year + day ),
      dinnerFat:SyncStorage.get('dinnerFat' + month + year + day ),
      dinnerCarbs:SyncStorage.get('dinnerCarbs' + month + year + day ),
      dinnerProtein:SyncStorage.get('dinnerProtein' + month + year + day ),
      snacksKcal:SyncStorage.get('snacksKcal' + month + year + day ),
      snacksFat:SyncStorage.get('snacksFat' + month + year + day ),
      snacksCarbs:SyncStorage.get('snacksCarbs' + month + year + day ),
      snacksProtein: SyncStorage.get('snacksProtein' + month + year + day ),
      distanceLeft: "0%",
      dayMinus:0

    }



    if(SyncStorage.get('todaysKcal' + month + year + day ) ==  undefined  ){this.state.todaysKcal=0;   }
    if(SyncStorage.get('todaysFat' + month + year + day ) ==  undefined  ){this.state.todaysFat=0;   }
    if(SyncStorage.get('todaysCarbs' + month + year + day ) ==  undefined  ){this.state.todaysCarbs=0;   }
    if(SyncStorage.get('todaysProtein' + month + year + day ) ==  undefined  ){this.state.todaysProtein=0;   }

    if(SyncStorage.get('breakfastKcal' + month + year + day ) ==  undefined  ){this.state.breakfastKcal=0;   }
    if(SyncStorage.get('breakfastFat' + month + year + day ) ==  undefined  ){this.state.breakfastFat=0;   }
    if(SyncStorage.get('breakfastCarbs' + month + year + day ) ==  undefined  ){this.state.breakfastCarbs=0;   }
    if(SyncStorage.get('breakfastProtein' + month + year + day ) ==  undefined  ){this.state.breakfastProtein=0;   }

    if(SyncStorage.get('lunchKcal' + month + year + day ) ==  undefined  ){this.state.lunchKcal=0;   }
    if(SyncStorage.get('lunchFat' + month + year + day ) ==  undefined  ){this.state.lunchFat=0;   }
    if(SyncStorage.get('lunchCarbs' + month + year + day ) ==  undefined  ){this.state.lunchCarbs=0;   }
    if(SyncStorage.get('lunchProtein' + month + year + day ) ==  undefined  ){this.state.lunchProtein=0;   }

    if(SyncStorage.get('dinnerKcal' + month + year + day ) ==  undefined  ){this.state.dinnerKcal=0;   }
    if(SyncStorage.get('dinnerFat' + month + year + day ) ==  undefined  ){this.state.dinnerFat=0;   }
    if(SyncStorage.get('dinnerCarbs' + month + year + day ) ==  undefined  ){this.state.dinnerCarbs=0;   }
    if(SyncStorage.get('dinnerProtein' + month + year + day ) ==  undefined  ){this.state.dinnerProtein=0;   }

    if(SyncStorage.get('snacksKcal' + month + year + day ) ==  undefined  ){this.state.snacksKcal=0;   }
    if(SyncStorage.get('snacksFat' + month + year + day ) ==  undefined  ){this.state.snacksFat=0;   }
    if(SyncStorage.get('snacksCarbs' + month + year + day ) ==  undefined  ){this.state.snacksCarbs=0;   }
    if(SyncStorage.get('snacksProtein' + month + year + day ) ==  undefined  ){this.state.snacksProtein=0;   }








  }


  getGraphData = () =>
  {
    var month = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus  )).toString().split(' ')[1];
    var year = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus    )).toString().split(' ')[3];
    var day = new Date(new Date().setDate(new Date().getDate() - this.state.dayMinus    )).toString().split(' ')[2];
    var tmparray= [];
    for(var i =0; i<= 23 ; i+=2)
    {
      var tmp=  SyncStorage.get('waterTracker' + month + year + day + i);
      if(tmp == undefined)
      {
        tmp=0;
      }
      tmparray.push(tmp);
    }
      return tmparray;
  }
updateFocus = (id) =>
{
  console.log(id);
      if(id === this.state.currentFocus)
      {
          this.setState({currentFocus:  "Calories"    });
      }else

    if(id == "Protein"){
      this.setState({currentFocus:  "Protein"    });
    }else
    if(id == "Fat"){
      this.setState({currentFocus:  "Fat"    });
    }else
    if(id == "Carbohydrates"){
      this.setState({currentFocus:  "Carbohydrates"    });
    }
}
getLeft(i)
{
    if (i == 0)
    {
        return this.state.distanceLeft;
    }
    if (i == 1)
    {
        return this.state.distanceLeft;
    }
    if (i == 3 && this.state.distanceLeft == "110%")
    {
        return "0%";
    }
    else if (i == 3 && this.state.distanceLeft == "0%")
    {
        return "110%";
    }
}
changetograph = (i) =>
{



    this.setState({
        distanceLeft: "110%",
        dayMinus:i
    });
}
changetotracker = () =>
{
  console.log("a");
    this.setState({
        distanceLeft: "0%",  dayMinus:0
    });
}



getPercentage = () =>
{


  if(this.state.currentFocus == "Calories"){
    return Math.round( ( this.state.todaysKcal/2000  ) *100 );
  }
  if(this.state.currentFocus == "Protein"){
    return  Math.round((this.state.todaysProtein /100)*100);
  }
  if(this.state.currentFocus == "Carbohydrates"){
    return Math.round((  this.state.todaysCarbs/275  )*100);
  }
  if(this.state.currentFocus == "Fat"){
    return Math.round((this.state.todaysFat/50)*100);
  }



}





addToFocused= (addOrSub,id) =>
{

    var fatAdder= 1;
    var protineadder=5;
    var carbAdder=10;
    var calAdder=50;


    if(id == "breakfast")
    {
      if(this.state.currentFocus == "Calories")
      {
    //    if( this.state.breakfastKcal==NaN  ){this.setState({breakfastKcal: calAdder});  }
        if(addOrSub =="-" && this.state.breakfastKcal>=calAdder ){  this.setState({breakfastKcal: this.state.breakfastKcal -calAdder ,   todaysKcal: this.state.todaysKcal -calAdder   }); }
        if(addOrSub =="+"){  this.setState({breakfastKcal: this.state.breakfastKcal +calAdder    ,   todaysKcal: this.state.todaysKcal  +calAdder  }); }
      }
      if(this.state.currentFocus == "Protein")
      {
        if(addOrSub =="-" && this.state.breakfastProtein>=protineadder ){  this.setState({breakfastProtein: this.state.breakfastProtein -protineadder ,   todaysProtein: this.state.todaysProtein -protineadder   }); }
        if(addOrSub =="+"){  this.setState({breakfastProtein: this.state.breakfastProtein +protineadder    ,   todaysProtein: this.state.todaysProtein  +protineadder  }); }

      }
      if(this.state.currentFocus == "Carbohydrates")
      {
        if(addOrSub =="-" && this.state.breakfastCarbs>=carbAdder ){  this.setState({breakfastCarbs: this.state.breakfastCarbs -carbAdder ,   todaysProtein: this.state.todaysProtein -carbAdder   }); }
        if(addOrSub =="+"){  this.setState({breakfastCarbs: this.state.breakfastCarbs +carbAdder    ,   todaysCarbs: this.state.todaysCarbs  +carbAdder  }); }
      }
      if(this.state.currentFocus == "Fat")
      {
        if(addOrSub =="-" && this.state.breakfastFat>=fatAdder ){  this.setState({breakfastFat: this.state.breakfastFat -fatAdder ,   todaysFat: this.state.todaysFat -fatAdder   }); }
        if(addOrSub =="+"){  this.setState({breakfastFat: this.state.breakfastFat +fatAdder    ,   todaysFat: this.state.todaysFat  +fatAdder  }); }
      }
    }




    if(id == "lunch")
    {
      if(this.state.currentFocus == "Calories")
      {
        if(addOrSub =="-" && this.state.lunchKcal>=calAdder ){  this.setState({lunchKcal: this.state.lunchKcal -calAdder ,   todaysKcal: this.state.todaysKcal -calAdder   }); }
        if(addOrSub =="+"){  this.setState({lunchKcal: this.state.lunchKcal +calAdder    ,   todaysKcal: this.state.todaysKcal  +calAdder  }); }
      }
      if(this.state.currentFocus == "Protein")
      {
        if(addOrSub =="-" && this.state.lunchProtein>=protineadder ){  this.setState({lunchProtein: this.state.lunchProtein -protineadder ,   todaysProtein: this.state.todaysProtein -protineadder   }); }
        if(addOrSub =="+"){  this.setState({lunchProtein: this.state.lunchProtein +protineadder    ,   todaysProtein: this.state.todaysProtein  +protineadder  }); }

      }
      if(this.state.currentFocus == "Carbohydrates")
      {
        if(addOrSub =="-" && this.state.lunchCarbs>=carbAdder ){  this.setState({lunchCarbs: this.state.lunchCarbs -carbAdder ,   todaysProtein: this.state.todaysProtein -carbAdder   }); }
        if(addOrSub =="+"){  this.setState({lunchCarbs: this.state.lunchCarbs +carbAdder    ,   todaysCarbs: this.state.todaysCarbs  +carbAdder  }); }
      }
      if(this.state.currentFocus == "Fat")
      {
        if(addOrSub =="-" && this.state.lunchFat>=fatAdder ){  this.setState({lunchFat: this.state.lunchFat -fatAdder ,   todaysFat: this.state.todaysFat -fatAdder   }); }
        if(addOrSub =="+"){  this.setState({lunchFat: this.state.lunchFat +fatAdder    ,   todaysFat: this.state.todaysFat  +fatAdder  }); }
      }
    }







    if(id == "dinner")
    {
      if(this.state.currentFocus == "Calories")
      {
        if(addOrSub =="-" && this.state.dinnerKcal>=calAdder ){  this.setState({dinnerKcal: this.state.dinnerKcal -calAdder ,   todaysKcal: this.state.todaysKcal -calAdder   }); }
        if(addOrSub =="+"){  this.setState({dinnerKcal: this.state.dinnerKcal +calAdder    ,   todaysKcal: this.state.todaysKcal  +calAdder  }); }
      }
      if(this.state.currentFocus == "Protein")
      {
        if(addOrSub =="-" && this.state.dinnerProtein>=protineadder ){  this.setState({dinnerProtein: this.state.dinnerProtein -protineadder ,   todaysProtein: this.state.todaysProtein -protineadder   }); }
        if(addOrSub =="+"){  this.setState({dinnerProtein: this.state.dinnerProtein +protineadder    ,   todaysProtein: this.state.todaysProtein  +protineadder  }); }

      }
      if(this.state.currentFocus == "Carbohydrates")
      {
        if(addOrSub =="-" && this.state.dinnerCarbs>=carbAdder ){  this.setState({dinnerCarbs: this.state.dinnerCarbs -carbAdder ,   todaysProtein: this.state.todaysProtein -carbAdder   }); }
        if(addOrSub =="+"){  this.setState({dinnerCarbs: this.state.dinnerCarbs +carbAdder    ,   todaysCarbs: this.state.todaysCarbs  +carbAdder  }); }
      }
      if(this.state.currentFocus == "Fat")
      {
        if(addOrSub =="-" && this.state.dinnerFat>=fatAdder ){  this.setState({dinnerFat: this.state.dinnerFat -fatAdder ,   todaysFat: this.state.todaysFat -fatAdder   }); }
        if(addOrSub =="+"){  this.setState({dinnerFat: this.state.dinnerFat +fatAdder    ,   todaysFat: this.state.todaysFat  +fatAdder  }); }
      }
    }














    if(id == "snacks")
    {
      if(this.state.currentFocus == "Calories")
      {
        if(addOrSub =="-" && this.state.snacksKcal>=calAdder ){  this.setState({snacksKcal: this.state.snacksKcal -calAdder ,   todaysKcal: this.state.todaysKcal -calAdder   }); }
        if(addOrSub =="+"){  this.setState({snacksKcal: this.state.snacksKcal +calAdder    ,   todaysKcal: this.state.todaysKcal  +calAdder  }); }
      }
      if(this.state.currentFocus == "Protein")
      {
        if(addOrSub =="-" && this.state.snacksProtein>=protineadder ){  this.setState({snacksProtein: this.state.snacksProtein -protineadder ,   todaysProtein: this.state.todaysProtein -protineadder   }); }
        if(addOrSub =="+"){  this.setState({snacksProtein: this.state.snacksProtein +protineadder    ,   todaysProtein: this.state.todaysProtein  +protineadder  }); }

      }
      if(this.state.currentFocus == "Carbohydrates")
      {
        if(addOrSub =="-" && this.state.snacksCarbs>=carbAdder ){  this.setState({snacksCarbs: this.state.snacksCarbs -carbAdder ,   todaysProtein: this.state.todaysProtein -carbAdder   }); }
        if(addOrSub =="+"){  this.setState({snacksCarbs: this.state.snacksCarbs +carbAdder    ,   todaysCarbs: this.state.todaysCarbs  +carbAdder  }); }
      }
      if(this.state.currentFocus == "Fat")
      {
        if(addOrSub =="-" && this.state.snacksFat>=fatAdder ){  this.setState({snacksFat: this.state.snacksFat -fatAdder ,   todaysFat: this.state.todaysFat -fatAdder   }); }
        if(addOrSub =="+"){  this.setState({snacksFat: this.state.snacksFat +fatAdder    ,   todaysFat: this.state.todaysFat  +fatAdder  }); }
      }
    }




    var month = new Date(new Date().setDate(new Date().getDate()    )).toString().split(' ')[1];
    var year = new Date(new Date().setDate(new Date().getDate()    )).toString().split(' ')[3];
    var day = new Date(new Date().setDate(new Date().getDate()      )).toString().split(' ')[2];

    SyncStorage.set( 'todaysKcal' + month + year + day , this.state.todaysKcal + calAdder);
    SyncStorage.set( 'todaysFat' + month + year + day,this.state.todaysFat + fatAdder);
    SyncStorage.set( 'todaysCarbs' + month + year + day ,this.state.todaysCarbs + carbAdder);
    SyncStorage.set( 'todaysProtein' + month + year + day, this.state.todaysProtein + protineadder);

    SyncStorage.set( 'breakfastKcal' + month + year + day ,this.state.breakfastKcal + calAdder);
    SyncStorage.set( 'breakfastFat' + month + year + day ,this.state.breakfastFat+ fatAdder);
    SyncStorage.set( 'breakfastCarbs' + month + year + day,this.state.breakfastCarbs + carbAdder);
    SyncStorage.set( 'breakfastProtein' + month + year + day ,this.state.breakfastProtein + protineadder);

    SyncStorage.set( 'lunchKcal' + month + year + day,this.state.lunchKcal + calAdder);
    SyncStorage.set( 'lunchFat' + month + year + day, this.state.lunchFat+ fatAdder);
    SyncStorage.set( 'lunchCarbs' + month + year + day,this.state.lunchCarbs + carbAdder);
    SyncStorage.set( 'lunchProtein' + month + year + day,this.state.lunchProtein + protineadder);

    SyncStorage.set( 'dinnerKcal' + month + year + day,this.state.dinnerKcal + calAdder);
    SyncStorage.set( 'dinnerFat' + month + year + day, this.state.dinnerFat+ fatAdder);
    SyncStorage.set( 'dinnerCarbs' + month + year + day,this.state.dinnerCarbs + carbAdder);
    SyncStorage.set( 'dinnerProtein' + month + year + day,this.state.dinnerProtein );

    SyncStorage.set(   'snacksKcal' + month + year + day, this.state.snacksKcal + calAdder);
    SyncStorage.set( 'snacksFat' + month + year + day, this.state.snacksFat+ fatAdder);
    SyncStorage.set( 'snacksCarbs' + month + year + day, this.state.snacksCarbs + carbAdder);
    SyncStorage.set( 'snacksProtein' + month + year + day,this.state.snacksProtein  + protineadder);
}


// get the numerical value of the target thing
getCurrValue = (id) =>
{

  if(id == "total"){
    if(this.state.currentFocus == "Calories"){
      return this.state.todaysKcal;
    }
    if(this.state.currentFocus == "Protein"){
      return this.state.todaysProtein;
    }
    if(this.state.currentFocus == "Carbohydrates"){
      return this.state.todaysCarbs;
    }
    if(this.state.currentFocus == "Fat"){
      return this.state.todaysFat;
    }
  }

   if(id == "snacks"){
     if(this.state.currentFocus == "Calories"){
       return this.state.snacksKcal;
     }
     if(this.state.currentFocus == "Protein"){
       return this.state.snacksProtein;
     }
     if(this.state.currentFocus == "Carbohydrates"){
       return this.state.snacksCarbs;
     }
     if(this.state.currentFocus == "Fat"){
       return this.state.snacksFat;
     }
   }


   if(id == "dinner"){
     if(this.state.currentFocus == "Calories"){
       return this.state.dinnerKcal;
     }
     if(this.state.currentFocus == "Protein"){
       return this.state.dinnerProtein;
     }
     if(this.state.currentFocus == "Carbohydrates"){
       return this.state.dinnerCarbs;
     }
     if(this.state.currentFocus == "Fat"){
       return this.state.dinnerFat;
     }
   }




      if(id == "lunch"){
        if(this.state.currentFocus == "Calories"){
          return this.state.lunchKcal;
        }
        if(this.state.currentFocus == "Protein"){
          return this.state.lunchProtein;
        }
        if(this.state.currentFocus == "Carbohydrates"){
          return this.state.lunchCarbs;
        }
        if(this.state.currentFocus == "Fat"){
          return this.state.lunchFat;
        }
      }






            if(id == "breakfast"){
              if(this.state.currentFocus == "Calories"){
                return this.state.breakfastKcal;
              }
              if(this.state.currentFocus == "Protein"){
                return this.state.breakfastProtein;
              }
              if(this.state.currentFocus == "Carbohydrates"){
                return this.state.breakfastCarbs;
              }
              if(this.state.currentFocus == "Fat"){
                return this.state.breakfastFat;
              }
            }






}


//gets the outline colour for the 3 selectors
getColor(i)
{

  if(this.state.currentFocus == "Protein" && i ==  "Protein"){
    return  "red";
  }
  if(this.state.currentFocus == "Carbohydrates" && i ==  "Carbohydrates"){
    return "red";
  }
  if(this.state.currentFocus == "Fat" && i ==  "Fat"){
    return "red";
  }

    return "white";
}

getCircleColor( )
{

  if(this.state.currentFocus == "Protein" ){
    return  "rgb(0,156,255)";
  }
  if(this.state.currentFocus == "Carbohydrates" ){
    return  "rgb(240,216,53)";
  }
  if(this.state.currentFocus == "Fat" ){
    return  "rgb(255,211,77)";
  }

    return  "rgb(240,126,126)";
}







// for the manuall adder returns kcal or g depending on what the focus is
getUnits = () =>
{
   if(this.state.currentFocus == "Calories"){

     return "Cal";
   }else{
      return "g";
   }
}










  render() {
    const widthcirc = (Dimensions.get('window').width *0.7);
    return (

     <View  style={{  width: '100%', height: '100%' }} >
        <Image style={{position:"absolute",justifyContent: "center",alignItems:"center",top:0,left:0,  width: '100%', resizeMode: 'stretch', height: '100%' }} source={require('../imgs/NEWIMAGES/page-4/foodbackground.png')} />




              <View  style={{position:"absolute" ,  width: '100%', height: '100%' ,left:this.getLeft(1),top:"0%",overflow:"hidden" }} >




{/* large*/}
<View style={{ position:"absolute",top: height*0.28 , justifyContent: "center",alignItems:"center",left:  width*0.03,    backgroundColor:"white", height: height*0.335  ,width: width*0.65,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }}  >

      <Text  style={{fontSize:height*0.03 ,color:"black" ,marginLeft:3   }}>Add {this.state.currentFocus}</Text>

      <AnimatedCircularProgress
        size={ width*0.45}
        width={ width*0.04299}
        fill={this.getPercentage()}
        tintColor={this.getCircleColor()}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875"
      style={{  marginTop: height*0.0075 }}/>



      <Text  style={{fontSize:height*0.03 ,color:"black" ,marginLeft:3   }}> {this.getCurrValue("total")}   {this.getUnits()}</Text>
</View>
<View style={{ position:"absolute",top: height*0.28 , justifyContent: "center",textAlign:"center",alignItems:"center",left:  width*0.03,   height: height*0.335  ,width: width*0.65,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }}  >
  <Text  style={{ fontSize:height*0.03 ,color:"black" ,marginLeft:3   }}> {this.getPercentage()} %</Text>
  <Text  style={{fontSize:height*0.0193 ,color:"black"    }}>of daily balance</Text>
</View>

{/* large boittom*/}
<View style={{ position:"absolute",top: height*0.63  , left:  width*0.03,   backgroundColor:"white", height: height*0.25   ,width: width*0.65,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }}  >
    <View style={{     height: height*0.03   ,width:  "100%" ,   textAlign: 'center', alignItems: 'center' }}  >
            <Text  style={{fontSize:height*0.0193 ,color:"black"    }}>Add {this.state.currentFocus}</Text>

    </View>

{/*breackfast */}
<View style={{     height:height*0.03 ,marginLeft: "10%"  ,marginTop: "5%" ,width:"80%"    }}  >

  <View style={{     height:height*0.03  , width:"80%"  ,   textAlign: 'center', alignItems: 'center'  ,backgroundColor:"lightgrey",borderRadius:1111,flexDirection:"row" }}  >
  <TouchableOpacity style={{   width: height*0.03,    height:height*0.03}} onPress={() => {return this.addToFocused("-","breakfast")  }} >
      <Image style={{    width: height*0.03,    height:height*0.03,resizeMode: 'stretch'  }} source={require('../imgs/NEWIMAGES/page-4/minus.png')} />
  </TouchableOpacity>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3 , width: ((width*0.65 * (0.8 *0.8))-(height*0.06))    }}>breakfast</Text>
  <TouchableOpacity style={{   width: height*0.03,    height:height*0.03}}onPress={() => {return this.addToFocused("+","breakfast")  }} >
        <Image style={{    width: height*0.03,    height:height*0.03,resizeMode: 'stretch'   }} source={require('../imgs/NEWIMAGES/page-4/add.png')} />
  </TouchableOpacity>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>{this.getCurrValue("breakfast")}</Text>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>{this.getUnits()}</Text>
  </View>
</View>
{/* lunch  */}
<View style={{     height:height*0.03 ,marginLeft: "10%"  ,marginTop: "5%" ,width:"80%"    }}  >

  <View style={{     height:height*0.03  , width:"80%"  ,   textAlign: 'center', alignItems: 'center'  ,backgroundColor:"lightgrey",borderRadius:1111,flexDirection:"row" }}  >
  <TouchableOpacity style={{   width: height*0.03,    height:height*0.03}} onPress={() => {return this.addToFocused("-","lunch")  }} >
      <Image style={{    width: height*0.03,    height:height*0.03,resizeMode: 'stretch'  }} source={require('../imgs/NEWIMAGES/page-4/minus.png')} />
  </TouchableOpacity>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3 , width: ((width*0.65 * (0.8 *0.8))-(height*0.06))    }}>Lunch</Text>
  <TouchableOpacity style={{   width: height*0.03,    height:height*0.03}}onPress={() => {return this.addToFocused("+","lunch")  }} >
        <Image style={{    width: height*0.03,    height:height*0.03,resizeMode: 'stretch'   }} source={require('../imgs/NEWIMAGES/page-4/add.png')} />
  </TouchableOpacity>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>{this.getCurrValue("lunch")}</Text>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>{this.getUnits()}</Text>
  </View>
</View>
{/* dinnder  */}
<View style={{     height:height*0.03 ,marginLeft: "10%"  ,marginTop: "5%" ,width:"80%"    }}  >

  <View style={{     height:height*0.03  , width:"80%"  ,   textAlign: 'center', alignItems: 'center'  ,backgroundColor:"lightgrey",borderRadius:1111,flexDirection:"row" }}  >
  <TouchableOpacity style={{   width: height*0.03,    height:height*0.03}} onPress={() => {return this.addToFocused("-","dinner")  }} >
      <Image style={{    width: height*0.03,    height:height*0.03,resizeMode: 'stretch'  }} source={require('../imgs/NEWIMAGES/page-4/minus.png')} />
  </TouchableOpacity>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3 , width: ((width*0.65 * (0.8 *0.8))-(height*0.06))    }}>Dinner</Text>
  <TouchableOpacity style={{   width: height*0.03,    height:height*0.03}}onPress={() => {return this.addToFocused("+","dinner")  }} >
        <Image style={{    width: height*0.03,    height:height*0.03,resizeMode: 'stretch'   }} source={require('../imgs/NEWIMAGES/page-4/add.png')} />
  </TouchableOpacity>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>{this.getCurrValue("dinner")}</Text>
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>{this.getUnits()}</Text>
  </View>
</View>
{/* snacks */}
    <View style={{     height:height*0.03 ,marginLeft: "10%"  ,marginTop: "5%" ,width:"80%"    }}  >

      <View style={{     height:height*0.03  , width:"80%"  ,   textAlign: 'center', alignItems: 'center'  ,backgroundColor:"lightgrey",borderRadius:1111,flexDirection:"row" }}  >
      <TouchableOpacity style={{   width: height*0.03,    height:height*0.03}} onPress={() => {return this.addToFocused("-","snacks")  }} >
          <Image style={{    width: height*0.03,    height:height*0.03,resizeMode: 'stretch'  }} source={require('../imgs/NEWIMAGES/page-4/minus.png')} />
      </TouchableOpacity>
      <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3 , width: ((width*0.65 * (0.8 *0.8))-(height*0.06))    }}>Snacks</Text>
      <TouchableOpacity style={{   width: height*0.03,    height:height*0.03}}onPress={() => {return this.addToFocused("+","snacks")  }} >
            <Image style={{    width: height*0.03,    height:height*0.03,resizeMode: 'stretch'   }} source={require('../imgs/NEWIMAGES/page-4/add.png')} />
      </TouchableOpacity>
      <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>{this.getCurrValue("snacks")}</Text>
      <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>{this.getUnits()}</Text>
      </View>
    </View>
{}


</View>


{/* meal button */}
<TouchableOpacity style={{ position:"absolute",top: height*0.63  , left:  width*0.7 ,justifyContent: "center",alignItems:"center",    backgroundColor:"white", height: height*0.25   ,width: width*0.27,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }}   onPress={() =>  this.props.navigation.navigate('foodlist')} >



 <Image style={{  width: '60%', height: '60%' ,resizeMode: 'contain'}} source={require('../imgs/NEWIMAGES/page-4/meal.png')}  />
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>Add meal</Text>




</TouchableOpacity>




<TouchableOpacity style={{ position:"absolute",top:(height*0.28)-2 ,justifyContent: "center",alignItems:"center" , left: (width*0.7)-2,    backgroundColor:this.getColor("Fat"), height:(height*0.105 )+4  ,width:(width*0.27)+4 ,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }} onPress={() => {return this.updateFocus("Fat")  }} >

</TouchableOpacity>

 {/*top right FAT  */}
<TouchableOpacity style={{ position:"absolute",top: height*0.28 ,justifyContent: "center",alignItems:"center" , left:  width*0.7,    backgroundColor:"white", height: height*0.105   ,width: width*0.27,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }} onPress={() => {return this.updateFocus("Fat")  }} >
<Image style={{  width: '60%', height: '60%',resizeMode: 'contain'}} source={require('../imgs/NEWIMAGES/page-4/fat.png')}  />
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>Fat</Text>
</TouchableOpacity>








<TouchableOpacity style={{ position:"absolute",top:(height*0.396)-2 ,justifyContent: "center",alignItems:"center" , left: (width*0.7)-2,    backgroundColor:this.getColor("Protein"), height:(height*0.105 )+4  ,width:(width*0.27)+4 ,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }} onPress={() => {return this.updateFocus("Fat")  }} >

</TouchableOpacity>
{/*mid right  PRO */}
<TouchableOpacity style={{ position:"absolute",top: height*0.396,justifyContent: "center",alignItems:"center"  , left:  width*0.7,    backgroundColor:"white", height: height*0.105   ,width: width*0.27,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }}  onPress={() => {return this.updateFocus("Protein")  }} >
<Image style={{  width: '60%', height: '60%' ,resizeMode: 'contain'}} source={require('../imgs/NEWIMAGES/page-4/protien.png')}  />
  <Text  style={{fontSize: height*0.02 ,color:"black" ,marginLeft:3    }}>Protien</Text>
</TouchableOpacity>




<TouchableOpacity style={{ position:"absolute",top:(height*0.511)-2 ,justifyContent: "center",alignItems:"center" , left: (width*0.7)-2,    backgroundColor: this.getColor("Carbohydrates"), height:(height*0.105 )+4  ,width:(width*0.27)+4 ,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }} onPress={() => {return this.updateFocus("Fat")  }} >

</TouchableOpacity>
{/*bottom right  CASRB  */}
<TouchableOpacity style={{ position:"absolute",top: height* 0.511 ,justifyContent: "center",alignItems:"center", left:  width*0.7 ,  backgroundColor:"white", height: height*0.105   ,width: width*0.27,  borderRadius:15 ,shadowColor: "#000",shadowOffset: {	width: 0,	height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9   }}  onPress={() => {return this.updateFocus("Carbohydrates")  }} >
<Image style={{  width: '60%', height: '60%',resizeMode: 'contain' }} source={require('../imgs/NEWIMAGES/page-4/carbo.png')}  />
  <Text  style={{fontSize: height*0.018 ,color:"black" ,marginLeft:3    }}>Carbohydrates</Text>
</TouchableOpacity>




</View>





















         <LineChart

         data={{
           labels: [
             '0',
             '2',
             '4',
             '6',
             '8',
             '10',
             '12',
             '14',
             '16',
             '18',
             '20',
             '22',
           ],
           datasets: [
             {
               data: this.getGraphData(),
               strokeWidth: 2,
             },
           ],
         }}
         width={Dimensions.get('window').width *0.9}
         height={Dimensions.get('window').height *0.4}
         chartConfig={{
           backgroundColor: '#1cc910',
           backgroundGradientFrom: '#eff3ff',
           backgroundGradientTo: '#efefef',
           decimalPlaces: 0,
           color: (opacity = 1) => `rgba(255, 140, 0, ${opacity})`,
           style: {
             borderRadius: 6,
           },
         }}
         style={{
           position:"absolute",
           top:"35%",
           left:this.getLeft(3),
           marginVertical: 8,
           borderRadius: 16,
            marginLeft:"5%",
            borderWidth:1,
            borderColor:"rgba(255, 140, 0)"
         }}
         />


         <Text style={{color:"darkorange",position:"absolute",top:"25%",      left:this.getLeft(3), fontSize: 30, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3,   marginLeft:"25%",  height: 46}}>Daily Graph</Text>



        <Text style={{color:"darkorange",position:"absolute",top:"85%",      left:this.getLeft(3), fontSize: 18, fontWeight: "50"  ,  textAlign: 'center', marginTop: 3,   marginLeft:"3%",  height: 96}}>Keeping a steady healthy diet is a vital component of keeping PCOS under control.</Text>





















        <View  style={{position:"absolute",  width: "100%",  flexDirection: 'row',justifyContent: "center",alignItems:"center",top:"15%"  }}>

           <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-7)  }} >
           <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus7}</Text>
           </TouchableOpacity>
           <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-6)  }} >
           <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus6}</Text>
           </TouchableOpacity>
           <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-5)  }} >
           <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus5}</Text>
           </TouchableOpacity>
           <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-4)  }} >
           <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus4}</Text>
           </TouchableOpacity>
           <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-3)  }} >
           <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus3}</Text>
           </TouchableOpacity>
           <TouchableOpacity    style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-2)  }} >
           <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus2}</Text>
           </TouchableOpacity>
           <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetograph(-1)  }} >
           <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center', marginTop: 3, width: 36, height: 36}]}>{this.state.minus1}</Text>
           </TouchableOpacity>


           <TouchableOpacity   style={{  flexDirection: 'column',borderRadius:18 ,  width: 36, height: 36,marginLeft:"1%" }}onPress={() => {return this.changetotracker()  }} >

               <Text style={[styles.textDark, { fontSize: this.state.textScale, fontWeight: "500"  ,  textAlign: 'center' , marginTop: 3,width: 36, height: 36}]}>{this.state.todaysnumber}</Text>

           </TouchableOpacity>
         </View>



         {/* bascl nutton*/}
         <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('Home')}>
           <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
         </TouchableOpacity>




     </View>


    );
  }
}

const styles = StyleSheet.create({
});
