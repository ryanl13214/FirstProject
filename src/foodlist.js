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
    type:"breakfast",
    title: 'Green Smoothie' ,
    url:"https://feastingnotfasting.com/wp-content/uploads/2014/07/Green-Smoothie-with-Lime-and-Cucumber-17-2.jpg",
    description: "A smoothie is a great on the go breakfast that is packed with vitamins and minerals. It’s a great detoxing and nutritious start to your day and perfect if you’ve had an overindulgent weekend. Green apple is a great source of fibre and contains vitamin A, B6, C and antioxidants. Perfect for detoxing and helping to give you great looking skin.",
    ingedients:"1. One green apple|2. Half a ripe medium avocado|3. Handful of spinach|4. Quarter of a lemon (without peel)|5. 1 cup (250ml) coconut water",
    steps:"Step 1: Core the apple, chop everything up and put it into your processor|Step 2: Add in the coconut water|Step 3: Whizz up and you’re ready to go"
  },
  {
    id: 'Granola',
    type:"breakfast",
    title: 'Granola' ,
    url:"https://www.layersofhappiness.com/wp-content/uploads/2016/01/blueberry-almond-granola-3.jpg",
    description: "Who doesn’t love a bit of granola in the morning. The crunchy texture combined with the touch of sweetness makes it the perfect start to the day. Granola has always been viewed as a healthy breakfast but a lot of granola you buy from the shops are loaded with preservatives and refined sugar that will bring on the sugar spikes and crashes but it is so simple to make your own. My version is packed full of seeds which contain good levels of Omega 3 (good fats that help to combat inflammation in the body). I also use maple syrup which is a natural sweetener, has nutritional elements and contains a third less sugar than refined table sugar",
    ingedients:"1. 1 cup (100g) oats|2. 3/4 cup (75g) mixed seeds and flaked almonds (refer to kitchen hacks for seed mix)|3. 1/4 cup (60ml) almond butter (or any nut butter of your choice)|4. 1/4 cup (60ml) melted coconut oil|5. 1/4 cup (60ml) maple syrup",
    steps:"Step 1: Preheat oven to 180 degrees (fan assisted)|Step 2: Put all the ingredients into a bowl and mix together until combined|Step 3: Line a baking tray with greaseproof paper and spread the mixture thinly|Step 4: After 8 mins, take tray out of the oven and give the granola a good mix, making sure you spread it thinly back out again|Step 5: Bake for another 8 mins then remove, leave to cool, then store in an airtight jar"
  },
  {
    id: 'Sweet potato hash browns and poached egg',
    type:"breakfast",
    title: 'Sweet potato hash browns and poached egg' ,
    url:"",
    description: "These sweet potato hash browns are so easy to make and are so tasty. I have eggs almost every day but when I’m needing some carbohydrates to get me through the morning I have it with these sweet potato hash browns. Sweet potatoes are a great complex carbohydrate, which means they release energy slowly and won’t spike blood sugar levels. They are a great source of fibre, packed with vitamin A, and contains vitamin C, B6, and potassium",
    ingedients:"1. 1 cup of grated sweet potato|2. 3 medium eggs (one for mixture and two for poaching)|3. 1/4 cup (25g) almond flour",
    steps:"Step 1: Mix the grated sweet potato, 1 egg, and almond flour in a bowl|Step 2: Make 6 patties with the sweet potato|Step 3: Melt coconut oil in a pan and gently fry the sweet potato hash browns for around 2/3 minutes each side until golden brown|Step 4: As the hash browns are frying poach your eggs|Step 5: Stack the hash browns, top with poached egg, and serve"
  },
  {
    id: 'Cinnamon sourdough french toast',
    type:"breakfast",
    title: 'Cinnamon sourdough french toast' ,
    url:"",
    description: "This really is a real treat and I don’t have it too often but it’s perfect when my sourdough loaf is going a little stale. I love the combination of cinnamon spice with egg soaked into the sourdough and gently fried.",
    ingedients:"1. 2 slices of sourdough|2. 1 medium egg|3. 1 tsp cinnamon|4. 1/4 cup (60ml) milk of your choice|5. Fruit of your choice to serve",
    steps:"Step 1: Mix the egg, milk, and cinnamon into a shallow dish|Step 2: Put the sourdough in the mixture and leave it for a few minutes to let it all soak in|Step 3: Heat the coconut oil in a pan and gently fry the soaked sourdough until browned on both sides. This will take 2/3 minutes|Step 4: Top with fruit of your choice, drizzle with maple syrup and serve"
  },
  {
    id: 'India style foo yung',
    type:"breakfast",
    title: 'India style foo yung' ,
    url:"",
    description: "When I want a little twist to my eggs this is my go to breakfast. I love the mixture of spices that flavour this dish and it’s what gives it that extra zing, along with the vegetables that provide that added nutritional element. Adding veggies to your breakfast is a great way of getting extra vitamins and minerals into your body.",
    ingedients:"1. 2 medium eggs|2. Handful of button mushrooms|3. Handful of green beans|4. 1 tsp turmeric|5. Handful of coriander ",
    steps:"Step 1: Slice the mushrooms and green beans and fry them gently in coconut oil|Step 2: Once browned, add the turmeric (and chilli) and mix together for 30 secs|Step 3: Add in the beaten eggs and scramble|Step 4: Add in salt and pepper to taste|Step 5: Garnish with coriander and serve"
  },
  {
    id: 'chia seed Porridge',
    type:"breakfast",
    title: 'chia seed Porridge' ,
    url:"",
    description: "On a cold morning I do love my porridge but I like to give it an additional nutritional punch by adding chia seeds to it. The little unassuming seeds are high in fibre and iron, a great source of protein and omega 3 healthy fats, and contains more calcium than milk. They don't taste of anything and you don't even notice them in your food. ",
    ingedients:"1. 1/3 cup (40g) oats|2. 1 tbsp chia seeds|3. 1 cup (250ml) milk of your choice|4. Fruit/seeds to serve",
    steps:"Step 1: Put the oats, chia seeds, and milk in a pan and bring to boil|Step 2: Let it simmer for 5/6 minutes, stirring regularly|Step 3: When the porridge is ready, turn off the heat and mix in the coconut oil and honey|Step 4: Top with fruit or seeds to serve"
  },
  {
    id: 'Bean bowl',
    type:"breakfast",
    title: 'Bean bowl' ,
    url:"",
    description: "I love baked beans but have stopped eating the shop bought tins because of the amount of sugar contained within it. Making your own is so simple and this way you know exactly what is in them. You can also add a mixture of beans too. Beans are a cheap, low-fat source of protein, fibre, vitamins and minerals.",
    ingedients:"1. 500g of mixed beans|2. 1 cup (250ml) passata|3. 1 tsp honey|4. 1 tsp onion powder|5. Small garlic clove finely chopped",
    steps:"Step 1: In a pan melt the coconut oil and gently fry the finely chopped garlic|Step 2: Drain and rinse the tin of mixed beans and add into the pan and fry gently for a couple of minutes|Step 3: Add in the passata, teaspoon of honey, teaspoon of onion powder, and salt and pepper to taste|Step 4: Bring mixture to boil and simmer gently for 8 minutes|Step 5: Pour into a bowl and top with 2 soft boiled eggs"
  },
  {
    id: 'Pancakes',
    type:"breakfast",
    title: 'Pancakes' ,
    url:"",
    description: "Pancakes are a breakfast favourite over the weekend in our household. Try these fluffy and light pancakes. I’m sure they’ll soon be a favourite in your household too.",
    ingedients:"1. 1/2 cup (125ml) milk of your choice|2. 1 cup (100g) gluten free flour|3. 3 medium eggs|4. 2 tbsp maple syrup|5. 1 tsp baking powder",
    steps:"Step 1: Heat frying pan over low heat|Step 2: Mix in all ingredients to form a smooth batter|Step 3: Ladle mixture into the frying pan. I use a small pancake pan that gives the perfect round shape but any frying pan will do|Step 4: Stack cooked pancakes."
  },
  {
    id: 'Turmeric and chia seed scrambled egg',
    type:"breakfast",
    title: 'Turmeric and chia seed scrambled egg' ,
    url:"",
    description: "I love scrambled eggs but sometimes I like to change it up a little. This turmeric and chia seed scrambled egg is absolutely delicious and gives scrambled eggs a different flavour and texture as well as a boost of extra nutrients. Turmeric has powerful anti-inflammatory effects and is a very nstrong antioxidant. By adding black pepper it helps the curcumin (the main active ingredient in turmeric) to be absorbed by the body",
    ingedients:"1. 2 medium sized eggs|2. 2 tsp chia seeds|3. Half a tsp turmeric|4. Coconut oil|5.  Salt|6. Black pepper",
    steps:"Step 1: Melt coconut oil in a pan, crack the eggs in and mix|Step 2: Add in the turmeric and whisk until all mixed in|Step 3: Season with salt and black pepper|Step 4: Just before the eggs are ready add in chia seeds and mix thoroughly|Step 5: Serve on toasted sourdough or eat on it’s own with avocado"
  },
  {
    id: 'Overnight Oats',
    type:"breakfast",
    title: 'Overnight Oats' ,
    url:"",
    description: "If you love porridge but don’t have time in the morning then overnight oats is a great alternative. Oats are a great source of fibre and are high in vitamins, minerals and antioxidants. They have a low Glycemic Index which means it will provide slow releasing energy and keep your blood sugar levels steady. Soaking oats for 7 hours or more helps to break down the lactic acid that sits on the outer layer of the oat. Lactic acid binds to vitamins and minerals and prevents absorption into the body",
    ingedients:"1. 1/2 cup (50g) oats|2. 1/2 cup (125ml) coconut water (you can also use milk of your choice)|3. 1/2 cup (50g) Greek yogurt|4. Handful of fruit/nuts/seeds of your choice",
    steps:"Step 1: Put 1/2 cup of oats and 1/2 cup of coconut water in a glass jar|Step 2: Leave in fridge overnight (needs to soak for at least 7 hours)|Step 3: In the morning add 1/2 cup of Greek yogurt|Step 4: Top with fruit/nuts/seeds and you’re ready to go"
  },
  {
    id: '',
    type:"",
    title: '' ,
    url:"",
    description: "",
    ingedients:"",
    steps:""
  },
  {
    id: '',
    type:"",
    title: '' ,
    url:"",
    description: "",
    ingedients:"",
    steps:""
  },
  {
    id: '',
    type:"",
    title: '' ,
    url:"",
    description: "",
    ingedients:"",
    steps:""
  },
  {
    id: '',
    type:"",
    title: '' ,
    url:"",
    description: "",
    ingedients:"",
    steps:""
  },
  {
    id: '',
    type:"",
    title: '' ,
    url:"",
    description: "",
    ingedients:"",
    steps:""
  },
  {
    id: '',
    type:"",
    title: '' ,
    url:"",
    description: "",
    ingedients:"",
    steps:""
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
