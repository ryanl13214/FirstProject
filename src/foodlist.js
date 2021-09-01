/** @format */
import React from 'react';
import {FlatList,TextInput, Modal,  Image,  PixelRatio,  StyleSheet,  Text,  TouchableOpacity,    View, ScrollView,  Button,SafeAreaView} from 'react-native';


import SyncStorage from 'sync-storage';

import
{
    Dimensions
}
from 'react-native';
const
{
    width,
    height
} = Dimensions.get('window');


const data = [
  {
    id: 'Green Smoothie',
    title: 'Green Smoothie' ,
    url:"https://feastingnotfasting.com/wp-content/uploads/2014/07/Green-Smoothie-with-Lime-and-Cucumber-17-2.jpg",
    description: "A smoothie is a great on the go breakfast that is packed with vitamins and minerals. It’s a great detoxing and nutritious start to your day and perfect if you’ve had an overindulgent weekend. Green apple is a great source of fibre and contains vitamin A, B6, C and antioxidants. Perfect for detoxing and helping to give you great looking skin.",
    ingedients:"1. One green apple|2. Half a ripe medium avocado|3. Handful of spinach|4. Quarter of a lemon (without peel)|5. 1 cup (250ml) coconut water",
    steps:"Step 1: Core the apple, chop everything up and put it into your processor|Step 2: Add in the coconut water|Step 3: Whizz up and you’re ready to go"
  },
  {
    id: 'Granola',
    title: 'Granola' ,
    url:"https://www.layersofhappiness.com/wp-content/uploads/2016/01/blueberry-almond-granola-3.jpg",
    description: "Who doesn’t love a bit of granola in the morning. The crunchy texture combined with the touch of sweetness makes it the perfect start to the day. Granola has always been viewed as a healthy breakfast but a lot of granola you buy from the shops are loaded with preservatives and refined sugar that will bring on the sugar spikes and crashes but it is so simple to make your own. My version is packed full of seeds which contain good levels of Omega 3 (good fats that help to combat inflammation in the body). I also use maple syrup which is a natural sweetener, has nutritional elements and contains a third less sugar than refined table sugar",
    ingedients:"1. 1 cup (100g) oats|2. 3/4 cup (75g) mixed seeds and flaked almonds (refer to kitchen hacks for seed mix)|3. 1/4 cup (60ml) almond butter (or any nut butter of your choice)|4. 1/4 cup (60ml) melted coconut oil|5. 1/4 cup (60ml) maple syrup",
    steps:"Step 1: Preheat oven to 180 degrees (fan assisted)|Step 2: Put all the ingredients into a bowl and mix together until combined|Step 3: Line a baking tray with greaseproof paper and spread the mixture thinly|Step 4: After 8 mins, take tray out of the oven and give the granola a good mix, making sure you spread it thinly back out again|Step 5: Bake for another 8 mins then remove, leave to cool, then store in an airtight jar"
  }


];



const Item = ({ title,url ,addmeal,description,ingedients,steps,showRecipie}) => (

  <View style={{ alignItems: "center",flexDirection:"row", justifyContent: "flex-start", textAlign: 'center',  width:width,height:200 ,  backgroundColor: 'rgb(246,249,255)' ,borderWidth:1,borderColor: 'rgb(231,238,251)'}}>



  <View style={{marginLeft:20,  height:150, width:"34%"}}>
    <Image style={{width: "100%", height:150,borderRadius:6   }}  source={{uri: url}}/>
  </View>


  <View style={{marginLeft:20,  height:150, width:"66%"}}  >
    <Text style={{fontSize: 22,color:'rgb(86,99,122)',height:30 }}>{title}</Text>
    <Text style={{fontSize: 14,color:'rgb(86,99,122)',height:100 , width:width*0.56}}>{description}</Text>
    <View style={{flexDirection:"row",    height:20 , width:"78%"}}  >
      <TouchableOpacity style={{ alignItems: "center" ,marginTop:4, marginLeft:2, justifyContent: "center", textAlign: 'center',width:45,height:20,borderRadius:1111 ,  backgroundColor: 'grey'  }} onPress={() => showRecipie(title)   }>
        <Text style={{fontSize: 18,color:'white',height:10,margin:4}}>﹀</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{ alignItems: "center" ,marginTop:4, marginLeft:40, justifyContent: "center", textAlign: 'center',width:45,height:20,borderRadius:1111 ,  backgroundColor: 'grey'  }} onPress={() => addmeal() }>
        <Text style={{fontSize: 18,color:'white',height:23,margin:5}}>Add meal</Text>
      </TouchableOpacity>
      </View>

    </View>






