/** @format */
import React from 'react';
import {  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity, FlatList,  View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';
import SyncStorage from 'sync-storage';


const { width,height } = Dimensions.get('window');








export default class  ChallengeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      food:   SyncStorage.get('challengeSettingsFood') ,
      water:   SyncStorage.get('challengeSettingsWater') ,
      excersize:   SyncStorage.get('challengeSettingsExcersize') ,
      journal:    SyncStorage.get('challengeSettingsJournal') ,
      chat:    SyncStorage.get('challengeSettingsChat')
    }


  }


//called by clicking the tick/cross changes the state value and the stored value
  changesetting(changewhat) {

    if(changewhat=="food"){
      SyncStorage.set('challengeSettingsFood',!this.state.food);
      this.setState({food: !this.state.food})  ;
    }
    if(changewhat=="water"){
      SyncStorage.set('challengeSettingsWater',!this.state.water);
      this.setState({water: !this.state.water})  ;
    }
    if(changewhat=="excersize"){
      SyncStorage.set('challengeSettingsExcersize',!this.state.excersize);
      this.setState({excersize:!this.state.excersize})  ;
    }
    if(changewhat=="journal"){
      SyncStorage.set('challengeSettingsJournal',!this.state.journal);
      this.setState({journal: !this.state.journal})  ;
    }
    if(changewhat=="chat"){
      SyncStorage.set('challengeSettingsChat',!this.state.chat);
      this.setState({chat:!this.state.chat})  ;
    }


  }
  //returns the correct value from storage and state.
  getmark(getwhat) {
    if(getwhat=="food"){
      if(this.state.food){
        return "✔️";
      }
      else
      {
        return "❌";
      }
    }
    if(getwhat=="water"){
      if(this.state.water){
        return "✔️";
      }
      else
      {
        return "❌";
      }
    }
    if(getwhat=="excersize"){
      if(this.state.excersize){
        return "✔️";
      }
      else
      {
        return "❌";
      }
    }
    if(getwhat=="journal"){
      if(this.state.journal){
        return "✔️";
      }
      else
      {
        return "❌";
      }
    }
    if(getwhat=="chat"){
      if(this.state.chat){
        return "✔️";
      }
      else
      {
        return "❌";
      }
    }
  }


  render() {
    return (
    <View  style={{  width:width, height:height ,backgroundColor:"rgb(115,198,214)"  }}>

    <Image style={{positon:"absolute",top:0,  width:"100%", height:50,resizeMode:"stretch" }} source={require('../imgs/header.jpg')} />

    <View style={{ width:"100%", height:50  ,marginTop:3 ,flexDirection:"row" ,marginTop:-50 }}>
    <TouchableOpacity style={{width:55,height:55}} onPress={() => this.props.navigation.navigate('goals')} >
            <Text style={{  fontSize: 30 }}>⬅️ </Text>
    </TouchableOpacity>
        <Text style={{ width:width-55,fontSize: 20,textAlign:"center" , height:40,marginTop:5  ,marginLeft:4 , color:"white"}}>Achieve your goals </Text>

    </View>

      <Text style={{ width:"90%",marginLeft:"5%",marginTop:"5%", fontSize: 20 }}>Select the goals that will appear in your daily goals </Text>


      <View style={{ width:"90%"   }}>
        <View style={{ width:"100%", height:50  ,marginTop:3 ,flexDirection:"row"  }}>
          <Text style={{ width:"90%",marginLeft:"5%",marginTop:"5%", fontSize: 20 }}>Food</Text>
          <TouchableOpacity style={{width:width*0.1, height:  width*0.1  }}  onPress={() => this.changesetting("food")} >
            <Text style={{  width:"100%",marginLeft:"2%",fontSize: 20 }}>{this.getmark("food")}</Text>
          </TouchableOpacity >
        </View>
        <Text style={{ width:"85%",marginLeft:"7%",fontSize: 15 }}>Keeping your calorie intake down helps you control your weight.</Text>

      </View>

      <View style={{ width:"90%"   }}>
        <View style={{ width:"100%", height:50  ,marginTop:3 ,flexDirection:"row"  }}>
          <Text style={{ width:"90%",marginLeft:"5%",marginTop:"5%", fontSize: 20 }}>excersize</Text>
          <TouchableOpacity style={{width:width*0.1, height:  width*0.1  }}  onPress={() => this.changesetting("excersize")} >
            <Text style={{  width:"100%",marginLeft:"2%",fontSize: 20 }}>{this.getmark("excersize")}</Text>
          </TouchableOpacity >
        </View>
        <Text style={{  width:"85%",marginLeft:"7%", fontSize: 15 }}>Getting 60 minutes of Excersize each day will help reduc symptoms of PCOS</Text>
      </View>




      <View style={{ width:"90%"   }}>
        <View style={{ width:"100%", height:50  ,marginTop:3 ,flexDirection:"row"  }}>
          <Text style={{ width:"90%",marginLeft:"5%",marginTop:"5%", fontSize: 20 }}>journal</Text>
          <TouchableOpacity style={{width:width*0.1, height:  width*0.1  }}  onPress={() => this.changesetting("journal")} >
            <Text style={{  width:"100%",marginLeft:"2%",fontSize: 20 }}>{this.getmark("journal")}</Text>
          </TouchableOpacity >
        </View>
        <Text style={{  width:"85%",marginLeft:"7%",fontSize: 15 }}>Use the journal to track what you are grateful for each day.</Text>
      </View>


      <View style={{ width:"90%"   }}>
        <View style={{ width:"100%", height:50  ,marginTop:3 ,flexDirection:"row"  }}>
          <Text style={{ width:"90%",marginLeft:"5%",marginTop:"5%", fontSize: 20 }}>Water</Text>
          <TouchableOpacity style={{width:width*0.1, height:  width*0.1  }}  onPress={() => this.changesetting("water")} >
            <Text style={{  width:"100%",marginLeft:"2%",fontSize: 20 }}>{this.getmark("water")}</Text>
          </TouchableOpacity >
        </View>
        <Text style={{  width:"85%",marginLeft:"7%", fontSize: 15 }}>Drinking plenty of water is a good way to feel alert and boost your mood.</Text>
      </View>


      <View style={{ width:"90%"   }}>
        <View style={{ width:"100%", height:50  ,marginTop:3 ,flexDirection:"row"  }}>
          <Text style={{ width:"90%",marginLeft:"5%",marginTop:"5%", fontSize: 20 }}>chat</Text>
          <TouchableOpacity style={{width:width*0.1, height:  width*0.1  }}  onPress={() => this.changesetting("chat")} >
            <Text style={{  width:"100%",marginLeft:"2%",fontSize: 20 }}>{this.getmark("chat")}</Text>
          </TouchableOpacity >
        </View>
        <Text style={{ width:"85%",marginLeft:"7%", fontSize: 15 }}>Chatting with dr Daisy is a good way to relive stress and learn about PCOS</Text>
      </View>


    </View>

    );
  }
}
const styles = StyleSheet.create({


});
