
import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View,ScrollView,FlatList,Image } from "react-native";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import { Thumbnail, List, ListItem, Separator } from 'native-base';
import { Dimensions } from 'react-native';
const { width,height } = Dimensions.get('window');
import SyncStorage from 'sync-storage';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';
const trackerVariable = [["Nutrition", "Water intake", "Mental wellbeing", "Calories burned"],["Average", "Historical data"],["This week","30 Days", "3 months", "6 months"]];
const trackingType = [["average", "raw data"]];
const trackingDuration = [["30 Days", "3 months", "6 months"]];


import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';
import DropdownMenu from 'react-native-dropdown-menu';

export default class Graphing extends Component {
	constructor(props) {
		super(props);



    var waterTempArry=[];
    for(var i = 0 ; i < 30 ; i++){
      var dateobj = new Date(new Date().setDate(new Date().getDate()-i)).toString().split(' ');

      var month = dateobj[1];
      var year = dateobj[3];
      var day = dateobj[2];


      var value=  SyncStorage.get('waterTrackerDaily' + month + year + day );
      if(value != undefined){
        waterTempArry.push({ x: i, y: value });
      }else if(1==1)
      {
        // for test data only  comment out in prod
            waterTempArry.push({ x: i, y:i*50 });
      }
  }



		this.state = {
      waterTrackerDataLast30Days:waterTempArry,
      graphColor:'#0025A3',
      verticalAxis: 2500,
      horizontalAxis: 30,
      horizontalTicks:30
 		};

	}


//[["Nutrition", "Water intake", "Mental wellbeing", "Calories burned"],["average", "raw data"],["30 Days", "3 months", "6 months"]];
  updateGraphLook(tracker) {

      // type o0f data
      if(tracker== "Average"){





      }







    // types of trackers
    if(tracker== "Calories burned"){
      this.setState({
          graphColor: "yellow",
          verticalAxis: 1000,
          horizontalAxis: 30,
      });
    }

    if(tracker== "Water intake"){
      this.setState({
          graphColor: "blue",
          verticalAxis: 2500,
          horizontalAxis: 30
      });
    }
    if(tracker== "Nutrition"){
      this.setState({
          graphColor: "red",
          verticalAxis: 3500,
          horizontalAxis: 30
      });
    }
    if(tracker== "Mental wellbeing"){
      this.setState({
          graphColor: "green",
          verticalAxis: 10,
          horizontalAxis: 30
      });
    }


    // length of time being tracked
    // type o0f data
    if(tracker== "This week"){

      this.setState({
          horizontalAxis: 7,
          horizontalTicks: 7
      });



    }

    if(tracker== "3 months"){
      this.setState({
          horizontalAxis: 3,
          horizontalTicks: 3
      });
    }
    if(tracker== "30 Days"){
      this.setState({
          horizontalAxis: 30,
          horizontalTicks: 30
      });
    }
    if(tracker== "6 months"){
      this.setState({
          horizontalAxis: 6,
          horizontalTicks: 6
      });
    }








  }

  spring = (a) => {


}

	render() {


		return (

			<View style={{width:"100%",height:height,backgroundColor:"rgb(115,198,216)" }} >

			<Image style={{ width:"80%", height: height*0.4,marginLeft:"10%"  }} source={require('../imgs/graphicon.jpg')}  />
      <View style={{ width:"35%", height: height*0.1,position:"absolute",top:height*0.07,left:"50%",  backgroundColor:"white", textAlign:"center",borderRadius:44,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{ width:"84%",marginLeft:"10%" }}  >Hi, here you can view your progress and historical data</Text>
      </View>



      <View style={{ width:"25%", height: height*0.35,position:"absolute",top:height*0.5 ,left:"2%" }}>
        <Chart
          style={{ height: height*0.35, width: width*0.96 }}
          data={this.state.waterTrackerDataLast30Days}
          padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
          xDomain={{ min: 1, max:  this.state.horizontalAxis}}
          yDomain={{ min: 0, max:   this.state.verticalAxis }}    >
          <VerticalAxis tickCount={6} theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
          <HorizontalAxis tickCount={this.state.horizontalTicks}  theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
          <Area theme={{ gradient: { from: { color: this.state.graphColor }, to: { color: this.state.graphColor , opacity: 0.4 } }}} />
          <Line theme={{ stroke: { color:this.state.graphColor , width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
        </Chart>

        </View>











  <View style={{ width:"96%", height: height*0.1,position:"absolute",top:height*0.42,left:"2%"  }}>
      <DropdownMenu
              style={{flex: 1,width:"60%"}}
              bgColor={'white'}
              tintColor={'#666666'}
              activityTintColor={'green'}
              handler={(selection, row) =>  this.updateGraphLook( trackerVariable[selection][row])  }
              data={trackerVariable}
            >

 </DropdownMenu>
  </View>




  <View style={{ width:"27%", height: height*0.1,position:"absolute",top:height*0.11,left:"71%" }}>
  <Text style={{ width:"84%",marginLeft:"10%" }}  >{this.state.text}</Text>
    </View>










			  </View>


	);
}
}

const styles = StyleSheet.create({

});
