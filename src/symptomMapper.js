/** @format */
import * as React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,  FlatList, View, ScrollView,  Button,SafeAreaView,Scrollview, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ImageMapper from 'react-native-image-mapper';
import { Dimensions } from 'react-native';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const imgheight = height*0.69 ;
const imgwidth = imgheight*0.47;

// const symptoms=[("Irregular or no ovulation",0),("weight gain",0)];
const symptoms=[("Irregular or no ovulation",0),("weight gain",0),("acne or oily skin",1),("Thinning hair",0),("Hirsutism",1),("Infertility",0),("Obesity",0),("Low energy",0),("Low self-esteem",0),("Depression",0),("Anxiety",0),("Skin tags",1),("Acanthosis",0),("High Cholesterol",0),( "Type 2 Diabetes",0),("cardiovascular issues",0)];



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function getx2(inputpercet) {
   return ( imgwidth*inputpercet ) /100;
}
function gety2(inputpercet) {
   return ( imgheight*inputpercet ) /100;
 }



const Tab = createMaterialTopTabNavigator();


//Maps to Create Clickable Areas
const RECTANGLE_MAP = [
  {
    id: '0',
    name: 'Left Foot',
    shape: 'rectangle',
    x2: getx2(49),//x end
    y2: gety2(100), // y end
    x1: getx2( 35),// x start
    y1: gety2(95), // y start
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '1',
    name: 'Right Foot',
    shape: 'rectangle',
    x2: getx2(66),//x end
    y2: gety2(100), // y end
    x1: getx2( 51),// x start
    y1: gety2(95), // y start
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '2',
    name: 'Left Knee',
    shape: 'rectangle',
    x2: getx2(49),//x end
    y2: gety2(75), // y end
    x1: getx2( 35),// x start
    y1: gety2(70), // y start
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '3',
    name: 'Right Knee',
    shape: 'rectangle',
    x2: getx2(66),//x end
    y2: gety2(75), // y end
    x1: getx2( 51),// x start
    y1: gety2(70), // y start
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '4',
    name: 'Stomach',
    shape: 'rectangle',
    x2: getx2(68),//x end
    y2: gety2(45), // y end
    x1: getx2( 34),// x start
    y1: gety2(30), // y start
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '5',
    name: 'Left Hand',
    shape: 'rectangle',
    x2: getx2(12),//x end
    y2: gety2(57), // y end
    x1: getx2( 1),// x start
    y1: gety2(48), // y start
 prefill: "red",
    fill: 'blue',
  },
  {
    id: '6',
    name: 'Right Hand',
    shape: 'rectangle',
    x2: getx2(99),//x end
    y2: gety2(57), // y end
    x1: getx2( 88),// x start
    y1: gety2(48), // y start
 prefill: "red",
    fill: 'blue',
  },

  {
    id: '8',
    name: 'Head',
    shape: 'rectangle',
    x2: getx2(60),//x end
    y2: gety2(14), // y end
    x1: getx2( 40),// x start
    y1: gety2(0), // y start
 prefill: "red",
    fill: 'blue',
  },
];












function Item({ props,title}) {
    const gap = (Dimensions.get('window').width *0.35)-70;
  return (

    <View  >

      <View style={{  height:  80,  marginTop:20 ,  borderBottomWidth:2, borderBottomColor:"grey", flexDirection: 'row'   ,marginTop: "10%",width:"100%"}}  >

        <Text numberOfLines={ 1 } adjustsFontSizeToFit  style={{ width:"40%" , height:30 ,    marginLeft: "5%",  marginTop:10}}>
          {title}
        </Text>

     <View  style={{marginLeft:"10%", flexDirection:"row", width:"50%" , height:"100%"  }}>

       <View  style={{  width:"50%" , height:"100%"  }}>
       <Image style={{   width:50, height:  50 }} source={require('../imgs/grap.png')} />
       <Text numberOfLines={ 1 }   adjustsFontSizeToFit style={{textAlign: 'center',width:"100%" ,  marginLeft:"-15%" ,  height:  20 }}  >View History</Text>
       </View>
       <View  style={{  width:"50%" , height:"100%"  }}>
         <TouchableOpacity style={{ width:50, height:  50}}  onPress={() =>  props.navigation.navigate('tbabs')} >
            <Image style={{  width:50, height:  50  }} source={require('../imgs/add.png')}  />
         </TouchableOpacity>

         <Text  numberOfLines={ 1 }   adjustsFontSizeToFit style={{ width:"100%" , marginLeft:"2%" ,  height:  20 }}  >update</Text>

       </View>
     </View>



      </View>

    </View>

  );
}












export default class  Symptommapper extends React.Component {


  constructor(props ) {
    super(props);
  }






  render() {

    const Map = ({ navigation }) => {
      return (

        <View  style={{ flex: 1,   padding: 30,position:"absolute" ,top:"2%",left:"9%" ,width:"85%" , height:"100%"  }}>

        <ImageMapper
        style={{  }}
        imgHeight={imgheight}
        imgWidth={imgwidth}
          imgSource={require( '../imgs/bodymap2.png')}
          imgMap={RECTANGLE_MAP}
          onPress={(item, idx ) => mapperAreaClickHandler(item, idx )}
          containerStyle={{   }}

          multiselect
        />




            <View   style={{ height:50 ,width:1 }}></View>
          </View>


      );
    }







    const Lisr = ({ navigation }) => {

      return (
          <SafeAreaView style={styles.container}>
<FlatList
      data={[
            {  key:'user Symptom 1',symptom:"Irregular or no ovulation" },    {  key:'user Symptom 2',symptom:"Acne" },    {  key:'user Symptom 3',symptom:"Type 2 Diabetes" }
            ]}
            keyExtractor={item => item.key.toString()}
      renderItem={({ item }) => <Item title={item.symptom} props={this.props} />}
      style={{ fontSize: 15      ,width:"95%" ,marginLeft:3 ,marginRight:1 }}
    />







  <View   style={{flexDirection:"row", height:80 ,width:"100%" }}>
    <View   style={{ width:width-200 }}></View>
<Text  style={{  marginTop:30 ,  height:  20 }}  >Add new symptom</Text>
<Image style={{   width:50, height:  50 }} source={require('../imgs/add.png')} />
  </View>







            </SafeAreaView>

      );
    }




    let mapperAreaClickHandler =   (item, idx ) => {
       console.log(item, idx);
       Alert.alert(
      item.name,
         'My Alert Msg',
         [


           { text: 'OK', onPress: () => console.log('OK Pressed') }
         ],
         { cancelable: false }
       );




    };
  //<Image style={{position:"absolute" ,  width: '100%', height: height-70 }} source={require('../imgs/6.jpg')} />

    return (

      <Tab.Navigator


            initialRouteName="FirstPage"
            tabBarOptions={{
              activeTintColor: '#FFFFFF',
              inactiveTintColor: '#F8F8F8',
              style: {
                backgroundColor: '#633689',
              },
              labelStyle: {
                textAlign: 'center',
              },
              indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
              },
            }}>

            <Tab.Screen
              name="FirstPage"
              component={Lisr}
              options={{
                tabBarLabel: 'Home',

              }}  />
              <Tab.Screen
                name="tbabs"
                component={Map}
                options={{
                  tabBarLabel: 'r',

                }}  />

                </Tab.Navigator>

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