</View >
);



export default class  Foodlist extends React.Component {
  constructor(props) {
    super(props);











    this.state = {
      searchinput: '',
      listofrecipies:data,
      refreshing:false,
      isVisible: false,
      url:"",
      title:"",
      description:"",
      ingedients:["aa"],
      steps:[""]
    };
      this.addmeal = this.addmeal.bind(this);
      this.showRecipie = this.showRecipie.bind(this);

  }

  showRecipie(a)
  {
    //get recipie details
    //set states

 var temp=999;


      console.log("dfsg",a);
  console.log("sdgffsfd",temp);
  for (var i = 0; i < this.state.listofrecipies.length; i++)
  {
      var str = this.state.listofrecipies[i].title;
      if(str == a){
        temp = i;
      }

  }
var ingredients =  this.state.listofrecipies[temp].ingedients.split('|');
var steps =  this.state.listofrecipies[temp].steps.split('|');

console.log("",ingredients);





  this.setState(
  {
    url:  this.state.listofrecipies[temp].url,
    title: this.state.listofrecipies[temp].title,
    description: this.state.listofrecipies[temp].description,
    ingedients:  ingredients,
    steps:steps
  });










    this.setState(
    {
        isVisible: !this.state.isVisible
    });

  }









  addmeal(a) {


        var month = new Date(new Date().setDate(new Date().getDate()    )).toString().split(' ')[1];
        var year = new Date(new Date().setDate(new Date().getDate()     )).toString().split(' ')[3];
        var day = new Date(new Date().setDate(new Date().getDate()    )).toString().split(' ')[2];

        if(SyncStorage.get('todaysKcal' + month + year + day ) ==  undefined  )
        {
           SyncStorage.set('todaysKcal' + month + year + day , 350);
        }
        else
        {
          SyncStorage.set('todaysKcal' + month + year + day ,SyncStorage.get('todaysKcal' + month + year + day ) +350);
        }
        if(SyncStorage.get('todaysFat' + month + year + day ) ==  undefined  )
        {
          SyncStorage.set('todaysFat' + month + year + day , 350);
        }
        else
        {
          SyncStorage.set('todaysFat' + month + year + day,SyncStorage.get('todaysFat' + month + year + day ) +20);
        }
        if(SyncStorage.get('todaysCarbs' + month + year + day ) ==  undefined  )
        {
          SyncStorage.set('todaysCarbs' + month + year + day , 350);
        }
        else
        {
          SyncStorage.set('todaysCarbs' + month + year + day,SyncStorage.get('todaysCarbs' + month + year + day ) +40);
        }
        if(SyncStorage.get('todaysProtein' + month + year + day ) ==  undefined  )
        {
          SyncStorage.set('todaysProtein' + month + year + day , 350);
        }
        else
        {
          SyncStorage.set('todaysProtein' + month + year + day,SyncStorage.get('todaysProtein' + month + year + day ) +10);
        }

this.props.movebacktoMainPageFromList();
  }



