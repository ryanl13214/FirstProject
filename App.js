/** @format */

import React from 'react';
import { AsyncStorage  ,  Image,  PixelRatio,  StyleSheet,ScrollView,  Text,SafeAareaView,  TouchableOpacity,  View,   Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import fire from './config/fire';
import SyncStorage from 'sync-storage';



///////////////////////
import   Cam   from './camerasection/camera';
import   History   from './camerasection/historyPage';
import   Tmp   from './camerasection/tempPage';
import   Tmp2   from './camerasection/tempPage0';
////////////////////
import   Foodlist   from './src/foodlist';
import   Food   from './src/food';
import   Home   from './src/home';
import   Storage   from './src/storageexample';
import   Splash   from './src/splash';
import   Login   from './src/login';
import   Energy   from './src/energy';
import   Water   from './src/waterTracker';
import   Mental   from './src/mental';
import   Bmi   from './src/bmi';
import   Medselector   from './src/meditationselector';
import Meditation  from './src/meditation';
import Ovu  from './src/ovulationTracker';
import Sleep  from './src/sleep';
import Register  from './src/register';
import Scan  from './src/acenescannerselector';
import Jornal  from './src/journal';
import Excer  from './src/excercise';


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';






const Drawer = createDrawerNavigator();


const CustomDrawerComponent =(props)=>(


<SafeAareaView>

<ScrollView>
<DrawerItems {...props} />





</ScrollView>




</SafeAareaView>




)
















function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{width: '100%',height:50     ,backgroundColor:"rgb(240,240,240)" ,marginTop:-2   }}>
        <View style={{justifyContent: 'space-between',width: '100%',height:50,  flexDirection: 'row' ,marginTop:3   }}>
            <TouchableOpacity style={{width: 40,marginLeft:5   }}  >
                <Image style={{  width: 40 , height: 40  , borderRadius:22 }} source={require('./imgs/drdasyicon.jpg')}  />
            </TouchableOpacity>

            <Text style={{   fontSize: 25  }} ></Text>

            <TouchableOpacity style={{width: 30,marginTop:5 ,marginRight:5    }} onPress={() => props.navigation.closeDrawer()} >
                <Image style={{  width: 30, height: 30 }} source={require('./imgs/cross.png')}  />
            </TouchableOpacity>
        </View>
      </View>

        <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Skin care"
        onPress={() => props.navigation.navigate('skin')}
      />

      <DrawerItem
        label="Ovulation Traker"
        onPress={() => props.navigation.navigate('ovu')}
      />


      <View style={{width: "100%",marginTop:5 ,borderBottomWidth:2,borderColor:"rgb(222,222,222)"   ,marginTop:15 }} >
          <Text style={{ textColor:"rgb(222,222,222)" ,  fontSize: 20 ,marginLeft:8 }} >Physical Health </Text>
      </View>
      <DrawerItem
        label="Exercise"
        onPress={() => props.navigation.navigate('Excer')}
      />
      <DrawerItem
        label="Body Mass Index"
        onPress={() => props.navigation.navigate('bmi')}
      />
      <DrawerItem
        label="Water Intake"
        onPress={() => props.navigation.navigate('water')}
      />
      <DrawerItem
        label="Meal Tracker"
        onPress={() => props.navigation.navigate('food')}
      />
      <DrawerItem
        label="Sleep Care"
        onPress={() => props.navigation.navigate('sleep')}
      />

      <View style={{width: "100%",marginTop:5 ,borderBottomWidth:2,borderColor:"rgb(222,222,222)"   ,marginTop:15 }} >
          <Text style={{ textColor:"rgb(222,222,222)" ,  fontSize: 20 ,marginLeft:8 }} >Mental Health </Text>
      </View>

      <DrawerItem
        label="Mood Tracker"
        onPress={() => props.navigation.navigate('mental')}
      />
      <DrawerItem
        label="Meditation"
        onPress={() => props.navigation.navigate('medselect')}
      />
      <DrawerItem
        label="Energy Tracker"
        onPress={() => props.navigation.navigate('energy')}
      />
      <DrawerItem
        label="Daily Journal"
        onPress={() => props.navigation.navigate('jornal')}
      />
    </DrawerContentScrollView>
  );
}
function DefaultApp() {
  return (


<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Home" >
      <Drawer.Screen name="Home" component={Home} />


      <Drawer.Screen name="camera" component={Cam} />
      <Drawer.Screen name="history" component={History} />
      <Drawer.Screen name="temp" component={Tmp} />
      <Drawer.Screen name="temp2" component={Tmp2} />
      <Drawer.Screen name="Excer" component={Excer} />
      <Drawer.Screen name="jornal" component={Jornal} />
      <Drawer.Screen name="skin" component={Cam} />
      <Drawer.Screen name="sleep" component={Sleep} />
      <Drawer.Screen name="ovu" component={Ovu} />
      <Drawer.Screen name="meditation" component={Meditation} />
      <Drawer.Screen name="medselect" component={Medselector} />
      <Drawer.Screen name="bmi" component={Bmi} />
      <Drawer.Screen name="mental" component={Mental} />
      <Drawer.Screen name="water" component={Water} />
      <Drawer.Screen name="energy" component={Energy} />
      <Drawer.Screen name="food" component={Food} />
      <Drawer.Screen name="foodlist" component={Foodlist} />
      <Drawer.Screen name="storage" component={Storage} />

















    </Drawer.Navigator>









  );
}









export default class  App extends React.Component {
  constructor(props ) {
    super(props);
      this.state = {
        user: null,
        isLoading: true ,
        loggedin:false,
        registering:false
      };

    this.authListener = this.authListener.bind(this);
  }



  async componentWillMount(): void {
   const data = await SyncStorage.init();
  // console.log('AsyncStorage is ready!', data);
  }





  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }





  authListener() {
      fire.auth().onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          this.setState({ user });
          //localStorage.setItem('user', user.uid);/////////////////////////////////////
        } else {
          this.setState({ user: null });
        ///  localStorage.removeItem('user');//////////////////////////////////////////
        }
      });
    }










  async componentDidMount() {
    this.authListener();
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  updateState = () => {
      this.setState({
          loggedin: true,
          registering:false
      });
  }
  updateState2 = () => {
      this.setState({
          registering: true,

      });
  }

  updateState3 = () => {
      this.setState({
          registering: false,
      loggedin: true,
      });
  }





  render() {
    if (this.state.isLoading) {
      return <Splash />;
    }
    if ( this.state.loggedin == false && this.state.registering==false) {
      return <Login
      updateState={this.updateState}
      updateState2={this.updateState2}
       />;

    }
    if (this.state.registering==true) {
      return <Register
      updateState3={this.updateState3}
       />;

    }


    return (

    <NavigationContainer>


<DefaultApp/>

   </NavigationContainer>





    );
  }
}

const styles = StyleSheet.create({

});
