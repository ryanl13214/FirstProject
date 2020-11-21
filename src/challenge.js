/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';



const { width,height } = Dimensions.get('window');
import SyncStorage from 'sync-storage';









function Item({ title,props}) {



if(title =="excersize"){
  return (
    <View style={{ width:"80%", height:height*0.17,borderRadius:15,borderWidth:2,borderColor:"red",marginLeft:"10%" ,marginTop:15  ,backgroundColor:"rgb(245,245,245)"  }}>
      <Text style={{  width:"100%",textAlign:"center",fontSize: 15,borderBottomWidth:2,borderColor:"red",   height:30    }}>Burn those calories! </Text>
      <Text style={{ fontSize: 15 , height:40 ,marginLeft:3 ,marginRight:1  ,marginBottom: 5 }}>you need to get 60 minutes of excersize everyday   </Text>
      <View style={{ width:"100%",flexDirection:"row"}}>
        <View style={{ width:"80%",marginLeft:"5%",height:21 ,flexDirection:"row", flexDirection:"row" }}>
          <Text style={{ fontSize: 25,   height:35  ,marginLeft:15,  color:"grey"}}>🔥🔥🔥🔥🔥🔥</Text>
          <Text style={{ fontSize: 15,   height:30   ,marginLeft:3   ,marginTop:7,  color:"grey"}}>60/60</Text>
        </View>
      </View>
    </View>
  );
}
if(title =="walk"){
  return (
    <View style={{ width:"80%", height:height*0.17,borderRadius:15,borderWidth:2,borderColor:"red",marginLeft:"10%" ,marginTop:15  ,backgroundColor:"rgb(245,245,245)"  }}>
      <Text style={{  width:"100%",textAlign:"center",fontSize: 15,borderBottomWidth:2,borderColor:"red",   height:30    }}>Burn those calories! </Text>
      <Text style={{ fontSize: 15 , height:40 ,marginLeft:3 ,marginRight:1  ,marginBottom: 5 }}>you need to get 60 minutes of excersize everyday   </Text>
      <View style={{ width:"100%",flexDirection:"row"}}>
        <View style={{ width:"80%",marginLeft:"5%",height:21 ,flexDirection:"row", flexDirection:"row" }}>
          <Text style={{ fontSize: 25,   height:35  ,marginLeft:15,  color:"grey"}}>🔥🔥🔥🔥🔥🔥</Text>
          <Text style={{ fontSize: 15,   height:30   ,marginLeft:3   ,marginTop:7,  color:"grey"}}>60/60</Text>
        </View>
      </View>
    </View>
  );
}
if(title =="water"){
  return (
    <View style={{ width:"80%", height:height*0.17,borderRadius:15,borderWidth:2,borderColor:"orange",marginLeft:"10%" ,marginTop:15 ,backgroundColor:"rgb(245,245,245)"  }}>
      <Text style={{  width:"100%",textAlign:"center",fontSize: 15 , height:30 ,borderBottomWidth:2,borderColor:"orange"   }}> Get hydrated! </Text>
      <Text style={{ fontSize: 15 , height:40 ,marginLeft:3 ,marginRight:1  ,marginBottom: 5 }}>your body needs 2,000ml of water or 8 glasses.  </Text>
      <View style={{ width:"100%",flexDirection:"row"}}>
        <View style={{ width:"80%",marginLeft:"5%",height:21 ,flexDirection:"row",borderRadius:5,borderWidth:1,borderColor:"black",flexDirection:"row" }}>
          <View style={{ width:"50%",height:19 ,flexDirection:"row",borderLeftRadius:5 ,backgroundColor:"rgb(115,198,214)"}}>
            <Text style={{width:"100%",textAlign:"center", fontSize: 14,   height:30  ,  color:"black"}}>1000ml</Text>
          </View>
          <View style={{ width:"50%",height:19 ,flexDirection:"row",borderRightRadius:5,backgroundColor:"lightgrey"}}>
        </View>
      </View>
      <Text style={{ fontSize: 15,   height:30  ,marginLeft:15,  color:"grey"}}>5/8</Text>
    </View>
      </View>
  );
}
if(title =="journal"){
  return (
    <View style={{ width:"80%", height:height*0.17,borderRadius:15,borderWidth:2,borderColor:"green",marginLeft:"10%",marginTop:15  ,backgroundColor:"rgb(245,245,245)"  }}>
      <Text style={{  width:"100%",textAlign:"center",fontSize: 15 , height:30,borderBottomWidth:2,borderColor:"green"   }}>Write that Down!</Text>
      <Text style={{ fontSize: 15 , height:40 ,marginLeft:3 ,marginRight:1  ,marginBottom: 5 }}>write 250 words in your journal throughout the day  </Text>
      <Text style={{ width:"100%",textAlign:"center", fontSize: 25,   height:30   ,marginLeft:3   ,marginTop:7,  color:"grey"}}>250/250</Text>
    </View>
  );
}



}