  _onRefresh(){
    this.setState({
        refreshing:true
    });
  }
  render() {
    const renderItem = ({ item,url,description,ingedients, steps}) => (
  <Item title={item.title} url={item.url} addmeal={this.addmeal} description={item.description}   ingedients={item.ingedients}  steps={item.steps}   showRecipie={this.showRecipie}/>
);



var updateSearch = (a) => {

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
var movebacktoMainPageFromList = () => {
  this.props.movebacktoMainPageFromList();
}


var submit = () => {
    this.props.movebacktoMainPageFromList();
    this.props.movebacktoMainPageFromList();
}

  var SampleNameArray = this.state.ingedients;
  var SampleNameArray2 = this.state.steps;



    return (
<View >
<Image style={{position:"absolute"  ,  width: '100%', height: '100%'  ,resizeMode: 'stretch'  }} source={require('../imgs/NEWIMAGES/foodlistback.png')} />





{/* title*/}
<View style={{ alignItems: "center", justifyContent: "center", textAlign: 'center',  position:"absolute",top:"-3%",left:"0%",width:"100%",height:"15%"}}>

<Text  style={{ color:"white", fontSize: 30,fontFamily:"AmaticSC-Bold"}}>Meal selector</Text>

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
          onChangeText={searchinput => updateSearch(searchinput) }
          placeholder={'Search'}
          style={styles.input}
        />
      </View>


      <View style={{
        marginTop:"20%",
          flexDirection: 'row',
          width:"100%",

        height:"80%"
         }}>



      <FlatList
      numColumns={1}
      horizontal={false}
        data={this.state.listofrecipies}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />
      </View>
      {/* bascl nutton*/}
      <TouchableOpacity style={{width:30,height:30   ,  position:"absolute" ,left:10,top:20}} onPress={() =>  this.props.movebacktoMainPageFromList()}>
        <Image style={{     height: '100%',resizeMode: 'contain'  }} source={require('../imgs/NEWIMAGES/back.png')} />
      </TouchableOpacity>


      <Modal
      animationType = {"fade"}
      transparent = {true}
      visible = {this.state.isVisible }
      onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
           <ScrollView  vertical={true}  style={{position:"absolute",height:height-(height*0.165)-80 ,   width: "100%"  ,top:"12%",left:"0%" ,borderWidth:0 ,borderColor:"red" ,backgroundColor:"white"}}>

             <View style={{justifyContent: "center",alignItems:"center",marginTop:20,  width:"100%"}}>
                       <View style={{marginLeft:20,  height:250, width:"45%"}}>
                         <Image style={{width: "100%", height:250,borderRadius:6   }}  source={{uri: this.state.url}}/>
                       </View>
             </View>
 <View  style={{ height:12 }}  ></View>
             <View style={{marginLeft:20,                width:"66%"}}  >
               <Text style={{fontSize: 30,color:'rgb(86,99,122)',height:40 }}>{this.state.title}</Text>
               <Text style={{fontSize: 18,color:'rgb(86,99,122)',  width:width*0.86}}>{this.state.description}</Text>
             </View>
 <View  style={{ height:12 }}  ></View>
             <Text style={{fontSize: 25,marginLeft:25,color:'rgb(86,99,122)',height:35 ,marginBottom:5}}>Ingredients</Text>

              <View  style={{ height:5 }}  ></View>
             { SampleNameArray.map((itsems, key)=>(
                     <Text key={key} style={{fontSize: 18,marginLeft:20,marginBottom:5,textAlign: 'left'}}  > { itsems } </Text>)
                     )}

 <View  style={{ height:12 }}  ></View>

            <Text style={{fontSize: 25,marginLeft:25,color:'rgb(86,99,122)',height:35,marginBottom:5 }}>Recipe</Text>

             <View  style={{ height:5 }}  ></View>
            { SampleNameArray2.map((itsems, key)=>(
                 <Text key={key} style={{fontSize: 18,marginLeft:20,marginBottom:5,textAlign: 'left'}}  > { itsems } </Text>)
            )}


 <View  style={{ height:50 }}  ></View>

             <View  style={{   position: 'absolute',left: width*0.55,bottom: 10,height:35, width: width*0.4 ,borderRadius:20,overflow:"hidden" }}  >
                   <Button  title="return"  onPress = {() => {this.setState({ isVisible: false})}} />
             </View>
             <View  style={{   position: 'absolute',left: width*0.05 , bottom: 10,height:35, width: width*0.4 ,borderRadius:20,overflow:"hidden" }}  >
                   <Button  title="Add meal"  onPress={() => addmeal() } />
             </View>


 <View  style={{ height:50 }}  ></View>


           </ScrollView>
      </Modal>





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
borderRadius:12,
    backgroundColor: 'white',
    borderWidth:2,
    borderColor: 'rgb(231,238,251)'
  },
});
