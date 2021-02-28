/** @format */
import React from 'react';
import {FlatList,TextInput,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,    View, ScrollView,  Button,SafeAreaView} from 'react-native';
import { Dimensions } from 'react-native';

import SyncStorage from 'sync-storage';




const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbthth28ba',
    title: 'Avacado Toast',height: 200,url:"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aaththth97f63',
    title: 'Pizza',height: 200,url:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571ththththe29d72',
    title: 'Salad',height: 200,url:"https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 'bd7acbthththtea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Soup',height: 200,url:"https://images.pexels.com/photos/3662103/pexels-photo-3662103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: '3ac68afc-c605-48trhrthtrhd3-a4f8-fbd91aa97f63',
    title: 'Chicken Dinner',height: 200,url:"https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: '58694a0f-3da1-471f-bdthrthth96-145571e29d72',
    title: 'Cupcake',height: 200,url:"https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abthrthrb28ba',
      title: 'Apple',height: 200,url:"https://images.pexels.com/photos/2949140/pexels-photo-2949140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91rthrthaa97f63',
      title: 'Milk',height: 200,url:"https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: '58694a0f-3da1-4trhrthtrh71f-bd96-145571e29d72',
      title: 'Fish',height: 200,url:"https://images.pexels.com/photos/3296394/pexels-photo-3296394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },  {
        id: 'bd7acbea-c1b1trhrth-46c2-aed5-3ad53abb28ba',
        title: 'Healthy Breackfast',height: 200,url:"https://images.pexels.com/photos/949067/pexels-photo-949067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },
      {
        id: '3ac68argthfc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Burger',height: 200,url:"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },
      {
        id: '58694aafef0f-3da1-471f-bd96-145571e29d72',
        title: 'Hot dog',height: 200,url:"https://images.pexels.com/photos/4518657/pexels-photo-4518657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },




];



const Item = ({ title,url,height,addmeal}) => (

  <TouchableOpacity style={{    backgroundColor: '#f9c2ff',

      marginVertical: 8,
      marginHorizontal: 1,
      height:height,
    width:"44%"}} onPress={()=> addmeal( title )}>
    <Image style={{position:"absolute",width: "100%", height:height,width: "100%"  }}  source={{uri: url}}/>
    <Text style={{position:"absolute",bottom:0,    fontSize: 32,color:"white"     }}>{title}</Text>
  </TouchableOpacity>

);



export default class  Foodlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchinput: '',
      listofrecipies:data,
      refreshing:false
    };
      this.addmeal = this.addmeal.bind(this);



  }


  addmeal(a) {


        var month = new Date(new Date().setDate(new Date().getDate()    )).toString().split(' ')[1];
        var year = new Date(new Date().setDate(new Date().getDate()     )).toString().split(' ')[3];
        var day = new Date(new Date().setDate(new Date().getDate()    )).toString().split(' ')[2];

        if(SyncStorage.get('todaysKcal' + month + year + day ) ==  undefined  ){    SyncStorage.set('todaysKcal' + month + year + day , 350); }
        else{
          SyncStorage.set('todaysKcal' + month + year + day ,SyncStorage.get('todaysKcal' + month + year + day ) +350);
        }

        if(SyncStorage.get('todaysFat' + month + year + day ) ==  undefined  ){SyncStorage.set('todaysFat' + month + year + day , 350); }
        else{
              SyncStorage.set('todaysFat' + month + year + day,SyncStorage.get('todaysFat' + month + year + day ) +20);
        }
        if(SyncStorage.get('todaysCarbs' + month + year + day ) ==  undefined  ){SyncStorage.set('todaysCarbs' + month + year + day , 350); }
        else{
          SyncStorage.set('todaysCarbs' + month + year + day,SyncStorage.get('todaysCarbs' + month + year + day ) +40);
        }
        if(SyncStorage.get('todaysProtein' + month + year + day ) ==  undefined  ){SyncStorage.set('todaysProtein' + month + year + day , 350); }
        else{
          SyncStorage.set('todaysProtein' + month + year + day,SyncStorage.get('todaysProtein' + month + year + day ) +10);
        }

 


  }



  _onRefresh(){
    this.setState({
        refreshing:true
    });
  }
  render() {
    const renderItem = ({ item,url,height }) => (
  <Item title={item.title} url={item.url} height={item.height} addmeal={this.addmeal} />
);




var add2 = (a) => {

  this.setState({ searchinput: a});
  console.log(a);
  var newlist = [];
  var newlistrejects = [];
  for (var i = 0; i < this.state.listofrecipies.length; i++)
  {
      var str = this.state.listofrecipies[i].title;
      if (str != undefined)
      {
          if (str.includes(a))
          {
            console.log("A;"+this.state.listofrecipies[i].title);
            newlist.push(this.state.listofrecipies[i]);
          }
          else
          {
              console.log("R;"+this.state.listofrecipies[i].title);
           newlistrejects.push(this.state.listofrecipies[i]);
          }
      }
  }

  this.setState({
      listofrecipiesA: newlist
  });
  this.setState({
      listofrecipies: []
  });


if(a.length==0 ){

  this.setState({
      listofrecipies: data
  });
  this.setState({
      listofrecipiesA: []
  });

}



}


    return (
<View >
<Image style={{position:"absolute"  ,  width: '100%', height: '100%'  ,resizeMode: 'stretch'  }} source={require('../imgs/NEWIMAGES/chatback.png')} />





{/* title*/}
<View style={{ alignItems: "center", justifyContent: "center", textAlign: 'center',  position:"absolute",top:"-3%",left:"0%",width:"100%",height:"15%"}}>

<Text  style={{ color:"white", fontSize: 25}}>Meal selector</Text>

</View>

      <View style={{    flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems:"center",

          flexDirection: 'row',
          marginTop: "22%"}}>
   <Text style={{ fontSize: 20 , height:30 ,marginTop: 40    }}>search: </Text>
        <TextInput
          value={this.state.searchinput}
          onChangeText={searchinput => add2(searchinput) }
          placeholder={'Search'}
          style={styles.input}
        />
      </View>


      <View style={{
        marginTop:"20%",
          flexDirection: 'row',
          width:"100%",
        marginLeft:"4%",
        height:"80%"
         }}>

         <FlatList
         numColumns={2}
         horizontal={false}
           data={this.state.listofrecipiesA}
           renderItem={renderItem}
           keyExtractor={item => item.id}

         />


      <FlatList
      numColumns={2}
      horizontal={false}
        data={this.state.listofrecipies}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />
      </View>
      {/* bascl nutton*/}
      <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.navigation.navigate('food')}>
        <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
      </TouchableOpacity>

</View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginTop: "12%",

  },
  bar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginTop: "5%",

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
label:{

  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  marginTop: "5%",


},

  input: {
    width: "60%",
    height: 45,
marginTop: "12%",
borderRadius:9,
    backgroundColor: 'white',
    borderWidth:2,
    borderColor:"darkblue"
  },
});