export default class  Challenges extends React.Component {
  constructor(props) {



var possiblegoals=["excersize","walk","water","journal","track"];

    super(props);
    this.state = {
      todaysGoals:    [  {  key:'React Nativfe',type:"walk",date:""},    {  key:'Rfeact Native',type:"water",date:""},    {  key:'Rfgeact Native',type:"journal",date:""}],//SyncStorage.get('todaysGoals'),
      historyGoals: [  {  key:'React Nativfe',type:"excersize",date:""},    {  key:'Rfeact Native',type:"excersize",date:""},    {  key:'Rfgeact Native',type:"excersize",date:""}],


    };
    console.log("state = " + JSON.stringify(this.state.todaysGoals)     );
    var month= new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[1];
    var year = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[3];
    var day  = new Date(new Date().setDate(new Date().getDate())).toString().split(' ')[2];
    var todaysgoals = SyncStorage.get('todaysGoals');
    var goalsfortoday=[];

      var newgoals=[];


      var randnumbers=[possiblegoals[1],possiblegoals[2],possiblegoals[3]];

      for(var i = 0 ;i<4;i++ ){

        if(randnumbers[i]=="excersize"){
            var tempvar=SyncStorage.get('minutesofexcersize'+month+year+day);
            goalsfortoday.push({key:'minutesofexcersize'+month+year+day , type:"water",cur:tempvar});
        }
        if(randnumbers[i]=="walk"){
            var tempvar=SyncStorage.get('minutesofexcersize'+month+year+day);
            goalsfortoday.push({key:'minutesofexceersize'+month+year+day , type:"water",cur:tempvar});
        }
        if(randnumbers[i]=="water"){
          var tempvar=SyncStorage.get('minutesofexcersize'+month+year+day);
            goalsfortoday.push({key:'minutesofexcersizre'+month+year+day , type:"water",cur:tempvar});
        }
        if(randnumbers[i]=="journal"){
          var tempvar=SyncStorage.get('minutesofexcersize'+month+year+day);
            goalsfortoday.push({key:'minutesofexcersfize'+month+year+day , type:"water",cur:tempvar});
        }
        if(randnumbers[i]=="track"){
          var tempvar=SyncStorage.get('minutesofexcersize'+month+year+day);
            goalsfortoday.push({key:'minutesoffexcersize'+month+year+day , type:"water",cur:tempvar});
        }
      }
      console.log(JSON.stringify(goalsfortoday));
      this.setState({todaysGoals:  goalsfortoday });

 SyncStorage.set('todaysGoals'  ,goalsfortoday);







  }

  render() {
    return (
<View  style={{ width:width, height:height*1.2 ,backgroundColor:"rgb(115,198,214)" }}>

  <Image style={{positon:"absolute",top:0,  width:"100%", height:50,resizeMode:"stretch" }} source={require('../imgs/header.jpg')} />

  <View style={{ width:"100%", height:50  ,marginTop:3 ,flexDirection:"row" ,marginTop:-50 }}>

      <Text style={{ width:width-55,fontSize: 20,textAlign:"center" , height:40,marginTop:5  ,marginLeft:4 , color:"white"}}>Achieve your goals </Text>
      <TouchableOpacity style={{width:55,height:55}} onPress={() => this.props.navigation.navigate('ChallengeSelect')} >
              <Text style={{  fontSize: 30 }}>⚙️ </Text>
      </TouchableOpacity>
  </View>



    <Text style={{ fontSize: 20,marginTop:15 , height:30 ,marginLeft:15,  color:"white" }}>Todays Goals: </Text>




    <FlatList
      data={this.state.todaysGoals}
      keyExtractor={item => item.key.toString()}
      renderItem={({ item }) => <Item title={item.type} props={this.props} />}
      style={{ fontSize: 15    ,width:"95%" ,marginLeft:3 ,marginRight:1,height:height*0.6 }}
    />













  </View>

    );
  }
}
const styles = StyleSheet.create({


});
