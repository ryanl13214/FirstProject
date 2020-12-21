/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';


import { Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";



function Breackfast({ title,props }) {
  return (
    <Text style={{fontSize: 20 }}> {title}</Text>
  );
}







export default class  Food extends React.Component {

  constructor(props ) {
    super(props);
  }
  render() {
    const screenHeight = Dimensions.get('window').height;
    const seven = Dimensions.get('window').height *0.30;
    const sevenn = Dimensions.get('window').height *0.20;
    return (

      <View style={{height: screenHeight}}>

      <ScrollView vertical={true}  >

      <View style={{flex: 1, width: "80%",height: 40, flexDirection: 'row', marginLeft:"10%"}}>
      <Text style={{ }}>Today </Text>
      <View  style={{    flexDirection: 'row'  }} >
      <Image style={{ height:60, width:60 , flexDirection: 'column',marginTop: "10%"  }}  onPress={() => this.props.navigation.navigate('foodlist')}  source={require( '../imgs/cal.png')} />
      <Text style={{ }}>15/9/20 </Text>
      </View  >
      </View>



      <View style={{ flex: 1,marginTop: "20%" ,height: "70%"}}>

      <View  >




      <View style={styles.button}   >
      <View style={{ width: "100%",height: "100%", flexDirection: 'column'}}>


      <View style={{ width: "100%",height: 60 , justifyContent: 'center',alignItems: 'center', flexDirection: 'column', backgroundColor: "rgb(57, 192, 175)" , borderRadius:30,}}>
      <Text style={{ fontSize: 30 , textAlign: 'center' ,color: "white" }}>breakfast</Text>
      </View>


      <FlatList
      style={{    marginLeft: "10%",marginTop: 5 ,height:40   ,marginLeft:3 ,marginRight:1  }}
      horizontal={true}
      data={[
        {  key:'React Native',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8},    {  key:'deact Nse',cal:0,fat:9,pro:8},    {  key:'Reafct Nse',cal:0,fat:9,pro:8},    {  key:'React Nsasde',cal:0,fat:9,pro:8},    {  key:'React asdasdNse',cal:0,fat:9,pro:8},    {  key:'Reasdasdact Nse',cal:0,fat:9,pro:8},    {  key:'React Nsvse',cal:0,fat:9,pro:8}
      ]}
      renderItem={({ item }) => <Breackfast title={item.key} props = {this.props} />}

      ItemSeparatorComponent={() => {
        return (
          <View
          style={{
            height: "100%",
            width: 2,
            backgroundColor: "#CED0CE",

          }}
          />
        );
      }}

      keyExtractor={(item, index) => index.toString()}
      />



      <ScrollView horizontal={true}>

      <TouchableOpacity style={{ height:50, width:50 , flexDirection: 'column' ,marginTop: "10%"}} onPress={() => this.props.navigation.navigate('foodlist')} >
      <Image style={{ height:50, width:50 , flexDirection: 'column' , }}  onPress={() => this.props.navigation.navigate('foodlist')}  source={require( '../imgs/add.png')} />
      </TouchableOpacity>

      <Text style={{ fontSize: 25, width:180, height:30 ,marginTop: "12%" ,marginLeft:30 }}>add food item </Text>
      </ScrollView>

      </View>
      </View>





      <View style={styles.button}   >
      <View style={{ width: "100%",height: "100%", flexDirection: 'column'}}>

      <View style={{ width: "100%",height:  60 , justifyContent: 'center',alignItems: 'center', flexDirection: 'column', backgroundColor: "rgb(57, 192, 175)" , borderRadius:30,}}>
      <Text style={{ fontSize: 30 , textAlign: 'center' ,color: "white" }}>lunch</Text>
      </View>



      <FlatList
      style={{    marginLeft: "10%",marginTop: 5 ,height:40   ,marginLeft:3 ,marginRight:1  }}
      horizontal={true}
      data={[
        {  key:'React Native',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8},    {  key:'deact Nse',cal:0,fat:9,pro:8},    {  key:'Reafct Nse',cal:0,fat:9,pro:8},    {  key:'React Nsasde',cal:0,fat:9,pro:8},    {  key:'React asdasdNse',cal:0,fat:9,pro:8},    {  key:'Reasdasdact Nse',cal:0,fat:9,pro:8},    {  key:'React Nsvse',cal:0,fat:9,pro:8}
      ]}
      renderItem={({ item }) => <Breackfast title={item.key} props = {this.props} />}

      ItemSeparatorComponent={() => {
        return (
          <View
          style={{
            height: "100%",
            width: 2 ,
            backgroundColor: "#CED0CE",

          }}
          />
        );
      }}

      keyExtractor={(item, index) => index.toString()}
      />







      <ScrollView horizontal={true}>
      <TouchableOpacity style={{ height:50, width:50 , flexDirection: 'column' ,marginTop: "10%"}} onPress={() => this.props.navigation.navigate('foodlist')} >
      <Image style={{ height:50, width:50 , flexDirection: 'column' , }}  onPress={() => this.props.navigation.navigate('foodlist')}  source={require( '../imgs/add.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 25, width:180, height:30 ,marginTop: "12%" ,marginLeft:30 }}>add food item </Text>
      </ScrollView>

      </View>
      </View>

      <View style={styles.button}   >
      <View style={{ width: "100%",height: "100%", flexDirection: 'column'}}>

      <View style={{ width: "100%",height:  60  , justifyContent: 'center',alignItems: 'center', flexDirection: 'column', backgroundColor: "rgb(57, 192, 175)" , borderRadius:30,}}>
      <Text style={{ fontSize: 30 , textAlign: 'center' ,color: "white" }}>Dinner</Text>
      </View>



      <FlatList
      style={{    marginLeft: "10%",marginTop: 5 ,height:40   ,marginLeft:3 ,marginRight:1  }}
      horizontal={true}
      data={[
        {  key:'React Native',cal:0,fat:9,pro:8},    {  key:'React Nse',cal:0,fat:9,pro:8},    {  key:'deact Nse',cal:0,fat:9,pro:8},    {  key:'Reafct Nse',cal:0,fat:9,pro:8},    {  key:'React Nsasde',cal:0,fat:9,pro:8},    {  key:'React asdasdNse',cal:0,fat:9,pro:8},    {  key:'Reasdasdact Nse',cal:0,fat:9,pro:8},    {  key:'React Nsvse',cal:0,fat:9,pro:8}
      ]}
      renderItem={({ item }) => <Breackfast title={item.key} props = {this.props} />}

      ItemSeparatorComponent={() => {
        return (
          <View
          style={{
            height: "100%",
            width: 2 ,
            backgroundColor: "#CED0CE",

          }}
          />
        );
      }}

      keyExtractor={(item, index) => index.toString()}
      />









      <ScrollView horizontal={true}>
      <TouchableOpacity style={{ height:50, width:50 , flexDirection: 'column' ,marginTop: "10%"}} onPress={() => this.props.navigation.navigate('foodlist')} >
      <Image style={{ height:50, width:50 , flexDirection: 'column' , }}  onPress={() => this.props.navigation.navigate('foodlist')}  source={require( '../imgs/add.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 25, width:180, height:30 ,marginTop: "12%" ,marginLeft:30 }}>add food item </Text>
      </ScrollView>

      </View>
      </View>



      </View>
      </View>


      <View style={{flex: 1, width: "80%",height: seven, flexDirection: 'column',backgroundColor:"cream"  ,marginLeft:"10%",marginTop:"20%", borderRadius: 15}}>
      <Text style={{ fontSize: 25 }} >date </Text>
      <View style={{ width: "100%",height: "33%"  , alignItems: 'center',   textAlign: 'center', flexDirection: 'column' ,  borderColor:  'black', borderWidth:  1, borderTopRightRadius: 15,  borderTopLeftRadius: 15,}}>

      <Text style={{ fontSize: 25,marginTop:"12%"}} >Calories: 1888/300</Text>

      </View>

      <View style={{ width: "100%",height: "23%"  , flexDirection: 'row'  ,  borderColor:  'black', borderWidth:  1, borderRadiusTopLeft:15,  flexDirection: 'row'}}>
      <View style={{ width: "50%",height: "100%",alignItems: 'center',   textAlign: 'center'   }}>
      <Text style={{ fontSize: 15,marginTop:"12%"}} >Calories: 1888/300</Text>
      </View>

      <View style={{ width: "50%",height: "100%"  ,    borderColor:  'black', borderLeftWidth:  1 ,alignItems: 'center',   textAlign: 'center'   }}>
      <Text style={{ fontSize: 15,marginTop:"12%"}} >Calories: 1888/300</Text>
      </View>
      </View>

      <View style={{ width: "100%",height: "23%"  , flexDirection: 'row' ,  borderColor:  'black', borderWidth:  1, borderRadiusTopLeft:15,}}>
      <View style={{ width: "50%",height: "100%" ,alignItems: 'center',   textAlign: 'center'     }}>
      <Text style={{ fontSize: 15,marginTop:"12%"}} >Calories: 1888/300</Text>
      </View>

      <View style={{ width: "50%",height: "100%"  ,    borderColor:  'black', borderLeftWidth:  1 ,alignItems: 'center',   textAlign: 'center'   }}>
      <Text style={{ fontSize: 15,marginTop:"12%"}} >Calories: 1888/300</Text>
      </View>
      </View>

      <View style={{ width: "100%",height: "21%"  , flexDirection: 'row'  ,  borderColor:  'black', borderWidth:  1,  borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
      <View style={{ width: "50%",height: "100%"  ,alignItems: 'center',   textAlign: 'center'    }}>
      <Text style={{ fontSize: 15,marginTop:"12%"}} >Calories: 1888/300</Text>
      </View>

      <View style={{ width: "50%",height: "100%"  ,    borderColor:  'black', borderLeftWidth:  1 ,alignItems: 'center',   textAlign: 'center'   }}>
      <Text style={{ fontSize: 15,marginTop:"12%"}} >Calories: 1888/300</Text>
      </View>
      </View>

      </View>



      <View style={{flex: 1, width: "80%",height: Dimensions.get("window").width*0.2, flexDirection: 'column'}}>
      </View>




      <LineChart

      data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
      }}
      width={Dimensions.get("window").width*0.8} // from react-native
      height={250}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "blue",
        backgroundGradientTo: "lightblue",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
        marginLeft:"10%"
      }}
      />







      <View style={{flex: 1, width: "80%",height: sevenn, flexDirection: 'row', marginLeft:"10%"}}>

      <Image style={{ height:25, width:25 , flexDirection: 'column'  }}  onPress={() => this.props.navigation.navigate('foodlist')}  source={require( '../imgs/f.png')} />
      <Text style={{ fontSize: 15,  height:30  }}>calories burned form acivity </Text>
      <Text style={{ fontSize: 15,   height:30  }}>59</Text>
      <Text style={{ fontSize: 15,   height:30  }}>Kcal</Text>
      </View>

















      </ScrollView>

      </View>


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



  button: {
    flex: 1,
    margin:10,
    width:"80%",
    marginLeft:"10%",
    minHeight:160,
    maxHeight:260,
    flexDirection: 'row',
    justifyContent: "center",
    borderBottomColor:  'lightgrey',
    borderBottomWidth:  2,
    overflow: 'hidden'
  },








});
